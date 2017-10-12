
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
var contactos;

function cargarFormContacto(){
  var idLocal = $('#idLocalRecibido').val();
  var idContacto = $('#idContactoRecibido').val();
  $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/contactoLocal?id='+ idContacto +"",
    type: 'GET',
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      var contacto = data;
      $('#nombreContacto').val(contacto.nombreContacto);
      $('#mailContacto').val(contacto.mailContacto);
      $('#telefonoContacto').val(contacto.telefonoContacto);
      $('#celContacto').val(contacto.celContacto);
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
      $('#target').append("jqXHR: "+jqXHR);
      $('#target').append("textStatus: "+textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
    },
  });
}

function actualizarContacto(){
  var idContacto = $("#idContactoRecibido").val();
  var contacto = JSON.stringify({
    "nombreContacto": $("#nombreContacto").val(),
    "mailContacto":$("#mailContacto").val(),
    "telefonoContacto":$("#telefonoContacto").val(),
    "celContacto":$("#celContacto").val()
  });
  $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/contacto?id=' + idContacto,
    type: "PUT",
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      volverPanelLocal();
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
    },
    data: contacto
  });
}

function send() {
  var isNew = $("#idContacto").val() == "";
  var operacion = isNew ? "POST": "PUT";
  var contacto = JSON.stringify({
    "nombreContacto": $("#nombreContacto").val(),
    "mailContacto":$("#mailContacto").val(),
    "telefonoContacto":$("#telefonoContacto").val(),
    "celContacto":$("#celContacto").val()
  });
  var queryParam = isNew  ? "": "?id=" + $("#idContacto").val();
  $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/contacto' + queryParam,
    type: operacion,
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      var idLocalCreado = $("#idLocalCreado").val();
      var resultado = data;
      var contactoCreado =  resultado._id;
      var campo = "idContacto";
      actualizarLocal(idLocalCreado, contactoCreado, campo).then( function(data){
        var url = "../lacocina/asignar-descuento.php?idLocal="+ idLocalCreado+"";
        $(location).attr('href',url);
        $("#formularioAgregar :input").val('');
      }).catch(function(err){
        console.log(err);
      });
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
    },
    data: contacto
  });
}

function validar(accion){
  $("#botonGuardar").addClass('disabled');
  var nombreContacto = $("#nombreContacto").val();
  var mailContacto = $("#mailContacto").val();
  var telefonoContacto = $("#telefonoContacto").val();
  var celContacto = $("#celContacto").val();
  var hayError = false;

  if(mailContacto.length < 2){
    $("#mailContacto").parent().after('<span id="mailContactoAlert" style="color:red"> Debe ingresar un Email para el Contacto</span>');
    $("#mailContacto").addClass('alert-danger');
    hayError = true;
  }else {
    caracteresCorreoValido(mailContacto);
  }

  if(nombreContacto.length < 2){
    $("#nombreContacto").parent().after('<span id="nombreContactoAlert" style="color:red"> Debe ingresar un Nombre para el Contacto</span>');
    $("#nombreContacto").addClass('alert-danger');
    hayError = true;
  }
  if(telefonoContacto.length < 7){
    $("#telefonoContacto").parent().after('<span id="telefonoContactoAlert" style="color:red"> Debe ingresar una Teléfono fijo para el Contacto</span>');
    $("#telefonoContacto").addClass('alert-danger');
    hayError = true;
  }

  if(celContacto.length < 7){
    $("#celContacto").parent().after('<span id="celContactoAlert" style="color:red"> Debe ingresar una Celular para el Contacto</span>');
    $("#celContacto").addClass('alert-danger');
    hayError = true;
  }

  if(hayError==false){
    if(accion == 'crear'){
      send();
    }else if(accion == 'editar'){
      actualizarContacto();
    }
  }else{
    $(location).attr('href',"#formularioAgregar");
  }

}

function limpiar(campo){
  $("#"+campo+"Alert").hide();
  $("#"+campo).removeClass('alert-danger');
  $("#botonGuardar").removeClass('disabled');
}

function caracteresCorreoValido(email){
  var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  if (! caract.test(email)){
    $("#mailContacto").parent().after('<span id="mailContactoAlert" style="color:red"> Debe ingresar un Email válido para el Usuario</span>');
    $("#mailContacto").addClass('alert-danger');
    hayError = true;
  }
}

function volverPanelLocal(){
  var idLocal = $("#idLocalRecibido").val();
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
