    
    var idLocal = '';
    var idContactoLocal = '';
    var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos", "Feriados"];

    function iniciar(idNegocio, local) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
             if (local != '') {
              idLocal = local;
             }
             listadoLocales(idNegocio, idLocal);
             reservasHoy();
             promocionesActivas(idLocal);
             horariosAtencion(idLocal);
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
         $('#listaPromociones').append(''+


         '');
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
            if (horarioManana || horarioTarde) {

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
