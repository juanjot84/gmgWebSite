function iniciar(accion) {
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    if (accion == 'editar') {
      cargarCubiertosSeteados();
    }
  });
}
var localCubiertosCreados = [];
var cubiertosViejos = [];

var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos", "Feriados"];


function cargarCubiertosSeteados() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  dibujarCubiertos();
  var idLocal = $("#idLocalCreado").val();
  $('#target').html('obteniendo...');
  $.ajax({
    url: server + '/api/v1/admin/locales?id=' + idLocal + "",
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      var cubiertosDia = data.idCubiertosDia;
      cubiertosViejos = data.idCubiertosDia;

      _.each(dias, function (diaSemana) {
        var cubiertoDia = _.filter(cubiertosDia, {'diaSemanaCubiertoDia': diaSemana});
        var cubiertoManana = _.find(cubiertoDia, {'turnoCubiertoDia': 'manana'});
        var cubiertoTarde = _.find(cubiertoDia, {'turnoCubiertoDia': 'tarde'});
        if (cubiertoManana) {
          $("#Cubiertos" + cubiertoManana.diaSemanaCubiertoDia + "Manana").val(cubiertoManana.cantidadCubiertoDia);
          $("#Duracion" + cubiertoManana.diaSemanaCubiertoDia + "Manana").val(cubiertoManana.duracionReserva);
        }
        if (cubiertoTarde) {
          $("#Cubiertos" + cubiertoTarde.diaSemanaCubiertoDia + "Tarde").val(cubiertoTarde.cantidadCubiertoDia);
          $("#Duracion" + cubiertoTarde.diaSemanaCubiertoDia + "Tarde").val(cubiertoTarde.duracionReserva);
        }
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    },
  });
}

function dibujarCubiertos() {
  $('#formularioAgregar').html('');
   $('#formularioAgregar').append(' <h5 class="titulosalta"> Abierto</h5> ');
  _.each(dias, function (dia) {
    $('#formularioAgregar').append('' +
      '<p>' +
      '  <strong>' + dia + ' </strong>' +
      '  <div class="row">' +
      '     <div class="col-md-6">' +
      '       <label for="comment">Cantidad de Cubiertos de mañana</label>' +
      '       <input id="Cubiertos' + dia +'Manana" name="Cubiertos' + dia +'" type="number" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar(\'Duracion' + dia +'Manana\',\'Cubiertos' + dia +'Manana\')">' +
      '     </div>' +
      '     <div class="col-md-6">' +
      '    <label for="comment"> Duración de la Reserva de mañana en minutos</label>' +
      '      <input id="Duracion' + dia + 'Manana" name="Duracion' + dia + 'Manana" type="number" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3" onfocus="limpiar(\'Duracion' + dia + 'Manana\',\'Duracion' + dia + 'Manana\')">' +
      '     </div>' +
      '  </div>' +
      '  <div class="row">' +
      '     <div class="col-md-6">' +
      '       <label for="comment">Cantidad de Cubiertos de tarde</label>' +
      '       <input id="Cubiertos' + dia +'Tarde" name="Cubiertos' + dia +'" type="number" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar(\'Duracion' + dia +'Tarde\',\'Cubiertos' + dia +'Tarde\')">' +
      '     </div>' +
      '     <div class="col-md-6">' +
      '      <label for="comment">Duración de la Reserva de tarde en minutos</label>' +
      '      <input id="Duracion' + dia + 'Tarde" name="Duracion' + dia + 'Tarde" type="number" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3" onfocus="limpiar(\'Duracion' + dia + 'Tarde\',\'Duracion' + dia + 'Tarde\')">' +
      '     </div>' +
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

function SendCubiertos(accion) {

  var idCantCubiertosManana = [];
  var idDuracionReserManana = [];
  var idCantCubiertosTarde = [];
  var idDuracionReserTarde = [];

  _.each(dias, function (dia) {
    idCantCubiertosManana.push({'hora': $("#Cubiertos" + dia + "Manana").val(), 'dia': dia});
    idDuracionReserManana.push({'hora': $("#Duracion" + dia + "Manana").val(), 'dia': dia});
    idCantCubiertosTarde.push({'hora': $("#Cubiertos" + dia + "Tarde").val(), 'dia': dia});
    idDuracionReserTarde.push({'hora': $("#Duracion" + dia + "Tarde").val(), 'dia': dia});
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarCubiertos = [];

  _.each(dias, function (dia) {
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


  Promise.all(guardarCubiertos).then(function () {
    var campoAAcuatualizar = "idCubiertosDia";
    actualizarLocal(idLocalCreado, localCubiertosCreados, campoAAcuatualizar).then(function (data) {
      console.log(localCubiertosCreados);

      if (accion == 'crear') {
        var url = "../lacocina/negocios.php";
        $(location).attr('href', url);
      } else if (accion == 'editar') {
        eliminarViejos(cubiertosViejos).then(function (error, success) {
          volverPanelLocal();
        }).catch(function (err) {
          console.log(err);
        });
        //   volverPanelLocal()
      }

    }).catch(function (err) {
      console.log(err);
    });
  });
}

function eliminarViejos(vectorCubiertos) {
  var promise = new Promise(function (resolve, reject) {
    var vecPromesas = [];
    _.each(vectorCubiertos, function (cubierto) {
      var promesa = eliminar(cubierto._id);
      vecPromesas.push(promesa);
    });
    Promise.all(vecPromesas).then(function () {
      resolve(true)
    });
  });
  return promise;
}

function eliminar(idCubiertoDia) {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $.ajax({
    url: server + '/api/v1/admin/cubiertosDia?id=' + idCubiertoDia,
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

function validar(accion) {
  $("#botonGuardar").addClass('disabled');

  var hayError = false;
  var idCantCubiertosManana = [];
  var idDuracionReserManana = [];
  var idCantCubiertosTarde = [];
  var idDuracionReserTarde = [];

  _.each(dias, function (dia) {
    idCantCubiertosManana.push({'hora': $("#Cubiertos" + dia + "Manana").val(), 'dia': dia});
    idDuracionReserManana.push({'hora': $("#Duracion" + dia + "Manana").val(), 'dia': dia});
    idCantCubiertosTarde.push({'hora': $("#Cubiertos" + dia + "Tarde").val(), 'dia': dia});
    idDuracionReserTarde.push({'hora': $("#Duracion" + dia + "Tarde").val(), 'dia': dia});
  });

  var idLocalCreado = $("#idLocalCreado").val();
  var guardarCubiertos = [];

  _.each(dias, function (dia) {
    var cantCubiertoM = _.find(idCantCubiertosManana, {'dia': dia});
    var duracionReervaM = _.find(idDuracionReserManana, {'dia': dia});
    var cantcubiertosT = _.find(idCantCubiertosTarde, {'dia': dia});
    var duracionReservaT = _.find(idDuracionReserTarde, {'dia': dia});

    if (cantCubiertoM.hora == "" && duracionReervaM.hora != "") {
      $("#Cubiertos" + dia + "Manana").parent().after('<span id="Cubiertos' + dia + 'MananaAlert" style="color:red"> Debe ingresar una cantidad de Cubiertos para el día</span>');
      $("#Cubiertos" + dia+ "Manana").addClass('alert-danger');
      hayError = true;
    }
    if (cantCubiertoM.hora != "" && duracionReervaM.hora == "") {
      $("#Duracion" + dia + "Manana").parent().after('<span id="Duracion' + dia + 'MananaAlert" style="color:red"> Debe ingresar una duracion de la Reserva para el día</span>');
      $("#Duracion" + dia + "Manana").addClass('alert-danger');
      hayError = true;
    }

    if (cantcubiertosT.hora == "" && duracionReservaT.hora != "") {
      $("#Cubiertos" + dia + "Tarde").parent().after('<span id="Cubiertos' + dia + 'TardeAlert" style="color:red"> Debe ingresar na cantidad de Cubiertos para el día</span>');
      $("#Cubiertos" + dia + "Tarde").addClass('alert-danger');
      hayError = true;
    }
    if (cantcubiertosT.hora != "" && duracionReservaT.hora == "") {
      $("#Duracion" + dia + "Tarde").parent().after('<span id="Duracion' + dia + 'TardeAlert" style="color:red"> Debe ingresar un Horario desde para el día</span>');
      $("#Duracion" + dia + "Tarde").addClass('alert-danger');
      hayError = true;
    }
  });

  if (hayError == false) {
    SendCubiertos(accion);
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