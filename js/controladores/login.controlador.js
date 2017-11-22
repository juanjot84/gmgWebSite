var disabled = false;

$('#emailUsuario, #passwordUsuario').change( function (){
  $("#passwordUsuarioAlert").remove();
  $("#emailUsuario").removeClass('alert-danger');
  $("#passwordUsuario").removeClass('alert-danger');
});

var redirect = 'mi-perfil.php';

function setRedirect(url){
  if(!_.isNil(url))
  redirect = url;
}

function login() {
  if (!disabled){
    disabled = true;
    $('#login-submit').attr('disabled','disabled');
    var login = JSON.stringify({
      "email": $("#emailUsuario").val(),
      "password":$("#passwordUsuario").val()
    });
    $.ajax({
      url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/sign_in',
      type: "POST",

      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
      success: function (data) {
        crearSesion(data);
      },
      error:function(jqXHR,textStatus,errorThrown){
        $('#login-submit').removeAttr('disabled');
        var disabled = false;
        $("#passwordUsuario").parent().after('<span id="passwordUsuarioAlert" style="color:red"> Usuario / contraseña incorrecto</span>');
        $("#emailUsuario").addClass('alert-danger');
        $("#passwordUsuario").addClass('alert-danger');
      },
      data: login
    });
  }
}

function crearSesion(jwt){
  var tokenDecoded =jwt_decode(jwt.token);
  var idUsuarioReserva = tokenDecoded._id;
  var nombreUsuario = tokenDecoded.nombre;
  var apellidoUsuario = tokenDecoded.apellido;
  var telefonoUsuario = tokenDecoded.nroCelular;
  var parametros =  {
    "jwt" : jwt.token,
    "idUsuarioReserva": idUsuarioReserva,
    "nombreUsuario": nombreUsuario,
    "apellidoUsuario": apellidoUsuario,
    "telefonoUsuario": telefonoUsuario
  };
  $.ajax({
    data:  parametros,
    url:   'redirect-login.php',
    type:  "POST",
    error: function(){
    },
    success:  function(response) {
      $(location).attr('href',redirect);
    }
  });
}

function validar() {
  var nombre = $("#nombre").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var password2 = $("#password2").val();
  var hayError=false;

  limpiar('nombre');
  limpiar('email');
  limpiar('password');
  limpiar('password2');

  if(email.length < 2){
    $("#email").parent().after('<span id="emailAlert" style="color:red"> Debe ingresar un Email para el Usuario</span>');
    $("#email").addClass('alert-danger');
    hayError=true;
  } else {
    hayError=caracteresCorreoValido(email);
  }

  if(nombre.length < 2){
    $("#nombre").parent().after('<span id="nombreAlert" style="color:red"> Debe ingresar el Nombre del Usuario</span>');
    $("#nombre").addClass('alert-danger');
    hayError=true;
  }

  if (password.length < 6){
    $("#password").parent().after('<span id="passwordAlert" style="color:red"> La contraseña debe tener al menos 6 caracteres</span>');
    $("#password").addClass('alert-danger');
    hayError=true;
  } else {
    if (password!=password2) {
      $("#password2").parent().after('<span id="password2Alert" style="color:red"> Las contraseñas no coinciden entre si</span>');
      $("#password2").addClass('alert-danger');
      hayError=true
    }
  }


  if (hayError!=true) {
    register();
  }


}

function register() {
  var register = JSON.stringify({
    "nombre": $("#nombre").val(),
    "email": $("#email").val(),
    "password":$("#password").val()
  });

  $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/register',
    type: "POST",

    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      crearSesion(data);
    },
    error:function(jqXHR,textStatus,errorThrown){

    },
    data: register
  });
};

function limpiar(campo) {
  $("#"+campo+"Alert").hide();
  $("#"+campo).removeClass('alert-danger');
}

function caracteresCorreoValido(email){
  var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  if (! caract.test(email)) {
    $("#email").parent().after('<span id="emailAlert" style="color:red"> Email inválido</span>');
    $("#email").addClass('alert-danger');
    return true;
  } else {
    return false;
  }
}
