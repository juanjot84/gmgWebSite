
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

function iniciar(accion){
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    if(accion == 'editar'){
      cargarFormContacto();
    }else if(accion == 'crear'){
      cargarFormCrear();
    }else if(accion == 'creEd'){
      cargarFormContacto();
    }
  });
}

function cargarFormCrear(){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  var idLocal = $('#idLocalRecibido').val();
  var idContacto = $('#idContactoRecibido').val();
  $.ajax({
    url: server + '/api/v1/admin/usuarioNegocio',
    type: 'GET',
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      var idNegocio = $('#idNegocioCreado').val();
      _.each(data, function(usuario){
         if(idNegocio == usuario.idNegocio){
          $('#nombreContacto').val(usuario.nombre +' '+usuario.apellido);
          $('#mailContacto').val(usuario.email);
         }
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

function cargarFormContacto(){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  var idLocal = $('#idLocalRecibido').val();
  var idContacto = $('#idContactoRecibido').val();
  $.ajax({
    url: server + '/api/v1/admin/contactoLocal?id='+ idContacto +"",
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
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  var idContacto = $("#idContactoRecibido").val();
  var contacto = JSON.stringify({
    "nombreContacto": $("#nombreContacto").val(),
    "mailContacto":$("#mailContacto").val(),
    "telefonoContacto":$("#telefonoContacto").val(),
    "celContacto":$("#celContacto").val()
  });
  $.ajax({
    url: server + '/api/v1/admin/contacto?id=' + idContacto,
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
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
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
    url: server + '/api/v1/admin/contacto' + queryParam,
    type: operacion,
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      var idLocalCreado = $("#idLocalCreado").val();
      var localRecibido = $("#idLocalRecibido").val()
      if(localRecibido != ''){
        idLocalCreado = localRecibido;
      }
      var resultado = data;
      var contactoCreado =  resultado._id;
      var campo = "idContacto";
      actualizarLocal(idLocalCreado, contactoCreado, campo).then( function(data){

        var idNegocio = $("#idNegocioCreado").val();
        $.ajax({
         url: server + '/api/v1/admin/negocio?id='+ idNegocio +"",
         type: 'GET',
     
         dataType: "json",
         crossDomain: true,
         contentType:"application/json",
         success: function (data) {
           var negocio = data;
           var idLocal = $("#idLocalCreado").val();
           var tipoNegocio = negocio.idTipoNegocio.nombreTipoNegocio;
           var accion = $("#idContactoRecibido").val();
           if(tipoNegocio != 'Restaurante' && accion != 'creEd'){
            var url = "../lacocina/editar-horarios.php?idLocal="+ idLocal+"&acc=cre";
            $(location).attr('href',url);
            $("#formularioAgregar :input").val('');
           }else if(tipoNegocio == 'Restaurante' && accion != 'creEd'){
            var url = "../lacocina/asignar-descuento.php?idLocal="+ idLocal+"";
            $(location).attr('href',url);
            $("#formularioAgregar :input").val('');
           }else{
            volverPanelLocal();
           }
     
         },
         error:function(jqXHR,textStatus,errorThrown)
         {
           $('#target').append("jqXHR: "+jqXHR);
           $('#target').append("textStatus: "+textStatus);
           $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
         },
       });

        
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
      var contacto = $("#idContactoRecibido").val();
      if(contacto == 'creEd'){
        $("#idContacto").val("");
        send();
      }else{
        actualizarContacto();
      }
      
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
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  var idLocal = $("#idLocalRecibido").val();
  $('#target').html('obteniendo...');
  $.ajax({
    url: server + '/api/v1/admin/locales?id='+ idLocal +"",
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
