

function obtenerListado(nombre) { 
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/'+nombre,
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                 return data; 
          },
          error: function(jqXHR,textStatus,errorThrown) {
                return errorThrown;
          }
      });
    }

    function eliminar(idPolo){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/polo?id=' + idPolo,
            type: 'DELETE',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                obtenerListado() ;
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          }
      });
    }

function send() {
        var polo = JSON.stringify({
            "nombrePolo": $("#nombrePolo").val(),
            "descripcionPolo":$("#descripcionPolo").val()
        });

        $('#target').html('sending..');

        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/polo',
            type: 'POST',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                obtenerListado() ;
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: polo
      });
    }
