var disabled = false;

$(function () {

  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $(this).addClass('active');
    e.preventDefault();
  });

});

function iniciar(accion) {
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {

  });
}

function login() {
  var overlay = jQuery('<div id="overlay"><center><div id="loading"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span></div></center> </div>');
  overlay.appendTo(document.body);
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }

  if (!disabled) {
    disabled = true;
    $('#login-submit').attr('disabled','disabled');

    var login = JSON.stringify({
      "email": $("#emailUsuario").val(),
      "password": $("#passwordUsuario").val()
    });
    //$('#target').html('obteniendo...');
    $.ajax({
      url: server + '/api/v1/admin/webLogin',
      type: "POST",

      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data, statusText, xhr) {
        var token = data.token;
        var tokenDecoded = jwt_decode(token);
        var tipoUsuario = tokenDecoded.tipoUsuario;
        var idNegocio = tokenDecoded.idNegocio;
        var nombreUsuario = tokenDecoded.nombre;
        var apellidoUsuario = tokenDecoded.apellido;

        if (tipoUsuario == 'superAdmin') {
          idNegocio = '';
          crearSesion(tipoUsuario, idNegocio, token);
        }
        if (tipoUsuario == 'usuarioNegocio') {
          crearSesion(tipoUsuario, idNegocio, token, nombreUsuario, apellidoUsuario);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $('#overlay').remove();
        $('#login-submit').removeAttr('disabled');
        disabled = false;
        $('#passwordUsuarioAlert').remove();
        $("#passwordUsuario").parent().after('<span id="passwordUsuarioAlert" style="color:red"> Usuario / contraseña incorrecto</span>');
        $("#emailUsuario").addClass('alert-danger');
        $("#passwordUsuario").addClass('alert-danger');
      },
      data: login
    });
  }
};

function crearSesion(tipoUs, idNeg, token, nombreUsuario, apellidoUsuario) {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $.ajax({
    url: server + '/api/v1/admin/negocio?id=' + idNeg + "",
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      var nombreNegocio = data.nombreNegocio;

      var parametros = {
        "tipoUsuario": tipoUs,
        "idNegocio": idNeg,
        "jwt": token,
        "nombreUsuario": nombreUsuario,
        "apellidoUsuario": apellidoUsuario,
        "nombreNegocio": nombreNegocio
      };
      $.ajax({
        data: parametros,
        url: 'scripts/login.php',
        type: "POST",
        error: function () {
        },
        success: function (response) {
          if (tipoUs == 'usuarioNegocio') {
            var url = "perfil/mi-perfil.php";
            $(location).attr('href', url);
          } else if (tipoUs == 'superAdmin') {
            var url = "panel-administrador.php";
            $(location).attr('href', url);
          }
        }
      });


    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    },
  });


}

function limpiar(campo) {
  $("#" + campo + "Alert").hide();
  $("#" + campo).removeClass('alert-danger');
}

function caracteresCorreoValido(email) {
  var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  if (!caract.test(email)) {
    $("#email").parent().after('<span id="emailAlert" style="color:red"> Email inválido</span>');
    $("#email").addClass('alert-danger');
    return true;
  } else {
    return false;
  }
}