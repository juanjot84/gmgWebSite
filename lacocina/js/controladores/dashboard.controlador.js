    
    var idLocal = '';
    var idContactoLocal = '';

    function iniciar(idNegocio, local) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
             if (local != '') {
              idLocal = local;
             }
             listadoLocales(idNegocio, idLocal);
             reservasHoy();
        });     
    }

    function listadoLocales(idNegocio, local) {
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

    $("#formPromLocal").click(function() {
      var url = "editar-promociones.php?idLocal="+idLocal+"";
      $(location).attr('href',url);
    });

    $("#formHorarioAtencion").click(function() {
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
          error:function(jqXHR,textStatus,errorThrown)
          {
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
            var unaSola = '';
            if (cont == 1) {
              unaSola = 'reserva';
            } else {
              unaSola = 'reservas';
            }
            $("#cantidadReservas").append('Hay '+cont+' '+unaSola+' para hoy <span class="ver"><a id="formReservas2" href="#">  - Ver todas </a></span>');

        });
      });
    }
