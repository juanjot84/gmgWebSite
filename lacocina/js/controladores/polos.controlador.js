    
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

    var polos;
    var regiones;

    obtenerListado();

    function obtenerListado() {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        $('#listadoPolos').html('');
        $('#loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span>');       
        $.ajax({
            url: server + '/api/v1/admin/polo',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                polos = data;        
                obtenerListadoRegiones().done(function(data){
                    regiones= data
                    _.each(polos, function(polo){
                        $('#listadoPolos').append(' <tr>' +
                          '<th scope="row" style="font-size: 1.5em;">1</th>' +
                          '<td>' +polo.nombrePoloGastronomico+ '</td><td>' + polo.idRegion.nombreRegion+ '</td><td class="centrarbotaccion">' +
                          '<button onClick="mostrar(\'' + polo._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                          '<button onClick="editar(\'' + polo._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                          '<button title="Eliminar" onClick="eliminar(\'' + polo._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                          '</td> ' +
                          '</tr>');        
                  });
                       $('#loading').hide();
                });

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

    function popularDropdown(){
      $('#comboRegiones').html('');
      _.each(regiones, function (region){
        $('<option>').val(region._id).text(region.nombreRegion).appendTo('#comboRegiones')
      })
    }

    function popularDropdownEditar(idRegion){
      $('#comboRegiones').html('');
       _.each(regiones, function(region){;
        var option = $('<option>').val(region._id).text(region.nombreRegion);
        if (idRegion==region._id)
          option.attr('selected', 'selected');
          option.appendTo('#comboRegiones');
        });
    }

     function obtenerListadoRegiones() {  
        if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
          } 
        return $.ajax({
            url: server + '/api/v1/admin/region',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }

    function editar(idPolo){
       var polo =  _.find(polos, { '_id': idPolo});
       obtenerListadoRegiones().done(function(data){
             regiones = data
       popularDropdownEditar(polo.idRegion._id);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();       
       $("#idPolo").val(polo._id);
       $("#nombrePoloGastronomico").val(polo.nombrePoloGastronomico);
       $("#descripcionPoloGastronomico").val(polo.descripcionPoloGastronomico);
       });
    }

    function mostrar(idPolo){
       var polo =  _.find(polos, { '_id': idPolo});

      obtenerListadoRegiones().done(function(data){
             regiones = data
       popularDropdownEditar(polo.idRegion._id);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#idPolo").val(polo._id);
       $("#nombrePoloGastronomico").val(polo.nombrePoloGastronomico);
       $("#descripcionPoloGastronomico").val(polo.descripcionPoloGastronomico);
       $("#idPolo").val(polo._id);
     });
    }

    function eliminar(idPolo){
        if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
          }
       $.ajax({
            url: server + '/api/v1/admin/polo?id=' + idPolo,
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
    
    function agregarPolo(){
        $('#formularioAgregar').show();
        $("#formularioAgregar :input").attr("disabled", false);
        $("#formularioAgregar button").show();
        $("#idPolo").val('');
        obtenerListadoRegiones().done(function(data){
             regiones = data
       popularDropdown();
     });
    }

    function send() {
        if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
          }
        var isNew =$("#idPolo").val() == '';
        var operacion = isNew  ? "POST": "PUT";
        var polo = JSON.stringify({
            "nombrePoloGastronomico": $("#nombrePoloGastronomico").val(),
            "idRegion":$("#comboRegiones").val(),
            "descripcionPoloGastronomico":$("#descripcionPoloGastronomico").val(),
            "coordenadasPoloGastronomico":"falta implementar en FE"
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idPolo").val();
        $.ajax({
            url: server + '/api/v1/admin/polo' + queryParam,
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
          data: polo
      });
    }
    
    function cancelar(){
      $('#formularioAgregar').hide();
    }