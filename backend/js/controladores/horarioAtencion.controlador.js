$(function () {

  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function (e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

});

var localHorariosCreados = [];
var horariosViejos = [];

var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos", "Feriados"];

function cargarHorariosSeteados(){
 var idLocal = $("#idLocalCreado").val();
 $('#target').html('obteniendo...');       
 $.ajax({
  url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local?id='+ idLocal +"",
  type: 'GET',

  dataType: "json",
  crossDomain: true,
  contentType:"application/json",
  success: function (data) {
    var horariosAtencion = data.idHorarioAtencion;
    horariosViejos = data.idHorarioAtencion;
    _.each(horariosAtencion, function(horario){
      $("#Hdesde" + horario.diaSemanaHorarioAtencion).val(horario.horaInicioHorarioAtencion);
      $("#Hhasta" + horario.diaSemanaHorarioAtencion).val(horario.horaFinHorarioAtencion)
    });
  },
  error:function(jqXHR,textStatus,errorThrown)
  {
    $('#target').append("jqXHR: "+jqXHR);
    $('#target').append("textStatus: "+textStatus);
    $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
  },
});
}

function SendHorarioAtencion(accion) {

  var idHorariosDesde = [];
  var idHorariosHasta = [];

  _.each(dias, function (dia) {
    idHorariosDesde.push($("#Hdesde" + dia).val());
    idHorariosHasta.push($("#Hhasta" + dia).val());
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarHorarios = [];

  for (var i = 0; i < dias.length; i += 1) {
    console.log(dias[i], idHorariosDesde[i], idHorariosHasta[i]);

    if (idHorariosDesde[i] != "" && idHorariosHasta[i] != "") {

      var guardar = sendHorarios(dias[i], idHorariosDesde[i], idHorariosHasta[i]).then(function (id) {
        localHorariosCreados.push(id);
      }).catch(function (err) {
        console.log(err);
      });
      guardarHorarios.push(guardar);
    }
  }
  Promise.all(guardarHorarios).then(function () {
    var campoAAcuatualizar = "idHorarioAtencion";
    console.log(localHorariosCreados);
    actualizarLocal(idLocalCreado, localHorariosCreados, campoAAcuatualizar).then(function(data){
      console.log(data);
      
      if(accion == 'crear'){
        var url = "../backend/asignar-cubiertos.php?idLocal=" + idLocalCreado + "";
        $(location).attr('href', url);
      }else if(accion == 'editar'){

        eliminarViejos(horariosViejos).then(function(error, success){
          volverPanelLocal();
        }).catch(function (err) {
         console.log(err);
        });

      }
    }).catch(function (err){
      console.log(err);
    });


  }).catch(function (err) {
    console.log(err);
  });
}

function eliminarViejos(vectorHorarios){
  var promise = new Promise(function(resolve, reject){
    var vecPromesas = [];
    _.each(vectorHorarios, function(horario){
     var promesa = eliminar(horario._id);
     vecPromesas.push(promesa);
   });
    Promise.all(vecPromesas).then(function(){
      resolve(true)
    });
  });
  return promise;
}

function eliminar(idHorarioAtencion){
  $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/horarioAtencion?id=' + idHorarioAtencion,
    type: 'DELETE',      
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function(data){
      return true;
    },
    error:function(jqXHR,textStatus,errorThrown){
      return false;
    }
  });
}

function sendHorarios(diaHorario, horaDesde, horaHasta) {
  var promise = new Promise(function (resolve, reject) {
    if (!_.isNil(diaHorario) && !_.isNil(horaDesde)) {
      var isNew = $("#idHorario").val() == "";
      var operacion = isNew ? "POST" : "PUT";
      var horario = JSON.stringify({
        "diaSemanaHorarioAtencion": diaHorario,
        "idLocal": $("#idLocalCreado").val(),
        "horaInicioHorarioAtencion": horaDesde,
        "horaFinHorarioAtencion": horaHasta,
      });

      $('#target').html('sending..');
      var queryParam = isNew ? "" : "?id=" + $("#idHorario").val();
      $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/horarioAtencion' + queryParam,
        type: operacion,

        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
          resolve(data._id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          reject(Error("It broke"));
        },
        data: horario
      });
    } else {
      resolve('');
    }
  });

  return promise
}

function validar(accion) {
  $("#botonGuardar").addClass('disabled');
  var idHorariosDesde = [];
  var idHorariosHasta = [];
  var hayError = false;

  _.each(dias, function (dia) {
    idHorariosDesde.push($("#Hdesde" + dia).val());
    idHorariosHasta.push($("#Hhasta" + dia).val());
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarHorarios = [];

  for (var i = 0; i < dias.length; i += 1) {

    if (idHorariosDesde[i] != "" && idHorariosHasta[i] == "") {
      $("#Hhasta" + dias[i]).parent().after('<span id="Hhasta' + dias[i] + 'Alert" style="color:red"> Debe ingresar un Horario hasta para el día</span>');
      $("#Hhasta" + dias[i]).addClass('alert-danger');
      hayError = true;
    }
    if (idHorariosDesde[i] == "" && idHorariosHasta[i] != "") {
      $("#Hhasta" + dias[i]).parent().after('<span id="Hhasta' + dias[i] + 'Alert" style="color:red"> Debe ingresar un Horario desde para el día</span>');
      $("#Hdesde" + dias[i]).addClass('alert-danger');
      hayError = true;
    }
  }

  if (hayError == false) {
    SendHorarioAtencion(accion);
  }else{
    $(location).attr('href',"#formularioAgregar");
  }
}

function limpiar(campo, campoBack) {
  $("#" + campo + "Alert").hide();
  $("#" + campoBack).removeClass('alert-danger');
  $("#botonGuardar").removeClass('disabled');
}

function volverPanelLocal(){
  var idLocal = $("#idLocalCreado").val();
  $('#target').html('obteniendo...');       
  $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local?id='+ idLocal +"",
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
     var local = data;
     var idNegocio = local.idNegocio._id;
     var url = "../backend/panel-locales.php?idLocal="+ idLocal+"&idNegocio="+idNegocio+"";
     $(location).attr('href',url);

   },
   error:function(jqXHR,textStatus,errorThrown)
   {
    $('#target').append("jqXHR: "+jqXHR);
    $('#target').append("textStatus: "+textStatus);
    $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
  },
});
}