
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
    var tipoNegocios;

    obtenerListado();

    function obtenerListado() {
        $('#listadoTipoNegocios').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoNegocio',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                tipoNegocios = data;              
              _.each(data, function(tipoNegocio){
                $('#listadoTipoNegocios').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +tipoNegocio.nombreTipoNegocio+ '</td><td class="centrarbotaccion">' +
                    '<button onClick="mostrar(\'' + tipoNegocio._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + tipoNegocio._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + tipoNegocio._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
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

    function editar(idTipoNegocio){
       var tipoNegocio =  _.find(tipoNegocios, { '_id': idTipoNegocio});
       console.log(tipoNegocio);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#nombreTipoNegocio").val(tipoNegocio.nombreTipoNegocio);
       $("#descripcionTipoNegocio").val(tipoNegocio.descripcionTipoNegocio);
       $("#idTipoNegocio").val(tipoNegocio._id);
    }

    function mostrar(idTipoNegocio){
       var tipoNegocio =  _.find(tipoNegocios, { '_id': idTipoNegocio});
       console.log(tipoNegocio);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#nombreTipoNegocio").val(tipoNegocio.nombreTipoNegocio);
       $("#descripcionTipoNegocio").val(tipoNegocio.descripcionTipoNegocio);
       $("#idTipoNegocio").val(tipoNegocio._id);
    }

    function eliminar(idTipoNegocio){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoNegocio?id=' + idTipoNegocio,
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
    
    function agregarTipoNegocio(){
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idTipoNegocio").val('');
    }

    function send() {
        var isNew = $("#idTipoNegocio").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var tipoNegocio = JSON.stringify({
            "nombreTipoNegocio": $("#nombreTipoNegocio").val(),
            "descripcionTipoNegocio":$("#descripcionTipoNegocio").val()
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idTipoNegocio").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoNegocio' + queryParam,
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
          data: tipoNegocio
      }); 
    }