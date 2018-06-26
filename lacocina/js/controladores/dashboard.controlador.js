    var jwt;
    var idLocal = '';
    var idContactoLocal = '';
    var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos", "Feriados"];
    var dia1Guia = 0; var dia2Guia = 0; var dia3Guia = 0; var dia4Guia = 0; var dia5Guia = 0; var dia6Guia = 0; var dia7Guia = 0;
    var dia1Manual = 0; var dia2Manual = 0; var dia3Manual = 0; var dia4Manual = 0; var dia5Manual = 0; var dia6Manual = 0; var dia7Manual = 0;
    var fechaDia1 = ''; var fechaDia2 = ''; var fechaDia1 = ''; var fechaDia3 = ''; var fechaDia4 = ''; var fechaDia5 = ''; var fechaDia6 = ''; var fechaDia7 = ''; 

    function setJWT() {
      var jwtToken = $("#jwt").val();
      $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
        if (_.isNil(jwtToken) || _.isEmpty(jwtToken)) {

        } else {
          jwt = jwtToken;
        }
      });
    }

    function iniciar(idNegocio, local) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
             if (local != '') {
              idLocal = local;
             }
             setJWT();
             listadoLocales(idNegocio, idLocal);
             reservasHoy();
             promocionesActivas(idLocal);
             horariosAtencion(idLocal);
             listadoProximas();
             buscarCalificaciones(idLocal);
        });     
    }

    function listadoLocales(idNegocio, local) {
          idLocal = local;
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
              var poloGastronomico = '';
              var calleLocal = '';
              var alturaLocal = '';
                 if( local == '') {
                   idLocal = data[0]._id;
                   poloGastronomico = data[0].poloGastronomico[0].nombrePoloGastronomico;
                   calleLocal = data[0].calleLocal;
                   alturaLocal = data[0].alturaLocal;
                   idContactoLocal = data[0].idContacto;
                   verLocal(idLocal);
                 } else {
                   var localSeleccionado = _.find(data, {'_id': local});
                   idLocal = local;
                   poloGastronomico = localSeleccionado.poloGastronomico[0].nombrePoloGastronomico;
                   calleLocal = localSeleccionado.calleLocal;
                   alturaLocal = localSeleccionado.alturaLocal;
                   idContactoLocal = localSeleccionado.idContacto;
                 }
                
                $('#navWeb').html('');
                $('#navCel').html('');
                $('#navWeb').append(''+
                    '<a class="btn btn-secondary dropdown-toggle text-center mx-auto d-block " href="#" role="button" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">'+
                      poloGastronomico + ' - ' +
                      calleLocal + ' ( '+ alturaLocal + ' )' +
                    '</a>'+
                    '<div id="opcionNavWeb" class="dropdown-menu" aria-labelledby="dropdownMenuLink">'+
                    '</div>'+
                '');
                $('#navCel').append(''+
                    '<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"  aria-haspopup="true" aria-expanded="false">'+
                      poloGastronomico + ' - ' +
                      calleLocal + ' ( '+ alturaLocal + ' )' +
                    '</a>'+
                    '<div id="opcionNavCel" class="dropdown-menu" aria-labelledby="dropdownMenuLink">'+
                    '</div>'+
                '');
                _.each(data, function(local){
                    $('#opcionNavWeb').append(''+
                       '<a onClick="verLocal(\''+local._id+'\')" class="dropdown-item" href="#">'+
                            local.poloGastronomico[0].nombrePoloGastronomico + ' - ' +
                            local.calleLocal + ' ( '+ local.alturaLocal + ' )' +
                       '</a>'+
                    '');
                    $('#opcionNavCel').append(''+
                    '<a onClick="verLocal(\''+local._id+'\')" class="dropdown-item" href="#">'+
                         local.poloGastronomico[0].nombrePoloGastronomico + ' - ' +
                         local.calleLocal + ' ( '+ local.alturaLocal + ' )' +
                    '</a>'+
                 '');
                });
                $('.dropdown-toggle').dropdown();
            },
            error: function (jqXHR, textStatus, errorThrown) {
              return false;
            },
            data: consulta
          });  
    }

    function verLocal(idLocal) {
      actualizarSession(idLocal);
      var idNegocio = $("#idNegocio").val();
      listadoLocales(idNegocio, idLocal);
      reservasHoy();
      promocionesActivas(idLocal);
      horariosAtencion(idLocal);
      listadoProximas();
      buscarCalificaciones(idLocal);
    }

    $("#formNegocio, #formNegocio2").click(function() {
      var negocioEditar = $("#idNegocio").val();
      var url = "datos-generales-negocio.php?idNegocio="+ negocioEditar+"";
      $(location).attr('href',url);
    });

    $("#formUsuario, #formUsuario2").click(function() {
      var negocioEditar = $("#idNegocio").val();
      var url = "editar-usuario-negocio.php?idNegocio="+ negocioEditar+"";
      $(location).attr('href',url);
    });

    $("#formDatosContacto, #formDatosContacto2").click(function() {
      var url = "editar-contacto.php?idLocal="+idLocal+"&idContacto="+idContactoLocal+"";
      $(location).attr('href',url);
    });

    $("#formReservas, #formReservas2").click(function() {
      var url = "perfil/reservas.php";
      $(location).attr('href',url);
    });

    $("#formConfigReservas").click(function() {
      var url = "editar-cubiertos.php?idLocal="+idLocal+"";
      $(location).attr('href',url);
    });

    $("#formPromLocal, #formPromLocal2").click(function() {
      var url = "editar-promociones.php?idLocal="+idLocal+"";
      $(location).attr('href',url);
    });

    $("#formHorarioAtencion, #formHorarioAtencion2").click(function() {
      var url = "editar-horarios.php?idLocal="+idLocal+"";
      $(location).attr('href',url);
    });

    $("#formCalificaciones").click(function() {
      var url = "perfil/calificaciones.php?idLocal="+idLocal+"";
      $(location).attr('href',url);
    });
  
    $("#formImagenes").click(function() {
      var url = "subir-imagen.php?idLocal="+idLocal+"";
      $(location).attr('href',url);
    });

    $("#formRemarketing").click(function() {
      var url = "perfil/remarketing.php";
      $(location).attr('href',url);
    });

    function reservasHoy() {
      $("#cantidadReservas").html('');
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }
        var idNegocio = $('#idNegocio').val();
        $('.container.negocios').html('');
        $('#loading').html('<img class="img-responsive" src="imgs/loading.gif">');
        $.ajax({
            url: server + '/api/v1/admin/ReservasHoyNegocio?id='+ idNegocio +"",
            type: 'GET',
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                 renderReservasHoy(data);
          },
          error:function(jqXHR,textStatus,errorThrown) {
              var data = {};
              renderReservasHoy(data);
              $('#loading').hide();
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          }
      });
    }

    function renderReservasHoy(reservas) {
      var cont = 0;
      $("#listaReservasHoy").html('');
      $("#cantidadReservas").html('');
      _.each(reservas, function(local){
        _.each(local, function(reserva){
            $("#listaReservasHoy").append(''+
              '<tr>'+
                '<th scope="row">'+reserva.nombreUsuarioReserva+'</th>'+
                '<td>'+reserva.cubiertosAdultos+' Adultos - '+reserva.cubiertosMenores+' Niños</td>'+
                '<td>'+reserva.horaSola+'</td>'+
              '</tr>'+
            '');
            cont++;
        });
      });

      var unaSola = '';
      if (cont == 1) {
        unaSola = 'reserva';
      } else {
        unaSola = 'reservas';
      }
      $("#cantidadReservas").append(''+cont+' '+unaSola+'');
    }

    function promocionesActivas(Local) {
      idLocal = Local;
      $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {       
        $.ajax({
            url: server + '/api/v1/admin/promocionesLocal?id='+Local+'',
            type: 'GET',
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
             renderPromociones(data);
                $('#loading').hide();
            },
            error:function(jqXHR,textStatus,errorThrown) {
              var data = {};
              renderPromociones(data);     
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
            },
        });
      });
    }

    function renderPromociones(promociones) {
      var contProm = 0;
      $("#cantidadPromociones").html('');
      $('#listaPromociones').html('');
      _.each(promociones, function(promocion){
        var nombreCorto = '';
        var iconoPromocion = '';
        if (promocion.iconoPromocion != '' || promocion.iconoPromocion != undefined ) {
          iconoPromocion ='<img src="'+ promocion.iconoPromocion + '" class="img-fluid" alt="">';
        }
        if (promocion.nombreCortoPromocion != '' || promocion.nombreCortoPromocion != undefined) {
          nombreCorto = promocion.nombreCortoPromocion;
        }
         $('#listaPromociones').append(''+
            '<div class="row promo">'+                    
                '<div id="colIzquierdaProm'+contProm+'" class="col-md-4">'+
                    iconoPromocion +
                '</div>'+
                '<div id="colDerechaProm'+contProm+'" class="col-md-6">'+
                    '<h5>'+nombreCorto+'</h5>'+
                    '<h6> Del '+promocion.duracionDesdePromocion.substr(0,5)+' al '+promocion.duracionHastaPromocion.substr(0,5)+'</h6>'+
                '</div>'+
            '</div>'+
         '');
         $("#colIzquierdaProm"+contProm).css('background-color', promocion.colorPromocion);
         $("#colDerechaProm"+contProm).css('background-color', promocion.colorSecundarioPromocion);
         contProm++;
       });

       var unaSolaProm = '';
       if (contProm == 1) {
         unaSolaProm = 'promociones';
       } else {
         unaSolaProm = 'promociones';
       }
       $("#cantidadPromociones").append( ''+contProm+' '+unaSolaProm+'');
    }

    function horariosAtencion(Local) {
      idLocal = Local;
      if (_.isUndefined(server)) {
        $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
        });
      }
      $('#target').html('obteniendo...');
      $.ajax({
        url: server + '/api/v1/admin/locales?id=' + Local + "",
        type: 'GET',
    
        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
          var horariosAtencion = data.idHorarioApertura;
          _.each(dias, function (diaSemana) {
            var horariosDia = _.filter(horariosAtencion, {'diaSemanaHorarioApertura': diaSemana});
            var horarioManana = _.find(horariosDia, {'turnoHorarioApertura': 'manana'});
            var horarioTarde = _.find(horariosDia, {'turnoHorarioApertura': 'tarde'});
            if (horarioManana || horarioTarde || horarioManana === undefined || horarioTarde === undefined) {

              if ( horarioManana === undefined || horarioManana.horaInicioHorarioApertura == horarioManana.horaFinHorarioApertura) {
                $('#' + diaSemana + ' td:nth-child(2)').addClass('cerrado').html('Cerrado');
              } else {
                $('#' + diaSemana + ' td:nth-child(2)').html('<span id="Hdesde' + diaSemana + 'Manana" ></span> a <span id="Hhasta' + diaSemana + 'Manana" ></span>' );
                $("#Hdesde" + horarioManana.diaSemanaHorarioApertura + "Manana").html(horarioManana.horaInicioHorarioApertura);
                $("#Hhasta" + horarioManana.diaSemanaHorarioApertura + "Manana").html(horarioManana.horaFinHorarioApertura);
              } 
              if (horarioTarde === undefined || horarioTarde.horaInicioHorarioApertura == horarioTarde.horaFinHorarioApertura) {
                $('#' + diaSemana + ' td:nth-child(3)').addClass('cerrado').html('Cerrado');
              } else {
                $('#' + diaSemana + ' td:nth-child(3)').html('<span id="Hdesde' + diaSemana + 'Tarde" ></span> a <span id="Hhasta' + diaSemana + 'Tarde" ></span>');
                $("#Hdesde" + horarioTarde.diaSemanaHorarioApertura + "Tarde").html(horarioTarde.horaInicioHorarioApertura);
                $("#Hhasta" + horarioTarde.diaSemanaHorarioApertura + "Tarde").html(horarioTarde.horaFinHorarioApertura);
              }
            }
          });
          $('#loading').hide();
          $('.datos-horarios').removeClass('hidden');
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $('#target').append("jqXHR: " + jqXHR);
          $('#target').append("textStatus: " + textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
        }
      });
    }

    function listadoProximas(){
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }
        var idNegocio = $('#idNegocio').val();
        $('.container.negocios').html('');
        $('#loading').html('<img class="img-responsive" src="imgs/loading.gif">');
        $.ajax({
            url: server + '/api/v1/admin/reservasPendienteNegocio?id='+ idNegocio +"",
            type: 'GET',
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
              calcularReservas(data);
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          }
      });
    }

    function calcularReservas(reservasLocal) {
      dia1Guia = 0; dia2Guia = 0; dia3Guia = 0; dia4Guia = 0; dia5Guia = 0; dia6Guia = 0; dia7Guia = 0;
      dia1Manual = 0; dia2Manual = 0; dia3Manual = 0; dia4Manual = 0; dia5Manual = 0; dia6Manual = 0; dia7Manual = 0; 
      var f = new Date();
      fechaDia1 = f.getDate() +1 + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
      fechaDia2 = f.getDate() +2 + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
      fechaDia3 = f.getDate() +3 + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
      fechaDia4 = f.getDate() +4 + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
      fechaDia5 = f.getDate() +5 + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
      fechaDia6 = f.getDate() +6 + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
      fechaDia7 = f.getDate() +7 + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

      _.each(reservasLocal, function(local,index) {
        if (index == idLocal) {
            _.each(local, function(reserva) {
              if (fechaDia1.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva == 'gmg') {
                dia1Guia++;
              } else if (fechaDia1.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva != 'gmg') {
                dia1Manual++;
              }
              if (fechaDia2.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva == 'gmg') {
                dia2Guia++;
              } else if (fechaDia2.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva != 'gmg') {
                dia2Manual++;
              }
              if (fechaDia3.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva == 'gmg') {
                dia3Guia++;
              } else if (fechaDia3.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva != 'gmg') {
                dia3Manual++;
              }
              if (fechaDia4.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva == 'gmg') {
                dia4Guia++;
              } else if (fechaDia4.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva != 'gmg') {
                dia4Manual++;
              }
              if (fechaDia5.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva == 'gmg') {
                dia5Guia++;
              } else if (fechaDia5.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva != 'gmg') {
                dia5Manual++;
              }
              if (fechaDia6.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva == 'gmg') {
                dia6Guia++;
              } else if (fechaDia6.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva != 'gmg') {
                dia6Manual++;
              }
              if (fechaDia7.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva == 'gmg') {
                dia7Guia++;
              } else if (fechaDia7.substr(0,2) == reserva.fechaReserva.substr(0,2) && reserva.medioReserva != 'gmg') {
                dia7Manual++;
              }
            });
        }
      });
      google.charts.load("current", {packages:['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawChartProximasReservas);
    }

    function drawChartProximasReservas() {

      var data = google.visualization.arrayToDataTable([
        ['Proximos dias','Reservas de la guia', 'Reservas manuales',{ role: 'annotation' } ],
        [fechaDia1, dia1Guia, dia1Manual, ''],
        [fechaDia2, dia2Guia, dia2Manual, ''],
        [fechaDia3, dia3Guia, dia3Manual, ''],
        [fechaDia4, dia4Guia, dia4Manual, ''],
        [fechaDia5, dia5Guia, dia5Manual, ''],
        [fechaDia6, dia6Guia, dia6Manual, ''],
        [fechaDia7, dia7Guia, dia7Manual, '']
      ]); 

      var options = {
        isStacked: true,
        bar: {groupWidth: '95%' },
        colors:['#43af98','#7fc7b9'],
        legend: {position: 'top', maxLines: 3},
        hAxis: {minValue: 0}
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chartProximasReservas'));
      chart.draw(data, options);
     }

     function buscarCalificaciones(idLocal) {
      if (_.isUndefined(server)) {
        $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
        });
      }
      $.ajax({
        url: server + '/api/v1/admin/evaluacionesLocal?id=' + idLocal,
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
          if (_.isEmpty(data)){
          } else {
            renderCalificaciones(data)
          }
    
        },
        error: function (jqXHR, textStatus, errorThrown) {

        },
        headers: {
          Authorization: 'gmgAuth ' + jwt
        }
      });
    }

    function renderCalificaciones(calificaciones) {

    }