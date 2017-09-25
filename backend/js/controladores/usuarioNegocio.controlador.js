
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
    var usuarioNegocios;

    function editar(idContacto){
       var contacto =  _.find(contactos, { '_id': idContacto});
       console.log(contacto);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#nombreContacto").val(contacto.nombreContacto);
       $("#mailContacto").val(contacto.mailContacto);
       $("#telefonoContacto").val(contacto.telefonoContacto);
       $("#celContacto").val(contacto.celContacto);
       $("#idContacto").val(contacto._id);
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
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/usuarioNegocio?id=' + idUsuarioNegocio,
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

    function send() {
        var isNew = $("#idUsuarioNegocio").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var usuarioNegocio = JSON.stringify({
            "email": $("#email").val(),
            "nombre":$("#nombre").val(),
            "apellido":$("#apellido").val(),
            "sexoUsuario":$("#sexoUsuario").val(),
            "fechaNacimientoUsuario":$("#fechaNacimientoUsuario").val(),
            "password":$("#password").val(),
            "idNegocio":$("#idNegocio").val()
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idUsuarioNegocio").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/registerUsuarioNegocio' + queryParam,
            type: operacion,
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {              
                
             var negocioCreado = $("#idNegocio").val();  

             var url = "../backend/local.php?idNegocio="+ negocioCreado+"";
            $(location).attr('href',url);

            $("#formularioAgregar :input").val('');

            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: usuarioNegocio
      }); 
    }

function validar(){
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
   if(password.length < 2){
      $("#password").parent().after('<span id="passwordAlert" style="color:red"> Debe ingresar una Contraseña para el Usuario</span>');
      $("#password").addClass('alert-danger');
      hayError = true;
   } 
  if(hayError==false){
     send();
  }else{
    $(location).attr('href',"#formularioAgregar");
  }

}

function limpiar(campo){
   $("#"+campo+"Alert").hide();
   $("#"+campo).removeClass('alert-danger');
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