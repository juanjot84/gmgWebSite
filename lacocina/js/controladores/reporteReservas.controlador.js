    var tituloInicio = '';
    var tituloFin = '';
    iniciar();

    function iniciar(){
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
            obtenerReporte('mesPasado');
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
            var totalComisionesLocal = local.totalCubiertosNormales;
            contTotReservas = contTotReservas + local.cantReservas;
            contTotCubiertos = contTotCubiertos + local.cantCubiertos;
            contTotReservasEsp = contTotReservasEsp + local.cantReservasEsp;
            var cantReservasNormales = local.cantReservasNormales;
            var nombreLocal = '';
            if (local.nombreLocal != '') {
                nombreLocal = ' | ' +local.nombreLocal;
            }
            $("#tableReporte").append(''+
                    '<div class="card">'+
                    '<div class="card-header" id="heading01">'+
                        '<table class="table table-sm">'+
                            '<thead>'+
                                '<tr>'+
                                    '<th scope="col" class="col5"><a class="" data-toggle="collapse" data-target="#'+local.idLocal+'" aria-expanded="true" aria-controls="'+local.idLocal+'">'+local.nombreNegocio+nombreLocal+'</a></th>'+
                                    '<th scope="col" class="col6"><a class="" data-toggle="collapse" data-target="#'+local.idLocal+'" aria-expanded="true" aria-controls="'+local.idLocal+'">'+local.cantReservas+'</a></th>'+
                                    '<th scope="col" class="col6"><a class="" data-toggle="collapse" data-target="#'+local.idLocal+'" aria-expanded="true" aria-controls="'+local.idLocal+'">'+local.cantCubiertos+'</a></th>'+
                                    '<th scope="col" class="col6"><a class="" data-toggle="collapse" data-target="#'+local.idLocal+'" aria-expanded="true" aria-controls="'+local.idLocal+'" id="total'+local.idLocal+'"></a></th>'+
                                    '<th scope="col" class="col4"><a class="" data-toggle="collapse" data-target="#'+local.idLocal+'" aria-expanded="true" aria-controls="'+local.idLocal+'"><i class="fa fa-eye" aria-hidden="true"></i></a></th>'+
                                '</tr>'+
                            '</thead>'+
                        '</table>'+
                    '</div>'+
                    '<div id="'+local.idLocal+'" class="collapse content-collapse " aria-labelledby="headingOne" data-parent="#accordion">'+
                        '<div class="row padding-reservas2 ">'+
                            '<div class="col-md-4">'+
                                '<h6><span id="titulo1">Reservas Normales</span></h6>'+
                                '<div id="contReservasNormales">'+
                                    '<p>Rango:<span style="color: #f8981d;"> '+local.rangoPrecioInicial+' - '+local.rangoPrecioFinal+'</span> Comisión: <span style="color: #f8981d;"> $'+local.rangoPrecioComision+'</span></p>'+
                                    '<p>Reservas: <span style="color: #f8981d;"> '+cantReservasNormales+'</span> Cubiertos: <span style="color: #f8981d;"> '+local.cantCubiertosNormales+'</span> Total: <span style="color: #149b7e;"> $'+local.totalCubiertosNormales+'</span></p>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-4">'+
                                '<h6><span id="titulo2">Reservas Especiales</span></h6>'+
                                '<div id="contReservasEspeciales">'+

                                '</div>'+
                            '</div>'+
                            '<div class="col-md-4">'+
                                '<h6><strong id="titulo3">Total Comisiones</strong></h6>'+
                                '<p><span style="color: #149b7e;" id="totComisiones'+local.idLocal+'"><strong> </strong></span></p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
             '');

             if (local.promociones != '') {
                _.each(local.promociones, function(promocion){
                    $("#contReservasEspeciales").append(''+
                      '<h1>'+promocion.nombreCortoPromocion+'</br><span class="ver">Modalidad de Cobro: '+promocion.modalidadCobro+'</span></h1>'+
                    '');
                    if (promocion.comisionPromocion != 0) {
                        $("#contReservasEspeciales").append(''+
                          '<div id="Com'+promocion._id+'">'+
                             '<p>Comisión: <span style="color: #f8981d;">'+promocion.comisionPromocion+'%</span></p>'+
                             '<p>Opciones Menu: <span style="color: #f8981d;"> '+promocion.cantOpcionesMenu+'</span> </span> Total: <span style="color: #149b7e;"> $'+promocion.totalMenuPorcentaje+'</span></p>'+
                          '</div>'+
                        '');
                        if (promocion.modalidadCobro == 'cubierto+menu') {
                            $("#Com"+promocion._id).append(''+
                             '<p>Cubiertos: <span style="color: #f8981d;"> '+promocion.cubiertosProm+'</span> Total: <span style="color: #149b7e;"> $'+promocion.cubiertosProm * local.rangoPrecioComision+'</span></p>'+
                            '');
                            totalComisionesLocal = totalComisionesLocal + (promocion.cubiertosProm * local.rangoPrecioComision) + promocion.totalMenuPorcentaje;
                        } else if (promocion.modalidadCobro == 'menu') {
                            totalComisionesLocal = totalComisionesLocal + promocion.totalMenuPorcentaje;
                        } else if (promocion.modalidadCobro == 'cubiertos') {
                            $("#Com"+promocion._id).html('');
                            $("#Com"+promocion._id).append(''+
                              '<p>Cubiertos: <span style="color: #f8981d;"> '+promocion.cubiertosProm+'</span> Total: <span style="color: #149b7e;"> $'+promocion.cubiertosProm * local.rangoPrecioComision+'</span></p>'+
                            '');
                            totalComisionesLocal = totalComisionesLocal + (promocion.cubiertosProm * local.rangoPrecioComision);
                        }
                    }
                    if (promocion.rangoPromocion.length != 0) {
                        var totalRangos = 0;
                        $("#contReservasEspeciales").append(''+
                           '<div id="contRan'+promocion._id+'"></div>'+
                        '');
                        _.each(promocion.rangoPromocion, function(rango){
                            totalRangos = totalRangos + rango.totalComision;
                            $("#contRan"+promocion._id).append(''+
                            '<div id="'+rango.idRango+'">'+
                                '<p>Rango:<span style="color: #f8981d;"> $'+rango.desde+' - $'+rango.hasta+'</span> Comisión: <span style="color: #f8981d;"> $'+rango.valor+'</span></p>'+
                                '<p>Opciones Menu: <span style="color: #f8981d;"> '+rango.cantidad+'</span> Total: <span style="color: #149b7e;"> $'+rango.totalComision+'</span></p>'+
                            '</div>'+                        
                          '');
                        });

                        if (promocion.modalidadCobro == 'cubierto+menu') {
                            $("#contRan"+promocion._id).append(''+
                             '<p>Cubiertos: <span style="color: #f8981d;"> '+promocion.cubiertosProm+'</span> Total: <span style="color: #149b7e;"> $'+promocion.cubiertosProm * local.rangoPrecioComision+'</span></p>'+
                            '');
                            totalComisionesLocal = totalComisionesLocal + (promocion.cubiertosProm * local.rangoPrecioComision) + totalRangos;
                        } else if (promocion.modalidadCobro == 'menu') {
                            totalComisionesLocal = totalComisionesLocal + totalRangos;
                        } else if (promocion.modalidadCobro == 'cubiertos') {
                            $("#contRan"+promocion._id).html('');
                            $("#contRan"+promocion._id).append(''+
                            '<p>Cubiertos: <span style="color: #f8981d;"> '+promocion.cubiertosProm+'</span> Total: <span style="color: #149b7e;"> $'+promocion.cubiertosProm * local.rangoPrecioComision+'</span></p>'+
                            '');
                            totalComisionesLocal = totalComisionesLocal + (promocion.cubiertosProm * local.rangoPrecioComision);
                        }
                    }
                })
             }
             $("#total"+local.idLocal).html('');
             $("#total"+local.idLocal).append('$'+totalComisionesLocal);
             $("#totComisiones"+local.idLocal).html('');
             $("#totComisiones"+local.idLocal).append('$'+totalComisionesLocal);
        })

        $("#totalReservas").append(contTotReservas);
        $("#totalCubiertos").append(contTotCubiertos);
        $("#totalReservasEspeciales").append(contTotReservasEsp);
        $("#fechaTotReservas,#fechaTotCubiertos,#fechaTotResEsp").append(fechaInicio + ' al ' + fechaFin);
    }