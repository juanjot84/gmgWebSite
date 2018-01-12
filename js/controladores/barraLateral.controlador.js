function obtenerListadoTiposNegocio() {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
      $('.container.ocasiones').html('');
      $('#target').html('obteniendo...');
      $.ajax({
          url: server + '/api/v1/admin/tipoNegocio',
          type: 'GET',
          dataType: "json",
          crossDomain: true,
          contentType:"application/json",
          success: function (data) {
            renderMenu(data);
        },
        error:function(jqXHR,textStatus,errorThrown)
        {
          console.log("jqXHR: "+jqXHR);
          console.log("textStatus: "+textStatus);
          console.log("You can not send Cross Domain AJAX requests: "+errorThrown);
        }
    });
  });
  }

  function renderMenu(tiposNegocio){
    _.each(tiposNegocio, function(tipoNegocio){
      if(tipoNegocio.nombreTipoNegocio != 'Restaurante'){
        $('#menuLateral').append(' ' +
           '<li>'+
             '<a href="#">'+tipoNegocio.nombreTipoNegocio+'</a>'+
           '</li>'+
        '');
      }
    }) 


  }