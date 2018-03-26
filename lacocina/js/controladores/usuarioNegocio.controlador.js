
var idUsNegocio;
var mailUsuario;

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

    $(function() {
      $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
      var idNegocio = $("#idNegocio").val();
      cargarFormEditar(idNegocio);
    });
    });

    function cargarFormEditar(idNegocio){
      var tipoUsuario = $("#tipoUs").val();
      if(tipoUsuario == "superAdmin"){
        $("#botonRecuperarPass").append('<button id="botonPass" class="btn btn-default" type="button" style="padding: 17px;" onClick="mostrarModal()">Password</button>');
      }
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }
      var idNegocioEditar = idNegocio;
      var usuariosNegocios;
      

      $.ajax({
            url: server + '/api/v1/admin/usuarioNegocio',
            type: 'GET',           
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                usuariosNegocios = data;
                var usuario =  _.find(usuariosNegocios, { 'idNegocio': idNegocioEditar});
                if (usuario){
                  idUsNegocio = usuario._id;
                  mailUsuario = usuario.email;
                  $('#formularioAgregar').show();
                  $("#formularioAgregar :input").attr("disabled", false);
                  $("#formularioAgregar button").show();
                  $("#nombre").val(usuario.nombre);
                  $("#email").val(usuario.email);
                  $("#apellido").val(usuario.apellido);
                  $("#sexoUsuario").val(usuario.sexoUsuario);
                  $("#idUsuarioNegocio").val(usuario._id);
                  $("#password").val('');
                }
                var tipoUsuario = $("#tipoUs").val();
                if(tipoUsuario == 'usuarioNegocio'){
                $("#email").attr("disabled", true);
                }
            }
      });
  }

    function mostrar(idContacto){
       var contacto =  _.find(contactos, { '_id': idContacto});
       console.log(contacto);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#nombreContacto").val(contacto.nombreContacto);
       $("#mailContacto").val(contacto.mailContacto);
       $("#telefonoContacto").val(contacto.telefonoContacto);
       $("#celContacto").val(contacto.celContacto);
       $("#idContacto").val(contacto._id);
    }

    function eliminar(idUsuarioNegocio){
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }
       $.ajax({
            url: server + '/api/v1/admin/usuarioNegocio?id=' + idUsuarioNegocio,
            type: 'DELETE',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
              obtenerListado();
          }
      });    
    }

    function volverPanelNegocio(){
      var tipoUsuario = $("#tipoUs").val();
      if(tipoUsuario == 'usuarioNegocio'){
          var url = "../lacocina/perfil/mi-perfil.php";
          $(location).attr('href',url);
      }else if(tipoUsuario == 'superAdmin'){
          var negocioCreado = $("#idNegocio").val(); 
          var url = "../lacocina/panel-negocio.php?idNegocio="+ negocioCreado+"";
          $(location).attr('href',url);
      }
    }

    function send(accion) {
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }
      var isNew = $("#idUsuarioNegocio").val() == "";
      var operacion = isNew ? "POST": "PUT";
      var queryParam = isNew ? "": "?id=" + $("#idUsuarioNegocio").val();
      var endPoint = isNew ? "registerUsuarioNegocio" : "usuarioNegocio";
      datos = {
        "email": $("#email").val(),
        "nombre":$("#nombre").val(),
        "apellido":$("#apellido").val(),
        "sexoUsuario":$("#sexoUsuario").val(),
        "idNegocio":$("#idNegocio").val()
      };
      if ($("#password").val()){
        datos.password = $("#password").val()
      } else if ($("#passEditar").val()){
        datos.password = $("#passEditar").val()
      }
      var usuarioNegocio = JSON.stringify(datos);

      $('#target').html('sending..');

      $.ajax({
          url: server + '/api/v1/admin/' + endPoint + queryParam,
          type: operacion,
          dataType: "json",
          crossDomain: true,
          contentType:"application/json",
          success: function (data) {
           var negocioCreado = $("#idNegocio").val();

           if(accion == 'crear'){
             var url = "../lacocina/local.php?idNegocio="+ negocioCreado+"";
             $(location).attr('href',url);
             $("#formularioAgregar :input").val('');
           } else {
             volverPanelNegocio();
           }

          },
          error:function(jqXHR,textStatus,errorThrown){
            if(textStatus == 'error'){
              $("#mostrarmodal1").modal("show");

          }

        },
        data: usuarioNegocio
    });
  }

function habilitarBotonGuardar(){
  $("#botonGuardar").removeClass('disabled');
  $("#botonGuardarS").removeClass('disabled');
};

function validar(accion){
  $("#botonGuardar").addClass('disabled');
  $("#botonGuardarS").addClass('disabled');
  var email = $("#email").val();
  var nombre = $("#nombre").val();
  var password = $("#password").val();
  var hayError = false;

    if(email.length < 2){
      $("#email").parent().after('<span id="emailAlert" style="color:red"> Debe ingresar un Email para el Usuario</span>');
      $("#email").addClass('alert-danger');
      hayError = true;
    }else {
      hayError = caracteresCorreoValido(email);
    }

   if(nombre.length < 2){
      $("#nombre").parent().after('<span id="nombreAlert" style="color:red"> Debe ingresar el Nombre del Usuario</span>');
      $("#nombre").addClass('alert-danger');
      hayError = true;
   }
   if(accion == 'crear'){
      if(password.length < 2){
       $("#password").parent().after('<span id="passwordAlert" style="color:red"> Debe ingresar una Contraseña para el Usuario</span>');
       $("#password").addClass('alert-danger');
       hayError = true;
      }
   }
 
  if(hayError==false){
    send(accion);
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
      $("#email").parent().after('<span id="emailAlert" style="color:red"> Debe ingresar un Email válido para el Usuario</span>');
      $("#email").addClass('alert-danger');
      return true;
    } else {
      return false;
    }
}

function mostrarModal(){
  $("#mostrarmodal").modal("show");
}


function actualizarUsuarioNegocio(){
  var valorAActualizar = $("#passEditar").val();
  var jwt = $("#jwt").val();
  var promise = new Promise(function(resolve, reject) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {

    var data = {
      'email': mailUsuario,
      'password': valorAActualizar
    };

    $.ajax({
      url: server + '/api/v1/admin/actualizarUsuarioNegocio',
      type: 'PUT',

      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        resolve(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(errorThrown);
      },
      headers: {
        Authorization: 'gmgAuth ' + jwt
      },
      data: JSON.stringify(data)
    });
   });
  });

  return promise;
}