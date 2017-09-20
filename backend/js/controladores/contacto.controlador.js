
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

 //   obtenerListado();

    function obtenerListado() {
        $('#listadoContactos').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/contacto',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                contactos = data;              
              _.each(data, function(contacto){
                $('#listadoContactos').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +contacto.nombreContacto+ '</td><td>' +contacto.mailContacto+ '</td><td class="centrarbotaccion">' +
                    '<button onClick="mostrar(\'' + contacto._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + contacto._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + contacto._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                    '</td> ' +
                    '</tr>');
            }) 
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    }

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

    function eliminar(idContacto){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/contacto?id=' + idContacto,
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
    
    function agregarContacto(){

       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idContacto").val('');
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

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idContacto").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/contacto' + queryParam,
            type: operacion,
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {

                $("#formularioAgregar :input").val(''); 

              var resultado = data;
              var contactoCreado =  resultado._id;
              var idLocal = $("#idLocal").val();
              var campo = "idContacto";  

              actualizarLocal(idLocal, contactoCreado, campo);


            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: contacto 
      }); 
    }