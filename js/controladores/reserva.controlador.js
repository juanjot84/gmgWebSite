var espacio = ' ';
var porcentaje = '%';
var descuento = '- Descuento ';
var coma = ', ';
var marker;          //variable del marcador
var coords = {};    //coordenadas obtenidas con la geolocalización
var iconBase = 'http://guiamendozagourmet.com/map/'; //direccion base del icono de marcador
var local = '';
var jwt;
var horaSeleccionada;
var idLocal;

$('#selectDia, #selectAdulto, #selectNino ').change(function () {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $('.horas').hide();
  $('#noHorario').hide();
  if ($('#selectDia').val())
    buscarHorarios()
});

//Funcion principal
//TODO: buscar datos del local
function getOpcionesReservaLocal(idLocal) {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  var localData = $.ajax({
    url: server + '/api/v1/admin/locales?id=' + idLocal,
    type: 'GET',
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      $('.titulo').text(data.idNegocio.nombreNegocio + " | " + data.idNegocio.bajadaNegocio);
      $('#direccionLocal').text(data.calleLocal + espacio + data.alturaLocal + coma + data.idLocalidad.nombreLocalidad);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    }
  });
  // $('.container.ficha').html('');
  $('#target').html('obteniendo...');
  var horarios = $.ajax({
    url: server + '/api/v1/admin/reservaDias?id=' + idLocal,
    type: 'GET',
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      popularOpcionesReserva(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    }
  });


}

function setJWT(jwtToken, local, idReserva) {
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    idLocal = local;
    if (_.isNil(jwtToken) || _.isEmpty(jwtToken)) {
      mostrarModalLogin();
    } else {
      jwt = jwtToken;
      if (!_.isNil(local)) {
        getOpcionesReservaLocal(idLocal);
      } else {
        getMisReservas();
        if (!_.isNil(idReserva) && !_.isEmpty(idReserva)) {
          mostrarDetalleReserva(idReserva);
        }
      }
    }
  });
}

function mostrarModalLogin() {
  $("#botonLogin").attr("href", 'login.php?redirect=' + encodeURIComponent(window.location.href));
  $("#mostrarmodal").modal("show");
}

function isLoggedIn(){
  if (_.isNil(jwt)) {
    return false;
  } else {
    return true;
  }
}

function buscarHorarios() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $('.horas').hide();
  $('#noHorario').hide();
  var data = {
    'idLocal': idLocal,
    'fechaReserva': $('#selectDia').val(),
    'cubiertosAdultosReservados': $('#selectAdulto').val(),
    'cubiertosMenoresReservados': $('#selectNino').val()
  };
  $.ajax({
    url: server + '/api/v1/admin/reservas',
    type: 'POST',
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      if (data.length && Array.isArray(data)) {
        $('#sinHorarios').html('');
        mostrarHoras(data);
      } else {
        $('#sinHorarios').html('');
        $('#noHorario').show();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#sinHorarios').html('');
      $('#sinHorarios').append('<p>No hay disponibilidad de reserva para el día seleccionado</p>');
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    },
    data: JSON.stringify(data)
  });
}

function popularOpcionesReserva(opciones) {
  $('<option>').attr('disabled', 'disabled').attr('selected', 'selected').attr('value', 'value').text('').appendTo('#selectDia');
  _.each(opciones, function (opcion, index) {
    var datosDia = '';
    // if (index == 0) datosDia += 'Hoy ' + espacio;
    // if (index == 1) datosDia += 'Mañana ' + espacio;
    datosDia += opcion.dia + espacio + opcion.fecha.substr(0, 5);

    if (!_.isNil(opcion.descuento) && !_.isEmpty(opcion.descuento))
      datosDia += espacio + descuento + opcion.descuento + porcentaje;
    var option = $('<option>').val(opcion.fecha).attr('descuento', opcion.descuento).text(datosDia);
    option.appendTo('#selectDia')
  })
}

function mostrarHoras(horas) {
  $('#selecHoras').html('');
  _.each(horas, function (hora) {
    var li = $('<li>').val(hora.valor).text(hora.key);
    $('#selecHoras').append('<li class="selechora" value="' + hora.valor + '"  onClick="seleccionarHora(\'' + hora.key + '\')" ><button class="botonhorareserva">' + hora.key + '</button></li>');
  })
  $('.horas').show();
}

function seleccionarHora(hora) {
  limpiar('horarioReserva');
  horaSeleccionada = hora;
}

// TODO obtener horario de la reserva seleccionado
function realizarReserva() {

  if (isLoggedIn()) {

    //if (telefonoReserva.length >6 && /^(\+{1})?([0-9])*$/.test(telefonoReserva)) {
    if (!_.isNil(horaSeleccionada)) {
      if ($('#selectDia').find(":selected").attr('descuento') && $('#selectDia').find(":selected").attr('descuento') != ''){
        $('#noDescuento').hide();
        $('#conDescuento').show();
        $('#porcentajeDescuento').html($('#selectDia').find(":selected").attr('descuento'));
      } else {
        $('#conDescuento').hide();
        $('#noDescuento').show();
      }
      $("#realizarReserva").modal("show");
      $("#cantidadReserva").html("Reserva para " + $('#selectAdulto').val() + " adultos y " + $('#selectNino').val() + " niño");
      $("#horarioReserva").html(horaSeleccionada + " hs. | " + $('#selectDia').val());

    } else {
      $("#selecHoras").parent().after('<span id="horarioReservaAlert" style="color:red"> Por favor seleccione un horario</span>');
    }


  } else {
    mostrarModalLogin();
  }
}

function confirmarReserva() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  limpiar('telefonoReserva');
  var telefonoReserva = $("#telefonoReserva").val();
  if (telefonoReserva.length > 6 && /^(\+{1})?([0-9])*$/.test(telefonoReserva)) {
    var data = {
      'idLocal': idLocal,
      'fechaReserva': $('#selectDia').val(),
      'horaReserva': horaSeleccionada,
      'cubiertosAdultosReservados': $('#selectAdulto').val(),
      'cubiertosMenoresReservados': $('#selectNino').val(),
      'telefonoUsuarioReserva': $('#telefonoReserva').val()
    };
    $.ajax({
      url: server + '/api/v1/admin/reserva',
      type: 'POST',
      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {

        $("#realizarReserva").modal("hide");
        $("#reservaConfirmada").modal("show");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $('#target').append("jqXHR: " + jqXHR);
        $('#target').append("textStatus: " + textStatus);
        $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
      },
      headers: {
        Authorization: 'JWT ' + jwt
      },
      data: JSON.stringify(data)
    });
  } else {
    $("#telefonoReserva").parent().after('<span id="telefonoReservaAlert" style="color:red"> Por favor ingrese un teléfono válido sin utilizar - ni ()</span>');
    $("#telefonoReserva").addClass('alert-danger');
  }

}

function getMisReservas() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $.ajax({
    url: server + '/api/v1/admin/reservaUsuario',
    type: 'GET',
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      renderMisReservas(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    },
    headers: {
      Authorization: 'JWT ' + jwt
    }
  });
}

function renderMisReservas(reservas) {
  $('.container.mis-reservas').html('');
  $('.container.mis-reservas').append('<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Mis reservas</h2></div></div>');

  _.each(reservas, function (reserva) {
    $('.container.mis-reservas').append('' +
      '<div class="row" style="padding-top: 5%;color: #252525;border-bottom: 1px solid #e3e3e3;padding-bottom: 2%;">' +
      ' <div class="col-md-3"><img class="img-responsive" src="' + reserva.idLocal.fotoPrincipalLocal + '">' +
      ' </div>' +
      '  <div class="col-md-6"> <p><span style="font-size: 1.5em;">' +
      '   <strong>' + reserva.idLocal.idNegocio.nombreNegocio + '</strong> | ' + reserva.idLocal.idNegocio.bajadaNegocio + '</span></p> ' +
      '   <i class="fa fa-map-marker iconoficha" aria-hidden="true"></i><span class="polo">' + reserva.idLocal.calleLocal + '</span> |  <i class="fa fa-cutlery iconoficha" aria-hidden="true"></i>' +
      '   <span class="tiponegocio">' + reserva.idLocal.idTipoCocinaPrincipal.descripcionTipoCocina + '</span><br>  ' +
      '   <p style="letter-spacing: 1px;">' +
      '     <strong>' + reserva.idLocal.idNivelPrecio.label + '</strong><span style="color: #cbcbcb">$$</span>' +
      '   </p>  ' +
      '   <p>' +
      '     <span class="descripcion">' + reserva.idLocal.idNegocio.descripcionNegocio.substr(0, 147) +
      '     ...</span>' +
      '   </p>  ' +
      '  </div>  ' +
      '  <div class="col-md-3" style="display: grid;">' +
      '   <a href="#" onclick="mostrarDetalleReserva(\'' +  reserva._id + '\')"><h2 class="verreserva">Ver reserva</h2></a>' +
          '<a href="#" onclick="cancelarReserva(\'' +  reserva._id + '\')" class="btn btn-danger cancelarreservafront" id="botonCancelar" style="max-width: 60%; margin: 5% auto;"><i class="fa fa-times"></i> Cancelar Reserva</a>' +
      '  </div>' +
      '  </div>')
  });
}

function mostrarDetalleReserva(idReserva){
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $.ajax({
    url: server + '/api/v1/admin/reservaUsuario?id=' + idReserva,
    type: 'GET',
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      reserva = data[0];
      $("#detallesReserva").modal("show");
      $("#botonCancelar").attr("onclick", "cancelarReserva('" + idReserva +"')");
      $("#detalleReservaBotonCancelar").attr("onclick", "cancelarReserva('" + idReserva +"')");
      $("#cantidadReserva").html('').html("Reserva para " + reserva.cubiertosAdultosReservados + " adultos y "  + reserva.cubiertosMenoresReservados +  " niño/s");
      $("#horarioReserva").html('').html(reserva.horaReserva + " hs. | " + reserva.fechaReserva);
      $("#direccionLocal").html('').html(reserva.idLocal.calleLocal + " " + reserva.idLocal.alturaLocal);
      document.getElementById("h3NombreNegocio").innerHTML = 'Reserva en "' + reserva.idLocal.idNegocio.nombreNegocio+'"';
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    },
    headers: {
      Authorization: 'JWT ' + jwt
    }
  });

}
function cancelarReserva(idReserva){
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $.ajax({
    url: server + '/api/v1/admin/reservaCancelar?id=' + idReserva,
    type: 'POST',
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      reserva = data[0];
      $("#reservaCancelada").modal("show");

    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    },
    headers: {
      Authorization: 'JWT ' + jwt
    }
  });
}

function cerrarModales() {
  $("#reservaCancelada").modal("hide");
  $("#detallesReserva").modal("hide");
  getMisReservas();
}

function limpiar(campo) {
  $("#" + campo + "Alert").hide();
  $("#" + campo).removeClass('alert-danger');
}
