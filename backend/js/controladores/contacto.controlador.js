
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

  
    function send() {

        var isNew = $("#idContacto").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var contacto = JSON.stringify({
            "nombreContacto": $("#nombreContacto").val(),
            "mailContacto":$("#mailContacto").val(),
            "telefonoContacto":$("#telefonoContacto").val(),
            "celContacto":$("#celContacto").val()
        });

        $('#target').html('sending..');
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
              actualizarLocal(idLocalCreado, contactoCreado, campo);

              var url = "http://localhost/gmg/gmgWebSite/backend/asignar-descuento.php?idLocal="+ idLocalCreado+""; 
              $(location).attr('href',url);

              $("#formularioAgregar :input").val('');


            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: contacto  
      }); 
    } 