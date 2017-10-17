$(function () {

  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $(this).addClass('active');
    e.preventDefault();
  });

});

function login() {

  var login = JSON.stringify({
    "email": $("#emailUsuario").val(),
    "password":$("#passwordUsuario").val()
  });
  //$('#target').html('obteniendo...');
  $.ajax({
      url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/webLogin',
      type: "POST",
      
      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
      success: function (data,statusText, xhr) {
        var token = data.token;
        var tokenDecoded=jwt_decode(token);
        var tipoUsuario = tokenDecoded.tipoUsuario;
        var idNegocio = tokenDecoded.idNegocio;

        if(tipoUsuario == 'superAdmin'){
          idNegocio = '';
          crearSesion(tipoUsuario, idNegocio);
        }
        if(tipoUsuario == 'usuarioNegocio'){
          crearSesion(tipoUsuario, idNegocio);
        }
      },
      error:function(jqXHR,textStatus,errorThrown){
        alert('error');
        $("#passwordUsuario").parent().after('<span id="passwordUsuarioAlert" style="color:red"> Usuario / contraseña incorrecto</span>');
        $("#emailUsuario").addClass('alert-danger');
        $("#passwordUsuario").addClass('alert-danger');
      },
    data: login
  });
};

function crearSesion(tipoUs, idNeg){
        var parametros = {
                "tipoUsuario" : tipoUs,
                "idNegocio" : idNeg
        };
        $.ajax({
                data:  parametros,
                url:   'scripts/login.php',
                type:  "POST",
                error: function(){
                },
                success:  function(response) {
                  if(tipoUs == 'usuarioNegocio'){
                    var url = "perfil/mi-perfil.php";
                    $(location).attr('href',url);
                  }else if(tipoUs == 'superAdmin'){
                    var url = "panel-administrador.php";
                    $(location).attr('href',url);
                  }
                }
        });
}

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