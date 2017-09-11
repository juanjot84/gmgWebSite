
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
    var nivelPrecios;

    obtenerListado();

    function obtenerListado() {
        $('#listadoNivelPrecio').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/nivelPrecio',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                nivelPrecio = data;              
              _.each(nivelPrecio, function(nivelPrecio){
                $('#listadoNivelPrecio').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +nivelPrecio.label+ '</td><td>'+ nivelPrecio.valorInicial +'</td><td>'+ nivelPrecio.valorFinal +'</td><td>'+ nivelPrecio.valorComision +'</td>  <td class="centrarbotaccion">'+
                    '<button onClick="mostrar(\'' + nivelPrecio._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + nivelPrecio._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + nivelPrecio._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
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

    function editar(idNivelPrecio){
       var nivelPrecio =  _.find(nivelPrecios, { '_id': idNivelPrecio});
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idNivelPrecio").val(nivelPrecio._id);
       $("#label").val(nivelPrecio.label);
       $("#valorInicial").val(nivelPrecio.valorInicial);
       $("#valorFinal").val(nivelPrecio.valorFinal);
       $("#valorComision").val(nivelPrecio.valorComision);
    }

    function mostrar(idNivelPrecio){
       var nivelPrecio =  _.find(nivelPrecios, { '_id': idNivelPrecio});
       alert(nivelPrecio);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#label").val(nivelPrecio.label);
       $("#valorInicial").val(nivelPrecio.valorInicial);
       $("#valorFinal").val(nivelPrecio.valorFinal);
       $("#valorComision").val(nivelPrecio.valorComision);
       $("#idNivelPrecio").val(nivelPrecio._id);
    }

    function eliminar(idNivelPrecio){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/nivelPrecio?id=' + idNivelPrecio,
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
    
    function agregarNivelPrecio(){
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idNivelPrecio").val('');
    }

    function send() {
        var isNew = $("#idNivelPrecio").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var nivelPrecio = JSON.stringify({
            "label": $("#label").val(),
            "valorInicial":$("#valorInicial").val(),
            "valorFinal":$("#valorFinal").val(),
            "valorComision":$("#valorComision").val()
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idNivelPrecio").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/nivelPrecio' + queryParam,
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
          data: nivelPrecio
      }); 
    }