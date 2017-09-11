
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
    var regiones;

    obtenerListado();

    function obtenerListado() {
        $('#listadoRegiones').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/region',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                regiones = data;              
              _.each(data, function(region){
                $('#listadoRegiones').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +region.nombreRegion+ '</td><td class="centrarbotaccion">' +
                    '<button onClick="mostrar(\'' + region._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + region._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + region._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
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

    function editar(idRegion){
       var region =  _.find(regiones, { '_id': idRegion});
       console.log(region);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idRegion").val(region._id);
       $("#nombreRegion").val(region.nombreRegion);
       $("#descripcionRegion").val(region.descripcionRegion);
    }

    function mostrar(idRegion){
       var region =  _.find(regiones, { '_id': idRegion});
       console.log(region);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#nombreRegion").val(region.nombreRegion);
       $("#descripcionRegion").val(region.descripcionRegion);
       $("#idRegion").val(region._id);
    }

    function eliminar(idRegion){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/region?id=' + idRegion,
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
    
    function agregarRegion(){
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idRegion").val('');
    }

    function send() {
        var isNew = $("#idRegion").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var region = JSON.stringify({
            "nombreRegion": $("#nombreRegion").val(),
            "descripcionRegion":$("#descripcionRegion").val()
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idRegion").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/region' + queryParam,
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
          data: region
      }); 
    }