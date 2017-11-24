
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
    var medioPagos;

    obtenerListado();

    function obtenerListado() {
      $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        $('#listadoMedioPago').html('');
        $('#loading').html('<img class="img-responsive" src="img/loading.gif">');       
        $.ajax({
            url: server + '/api/v1/admin/medioPago',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                medioPagos = data;              
              _.each(data, function(medioPago){
                $('#listadoMedioPago').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +medioPago.nombreMedioPago+ '</td><td style="display: flex;"><img class="img-responsive iconos" src="'+ medioPago.iconoMedioPago +'"></td>   <td class="centrarbotaccion">'+
                    '<button onClick="mostrar(\'' + medioPago._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + medioPago._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + medioPago._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                    '</td> ' +
                    '</tr>');
            }) 
              $('#loading').hide();
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    });
    }

    function editar(idMedioPago){
       var medioPago =  _.find(medioPagos, { '_id': idMedioPago});
       console.log(medioPago);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idMedioPago").val(medioPago._id);
       $("#nombreMedioPago").val(medioPago.nombreMedioPago);
       $("#descripcionMedioPago").val(medioPago.descripcionMedioPago);
       $("#iconoMedioPago").val(medioPago.iconoMedioPago);
    }

    function mostrar(idMedioPago){
       var medioPago =  _.find(medioPagos, { '_id': idMedioPago});
       console.log(medioPago);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#idMedioPago").val(medioPago._id);
       $("#nombreMedioPago").val(medioPago.nombreMedioPago);
       $("#descripcionMedioPago").val(medioPago.descripcionMedioPago);
       $("#iconoMedioPago").val(medioPago.iconoMedioPago);
    }

    function eliminar(idMedioPago){
        if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
        }
       $.ajax({
            url: server + '/api/v1/admin/medioPago?id=' + idMedioPago,
            type: 'DELETE',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
              if(data != 'Borrado'){  
                $("#mostrarmodal").modal("show");
              }else if(data == 'Borrado'){
                 obtenerListado();
              }
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
              obtenerListado();
          }
      });    
    }
    
    function agregarMedioPago(){
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idMedioPago").val('');
    }

    function send() {
        if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
        }
        var isNew = $("#idMedioPago").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var medioPago = JSON.stringify({
            "nombreMedioPago": $("#nombreMedioPago").val(),
            "descripcionMedioPago":$("#descripcionMedioPago").val(),
            "iconoMedioPago":$("#iconoMedioPago").val()
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idMedioPago").val();
        $.ajax({
            url: server + '/api/v1/admin/medioPago' + queryParam,
            type: operacion,
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                $('#formularioAgregar').hide();
                $("#formularioAgregar :input").val('');
                obtenerListado() ;
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: medioPago
      }); 
    }
    
    function cancelar(){
      $('#formularioAgregar').hide();
    }