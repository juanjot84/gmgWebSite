
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
    var especialidades;

    obtenerListado();

    function obtenerListado() {
     $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        $('#listadoEspecialidades').html('');
        $('#loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span>');       
        $.ajax({
            url: server + '/api/v1/admin/especialidad',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                especialidades = data;              
              _.each(data, function(especialidad){
                $('#listadoEspecialidades').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +especialidad.nombreEspecialidad+ '</td><td class="centrarbotaccion">' +
                    '<button onClick="mostrar(\'' + especialidad._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + especialidad._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + especialidad._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
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

    function editar(idEspecialidad){
       var especialidad =  _.find(especialidades, { '_id': idEspecialidad});
       console.log(especialidad);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#nombreEspecialidad").val(especialidad.nombreEspecialidad);
       $("#descripcionEspecialidad").val(especialidad.descripcionEspecialidad);
       $("#idEspecialidad").val(especialidad._id);
    }

    function mostrar(idEspecialidad){
       var especialidad =  _.find(especialidades, { '_id': idEspecialidad});
       console.log(especialidad);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#nombreEspecialidad").val(especialidad.nombreEspecialidad);
       $("#descripcionEspecialidad").val(especialidad.descripcionEspecialidad);
       $("#idEspecialidad").val(especialidad._id);
    }

    function eliminar(idEspecialidad){
        if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
          }
       $.ajax({
            url: server + '/api/v1/admin/especialidad?id=' + idEspecialidad,
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
    
    function agregarEspecialidad(){
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idEspecialidad").val('');
    }

    function send() {
        if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
        }
        var isNew = $("#idEspecialidad").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var especialidad = JSON.stringify({
            "nombreEspecialidad": $("#nombreEspecialidad").val(),
            "descripcionEspecialidad":$("#descripcionEspecialidad").val()
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idEspecialidad").val();
        $.ajax({
            url: server + '/api/v1/admin/especialidad' + queryParam,
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
          data: especialidad
      }); 
    }
    
    function cancelar(){
      $('#formularioAgregar').hide();
    }