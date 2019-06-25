iniciar();

    function iniciar(){
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            obtenerReporte(fechaInicio, fechaFin);
        });
    }

    function obtenerReporte(fechaInicio, fechaFin) {

        if (_.isUndefined(server)) {
            $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            });
        }
            var operacion = "POST";
            var rangoFechas = JSON.stringify({
            "fechaInicio": fechaInicio,
            "fechaFin": fechaFin         
            });
    
            $('#target').html('sending..');
            $.ajax({
            url: server + '/api/v1/admin/reservasPorLocales',
            type: operacion,
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                var reservas = data;
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
                
            },
            data: rangoFechas
            });

    
        return promise
    }