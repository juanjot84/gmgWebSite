var espacio = ' ';
var coma = ', ';
var marker;          //variable del marcador
var coords = {};    //coordenadas obtenidas con la geolocalización
var iconBase = 'http://guiamendozagourmet.com/map/'; //direccion base del icono de marcador
var local = '';
var jwt;

$('#selectDia, #selectAdulto, #selectNino ').change( function (){
  $('.horas').hide();
  $('#noHorario').hide();
  if ($('#selectDia').val())
    buscarHorarios()
});

//Funcion principal
//TODO: buscar datos del local
function getOpcionesReservaLocal(idLocal) {
    local= idLocal

    var localData = $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/locales?id=' + idLocal,
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
          $('.titulo').text(data.idNegocio.nombreNegocio + " | " + data.idNegocio.bajadaNegocio);
          $('#direccionLocal').text(data.calleLocal + espacio + data.alturaLocal + coma + data.idLocalidad.nombreLocalidad);
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      }
  });
    // $('.container.ficha').html('');
    $('#target').html('obteniendo...');
    var horarios = $.ajax({
      url: 'http://aqueous-woodland-46461.herokuapp.com/api/v1/admin/reservaDias?id=' + idLocal,
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

function setJWT(jwtToken){
  if (!_.isNil(jwtToken))
    jwt = jwtToken;
};

function checkLogin(){
  if (!jwt) {
    $("#botonLogin").attr("href", 'login.php?redirect=' + encodeURIComponent(window.location.href));
    $("#mostrarmodal").modal("show");
  } else {
    realizarReserva()
  }
};

function buscarHorarios() {
  $('.horas').hide();
  $('#noHorario').hide();
  var data = {
    'idLocal': local,
    'fechaReserva': $('#selectDia').val(),
    'cubiertosAdultosReservados': $('#selectAdulto').val(),
    'cubiertosMenoresReservados': $('#selectNino').val(),
  };
  $.ajax({
    url: 'http://aqueous-woodland-46461.herokuapp.com/api/v1/admin/reservas',
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
  _.each(opciones, function (opcion, index){
    var datosDia = '';
    // if (index == 0) datosDia += 'Hoy ' + espacio;
    // if (index == 1) datosDia += 'Mañana ' + espacio;
    datosDia += opcion.dia + espacio + opcion.fecha.substr(0, 2);

    if (!_.isNil(opcion.descuento))
      datosDia += espacio + opcion.descuento;
      var option = $('<option>').val(opcion.fecha).text(datosDia);
    option.appendTo('#selectDia')
  })
}

function mostrarHoras(horas) {
  $('#selecHoras').html('');
  _.each(horas, function (hora){
    var li = $('<li>').val(hora.valor).text(hora.key);
    $('#selecHoras').append('<li class="selechora" value="' + hora.valor + '"><button class="botonhorareserva">' + hora.key + '</button></li>');
  })
  $('.horas').show();
}

// TODO obtener horario de la reserva seleccionado
function realizarReserva() {
  $("#realizarReserva").modal("show");

  $("#cantidadReserva").html("Reserva para " + $('#selectAdulto').val() + " adultos y " + $('#selectNino').val() + " niño");
  $("#horarioReserva").html("21:30 hs. | " + $('#selectDia').val());
}

function confirmarReserva() {
  $("#realizarReserva").modal("show");

  $("#cantidadReserva").html("Reserva para " + $('#selectAdulto').val() + " adultos y " + $('#selectNino').val() + " niño");


  $('#selecHoras').html('');
  _.each(horas, function (hora){
    var li = $('<li>').val(hora.valor).text(hora.key);
    $('#selecHoras').append('<li class="selechora" value="' + hora.valor + '"><button class="botonhorareserva">' + hora.key + '</button></li>');
  })
  $('.horas').show();
}
