$(function() {

  $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
});


var localCubiertosCreados = [];
var cubiertosViejos = [];

var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabados","Domingos","Feriados"];


function cargarCubiertosSeteados(){
     var idLocal = $("#idLocalCreado").val();
    $('#target').html('obteniendo...');       
    $.ajax({
      url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local?id='+ idLocal +"",
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
            var cubiertosDia = data.idCubiertosDia;
                cubiertosViejos = data.idCubiertosDia;

              _.each(cubiertosDia, function(cubierto){
                      $("#Cubiertos" + cubierto.diaSemanaCubiertoDia).val(cubierto.cantidadCubiertoDia);
                      $("#Duracion" + cubierto.diaSemanaCubiertoDia).val(cubierto.duracionReserva)
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

function SendCubiertos(accion){

  var idCantCubiertos = [];
  var idDuracionReser = [];

  _.each(dias, function(dia){
    idCantCubiertos.push($("#Cubiertos" + dia).val());
    idDuracionReser.push($("#Duracion" + dia).val());
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarCubiertos = [];

  for (var i = 0; i < dias.length; i+=1) {
    if (idCantCubiertos[i] != "" && idDuracionReser[i] != "") {
      console.log(dias[i],idCantCubiertos[i],idDuracionReser[i]);
      var guardar =  sendCubiertos(dias[i],idCantCubiertos[i],idDuracionReser[i]).then(function(id){
        localCubiertosCreados.push(id);
      });
      guardarCubiertos.push(guardar);
    }
  }

  Promise.all(guardarCubiertos).then(function () {
    var campoAAcuatualizar = "idCubiertosDia";
    actualizarLocal(idLocalCreado, localCubiertosCreados, campoAAcuatualizar).then( function(data){
      console.log(localCubiertosCreados);

     if(accion == 'crear'){
      var url = "../lacocina/negocios.php";
      $(location).attr('href',url);
     }else if(accion == 'editar'){


        eliminarViejos(cubiertosViejos).then(function(error, success){
        volverPanelLocal();
        }).catch(function (err) {
         console.log(err);
        });


     //   volverPanelLocal()

     }

    }).catch(function(err){
      console.log(err);
    });
  });
}

function eliminarViejos(vectorCubiertos){
  var promise = new Promise(function(resolve, reject){
    var vecPromesas = [];
    _.each(vectorCubiertos, function(cubierto){
     var promesa = eliminar(cubierto._id);
     vecPromesas.push(promesa);
   });
    Promise.all(vecPromesas).then(function(){
      resolve(true)
    });
  });
  return promise;
}

function eliminar(idCubiertoDia){
  $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/cubiertosDia?id=' + idCubiertoDia,
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

function sendCubiertos(diaCubierto,cantCubiertos, duracionReserva) {

  var promise = new Promise(function(resolve, reject) {

    if(!_.isNil(diaCubierto) && !_.isNil(cantCubiertos)){
      var isNew = $("#idCubierto").val() == "";
      var operacion = isNew ? "POST": "PUT";
      var cubierto = JSON.stringify({
        "diaSemanaCubiertoDia": diaCubierto,
        "cantidadCubiertoDia": cantCubiertos,
        "duracionReserva": duracionReserva
      });

      $('#target').html('sending..');
      var queryParam = isNew  ? "": "?id=" + $("#idCubierto").val();
      $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/cubiertosDia' + queryParam,
        type: operacion,

        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
          resolve(data._id);
        },
        error:function(jqXHR,textStatus,errorThrown)
        {
          reject(Error("It broke"));
        },
        data: cubierto
      });
    } else {
      resolve('');
    }
  });

  return promise
}

function validar(accion){
  $("#botonGuardar").addClass('disabled');
  var idCantCubiertos = [];
  var idDuracionReser = [];
  var hayError = false;

  _.each(dias, function(dia){
    idCantCubiertos.push($("#Cubiertos" + dia).val());
    idDuracionReser.push($("#Duracion" + dia).val());
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarCubiertos = [];

  for (var i = 0; i < dias.length; i+=1) {

    if(idCantCubiertos[i] != "" && idDuracionReser[i] == ""){
      $("#Duracion" + dias[i]).parent().after('<span id="Duracion'+dias[i]+'Alert" style="color:red"> Debe ingresar la Duración de la reserva para el día</span>');
      $("#Duracion" + dias[i]).addClass('alert-danger');
      hayError = true;
    }
    if(idCantCubiertos[i] == "" && idDuracionReser[i] != ""){
      $("#Duracion" + dias[i]).parent().after('<span id="Duracion'+dias[i]+'Alert" style="color:red"> Debe ingresar una Cantidad de Cubiertos para el día</span>');
      $("#Cubiertos" + dias[i]).addClass('alert-danger');
      hayError = true;
    }
  }
  if(hayError==false){
    SendCubiertos(accion);
  }else{
    $(location).attr('href',"#formularioAgregar");
  }

}

function limpiar(campo,campoBack){
   $("#"+campo+"Alert").hide();
   $("#"+campoBack).removeClass('alert-danger');
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
             var url = "../lacocina/panel-locales.php?idLocal="+ idLocal+"&idNegocio="+idNegocio+"";
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