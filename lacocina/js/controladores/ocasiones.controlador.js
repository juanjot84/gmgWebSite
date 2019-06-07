
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

    var ocasiones;

    obtenerListado();

    function obtenerListado() {
       $('#botonAgregarNuevo').show();
       $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
       $('#listadoOcasiones').html('');
       $('#loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span>');
        $.ajax({
           url: server + '/api/v1/admin/ocasion',
           type: 'GET',
           dataType: "json",
           crossDomain: true,
           contentType: "application/json",
           success: function (data) {
               ocasiones = data;
               _.each(data, function (ocasion) {
                   $('#listadoOcasiones').append(' <tr>' +
                       '<th scope="row" style="font-size: 1.5em;">1</th>' +
                       '<td>' + ocasion.nombreOcasion + '</td><td class="centrarbotaccion">' +
                       '<button onClick="mostrar(\'' + ocasion._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                       '<button onClick="editar(\'' + ocasion._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                       '<button title="Eliminar" onClick="modalEliminar(\'' + ocasion._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                       '</td> ' +
                       '</tr>');
               })
               $('#loading').hide();
           },
           error: function (jqXHR, textStatus, errorThrown) {
               $('#target').append("jqXHR: " + jqXHR);
               $('#target').append("textStatus: " + textStatus);
               $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
           },
        });
       });
    }

    function editar(idOcasion) {
      var ocasion = _.find(ocasiones, { '_id': idOcasion });
      console.log(ocasion);
      $('#formularioAgregar').show();
      $("#formularioAgregar :input").attr("disabled", false);
      $("#formularioAgregar button").show();
      $("#idOcasion").val(ocasion._id);
      $("#nombreOcasion").val(ocasion.nombreOcasion);
      $("#descripcionOcasion").val(ocasion.descripcionOcasion);
      $("#urlImagenOcasion").val(ocasion.urlImagenOcasion);
      $("input[name=destacadoOcasion][value=" + ocasion.destacadoOcasion + "]").prop("checked",true);
    }

    function mostrar(idOcasion) {
      var ocasion = _.find(ocasiones, { '_id': idOcasion });
      console.log(ocasion);
      $('#formularioAgregar').show();
      $("#formularioAgregar :input").attr("disabled", true);
      $("#formularioAgregar button").hide();
      $("#nombreOcasion").val(ocasion.nombreOcasion);
      $("#descripcionOcasion").val(ocasion.descripcionOcasion);
      $("#urlImagenOcasion").val(ocasion.urlImagenOcasion);
      $("input[name=destacadoOcasion][value=" + ocasion.destacadoOcasion + "]").prop("checked",true);
      $("#idOcasion").val(ocasion._id);
    }

    function eliminar(idOcasion) {
      if (_.isUndefined(server)) {
          $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
          });
        }
      $.ajax({
          url: server + '/api/v1/admin/ocasion?id=' + idOcasion,
          type: 'DELETE',
          dataType: "json",
          crossDomain: true,
          contentType: "application/json",
          success: function (data) {
              if (data != 'Borrado') {
                  $("#mostrarmodal").modal("show");
              } else if (data == 'Borrado') {
                  obtenerListado();
              }
          },
          error: function (jqXHR, textStatus, errorThrown) {
              obtenerListado();
          }
      });
    }

    function modalEliminar(idOcacion) {
        $('#botonesModal1').append('' +
          '<a href="#" data-dismiss="modal" onclick="eliminar(\'' + idOcacion + '\')" class="btn btn-danger">Aceptar</a>'+
          '<a href="#" data-dismiss="modal" onclick="quitarBotones()" class="btn btn-danger">Cerrar</a>'+
        ''); 
        $("#mostrarmodal1").modal("show");
    }

    function quitarBotones() {
       $("#mostrarmodal1").modal("hide");
       $('#botonesModal1').html('');
    }

    function agregarOcasion() {
       $('#botonAgregarNuevo').hide();
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idOcasion").val('');
    }

    function send() {
       if (_.isUndefined(server)) {
           $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
           });
       }
       var isNew = $("#idOcasion").val() == "";
       var operacion = isNew ? "POST": "PUT";
       var ocasion = JSON.stringify({
         "nombreOcasion": $("#nombreOcasion").val(),
         "descripcionOcasion": $("#descripcionOcasion").val(),
         "urlImagenOcasion": $("#urlImagenOcasion").val(),
         "destacadoOcasion": $('input[name=destacadoOcasion]:checked', '#formularioAgregar').val()
       });

       $('#target').html('sending..');
       var queryParam = isNew  ? "": "?id=" + $("#idOcasion").val();
       $.ajax({
          url: server + '/api/v1/admin/ocasion'+ queryParam,
          type: operacion,
          dataType: "json",
          crossDomain: true,
          contentType: "application/json",
          success: function (data) {
             $('#formularioAgregar').hide();
             $("#formularioAgregar :input").val('');
             obtenerListado();
          },
          error: function (jqXHR, textStatus, errorThrown) {
          },
          data: ocasion
       });
    }

    function cancelar() {
       $('#botonAgregarNuevo').show();
       $('#formularioAgregar').hide();
    }