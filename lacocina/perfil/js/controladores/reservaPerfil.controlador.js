var espacio = ' ';
var coma = ', ';
var marker;          //variable del marcador
var coords = {};    //coordenadas obtenidas con la geolocalización
var iconBase = 'https://guiamendozagourmet.com/map/'; //direccion base del icono de marcador
var local = '';
var jwt;
var horaSeleccionada;
var idLocal;

$('#selectDia, #selectAdulto, #selectNino ').change( function () {
  $('.horas').hide();
  $('#noHorario').hide();
  if ($('#selectDia').val()) {
    idLocal = $('#idLocal').val();
    buscarHorarios();
  }
});


function getOpcionesReservaLocal(idLocal) {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
    var localData = $.ajax({
        url: server + '/api/v1/admin/locales?id=' + idLocal,
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
          $('.titulo').text(data.idNegocio.nombreNegocio + " | " + data.idNegocio.bajadaNegocio);
          $('#direccionLocal').text(data.calleLocal + espacio + data.alturaLocal);
          var inicAdult = data.minimoAdultos;
          var maxAdult = data.maximoAdultos;
          var inicMen = data.minimoMenores;
          var maxMen = data.maximoMenores;
          var s = '';
          $("#selectAdulto").html('');
          for (inicAdult = 0; inicAdult <= maxAdult; inicAdult++) { 
            if (inicAdult != 1) { s='s' } else { s = ''};
            $("#selectAdulto").append("<option value="+inicAdult+">"+inicAdult+" adulto"+ s +"</option>");
          }
          $("#selectNino").html('');
          for (inicMen; inicMen <= maxMen; inicMen++) {
            if (inicMen != 1) { s='s' } else { s = '' };
            $("#selectNino").append("<option value="+inicMen+">"+inicMen+" niño"+ s +"</option>");
          }
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      }
  });
    
    $('#target').html('obteniendo...');
    var horarios = $.ajax({
      url: server + '/api/v1/admin/reservaDias?id=' + idLocal,
      type: 'GET',
      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
      success: function (data) {
          popularOpcionesReserva(data);
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      }
  });


}

function setJWT(jwtToken) {
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
  idLocal = local;
  if (_.isNil(jwtToken) || _.isEmpty(jwtToken)) {
    mostrarModalLogin();
  } else {
    jwt = jwtToken;
    if (!_.isNil(local)) {
      getOpcionesReservaLocal($('#idLocal').val());
    } else  {
      getMisReservas();
    }
  }
 getOpcionesReservaLocal($('#idLocal').val());
});
}

function mostrarModalLogin() {
  $("#botonLogin").attr("href", 'login.php?redirect=' + encodeURIComponent(window.location.href));
  $("#mostrarmodal").modal("show");
}

function isLoggedIn() {
  if (_.isNil(jwt)) {
    return false;
  } else {
    return true;
  }
}

function buscarHorarios() {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  $('.horas').hide();
  $('#noHorario').hide();
  var data = {
    'idLocal': $('#idLocal').val(),
    'fechaReserva': $('#selectDia').val(),
    'cubiertosAdultosReservados': $('#selectAdulto').val(),
    'cubiertosMenoresReservados': $('#selectNino').val()
  };
  $.ajax({
    url: server + '/api/v1/admin/reservas',
    type: 'POST',
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      if (!data.length){
        $('#noHorario').show();
      } else {
        mostrarHoras(data);
      }
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
      $('#target').append("jqXHR: "+jqXHR);
      $('#target').append("textStatus: "+textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
    },
    data: JSON.stringify(data)
  });
}

function popularOpcionesReserva(opciones) {
    $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#selectDia');
  _.each(opciones, function (opcion, index) {
    var datosDia = '';
    // if (index == 0) datosDia += 'Hoy ' + espacio;
    // if (index == 1) datosDia += 'Mañana ' + espacio;
    datosDia += opcion.dia + espacio + opcion.fecha.substr(0, 2);

    if (!_.isNil(opcion.descuento))
      datosDia += espacio + opcion.descuento;
    var option = $('<option>').val(opcion.fecha).attr('descuento', opcion.descuento).text(datosDia);
    option.appendTo('#selectDia')
  })
}

function mostrarHoras(horas) {
  $('#selecHoras').html('');
  _.each(horas, function (hora) {
    var li = $('<li>').val(hora.valor).text(hora.key);
    $('#selecHoras').append('<li class="selechora" value="' + hora.valor + '"  onClick="seleccionarHora(\'' + hora.key + '\')"><button class="botonhorareserva">' + hora.key + '</button></li>');
  })
  $('.horas').show();
}

function seleccionarHora(hora) {
  horaSeleccionada = hora;
}

// TODO obtener horario de la reserva seleccionado
function realizarReserva() {
  if (isLoggedIn()) {
    $("#realizarReserva").modal("show");
    $("#personaReserva").html("Reserva para: " + $('#nombrePersona').val());
    $("#telPersReserva").html('Teléfono: '+ $('#telPersona').val() );
    $("#mailPersReserva").html('Mail: '+ $('#mailPersona').val() );
    $("#cantidadReserva").html(" " + $('#selectAdulto').val() + " adultos y " + $('#selectNino').val() + " niño");
    $("#horarioReserva").html(horaSeleccionada + " hs. | " + $('#selectDia').val());
    $("#observacion").html('Observación: ' + $("#observacionPersona").val());
  } else {
    mostrarModalLogin();
  }
}

function confirmarReserva() {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  var data = {
    'idLocal': idLocal,
    'fechaReserva': $('#selectDia').val(),
    'horaReserva': horaSeleccionada,
    'cubiertosAdultosReservados': $('#selectAdulto').val(),
    'cubiertosMenoresReservados': $('#selectNino').val(),
    'nombreReservaEventual': $('#nombrePersona').val(),
    'mailReservaEventual': $('#mailPersona').val(),
    'telefonoUsuarioReserva': $('#telPersona').val(),
    'medioCreacionReserva': $('input:radio[name=opMedio]:checked').val(),
    'comentarioUsuarioReserva': $("#observacionPersona").val()
  };
  $.ajax({
    url: server + '/api/v1/admin/reservaEventual',
    type: 'POST',
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {

      $("#realizarReserva").modal("hide");
      $("#reservaConfirmada").modal("show");
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
      $('#target').append("jqXHR: "+jqXHR);
      $('#target').append("textStatus: "+textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
    },
    headers: {
        Authorization: 'JWT ' + jwt
    },
    data: JSON.stringify(data)
  });
}

function getMisReservas() {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
   $.ajax({
      url: server + '/api/v1/admin/reservaUsuario',
      type: 'GET',
      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
      success: function (data) {
        renderMisReservas(data);
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      },
      headers: {
          Authorization: 'JWT ' + jwt
      }
  });
}

function renderMisReservas(reservas) {
  $('.container.mis-reservas').html('');
  $('.container.mis-reservas').append('<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Mis reservas</h2></div></div>');

  _.each(reservas, function(reserva) {
    $('.container.mis-reservas').append(  '' +
      '<div class="row" style="padding-top: 5%;color: #252525;border-bottom: 1px solid #e3e3e3;padding-bottom: 2%;">' +
      ' <div class="col-md-3"><img class="img-responsive" src="' + reserva.idLocal.idNegocio.urlIconoNegocio + '">' +
      ' </div>' +
      '  <div class="col-md-6"> <p><span style="font-size: 1.5em;">' +
      '   <strong>' + reserva.idLocal.idNegocio.nombreNegocio + '</strong> | ' + reserva.idLocal.idNegocio.bajadaNegocio + '</span></p> ' +
      '   <i class="fa fa-map-marker" aria-hidden="true"></i><span class="polo">' + reserva.idLocal.calleLocal + '</span> |  <i class="fa fa-cutlery" aria-hidden="true"></i>' +
      '   <span class="tiponegocio">' + reserva.idLocal.idTipoCocinaPrincipal.descripcionTipoCocina + '</span><br>  ' +
      '   <p style="letter-spacing: 1px;">' +
      '     <strong>' + reserva.idLocal.idNivelPrecio.label + '</strong><span style="color: #cbcbcb">$$</span>' +
      '   </p>  ' +
      '   <p>' +
      '     <span class="descripcion">' + reserva.idLocal.idNegocio.descripcionNegocio +
      '     </span>' +
      '   </p>  ' +
      '  </div>  ' +
      '  <div class="col-md-3">    ' +
      '    <a href="#"><h2 class="etiquetadescuento">Ver reserva</h2></a>' +
      '  </div>' +
      '  </div>')
  });


}

function volverReservas() {
  var url = "reservas.php?id="+ $('#idLocal').val() +"";
  $(location).attr('href',url);
}