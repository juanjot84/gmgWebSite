    var tituloInicio = '';
    var tituloFin = '';
    iniciar();

    function iniciar(){
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            obtenerReporte('esteMes');
        });
    }


    function obtenerReporte(accion){
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        var f = new Date();
        var fechaHoy = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(); 
        if (accion == 'ultimos30') {
            var ult30 = new Date();
            var dayOfMonth = ult30.getDate();
            ult30.setDate(dayOfMonth - 30);
            var ultimos30 = ult30.getDate() + "/" + (ult30.getMonth() +1) + "/" + ult30.getFullYear();
            tituloInicio = ultimos30;
            tituloFin = fechaHoy;
            obtenerReservas(ultimos30, fechaHoy);
            $('#selectorRango').html('');
            $("#selectorRango").append('Ultimos 30 días');
        } else if (accion == 'ultimos7') { 
            var ult7 = new Date();
            var dayOfMonth = ult7.getDate();
            ult7.setDate(dayOfMonth - 7);
            var ultimos7 = ult7.getDate() + "/" + (ult7.getMonth() +1) + "/" + ult7.getFullYear();
            tituloInicio = ultimos7;
            tituloFin = fechaHoy;
            obtenerReservas(ultimos7, fechaHoy);
            $('#selectorRango').html('');
            $("#selectorRango").append('Ultima semana');
        } else if(accion == 'ayer') {
            var ult1 = new Date();
            var dayOfMonth = ult1.getDate();
            ult1.setDate(dayOfMonth - 1);
            var ayer = ult1.getDate() + "/" + (ult1.getMonth() +1) + "/" + ult1.getFullYear();
            tituloInicio = ayer;
            tituloFin = fechaHoy;
            graficarCharts(ayer, fechaHoy);
        } else if(accion == 'esteMes') {
            var ini = new Date();
            var inicioMes = 01 + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
            tituloInicio = inicioMes;
            tituloFin = fechaHoy;
            obtenerReservas(inicioMes, fechaHoy);
            $('#selectorRango').html('');
            $("#selectorRango").append('Mes en Curso');
        } else if(accion == 'mesPasado') {
            var ini = new Date();
            ini.setDate(1);
            var dayOfMonth = ini.getDate();
            ini.setDate(dayOfMonth - 1);
            var finMesAnt = ini.getDate() + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
            var inicioMesAnt = 01 + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
            tituloInicio = inicioMesAnt;
            tituloFin = finMesAnt;
            obtenerReservas(inicioMesAnt, finMesAnt);
            $('#selectorRango').html('');
            $("#selectorRango").append('Mes Anterior');
        }
        });
    }

    function obtenerReservas(fechaInicio, fechaFin) {

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
                renderTable(data, fechaInicio, fechaFin);
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
                
            },
            data: rangoFechas
            });
    }

    function renderTable(reservasLocal, fechaInicio, fechaFin) {
        var contTotReservas = 0;
        var contTotCubiertos = 0;
        var contTotReservasEsp = 0;
        $('#tableReporte,#totalReservas,#totalCubiertos,#totalReservasEspeciales,#fechaTotReservas,#fechaTotCubiertos,#fechaTotResEsp').html('');
        _.each(reservasLocal, function(local){
            contTotReservas = contTotReservas + local.cantReservas;
            contTotCubiertos = contTotCubiertos + local.cantCubiertos;
            contTotReservasEsp = contTotReservasEsp + local.cantReservasEsp;
            var nombreLocal = '';
            if (local.nombreLocal != '') {
                nombreLocal = ' | ' +local.nombreLocal;
            }
            $("#tableReporte").append(''+
                '<tr>'+
                    '<th>'+ local.nombreNegocio + nombreLocal +'</th>'+
                    '<td>'+local.cantReservas+'</td>'+
                    '<td>'+local.cantCubiertos+'</td>'+
                    '<td> $'+local.rangoPrecioInicial+' - $' +local.rangoPrecioFinal+'</td>'+
                    '<td> $'+local.rangoPrecioComision+'</td>'+
                    '<td>'+local.cantReservasEsp+'</td>'+
                    '<td></td>'+
                    '<td></td>'+
                '</tr>'+
             '');
        })

        $("#totalReservas").append(contTotReservas);
        $("#totalCubiertos").append(contTotCubiertos);
        $("#totalReservasEspeciales").append(contTotReservasEsp);
        $("#fechaTotReservas,#fechaTotCubiertos,#fechaTotResEsp").append(fechaInicio + ' al ' + fechaFin);
    }