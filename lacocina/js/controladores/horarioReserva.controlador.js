var accion;

function iniciar(action) {
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    popularDropdownHorarios();
    var accionCrear = $("#accion").val();
    
    if(accionCrear == 'cre'){
      accion = 'crear';
      $('.datos-cubiertos').removeClass('hidden');
      $('#loading').hide();
    }else{
      accion = action;
    }

    if (accion == 'editar') {
      cargarHorariosSeteados();
    }
  });
}

var localHorariosCreados = [];
var horariosViejos = [];

var localCubiertosCreados = [];
var cubiertosViejos = [];
var cantidadHorarios = 0;
var cantidadCubiertos =0;

var idLocalCreado = $("#idLocalCreado").val();


var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos", "Feriados"];

function popularDropdownHorarios(){
  var rangoHorario = cadaMediaHora('00:00', '23:30');
  $('.select-horario').each(function(){
    $(this).html('');
    var elem = this;
    _.each(rangoHorario, function(hora){
      $(elem).append($('<option>', {
          value: hora,
          text: hora
      }));
    });
  });
}

$('.botonagregarhorario').click(function (e) {
  $('.diashorario :checked').each(function(){
    // console.log($(this).attr('value'));
     return aplicarHorarios($(this).attr('value'));
  })
});

$('#todos').click(function (e) {
  if ($('#todos').is(':checked')) {
    $(".diashorario:not(:first)").each(function(){
      $(this).find('input').prop('checked', true);
    })
  } else {
    $(".diashorario:not(:first)").each(function(){
      $(this).find('input').prop('checked', false);
    })
  }
});

function aplicarHorarios(dia, dibujar){
  hideErrors();
  if(!_.isUndefined(dibujar) && !dibujar){
    if ( $('#duracionReservaManana').val() < 30 ){
      $('#errorDuracionManana').show();
      return false
    } else if ( $('#duracionReservaTarde').val() < 30 ) {
      $('#errorDuracionTarde').show();
      return false
    }
  }else {
    if($('#horaInicioManana').val() != $('#horaFinManana').val() || dibujar){
      $('#' + dia + ' td:nth-child(2)').removeAttr('style').html('' +
        '<div class="iconoslista">'+
        ' <div class="horariolista">' +
        '  <input class="data-horarios" type="text" id="Hdesde' + dia + 'Manana" value="' + $('#horaInicioManana').val() + '"> - ' +
        '  <input class="data-horarios" type="text"  id="Hhasta' + dia + 'Manana"  value="' + $('#horaFinManana').val() + '">' +
        ' </div>' +
        ' <div class="horariocubiertos"><i class="fa fa-cutlery" aria-hidden="true"></i>' +
        '  <input class="data-horarios" type="number" min="30" id="Cubiertos' + dia + 'Manana" value="' + $('#cantCubiertosManana').val() + '">' +
        ' </div>' +
        ' <div class="horarioduracionreserva"><i class="fa fa-clock-o" aria-hidden="true"></i>' +
        '  <input class="data-horarios" type="number" min="30"  id="Duracion' + dia + 'Manana"  value="' + $('#duracionReservaManana').val() + '"></div>' +
        '</div>');
    } else {
      $('#' + dia + ' td:nth-child(2)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
    }

    if($('#horaInicioTarde').val() != $('#horaFinTarde').val() || dibujar){
      $('#' + dia + ' td:nth-child(3)').removeAttr('style').html('' +
        '<div class="iconoslista">'+
        ' <div class="horariolista">' +
        '  <input class="data-horarios" type="text" id="Hdesde' + dia + 'Tarde" value="' + $('#horaInicioTarde').val() + '"> - ' +
        '  <input class="data-horarios" type="text" id="Hhasta' + dia + 'Tarde" value="' + $('#horaFinTarde').val()  + '" >' +
        ' </div>' +
        ' <div class="horariocubiertos"><i class="fa fa-cutlery" aria-hidden="true"></i>' +
        '  <input class="data-horarios" type="number" min="30" id="Cubiertos' + dia + 'Tarde"  value="' + $('#cantCubiertosTarde').val() + '">' +
        ' </div>' +
        ' <div class="horarioduracionreserva"><i class="fa fa-clock-o" aria-hidden="true"></i>' +
        '  <input class="data-horarios" type="number" min="30"  id="Duracion' + dia + 'Tarde"  value="' + $('#duracionReservaTarde').val() + '">' +
        ' </div>' +
        '</div>');
    } else {
      $('#' + dia + ' td:nth-child(3)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
      return false
    }
  }

  return true
}

function cargarHorariosSeteados() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  var idLocal = $("#idLocalCreado").val();
  $('#target').html('obteniendo...');
  $.ajax({
    url: server + '/api/v1/admin/locales?id=' + idLocal + "",
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      var aceptaReserva = data.aceptaReservaNegocio;
      if(aceptaReserva == true){
        $('input:checkbox[name=aceptaReservaCheck]').attr('checked',true);
      }else{
        $('input:checkbox[name=aceptaReservaCheck]').attr('checked',false);
      }

      var margenReservar;
      if (typeof(data.margenCreacionReserva) == "undefined"){
        margenReservar = 0;
      }else{
        margenReservar = data.margenCreacionReserva;
      }

      var margenCancelar;
      if (typeof(data.margenCancelacionReserva) == "undefined"){
        margenCancelar = 1;
      }else{
        margenCancelar = data.margenCancelacionReserva;
      }

      _.each(data.fechaBloqueoReserva, function(fecha){
        $('#selectorDiasBloqueados').multiDatesPicker( {
          addDates: [fecha]
        });
      });
    
      $("#demo").html('');
      $("#demo").append(margenReservar);
      $("#demo2").html('');
      $("#demo2").append(margenCancelar);
      $("#myRange").val(margenReservar);
      $("#myRange2").val(margenCancelar);


      var horariosAtencion = data.idHorarioAtencion;
      var cubiertos = data.idCubiertosDia;
      horariosViejos = horariosViejos;
      cubiertosViejos = cubiertos;
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
            $("#Hdesde" + horarioManana.diaSemanaHorarioAtencion + "Manana").val(horarioManana.horaInicioHorarioAtencion);
            $("#Hhasta" + horarioManana.diaSemanaHorarioAtencion + "Manana").val(horarioManana.horaFinHorarioAtencion);
            $("#Cubiertos" + horarioManana.diaSemanaHorarioAtencion + "Manana").val(cubiertosManana.cantidadCubiertoDia);
            $("#Duracion" + horarioManana.diaSemanaHorarioAtencion + "Manana").val(cubiertosManana.duracionReserva);
          } else {
            $('#' + diaSemana + ' td:nth-child(2)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
          }
          if (horarioTarde  && cubiertosTarde) {
            $("#Hdesde" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").val(horarioTarde.horaInicioHorarioAtencion);
            $("#Hhasta" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").val(horarioTarde.horaFinHorarioAtencion);
            $("#Cubiertos" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").val(cubiertosTarde.cantidadCubiertoDia);
            $("#Duracion" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").val(cubiertosTarde.duracionReserva);
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
$(document).on('change', '.cuadrohorariosresumen input[type=number]', function() {
  hideErrors();
});

function hideErrors(){
  $('#errorDuracionManana').hide();
  $('#errorDuracionTarde').hide();
  $('#errores').hide();
  $('#errorDuracionListadoManana').hide();
  $('#errorDuracionListadoTarde').hide();
}

function sendHorarioAtencion() {
  $('#loading').show();
  $('#botonVolver').attr('disabled','disabled');
  $('#botonVolverFondo').attr('disabled','disabled');
  $('#botonGuardar').attr('disabled','disabled');

  var idHorariosDesdeManana = [];
  var idHorariosDesdeTarde = [];
  var idHorariosHastaManana = [];
  var idHorariosHastaTarde = [];

  var idCantCubiertosManana = [];
  var idDuracionReserManana = [];
  var idCantCubiertosTarde = [];
  var idDuracionReserTarde = [];
  var valido = true;
  _.each(dias, function (dia) {
    idHorariosDesdeManana.push({'hora': $("#Hdesde" + dia + "Manana").val(), 'dia': dia});
    idHorariosHastaManana.push({'hora': $("#Hhasta" + dia + "Manana").val(), 'dia': dia});
    idHorariosDesdeTarde.push({'hora': $("#Hdesde" + dia + "Tarde").val(), 'dia': dia});
    idHorariosHastaTarde.push({'hora': $("#Hhasta" + dia + "Tarde").val(), 'dia': dia});

    idCantCubiertosManana.push({'hora': $("#Cubiertos" + dia + "Manana").val(), 'dia': dia});
    if ( $("#Duracion" + dia + "Manana").val() < 30 ){
      $('#errores').show();
      $('#errorDuracionListadoManana').show();
      valido = false;
      return false
    }
    idDuracionReserManana.push({'hora': $("#Duracion" + dia + "Manana").val(), 'dia': dia});
    idCantCubiertosTarde.push({'hora': $("#Cubiertos" + dia + "Tarde").val(), 'dia': dia});
    if ( $("#Duracion" + dia + "Tarde").val() < 30 ){
      $('#errores').show();
      $('#errorDuracionListadoTarde').show();
      valido = false;
      return false
    }
    idDuracionReserTarde.push({'hora': $("#Duracion" + dia + "Tarde").val(), 'dia': dia});
  });
  if ( valido ) {
    var guardarHorarios = [];
    var guardarCubiertos = [];
    var actualizarHorarioAtencion = [];
    var actualizarCubiertos = [];

    _.each(dias, function (dia) {
     var horarioDesdeM = _.find(idHorariosDesdeManana, {'dia': dia});
     var horarioHastaM = _.find(idHorariosHastaManana, {'dia': dia});
     var horarioDesdeT = _.find(idHorariosDesdeTarde, {'dia': dia});
     var horarioHastaT = _.find(idHorariosHastaTarde, {'dia': dia});

     if (horarioDesdeM != "" && horarioHastaM != ""&& horarioDesdeM.hora && horarioHastaM.hora) {
       cantidadHorarios++;
       var guardarManana = sendHorarios(dia, horarioDesdeM.hora, horarioHastaM.hora, 'manana');
       guardarHorarios.push(guardarManana);
     }
     if (horarioDesdeT != "" && horarioHastaT != "" && horarioDesdeT.hora && horarioHastaT.hora) {
       cantidadHorarios++;
       var guardarTarde = sendHorarios(dia, horarioDesdeT.hora, horarioHastaT.hora, 'tarde');
       guardarHorarios.push(guardarTarde);
     }

     var cantCubiertoM = _.find(idCantCubiertosManana, {'dia': dia});
     var duracionReservaM = _.find(idDuracionReserManana, {'dia': dia});
     var cantCubiertoT = _.find(idCantCubiertosTarde, {'dia': dia});
     var duracionReservaT = _.find(idDuracionReserTarde, {'dia': dia});

     if (cantCubiertoM != "" && duracionReservaM != "" && cantCubiertoM.hora && duracionReservaM.hora) {
       cantidadCubiertos++;
       var guardarManana = sendCubiertos(dia, cantCubiertoM.hora, duracionReservaM.hora, 'manana');
       guardarCubiertos.push(guardarManana);
     }
     if (cantCubiertoT != "" && duracionReservaT != "" && cantCubiertoT.hora && duracionReservaT.hora) {
       cantidadCubiertos++;
       var guardarTarde = sendCubiertos(dia, cantCubiertoT.hora, duracionReservaT.hora, 'tarde');
       guardarCubiertos.push(guardarTarde);
     }
    });

    Promise.all(guardarHorarios, guardarCubiertos).then(function () {

     verificarCantidad();

    }).catch(function (err) {
     console.log(err);
    });
  } else {
    $('#loading').hide();
    $('#botonVolver').removeAttr('disabled');
    $('#botonVolverFondo').removeAttr('disabled');
    $('#botonGuardar').removeAttr('disabled');
  }

}

function verificarCantidad(){
  if (cantidadHorarios > localHorariosCreados.length||  cantidadCubiertos > localCubiertosCreados.length){
    // verificar que esten todas las opciones guardadas
    window.setTimeout(verificarCantidad,50);
    return;
  }
  procesarLocal()
}

function procesarLocal(){

  var actualizarHorarioAtencion = [];
  var actualizarCubiertos = [];
  var actualizarFechas = [];
  var campoAAcuatualizar = "idHorarioAtencion";
  console.log(localHorariosCreados);
  var guardarHT = actualizarLocal(idLocalCreado, _.without(localHorariosCreados, ""), campoAAcuatualizar).then(function (data) {
    resolve(true);
  }).catch(function (err) {
    console.log(err);
  });
  actualizarHorarioAtencion.push(guardarHT);

  campoAAcuatualizar = "idCubiertosDia";
  var guardarCD = actualizarLocal(idLocalCreado, _.without(localCubiertosCreados, ""), campoAAcuatualizar).then(function (data) {
    resolve(true);
  }).catch(function (err) {
    console.log(err);
  });
  actualizarCubiertos.push(guardarCD);

  campoAAcuatualizar = "fechaBloqueoReserva";
  var fechas = $('#selectorDiasBloqueados').multiDatesPicker( 'getDates');
  var guardarFecha = actualizarLocal(idLocalCreado, fechas , campoAAcuatualizar).then(function (data) {
    resolve(true);
  }).catch(function (err) {
    console.log(err);
  });
  actualizarFechas.push(guardarFecha);

  Promise.all(actualizarHorarioAtencion, actualizarCubiertos, actualizarFechas).then(function(){
    console.log(localCubiertosCreados);

    actualizarAceptaReserva(idLocalCreado);

    if (accion == 'crear') {
      cargarHorarioAtencion();
      $('#loading').hide();
    } else if (accion == 'editar') {
      eliminarViejos(cubiertosViejos).then(function (error, success) {
        volverPanelLocal();
      }).catch(function (err) {
        $('#loading').hide();
        console.log(err);
      });
    }
  })
}

function actualizarAceptaReserva(){
  var idLocalAceptaReserva = $("#idLocalCreado").val();
  var aceptaReserva = $('input:checkbox[name=aceptaReservaCheck]:checked').val();
  if (typeof(aceptaReserva) == "undefined"){
    aceptaReserva = false;
  }else{
  aceptaReserva = true;
 }
 valorAActualizar = "aceptaReservaNegocio";
 actualizarLocal(idLocalAceptaReserva, aceptaReserva , valorAActualizar)
}

function cargarHorarioAtencion(){
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  var idLocal = $("#idLocalCreado").val();
  $('#target').html('obteniendo...');
  $.ajax({
    url: server + '/api/v1/admin/locales?id=' + idLocal + "",
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      var local = data;
      var url = "../lacocina/editar-horarios.php?idLocal=" + idLocal +"&acc=cre";
      $(location).attr('href', url);

    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    }
  });
}

function eliminarViejos(vectorHorarios) {
  var promise = new Promise(function (resolve, reject) {
    var vecPromesas = [];
    _.each(vectorHorarios, function (horario) {
      var promesa = eliminar(horario._id);
      vecPromesas.push(promesa);
    });
    Promise.all(vecPromesas).then(function () {
      resolve(true)
    });
  });
  return promise;
}

function eliminar(idHorarioAtencion) {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $.ajax({
    url: server + '/api/v1/admin/horarioAtencion?id=' + idHorarioAtencion,
    type: 'DELETE',
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      return true;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      return false;
    }
  });
}

function sendHorarios(diaHorario, horaDesde, horaHasta, turno) {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  if (!_.isNil(diaHorario) && !_.isNil(horaDesde)) {
    var isNew = $("#idCubierto").val() == "";
    var operacion = isNew ? "POST" : "PUT";
    var horario = JSON.stringify({
      "diaSemanaHorarioAtencion": diaHorario,
      "idLocal": $("#idLocalCreado").val(),
      "horaInicioHorarioAtencion": horaDesde,
      "horaFinHorarioAtencion": horaHasta,
      "turnoHorarioAtencion": turno
    });

    $('#target').html('sending..');
    var queryParam = isNew ? "" : "?id=" + $("#idHorario").val();
    return $.ajax({
      url: server + '/api/v1/admin/horarioAtencion' + queryParam,
      type: operacion,

      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        localHorariosCreados.push(data._id);
        //resolve(true);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(Error("It broke"));
      },
      data: horario
    });
  } else {
    return ('');
  }

  return promise
}

function sendCubiertos(diaCubierto, cantCubiertos, duracionReserva, turno) {
  if (!_.isNil(diaCubierto) && !_.isNil(cantCubiertos)) {
    var isNew = $("#idCubierto").val() == "";
    var operacion = isNew ? "POST" : "PUT";
    var cubierto = JSON.stringify({
      "diaSemanaCubiertoDia": diaCubierto,
      "cantidadCubiertoDia": cantCubiertos,
      "duracionReserva": duracionReserva,
      "turnoCubiertoDia": turno
    });

    $('#target').html('sending..');
    var queryParam = isNew ? "" : "?id=" + $("#idCubierto").val();
    return $.ajax({
      url: server + '/api/v1/admin/cubiertosDia' + queryParam,
      type: operacion,

      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        localCubiertosCreados.push(data._id);
        //resolve(true);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(Error("It broke"));
      },
      data: cubierto
    });
  } else {
    return('');
  }
}

function limpiar(campo, campoBack) {
  $("#" + campo + "Alert").hide();
  $("#" + campoBack).removeClass('alert-danger');
  $("#botonGuardar").removeClass('disabled');
}

function volverPanelLocal() {
  $('#botonVolver').attr('disabled','disabled');
  $('#botonVolverFondo').attr('disabled','disabled');
  $('#botonGuardar').attr('disabled','disabled');
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  var idLocal = $("#idLocalCreado").val();
  $('#target').html('obteniendo...');
  $.ajax({
    url: server + '/api/v1/admin/locales?id=' + idLocal + "",
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      var local = data;
      var idNegocio = local.idNegocio._id;
      var url = "../lacocina/panel-locales.php?idLocal=" + idLocal + "&idNegocio=" + idNegocio + "";
      $(location).attr('href', url);

    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    },
  });
}

var toInt = function(time){
  var tiempo = time.split(':').map(parseFloat);
  return (tiempo[0]*2 + tiempo[1]/30);
};

var toTime = function(int){
  var hora = Math.floor(int/2);
  if ( hora >= 24 )
    hora -= 24;

  hora = hora.toString().length === 1 ? "0" + hora : hora;

  return [hora, int % 2 ? '30' : '00'].join(':');
};

var range = function(from, to){
  var rango = Array(to-from+1).fill();

  for (var i = 0; i < rango.length; i++) {
    rango[i] = from + i;
  }
  return rango;
};

//funcion que convierte una hora a int, luego crea un rango entre esas horas y despues lo completa convirtiendo cada int a hora nuevamente
//viene de: https://codereview.stackexchange.com/questions/128260/populating-an-array-with-times-with-half-hour-interval-between-them
var cadaMediaHora = function(t1,t2){
  var rangoNums = range(toInt(t1), toInt(t2));
  var rangoHoras = [];
  _.each(rangoNums, function(hora){
    rangoHoras.push(toTime(hora));
  });
  return rangoHoras;
};

function actualizarMargen(campo){
  var valorAActualizar = $('#'+campo).val();
  var campoAActualizar = '';
  if(campo == "myRange"){
    campoAActualizar = 'margenCreacionReserva';
  }else{
    campoAActualizar = 'margenCancelacionReserva';
  }
  var idLocal = $("#idLocalCreado").val();


  var promise = new Promise(function(resolve, reject) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    var nuevoCampo = {};
    nuevoCampo[campoAActualizar] = valorAActualizar;

    $.ajax({
      url: server + '/api/v1/admin/local?id=' + idLocal,
      type: 'PUT',

      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        resolve(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(errorThrown);
      },
      data: JSON.stringify(nuevoCampo)
    });
   });
  });

  return promise;
}