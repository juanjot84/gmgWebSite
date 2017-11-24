
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
    var servicios;

    obtenerListado();

    function obtenerListado() {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        $('#listadoServicios').html('');
        $('#loading').html('<img class="img-responsive" src="img/loading.gif">');       
        $.ajax({
            url: server + '/api/v1/admin/servicio',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                servicios = data;              
              _.each(data, function(servicio, index){
                $('#listadoServicios').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">' + parseInt(index+1) + '</th>' +
                    '<td>' +servicio.nombreServicio+ '</td><td style="display: flex;"><img class="img-responsive iconos" src="'+ servicio.urlIconoServicio +'"></td>   <td class="centrarbotaccion">'+
                    '<button onClick="mostrar(\'' + servicio._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + servicio._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + servicio._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
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

    function editar(idServicio){
       var servicio =  _.find(servicios, { '_id': idServicio});
       console.log(servicio);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idServicio").val(servicio._id);
       $("#nombreServicio").val(servicio.nombreServicio);
       $("#descripcionServicio").val(servicio.descripcionServicio);
       $("#urlIconoServicio").val(servicio.urlIconoServicio);
    }

    function mostrar(idServicio){
       var servicio =  _.find(servicios, { '_id': idServicio});
       console.log(servicio);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#nombreServicio").val(servicio.nombreServicio);
       $("#descripcionServicio").val(servicio.descripcionServicio);
       $("#urlIconoServicio").val(servicio.urlIconoServicio);
       $("#idServicio").val(servicio._id);
    }

    function eliminar(idServicio){
        if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
          }
       $.ajax({
            url: server + '/api/v1/admin/servicio?id=' + idServicio,
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
    
    function agregarServicio(){
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idServicio").val('');
    }

    function send() {
        if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
          }
        var isNew = $("#idServicio").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var servicio = JSON.stringify({
            "nombreServicio": $("#nombreServicio").val(),
            "descripcionServicio":$("#descripcionServicio").val(),
            "urlIconoServicio":$("#urlIconoServicio").val()
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idServicio").val();
        $.ajax({
            url: server + '/api/v1/admin/servicio' + queryParam,
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
          data: servicio
      }); 
    }
    
    function cancelar(){
      $('#formularioAgregar').hide();
    }