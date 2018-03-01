iniciar();

function iniciar(){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        listadoPromocionesLocal();
        listadoPromocionesDisponibles(); //actualizar cuando fede haga la consulta
        dibujarHorariosReservas();
    });
  }

function listadoPromocionesLocal(){

}

function dibujarHorariosReservas(){
    if (_.isUndefined(server)) {
        $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
        });
      }
      var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos", "Feriados"];
      var idLocal = $("#idLocal").val();
      $('#target').html('obteniendo...');
      $.ajax({
        url: server + '/api/v1/admin/locales?id=' + idLocal + "",
        type: 'GET',
    
        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
          var horariosAtencion = data.idHorarioAtencion;
          var cubiertos = data.idCubiertosDia;
          _.each(dias, function (diaSemana) {
            var horariosDia = _.filter(horariosAtencion, {'diaSemanaHorarioAtencion': diaSemana});
            var horarioManana = _.find(horariosDia, {'turnoHorarioAtencion': 'manana'});
            var horarioTarde = _.find(horariosDia, {'turnoHorarioAtencion': 'tarde'});
            var cubiertosDia = _.filter(cubiertos, {'diaSemanaCubiertoDia': diaSemana});
            var cubiertosManana = _.find(cubiertosDia, {'turnoCubiertoDia': 'manana'});
            var cubiertosTarde = _.find(cubiertosDia, {'turnoCubiertoDia': 'tarde'});
    
            if ( (horarioManana  && cubiertosManana) || (horarioTarde && cubiertosTarde) ) {
              aplicarHorarios(diaSemana, true);
              if (horarioManana && cubiertosManana) {
                $("#Hdesde" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(horarioManana.horaInicioHorarioAtencion);
                $("#Hhasta" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(horarioManana.horaFinHorarioAtencion);
                $("#Cubiertos" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(cubiertosManana.cantidadCubiertoDia);
                $("#Duracion" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(cubiertosManana.duracionReserva);
              } else {
                $('#' + diaSemana + ' td:nth-child(2)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
              }
              if (horarioTarde  && cubiertosTarde) {
                $("#Hdesde" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").html(horarioTarde.horaInicioHorarioAtencion);
                $("#Hhasta" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").html(horarioTarde.horaFinHorarioAtencion);
                $("#Cubiertos" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").html(cubiertosTarde.cantidadCubiertoDia);
                $("#Duracion" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").html(cubiertosTarde.duracionReserva);
              } else {
                $('#' + diaSemana + ' td:nth-child(3)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
              }
            }
    
          });
          $('#loading').hide();
          $('.datos-cubiertos').removeClass('hidden');
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $('#target').append("jqXHR: " + jqXHR);
          $('#target').append("textStatus: " + textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
        }
      });
}

function aplicarHorarios(dia, dibujar){
    if($('#horaInicioManana').val() != $('#horaFinManana').val() || dibujar){
      $('#' + dia + ' td:nth-child(2)').removeAttr('style').html('' +
        '<div class="iconoslista">'+
        ' <div class="horariolista"><span id="Hdesde' + dia + 'Manana" >' + $('#horaInicioManana').val() + '</span> - <span id="Hhasta' + dia + 'Manana" >' + $('#horaFinManana').val() + '</span></div>' +
        ' <div class="horariocubiertos"><i class="fa fa-cutlery" aria-hidden="true"></i><span id="Cubiertos' + dia + 'Manana" >' + $('#cantCubiertosManana').val() + '</span></div>' +
        ' <div class="horarioduracionreserva"><i class="fa fa-clock-o" aria-hidden="true"></i><span id="Duracion' + dia + 'Manana" >' + $('#duracionReservaManana').val() + '</span></div>' +
        '</div>');
    } else {
      $('#' + dia + ' td:nth-child(2)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
    }
  
    if($('#horaInicioTarde').val() != $('#horaFinTarde').val() || dibujar){
      $('#' + dia + ' td:nth-child(3)').removeAttr('style').html('' +
        '<div class="iconoslista">'+
        ' <div class="horariolista"><span id="Hdesde' + dia + 'Tarde" >' + $('#horaInicioTarde').val() + '</span> - <span id="Hhasta' + dia + 'Tarde" >' + $('#horaFinTarde').val()  + '</span></div>' +
        ' <div class="horariocubiertos"><i class="fa fa-cutlery" aria-hidden="true"></i><span id="Cubiertos' + dia + 'Tarde" >' + $('#cantCubiertosTarde').val() + '</span></div>' +
        ' <div class="horarioduracionreserva"><i class="fa fa-clock-o" aria-hidden="true"></i><span id="Duracion' + dia + 'Tarde" >' + $('#duracionReservaTarde').val() + '</span></div>' +
        '</div>');
    }else {
      $('#' + dia + ' td:nth-child(3)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
    }
  }

function listadoPromocionesDisponibles(){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {       
      $.ajax({
          url: server + '/api/v1/admin/promocionesActivas',
          type: 'GET',
          dataType: "json",
          crossDomain: true,
          contentType:"application/json",
          success: function (data) {
              promociones = data;
              $('#selectPromociones').html('');
              $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#selectPromociones');       
              _.each(promociones, function(promocion){
                $('<option>').val(promocion._id).text(promocion.nombrePromocion).appendTo('#selectPromociones');
              });
              $('#loading').hide();
          },
          error:function(jqXHR,textStatus,errorThrown)
          {           
            $('#target').append("jqXHR: "+jqXHR);
            $('#target').append("textStatus: "+textStatus);
            $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    });
}

function cargarFormCrear(){
    $("#formPromocion").show();
    $("#listaPromociones").hide();
}

function cancelar(){
    $("#formPromocion").hide();
    limpiarForm();
    $("#listaPromociones").show();
}

function limpiarForm(){

}

function volverPanelLocal(){
    if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
    }
      var idLocal = $("#idLocal").val();
        $('#target').html('obteniendo...');
        $.ajax({
          url: server + '/api/v1/admin/locales?id='+ idLocal +"",
                type: 'GET',  
                dataType: "json",
                crossDomain: true,
                contentType:"application/json",
                success: function (data) {
                 var local = data;
                 var idNegocio = local.idNegocio._id;
                 var url = "../lacocina/panel-locales.php?idLocal="+ idLocal+"&idNegocio="+idNegocio+"";
                 $(location).attr('href',url);
              },
              error:function(jqXHR,textStatus,errorThrown)
              {
                  $('#target').append("jqXHR: "+jqXHR);
                  $('#target').append("textStatus: "+textStatus);
                  $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
              },
        });
}