var accion;

function iniciar(action) {
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    popularDropdownHorarios();
    var accionCrear = $("#accion").val();
    
    if(accionCrear == 'cre'){
      accion = 'crear';
      $('.datos-horarios').removeClass('hidden');
    }else{
      accion = action;
    }

    if (accion == 'editar') {
      cargarHorariosSeteados(accion);
    }
  });
}

var localHorariosCreados = [];
var horariosViejos = [];

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
    aplicarHorarios($(this).attr('value'))
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

function aplicarHorarios(dia){
  $('#' + dia).html('');
  $('#' + dia).append('' +
  '  <td>'+
  '    <span class="diassemanaresumen">' + dia + ' </span>' +
  '  </td>' +
  '  <td>' +
      '<div class="iconoslista">'+
        '<div class="horariolista"><span id="Hdesde' + dia + 'Manana" >' + $('#horaInicioManana').val() + '</span> - <span id="Hhasta' + dia + 'Manana" >' + $('#horaFinManana').val() + '</span></div>' +
        '<div class="horariocubiertos"><i class="fa fa-cutlery" aria-hidden="true"></i><span id="Cubiertos' + dia + 'Manana" >' + $('#cantCubiertosManana').val() + '</span></div>' +
        ' <div class="horarioduracionreserva"><i class="fa fa-clock-o" aria-hidden="true"></i><span id="Duracion' + dia + 'Manana" >' + $('#duracionReservaManana').val() + '</span></div>' +
      '</div>'+
  '  </td>' +
  '  <td>' +
      '<div class="iconoslista">'+
        '<div class="horariolista"><span id="Hdesde' + dia + 'Tarde" >' + $('#horaInicioTarde').val() + '</span> - <span id="Hhasta' + dia + 'Tarde" >' + $('#horaFinTarde').val()  + '</span></div>' +
        '<div class="horariocubiertos"><i class="fa fa-cutlery" aria-hidden="true"></i><span id="Cubiertos' + dia + 'Tarde" >' + $('#cantCubiertosTarde').val() + '</span></div>' +
        ' <div class="horarioduracionreserva"><i class="fa fa-clock-o" aria-hidden="true"></i><span id="Duracion' + dia + 'Tarde" >' + $('#duracionReservaTarde').val() + '</span></div>' +
      '</div>'+
  '  </td>');
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
          aplicarHorarios(diaSemana);
          if (horarioManana && cubiertosManana) {
            $("#Hdesde" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(horarioManana.horaInicioHorarioAtencion);
            $("#Hhasta" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(horarioManana.horaFinHorarioAtencion);
            $("#Cubiertos" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(cubiertosManana.cantidadCubiertoDia);
            $("#Duracion" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(cubiertosManana.duracionReserva);
          }
          if (horarioTarde  && cubiertosTarde) {
            $("#Hdesde" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").html(horarioTarde.horaInicioHorarioAtencion);
            $("#Hhasta" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").html(horarioTarde.horaFinHorarioAtencion);
            $("#Cubiertos" + horarioManana.diaSemanaHorarioAtencion + "Tarde").html(cubiertosTarde.cantidadCubiertoDia);
            $("#Duracion" + horarioManana.diaSemanaHorarioAtencion + "Tarde").html(cubiertosTarde.duracionReserva);
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

  _.each(dias, function (dia) {
    idHorariosDesdeManana.push({'hora': $("#Hdesde" + dia + "Manana").html(), 'dia': dia});
    idHorariosHastaManana.push({'hora': $("#Hhasta" + dia + "Manana").html(), 'dia': dia});
    idHorariosDesdeTarde.push({'hora': $("#Hdesde" + dia + "Tarde").html(), 'dia': dia});
    idHorariosHastaTarde.push({'hora': $("#Hhasta" + dia + "Tarde").html(), 'dia': dia});

    idCantCubiertosManana.push({'hora': $("#Cubiertos" + dia + "Manana").html(), 'dia': dia});
    idDuracionReserManana.push({'hora': $("#Duracion" + dia + "Manana").html(), 'dia': dia});
    idCantCubiertosTarde.push({'hora': $("#Cubiertos" + dia + "Tarde").html(), 'dia': dia});
    idDuracionReserTarde.push({'hora': $("#Duracion" + dia + "Tarde").html(), 'dia': dia});
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarHorarios = [];
  var guardarCubiertos = [];
  var actualizarHorarioAtencion = [];
  var actualizarCubiertos = [];

  _.each(dias, function (dia) {
    var horarioDesdeM = _.find(idHorariosDesdeManana, {'dia': dia});
    var horarioHastaM = _.find(idHorariosHastaManana, {'dia': dia});
    var horarioDesdeT = _.find(idHorariosDesdeTarde, {'dia': dia});
    var horarioHastaT = _.find(idHorariosHastaTarde, {'dia': dia});

    if (horarioDesdeM != "" && horarioHastaM != "") {
      var guardarManana = sendHorarios(dia, horarioDesdeM.hora, horarioHastaM.hora, 'manana').then(function (id) {
        localHorariosCreados.push(id);
      }).catch(function (err) {
        console.log(err);
      });
      guardarHorarios.push(guardarManana);
    }
    if (horarioDesdeT != "" && horarioHastaT != "") {
      var guardarTarde = sendHorarios(dia, horarioDesdeT.hora, horarioHastaT.hora, 'tarde').then(function (id) {
        localHorariosCreados.push(id);
      }).catch(function (err) {
        console.log(err);
      });
      guardarHorarios.push(guardarTarde);
    }

    var cantCubiertoM = _.find(idCantCubiertosManana, {'dia': dia});
    var duracionReservaM = _.find(idDuracionReserManana, {'dia': dia});
    var cantCubiertoT = _.find(idCantCubiertosTarde, {'dia': dia});
    var duracionReservaT = _.find(idDuracionReserTarde, {'dia': dia});

    if (cantCubiertoM != "" && duracionReservaM != "") {
      var guardarManana = sendCubiertos(dia, cantCubiertoM.hora, duracionReservaM.hora, 'manana').then(function (id) {
        localCubiertosCreados.push(id);
      }).catch(function (err) {
        console.log(err);
      });
      guardarCubiertos.push(guardarManana);
    }
    if (cantCubiertoT != "" && duracionReservaT != "") {
      var guardarTarde = sendCubiertos(dia, cantCubiertoT.hora, duracionReservaT.hora, 'tarde').then(function (id) {
        localCubiertosCreados.push(id);
      }).catch(function (err) {
        console.log(err);
      });
      guardarCubiertos.push(guardarTarde);
    }
  });

  Promise.all(guardarHorarios, guardarCubiertos).then(function () {
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

    Promise.all(actualizarHorarioAtencion, actualizarCubiertos).then(function(){
      console.log(localCubiertosCreados);

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
  }).catch(function (err) {
    console.log(err);
  });

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
    },
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
  var promise = new Promise(function (resolve, reject) {
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
      $.ajax({
        url: server + '/api/v1/admin/horarioAtencion' + queryParam,
        type: operacion,

        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
          resolve(data._id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          reject(Error("It broke"));
        },
        data: horario
      });
    } else {
      resolve('');
    }
  });

  return promise
}

function sendCubiertos(diaCubierto, cantCubiertos, duracionReserva, turno) {

  var promise = new Promise(function (resolve, reject) {
    if (_.isUndefined(server)) {
      $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
      });
    }

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
      $.ajax({
        url: server + '/api/v1/admin/cubiertosDia' + queryParam,
        type: operacion,

        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
          resolve(data._id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          reject(Error("It broke"));
        },
        data: cubierto
      });
    } else {
      resolve('');
    }
  });

  return promise
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

