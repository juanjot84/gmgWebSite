

    function actualizarSession(idLocal) {
        $.ajax({
            url: '../lacocina/scripts/modificarSession.php',
            type: 'GET',
            data: {"idLocal":idLocal},
            success: function(data, textStatus, xhr) {
              return true;
            }
          });
    }




