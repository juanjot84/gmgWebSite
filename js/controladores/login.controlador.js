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

  function login() {

    var login = JSON.stringify({
      "email": $("#emailUsuario").val(),
      "password":$("#passwordUsuario").val()
    });
    //$('#target').html('obteniendo...');
    $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/sign_in',
        type: "POST",
        
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
//            $('#formularioAgregar').hide();
//            $("#formularioAgregar :input").val('');
//            obtenerListado() ;
        },
        error:function(jqXHR,textStatus,errorThrown)
        {
      },
      data: login
    });
  }; 