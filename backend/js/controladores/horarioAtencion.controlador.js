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


var localHorariosCreados = [];

var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabados","Domingos","Feriados"];



function SendHorarioAtencion(){

  var idHorariosDesde = [];
  var idHorariosHasta = [];

  _.each(dias, function(dia){
    idHorariosDesde.push($("#Hdesde" + dia).val());
    idHorariosHasta.push($("#Hhasta" + dia).val());
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarHorarios = [];

  for (var i = 0; i < dias.length; i+=1) {
    console.log(dias[i],idHorariosDesde[i],idHorariosHasta[i]);
    if(idHorariosDesde[i] != "" && idHorariosHasta[i] != ""){
    var guardar =  sendHorarios(dias[i],idHorariosDesde[i],idHorariosHasta[i]).then(function(id){ 
      localHorariosCreados.push(id);
    });
    guardarHorarios.push(guardar);
    }
  }

  Promise.all(guardarHorarios).then(function () {
    var campoAAcuatualizar = "idHorarioAtencion";
    actualizarLocal(idLocalCreado, localHorariosCreados, campoAAcuatualizar);
    console.log(localHorariosCreados);

    var url = "http://localhost/gmg/gmgWebSite/backend/asignar-cubiertos.php?idLocal="+ idLocalCreado+""; 
    $(location).attr('href',url);
  });

}

function sendHorarios(diaHorario,horaDesde, horaHasta) {

  var promise = new Promise(function(resolve, reject) {

    if(!_.isNil(diaHorario) && !_.isNil(horaDesde)){
      var isNew = $("#idHorario").val() == "";
      var operacion = isNew ? "POST": "PUT";
      var horario = JSON.stringify({
        "diaSemanaHorarioAtencion": diaHorario,
        "idLocal": $("#idLocalCreado").val(),
        "horaInicioHorarioAtencion": horaDesde,
        "horaFinHorarioAtencion": horaHasta,
      });

      $('#target').html('sending..');
      var queryParam = isNew  ? "": "?id=" + $("#idHorario").val();
      $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/horarioAtencion' + queryParam,
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
        data: horario
      });
    } else {
      resolve('');
    }
  });

  return promise
}

function validar(){

  var idHorariosDesde = [];
  var idHorariosHasta = [];
  var hayError = false;

  _.each(dias, function(dia){
    idHorariosDesde.push($("#Hdesde" + dia).val());
    idHorariosHasta.push($("#Hhasta" + dia).val());
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarHorarios = [];

  for (var i = 0; i < dias.length; i+=1) {

    if(idHorariosDesde[i] != "" && idHorariosHasta[i] == ""){
      $("#Hhasta" + dias[i]).parent().after('<span id="Hhasta'+dias[i]+'Alert" style="color:red"> Debe ingresar un Horario hasta para el día</span>');
      $("#Hhasta" + dias[i]).addClass('alert-danger');
      hayError = true;
    }
    if(idHorariosDesde[i] == "" && idHorariosHasta[i] != ""){
      $("#Hhasta" + dias[i]).parent().after('<span id="Hhasta'+dias[i]+'Alert" style="color:red"> Debe ingresar un Horario desde para el día</span>');
      $("#Hdesde" + dias[i]).addClass('alert-danger');
      hayError = true;
    }
    if(hayError==false){
     SendHorarioAtencion();
    }else{
      $(location).attr('href',"#formularioAgregar");
    }


  }

}

function limpiar(campo,campoBack){
   $("#"+campo+"Alert").hide();
   $("#"+campoBack).removeClass('alert-danger');
}