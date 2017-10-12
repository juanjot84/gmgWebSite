
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
    var descuentos;

    obtenerListado();

    function obtenerListado() {
        $('#listadoDescuentos').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/descuento',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                descuentos = data;              
              _.each(data, function(descuento){
                $('#listadoDescuentos').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +descuento.nombreDescuento+ '</td><td>' +descuento.descripcionDescuento+ '</td><td>' +descuento.porcentajeDescuento+ '</td><td class="centrarbotaccion">' +
                    '<button onClick="mostrar(\'' + descuento._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + descuento._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + descuento._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
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

    function editar(idDescuento){
       var descuento =  _.find(descuentos, { '_id': idDescuento});
       console.log(descuento);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#nombreDescuento").val(descuento.nombreDescuento);
       $("#descripcionDescuento").val(descuento.descripcionDescuento);
       $("#porcentajeDescuento").val(descuento.porcentajeDescuento);
       $("#condicionDescuento").val(descuento.condicionDescuento);
       $("#idDescuento").val(descuento._id);
    }

    function mostrar(idDescuento){
       var descuento =  _.find(descuentos, { '_id': idDescuento});
       console.log(descuento);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#nombreDescuento").val(descuento.nombreDescuento);
       $("#descripcionDescuento").val(descuento.descripcionDescuento);
       $("#porcentajeDescuento").val(descuento.porcentajeDescuento);
       $("#condicionDescuento").val(descuento.condicionDescuento);
       $("#idDescuento").val(descuento._id);
    }

    function eliminar(idDescuento){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/descuento?id=' + idDescuento,
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
    
    function agregarDescuento(){
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idDescuento").val('');
    }

    function send() {
        var isNew = $("#idDescuento").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var descuento = JSON.stringify({
            "nombreDescuento": $("#nombreDescuento").val(),
            "descripcionDescuento":$("#descripcionDescuento").val(),
            "porcentajeDescuento":$("#porcentajeDescuento").val(),
            "condicionDescuento":$("#condicionDescuento").val()
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idDescuento").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/descuento' + queryParam,
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
          data: descuento
      }); 
    }
    
    function cancelar(){
      $('#formularioAgregar').hide();
    }