    
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

    var provincias;
    var paises;

    obtenerListado();

    function obtenerListado() {
        $('#listadoProvincias').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/provincia',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                provincias = data;      
                obtenerListadoPaises().done(function(data){
                    paises = data
                    _.each(provincias, function(provincia){
                        $('#listadoProvincias').append(' <tr>' +
                          '<th scope="row" style="font-size: 1.5em;">1</th>' +
                          '<td>' +provincia.nombreProvincia+ '</td><td>' +provincia.idPais.nombrePais+ '</td><td class="centrarbotaccion">' +
                          '<button onClick="mostrar(\'' + provincia._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                          '<button onClick="editar(\'' + provincia._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                          '<button title="Eliminar" onClick="eliminar(\'' + provincia._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                          '</td> ' +
                          '</tr>');
                  }) ;
                });    
              
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    }

    function popularDropdown(){
      $('#comboPaises').html('');
      _.each(paises, function (pais){
        $('<option>').val(pais._id).text(pais.nombrePais).appendTo('#comboPaises')
      })
    }

     function obtenerListadoPaises() { 
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/pais',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {

               return data;
            } 
      });
    }

    function editar(idProvincia){
       var provincia =  _.find(provincias, { '_id': idProvincia});
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();       
       $("#idProvincia").val(provincia._id);
       $("#nombreProvincia").val(provincia.nombreProvincia);
       $("#codigoProvincia").val(provincia.codigoProvincia);
       popularDropdown();
    }

    function mostrar(idProvincia){
       var provincia =  _.find(provincias, { '_id': idProvincia});
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#idProvincia").val(provincia._id);
       $("#nombreProvincia").val(provincia.nombreProvincia);
       $("#nombrePais").val(provincia.idPais.nombrePais);
       $("#codigoProvincia").val(provincia.codigoProvincia);
       $("#idProvincia").val(provincia._id);
    }

    function eliminar(idProvincia){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/provincia?id=' + idProvincia,
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
    
    function agregarProvincia(){
        $('#formularioAgregar').show();
        $("#formularioAgregar :input").attr("disabled", false);
        $("#formularioAgregar button").show();
        $("#idProvincia").val('');
       popularDropdown();
    }

    function send() {
        var isNew =$("#idProvincia").val() == '';
        var operacion = isNew  ? "POST": "PUT";
        var provincia = JSON.stringify({
            "codigoProvincia": $("#codigoProvincia").val(),
            "idPais":$("#comboPaises").val(),
            "nombreProvincia":$("#nombreProvincia").val(),
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idProvincia").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/provincia' + queryParam,
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
          data: provincia
      });
    }
