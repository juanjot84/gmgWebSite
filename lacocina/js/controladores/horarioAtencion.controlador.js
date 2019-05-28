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

    if (action == 'editar') {
      cargarHorariosSeteados(action);
    }
  });
}

var localHorariosCreados = [];
var horariosViejos = [];
var cantidadHorarios = 0;

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


function aplicarHorarios(dia, dibujar){
  if($('#horaInicioManana').val() != $('#horaFinManana').val() || dibujar){
    $('#' + dia + ' td:nth-child(2)').removeAttr('style').html('<span id="Hdesde' + dia + 'Manana" >' + $('#horaInicioManana').val() + '</span> - <span id="Hhasta' + dia + 'Manana" >' + $('#horaFinManana').val() + '</span>' );
  } else {
    $('#' + dia + ' td:nth-child(2)').attr('style', 'color: #f8981d;').html('Sin horario de atención')
  }

  if($('#horaInicioTarde').val() != $('#horaFinTarde').val() || dibujar)  {
    $('#' + dia + ' td:nth-child(3)').removeAttr('style').html('<span id="Hdesde' + dia + 'Tarde" >' + $('#horaInicioTarde').val() + '</span> - <span id="Hhasta' + dia + 'Tarde" >' + $('#horaFinTarde').val());
  } else {
    $('#' + dia + ' td:nth-child(3)').attr('style', 'color: #f8981d;').html('Sin horario de atención')
  }
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

function cargarHorariosSeteados(accion) {
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
      var horariosAtencion = data.idHorarioApertura;
      horariosViejos = data.idHorarioApertura;
      _.each(dias, function (diaSemana) {
        var horariosDia = _.filter(horariosAtencion, {'diaSemanaHorarioApertura': diaSemana});
        var horarioManana = _.find(horariosDia, {'turnoHorarioApertura': 'manana'});
        var horarioTarde = _.find(horariosDia, {'turnoHorarioApertura': 'tarde'});
        if (horarioManana || horarioTarde) {
          aplicarHorarios(diaSemana, true);
          if (horarioManana) {
            $("#Hdesde" + horarioManana.diaSemanaHorarioApertura + "Manana").html(horarioManana.horaInicioHorarioApertura);
            $("#Hhasta" + horarioManana.diaSemanaHorarioApertura + "Manana").html(horarioManana.horaFinHorarioApertura);
          }
          if (horarioTarde) {
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

function sendHorarioAtencion() {
  $('#loading').show();
  $('#botonVolver').attr('disabled','disabled');
  $('#botonVolverFondo').attr('disabled','disabled');
  $('#botonGuardar').attr('disabled','disabled');

  var idHorariosDesdeManana = [];
  var idHorariosDesdeTarde = [];
  var idHorariosHastaManana = [];
  var idHorariosHastaTarde = [];

  _.each(dias, function (dia) {
    idHorariosDesdeManana.push({'hora': $("#Hdesde" + dia + "Manana").html(), 'dia': dia});
    idHorariosHastaManana.push({'hora': $("#Hhasta" + dia + "Manana").html(), 'dia': dia});
    idHorariosDesdeTarde.push({'hora': $("#Hdesde" + dia + "Tarde").html(), 'dia': dia});
    idHorariosHastaTarde.push({'hora': $("#Hhasta" + dia + "Tarde").html(), 'dia': dia});
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarHorarios = [];

  _.each(dias, function (dia) {
    var horarioDesdeM = _.find(idHorariosDesdeManana, {'dia': dia});
    var horarioHastaM = _.find(idHorariosHastaManana, {'dia': dia});
    var horarioDesdeT = _.find(idHorariosDesdeTarde, {'dia': dia});
    var horarioHastaT = _.find(idHorariosHastaTarde, {'dia': dia});

    if (horarioDesdeM != "" && horarioHastaM != "" && horarioDesdeM.hora && horarioHastaM.hora ) {
      cantidadHorarios++;
      var guardarManana = sendHorarios(dia, horarioDesdeM.hora, horarioHastaM.hora, 'manana').then(function (id) {
        localHorariosCreados.push(id);
      }).catch(function (err) {
        console.log(err);
      });
      guardarHorarios.push(guardarManana);
    }
    if (horarioDesdeT != "" && horarioHastaT != "" && horarioDesdeT.hora && horarioHastaT.hora ) {
      cantidadHorarios++;
      var guardarTarde = sendHorarios(dia, horarioDesdeT.hora, horarioHastaT.hora, 'tarde').then(function (id) {
        localHorariosCreados.push(id);
      }).catch(function (err) {
        console.log(err);
      });
      guardarHorarios.push(guardarTarde);
    }
  });
  Promise.all(guardarHorarios).then(function () {
    verificarCantidad();
  }).catch(function (err) {
    console.log(err);
  });
}

function verificarCantidad(){
  if (cantidadHorarios > localHorariosCreados.length){
    // verificar que esten todas las opciones guardadas
    window.setTimeout(verificarCantidad,50);
    return;
  }
  procesarHorariosLocal()
}

function procesarHorariosLocal(){
  var campoAAcuatualizar = "idHorarioApertura";
  console.log(localHorariosCreados);
  var idLocal = $("#idLocalCreado").val();
  actualizarLocal(idLocal, _.without(localHorariosCreados, ""), campoAAcuatualizar).then(function (data) {
    console.log(data);
    if (accion == 'crear') {
      cargarImagenes();
      $(location).attr('href', url);
    } else if (accion == 'editar') {

      if (horariosViejos.length) {
        eliminarViejos(horariosViejos).then(function (error, success) {
          volverPanelLocal();
        }).catch(function (err) {
          console.log(err);
          volverPanelLocal();
        });
      } else {
        volverPanelLocal();
      }

    }
  }).catch(function (err) {
    console.log(err);
  });
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
    url: server + '/api/v1/admin/horarioApertura?id=' + idhorarioApertura,
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
        "diaSemanaHorarioApertura": diaHorario,
        "idLocal": $("#idLocalCreado").val(),
        "horaInicioHorarioApertura": horaDesde,
        "horaFinHorarioApertura": horaHasta,
        "turnoHorarioApertura": turno
      });

      $('#target').html('sending..');
      var queryParam = isNew ? "" : "?id=" + $("#idHorario").val();
      $.ajax({
        url: server + '/api/v1/admin/horarioApertura' + queryParam,
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
      var tipoUsuario = $("#tipoUsuario").val();
      if (tipoUsuario == 'superAdmin') {
        var local = data;
        var idNegocio = local.idNegocio._id;
        var url = "../lacocina/panel-locales.php?idLocal=" + idLocal + "&idNegocio=" + idNegocio + "";
        $(location).attr('href', url);
      } else if (tipoUsuario == 'usuarioNegocio') {
        var url = "dashboard.php";
        $(location).attr('href',url);
      }

    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    },
  });
}
