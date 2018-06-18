    function iniciar(idNegocio) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
             listadoLocales(idNegocio);
        });     
    }

    function listadoLocales(idNegocio) {
          if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
          }

          var consulta = JSON.stringify({
            "idNegocio": idNegocio
          });
          $.ajax({
            url: server + '/api/v1/admin/negocioLocales',
            type: 'POST',
            dataType: "json",
            crossDomain: true,
            contentType: "application/json",
            success: function (data) {
                $('#navWeb').html('');
                $('#navWeb').append(''+
                    '<a class="btn btn-secondary dropdown-toggle text-center mx-auto d-block " href="#" role="button" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">'+
                      data[0].poloGastronomico[0].nombrePoloGastronomico +
                    '</a>'+
                    '<div id="opcionNavWeb" class="dropdown-menu" aria-labelledby="dropdownMenuLink">'+
                    '</div>'+
                '');

                _.each(data, function(local){
                    $('#opcionNavWeb').append(''+
                       '<a class="dropdown-item" href="#">'+
                            local.poloGastronomico[0].nombrePoloGastronomico +
                       '</a>'+
                    '')
                });

              alert(data.idNegocio); 
            //    _.each(gruposLocales, function(grupo) {

           //     });

            },
            error: function (jqXHR, textStatus, errorThrown) {
              return false;
            },
            data: consulta
          });

          $('.dropdown-toggle').dropdown();
    }