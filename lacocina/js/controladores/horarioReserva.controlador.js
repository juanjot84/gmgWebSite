var accion;

function iniciar(action) {
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    popularDropdownHorarios();
    accion = action;
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
      horariosViejos = data.idHorarioAtencion;
      _.each(dias, function (diaSemana) {
        var horariosDia = _.filter(horariosAtencion, {'diaSemanaHorarioAtencion': diaSemana});
        var horarioManana = _.find(horariosDia, {'turnoHorarioAtencion': 'manana'});
        var horarioTarde = _.find(horariosDia, {'turnoHorarioAtencion': 'tarde'});
        if (horarioManana) {
          $("#Hdesde" + horarioManana.diaSemanaHorarioAtencion + "Manana").val(horarioManana.horaInicioHorarioAtencion);
          $("#Hhasta" + horarioManana.diaSemanaHorarioAtencion + "Manana").val(horarioManana.horaFinHorarioAtencion);
        }
        if (horarioTarde) {
          $("#Hdesde" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").val(horarioTarde.horaInicioHorarioAtencion);
          $("#Hhasta" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").val(horarioTarde.horaFinHorarioAtencion);
        }
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    }
  });
}

function sendHorarioAtencion() {

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

  var actualizarHorarioAtencion;
  var actualizarCubiertos;

  Promise.all(guardarHorarios, guardarCubiertos).then(function () {
    var campoAAcuatualizar = "idHorarioAtencion";
    console.log(localHorariosCreados);
    var guardarHT = actualizarLocal(idLocalCreado, _.without(localHorariosCreados, ""), campoAAcuatualizar).then(function (data) {
      resolve(true);
    }).catch(function (err) {
      console.log(err);
    });
    actualizarHorarioAtencion.push(guardarHT)


    var campoAAcuatualizar = "idCubiertosDia";
    var guardarCD = actualizarLocal(idLocalCreado, localCubiertosCreados, campoAAcuatualizar).then(function (data) {
      resolve(true);
    }).catch(function (err) {
      console.log(err);
    });
    actualizarCubiertos.push(guardarCD)
  }).catch(function (err) {
    console.log(err);
  });
  actualizarCubiertos

  Promise.all(actualizarHorarioAtencion, actualizarCubiertos).then(function(){
    console.log(localCubiertosCreados);

    if (accion == 'crear') {
      cargarImagenes();
    } else if (accion == 'editar') {
      // eliminarViejos(horariosViejos)
      eliminarViejos(cubiertosViejos).then(function (error, success) {
        volverPanelLocal();
      }).catch(function (err) {
        console.log(err);
      });
    }
  })


}

function cargarImagenes(){
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
      var url = "../lacocina/subir-imagen.php?idLocal=" + idLocal +"";
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
      var isNew = $("#idHorario").val() == "";
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


function validar() {
  $("#botonGuardar").addClass('disabled');
  var idHorariosDesdeManana = [];
  var idHorariosDesdeTarde = [];
  var idHorariosHastaManana = [];
  var idHorariosHastaTarde = [];
  var hayError = false;

  _.each(dias, function (dia) {
    idHorariosDesdeManana.push({'hora': $("#Hdesde" + dia + "Manana").val(), 'dia': dia});
    idHorariosHastaManana.push({'hora': $("#Hhasta" + dia + "Manana").val(), 'dia': dia});
    idHorariosDesdeTarde.push({'hora': $("#Hdesde" + dia + "Tarde").val(), 'dia': dia});
    idHorariosHastaTarde.push({'hora': $("#Hhasta" + dia + "Tarde").val(), 'dia': dia});
  });

  var idLocalCreado = $("#idLocalCreado").val();

  _.each(dias, function (dia) {
    var horarioDesdeM = _.find(idHorariosDesdeManana, {'dia': dia});
    var horarioHastaM = _.find(idHorariosHastaManana, {'dia': dia});
    var horarioDesdeT = _.find(idHorariosDesdeTarde, {'dia': dia});
    var horarioHastaT = _.find(idHorariosHastaTarde, {'dia': dia});

    if (horarioDesdeM.hora != "" && horarioHastaM.hora == "") {
      $("#Hhasta" + dia + "Manana").parent().after('<span id="Hhasta' + dia + 'MananaAlert" style="color:red"> Debe ingresar un Horario hasta para el día</span>');
      $("#Hhasta" + dia + "Manana").addClass('alert-danger');
      hayError = true;
    }

    if(horarioHastaM.hora != ""){
      var result = controlarFormatoHora(horarioHastaM.hora);
      if(result == true){
        $("#Hhasta" + dia + "Manana").parent().after('<span id="Hhasta' + dia + 'MananaAlert" style="color:red"> Debe ingresar un Horario correcto (HH:mm) para el día</span>');
        $("#Hhasta" + dia + "Manana").addClass('alert-danger');
        hayError = true;
      }
    }

    if(horarioHastaT.hora != ""){
      var result = controlarFormatoHora(horarioHastaT.hora);
      if(result == true){
        $("#Hhasta" + dia + "Tarde").parent().after('<span id="Hhasta' + dia + 'TardeAlert" style="color:red"> Debe ingresar un Horario correcto (HH:mm) para el día</span>');
        $("#Hhasta" + dia + "Tarde").addClass('alert-danger');
        hayError = true;
      }
    }

    if(horarioDesdeM.hora != ""){
      var result = controlarFormatoHora(horarioDesdeM.hora);
      if(result == true){
        $("#Hdesde" + dia + "Manana").parent().after('<span id="Hdesde' + dia + 'MananaAlert" style="color:red"> Debe ingresar un Horario correcto (HH:mm) para el día</span>');
        $("#Hdesde" + dia + "Manana").addClass('alert-danger');
        hayError = true;
      }
    }

    if(horarioDesdeT.hora != ""){
      var result = controlarFormatoHora(horarioDesdeT.hora);
      if(result == true){
        $("#Hdesde" + dia + "Tarde").parent().after('<span id="Hdesde' + dia + 'TardeAlert" style="color:red"> Debe ingresar un Horario correcto (HH:mm) para el día</span>');
        $("#Hdesde" + dia + "Tarde").addClass('alert-danger');
        hayError = true;
      }
    }


    if (horarioDesdeM.hora == "" && horarioHastaM.hora != "") {
      $("#Hdesde" + dia + "Manana").parent().after('<span id="Hdesde' + dia + 'MananaAlert" style="color:red"> Debe ingresar un Horario desde para el día</span>');
      $("#Hdesde" + dia + "Manana").addClass('alert-danger');
      hayError = true;
    }

    if (horarioDesdeT.hora != "" && horarioHastaT.hora == "") {
      $("#Hhasta" + dia + "Tarde").parent().after('<span id="Hhasta' + dia + 'TardeAlert" style="color:red"> Debe ingresar un Horario hasta para el día</span>');
      $("#Hhasta" + dia + "Tarde").addClass('alert-danger');
      hayError = true;
    }
    if (horarioDesdeT.hora == "" && horarioHastaT.hora != "") {
      $("#Hdesde" + dia + "Tarde").parent().after('<span id="Hdesde' + dia + 'TardeAlert" style="color:red"> Debe ingresar un Horario desde para el día</span>');
      $("#Hdesde" + dia + "Tarde").addClass('alert-danger');
      hayError = true;
    }
  });

  if (hayError == false) {
    sendHorarioAtencion();
  } else {
    $(location).attr('href', "#formularioAgregar");
  }
}

function controlarFormatoHora(hora){

  var caract = new RegExp(/^([0-9]|0[0-9]|1[0-9]|2[0-4]):[0-5][0-9]$/);
  if (! caract.test(hora)){
    return true
  }

}

function limpiar(campo, campoBack) {
  $("#" + campo + "Alert").hide();
  $("#" + campoBack).removeClass('alert-danger');
  $("#botonGuardar").removeClass('disabled');
}

function volverPanelLocal() {
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
