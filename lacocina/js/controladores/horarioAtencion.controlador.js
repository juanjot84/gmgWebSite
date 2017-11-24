$(function () {

  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function (e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

});

function iniciar(accion){
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    if(accion == 'editar'){
      cargarHorariosSeteados();
    }
  });
}

var localHorariosCreados = [];
var horariosViejos = [];

var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos", "Feriados"];

function cargarHorariosSeteados() {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  dibujarHorarios();
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

function dibujarHorarios() {
  $('#formularioAgregar').html('');
  // $('#formularioAgregar').append('  <input type="text" name="idHorario" id="idHorario" class="hidden">    <input type="text" name="idLocalCreado" id="idLocalCreado" value="<?php echo $idLocal; ?>" class="hidden">        <h5 class="titulosalta"> Abierto</h5>    ');
  _.each(dias, function (dia) {
    $('#formularioAgregar').append('' +
      '<p>' +
      '  <strong>' + dia + ' </strong>' +
      '  <div class="row">' +
      '    <span class="row">Horario de atención de manana</span>' +
      '    <div class="col-md-6">' +
      '      <input id="Hdesde' + dia + 'Manana" name="Hdesde' + dia + 'Manana" type="text" class="form-control" placeholder="Hora desde HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar(\'Hhasta' + dia + 'Manana\',\'Hhasta' + dia + 'Manana\')">' +
      '    </div>' +
      '    <div class="col-md-6">' +
      '      <input id="Hhasta' + dia + 'Manana" name="Hhasta' + dia + 'Manana" type="text" class="form-control" placeholder="Hora hasta HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar(\'Hhasta' + dia + 'Manana\',\'Hhasta' + dia + 'Manana\')">' +
      '    </div>' +
      '  </div>' +
      '  <div class="row">' +
      '    <span class="row">Horario de atención de tarde</span>' +
      '    <div class="col-md-6">' +
      '      <input id="Hdesde' + dia + 'Tarde" name="Hdesde' + dia + 'Tarde" type="text" class="form-control" placeholder="Hora desde HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar(\'Hhasta' + dia + 'Manana\',\'Hhasta' + dia + 'Manana\')">' +
      '    </div>' +
      '    <div class="col-md-6">' +
      '      <input id="Hhasta' + dia + 'Tarde" name="Hhasta' + dia + 'Tarde" type="text" class="form-control" placeholder="Hora hasta HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar(\'Hhasta' + dia + 'Tarde\',\'Hhasta' + dia + 'Tarde\')">' +
      '    </div>' +
      '  </div>' +
      '</p>'
    );
  });

  $('#formularioAgregar').append('' +
    '<div class="input-group">' +
    '  <span class="input-group-btn">' +
    '    <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>' +
    '    <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar(\'editar\')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>' +
    '  </span>' +
    '</div>');

}

function SendHorarioAtencion(accion) {

  var idHorariosDesdeManana = [];
  var idHorariosDesdeTarde = [];
  var idHorariosHastaManana = [];
  var idHorariosHastaTarde = [];

  _.each(dias, function (dia) {
    idHorariosDesdeManana.push({'hora': $("#Hdesde" + dia + "Manana").val(), 'dia': dia});
    idHorariosHastaManana.push({'hora': $("#Hhasta" + dia + "Manana").val(), 'dia': dia});
    idHorariosDesdeTarde.push({'hora': $("#Hdesde" + dia + "Tarde").val(), 'dia': dia});
    idHorariosHastaTarde.push({'hora': $("#Hhasta" + dia + "Tarde").val(), 'dia': dia});
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarHorarios = [];

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
  });
  Promise.all(guardarHorarios).then(function () {
    var campoAAcuatualizar = "idHorarioAtencion";
    console.log(localHorariosCreados);
    actualizarLocal(idLocalCreado, _.without(localHorariosCreados, ""), campoAAcuatualizar).then(function (data) {
      console.log(data);

      if (accion == 'crear') {
        var url = "../lacocina/asignar-cubiertos.php?idLocal=" + idLocalCreado + "";
        $(location).attr('href', url);
      } else if (accion == 'editar') {

        eliminarViejos(horariosViejos).then(function (error, success) {
          volverPanelLocal();
        }).catch(function (err) {
          console.log(err);
        });

      }
    }).catch(function (err) {
      console.log(err);
    });


  }).catch(function (err) {
    console.log(err);
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
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
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
      $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
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

function validar(accion) {
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
    SendHorarioAtencion(accion);
  } else {
    $(location).attr('href', "#formularioAgregar");
  }
}

function limpiar(campo, campoBack) {
  $("#" + campo + "Alert").hide();
  $("#" + campoBack).removeClass('alert-danger');
  $("#botonGuardar").removeClass('disabled');
}

function volverPanelLocal() {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
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
