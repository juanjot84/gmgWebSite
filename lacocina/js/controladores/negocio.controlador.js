function iniciar(accion) {
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    if (accion == 'crear') {
      obtenerListado();
    } else {
      cargarFormEditar(accion);
    }
  });
}

function controlarServer(){
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {

  });
}

var negocios;
var tipoNegocios;


function obtenerListado() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $('#listadoNegocios').html('');
  $('#loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span>');
  $.ajax({
    url: server + '/api/v1/admin/negocioReserva',
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      negocios = data;
      var cont = 1;
      var negocioDestacado;
      var aceptaReserva;
      _.each(data, function (negocio) {
        if (negocio.destacadoNegocio == true) {
          negocioDestacado = 'fa fa-star';
        } else {
          negocioDestacado = 'fa fa-star-o';
        }
        if(negocio.localAceptaReservas == true){ 
          aceptaReserva = "checked";
        } else {
          aceptaReserva = "";
        }
        $('#listadoNegocios').append(' <tr>' +
          '<th scope="row" style="font-size: 1.5em;">' + cont++ + '</th>' +
          '<td>' + negocio.nombreNegocio + '</td>' +
          '<td class="centrarbotdescado"><button title="Cambiar Destacado" onClick="actualizarDestacado(\'' + negocio._id + '\',\'' + negocio.destacadoNegocio + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="' + negocioDestacado + '" aria-hidden="true"></i></button></td>' +
          '<td class="centrarbotaccion">' +
          '<ul class="activaronoreservas">'+
          '<li>'+
          '<label class="switch">'+
          '<input type="checkbox" id="aceptaReserva" name="aceptaReserva" '+aceptaReserva+' disabled="true">'+
          '<span class="slider round"></span>'+
          '</label>'+
          '</li>'+
          '</ul>'+
          '</td> ' +
          '<td class="centrarbotaccion">' +
          '<button onClick="editar(\'' + negocio._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
          '<button title="Eliminar" onClick="mostrarModalEliminar(\'' + negocio._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
          '</td> ' +
          '</tr>');
      });

      $('#loading').hide();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    },
  });
}

function editar(idNegocio) {
  var url = "../lacocina/panel-negocio.php?idNegocio=" + idNegocio + "";
  $(location).attr('href', url);
}

function cargarForm(formulario) {
  if (formulario == "negocio") {
    var negocioEditar = $("#idNegocio").val();
    var url = "../lacocina/datos-generales-negocio.php?idNegocio=" + negocioEditar + "";
    $(location).attr('href', url);
  } else if (formulario == "contacto") {
    var negocioEditar = $("#idNegocio").val();
    var url = "../lacocina/editar-usuario-negocio.php?idNegocio=" + negocioEditar + "";
    $(location).attr('href', url);
  } else if (formulario == "local") {
    var negocioEditar = $("#idNegocio").val();
    var url = "../lacocina/locales.php?idNegocio=" + negocioEditar + "";
    $(location).attr('href', url);
  }

}

function cargarFormEditar(idNegocio) {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }

  var listadoNegocios;
  $.ajax({
    url: server + '/api/v1/admin/negocio',
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      listadoNegocios = data;

      var negocio = _.find(listadoNegocios, {'_id': idNegocio});
      console.log(negocio);
      obtenerListadoTipoNegocios().done(function (data) {
        tipoNegocios = data;

        popularDropdown(negocio.idTipoNegocio);
        $('#formularioEditar').show();
        $("#formularioEditar :input").attr("disabled", false);
        $("#formularioEditar button").show();
        $("#nombreNegocio").val(negocio.nombreNegocio);
        $("#descripcionNegocio").val(negocio.descripcionNegocio);
        $("input[name=destacadoNegocio][value=" + negocio.destacadoNegocio + "]").prop("checked", true);
        $("#bajadaNegocio").val(negocio.bajadaNegocio);
        $("#webNegocio").val(negocio.webNegocio);
        $("#tagsNegocio").val(negocio.tagsNegocio);
        $("#tripadvisorNegocio").val(negocio.tripadvisorNegocio);
        $("#twitterNegocio").val(negocio.twitterNegocio);
        $("#instagramNegocio").val(negocio.instagramNegocio);
        $("#facebookNegocio").val(negocio.facebookNegocio);
        $("#idNegocio").val(negocio._id);

        var tipoUsuario = $("#tipoUs").val();
        if (tipoUsuario == 'usuarioNegocio') {
          $("#tipoNegocio").attr("disabled", true);
          $("#destacadoNegocio-true").attr("disabled", true);
          $("#destacadoNegocio-false").attr("disabled", true);
        }

        validarCantidadCaracteres('descripcionNegocio','descripcionNegociolength',500);

      })
    }
  });
}

function actualizarNegocio(accion, tipoUsuario) {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  var idNegocio = $("#idNegocio").val();
  var negocio = JSON.stringify({
    "nombreNegocio": $("#nombreNegocio").val(),
    "descripcionNegocio": $("#descripcionNegocio").val(),
    "destacadoNegocio": $('input[name=destacadoNegocio]:checked', '#formularioEditar').val(),
    "idTipoNegocio": $("#tipoNegocio").val(),
    "bajadaNegocio": $("#bajadaNegocio").val(),
    "webNegocio": $("#webNegocio").val(),
    "tagsNegocio": $("#tagsNegocio").val(),
    "tripadvisorNegocio": $("#tripadvisorNegocio").val(),
    "twitterNegocio": $("#twitterNegocio").val(),
    "instagramNegocio": $("#instagramNegocio").val(),
    "facebookNegocio": $("#facebookNegocio").val()
  });
  $('#target').html('sending..');
  $.ajax({
    url: server + '/api/v1/admin/negocio?id=' + idNegocio,
    type: "PUT",
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {

      var resultado = data;
      var negocioCreado = resultado._id;

      if (accion == 'editar' && tipoUsuario == 'usuarioNegocio') {
        var url = "../lacocina/perfil/mi-perfil.php?idNegocio=" + idNegocio + "";
        $(location).attr('href', url);
        $("#formularioAgregar :input").val('');
      } else {
        var url = "../lacocina/panel-negocio.php?idNegocio=" + negocioCreado + "";
        $(location).attr('href', url);
        $("#formularioAgregar :input").val('');
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
    },
    data: negocio
  });
}

function mostrar(idNegocio) {
  var negocio = _.find(negocios, {'_id': idNegocio});
  console.log(negocio);
  obtenerListadoTipoNegocios().done(function (data) {
    tipoNegocios = data

    popularDropdown(negocio.idTipoNegocio);
    $('#formularioAgregar').show();
    $("#formularioAgregar :input").attr("disabled", true);
    $("#formularioAgregar button").hide();
    $("#nombreNegocio").val(negocio.nombreNegocio);
    $("#descripcionNegocio").val(negocio.descripcionNegocio);
    $("input[name=destacadoNegocio][value=" + negocio.destacadoNegocio + "]").prop("checked", true);
    $("#bajadaNegocio").val(negocio.bajadaNegocio);
    $("#webNegocio").val(negocio.webNegocio);
    $("#tagsNegocio").val(negocio.tagsNegocio);
    $("#tripadvisorNegocio").val(negocio.tripadvisorNegocio);
    $("#twitterNegocio").val(negocio.twitterNegocio);
    $("#instagramNegocio").val(negocio.instagramNegocio);
    $("#facebookNegocio").val(negocio.facebookNegocio);
    $("#idNegocio").val(negocio._id);
    validarCantidadCaracteres('descripcionNegocio','descripcionNegociolength',500);
  })
}

function eliminar() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }

  var idNegocioEliminar = $("#idNegocio").val();
  $.ajax({
    url: server + '/api/v1/admin/negocio?id=' + idNegocioEliminar,
    type: 'DELETE',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      if (data != 'Borrado') {
        $("#mostrarmodal").modal("show");
      } else if (data == 'Borrado') {
        obtenerListado();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      obtenerListado();
    }
  });
}

function mostrarModalEliminar(idNegocio) {
  $("#idNegocio").val(idNegocio);
  $("#mostrarmodal2").modal("show");
}

function volverPanelNegocio() {
  var tipoUsuario = $("#tipoUs").val();
  if (tipoUsuario == 'usuarioNegocio') {
    var url = "dashboard.php";
    $(location).attr('href', url);
  } else if (tipoUsuario == 'superAdmin') {
    var negocioCreado = $("#idNegocio").val();
    var url = "../lacocina/panel-negocio.php?idNegocio=" + negocioCreado + "";
    $(location).attr('href', url);
  }

}

// Traer tipos de negocio para lista desplegable
function obtenerListadoTipoNegocios() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  return $.ajax({
    url: server + '/api/v1/admin/tipoNegocio',
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      return data;
    }
  });
}
// Funcion para armar lista desplegable Tipos de Negocio para alta de negocio
function popularDropdownSolo() {
  $('#tipoNegocio').html('');
  $('<option>').attr('disabled', 'disabled').attr('selected', 'selected').attr('value', 'value').text('').appendTo('#tipoNegocio');
  _.each(tipoNegocios, function (tipoNegocio) {
    $('<option>').val(tipoNegocio._id).text(tipoNegocio.nombreTipoNegocio).appendTo('#tipoNegocio')
  })
}
// Funcion para armar lista desplegable Tipos de Negocio para modificar o ver de negocio
function popularDropdown(idTipoNegocio) {
  $('#tipoNegocio').html('');
  _.each(tipoNegocios, function (tipoNegocio) {
    ;
    var option = $('<option>').val(tipoNegocio._id).text(tipoNegocio.nombreTipoNegocio);
    if (idTipoNegocio == tipoNegocio._id)
      option.attr('selected', 'selected');
    option.appendTo('#tipoNegocio');
  });
}

function agregarNegocio() {
  $('#cabeceraTablaNegocios').hide();
  $('#listadoNegocios').hide();
  $('#formularioAgregar').show();
  $("#formularioAgregar :input").attr("disabled", false);
  $("#formularioAgregar button").show();
  $("#idNegocio").val('');
  obtenerListadoTipoNegocios().done(function (data) {
    tipoNegocios = data
    popularDropdownSolo();
  });
}


function cancelar() {
  $('#formularioAgregar').hide();
  $('#cabeceraTablaNegocios').show();
  $('#listadoNegocios').show();
}

function send() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  var isNew = $("#idNegocio").val() == "";
  var operacion = isNew ? "POST" : "PUT";
  var negocio = JSON.stringify({
    "nombreNegocio": $("#nombreNegocio").val(),
    "descripcionNegocio": $("#descripcionNegocio").val(),
    "destacadoNegocio": $('input[name=destacadoNegocio]:checked', '#formularioAgregar').val(),
    "idTipoNegocio": $("#tipoNegocio").val(),
    "bajadaNegocio": $("#bajadaNegocio").val(),
    "webNegocio": $("#webNegocio").val(),
    "tagsNegocio": $("#tagsNegocio").val(),
    "tripadvisorNegocio": $("#tripadvisorNegocio").val(),
    "twitterNegocio": $("#twitterNegocio").val(),
    "instagramNegocio": $("#instagramNegocio").val(),
    "facebookNegocio": $("#facebookNegocio").val()
  });

  $('#target').html('sending..');
  var queryParam = isNew ? "" : "?id=" + $("#idNegocio").val();
  $.ajax({
    url: server + '/api/v1/admin/negocio' + queryParam,
    type: operacion,
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {

      var resultado = data;
      var negocioCreado = resultado._id;

      var url = "../lacocina/usuario-negocio.php?idNegocio=" + negocioCreado + "";
      $(location).attr('href', url);

      $("#formularioAgregar :input").val('');
    },
    error: function (jqXHR, textStatus, errorThrown) {
    },
    data: negocio
  });
}

function validar(accion) {
  $("#botonGuardar").addClass('disabled');
  var nombreNegocio = $("#nombreNegocio").val();
  var tipoNegocio = $("#tipoNegocio").val();
  var urlImagenNegocio = $("#urlIconoNegocio").val();
  var descripcionNegocio = $("#descripcionNegocio").val();
  var hayError = false;

  if (nombreNegocio.length < 2) {
    $("#nombreNegocio").parent().after('<span id="nombreNegocioAlert" style="color:red"> Debe ingresar un nombre para el negocio</span>');
    $("#nombreNegocio").addClass('alert-danger');
    hayError = true;
  }
  if (tipoNegocio == null) {
    $("#tipoNegocio").parent().after('<span id="tipoNegocioAlert" style="color:red"> Debe seleccionar un tipo de Negocio</span>');
    $("#tipoNegocio").addClass('alert-danger');
    hayError = true;
  }
  if (descripcionNegocio.length < 2) {
    $("#descripcionNegocio").parent().after('<span id="descripcionNegocioAlert" style="color:red"> Debe ingresar una descripción para el Negocio</span>');
    $("#descripcionNegocio").addClass('alert-danger');
    hayError = true;
  }
  if (hayError == false) {

    if (accion == "crear") {
      send();
    } else if (accion == "editar") {
      var tipoUsuario = $("#tipoUs").val();
      actualizarNegocio(accion, tipoUsuario);
    }

  } else {
    $(location).attr('href', "#formularioAgregar");
  }

}

function limpiar(campo) {
  $("#" + campo + "Alert").hide();
  $("#" + campo).removeClass('alert-danger');
  $("#botonGuardar").removeClass('disabled');
}

function actualizarDestacado(idNegocio, valorActual) {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  var valorAActualizar;

  if (valorActual == 'true') {
    valorAActualizar = false;
  } else {
    valorAActualizar = true;
  }

  var campoAAcuatualizar = 'destacadoNegocio';

  var promise = new Promise(function (resolve, reject) {
    var nuevoCampo = {};
    nuevoCampo[campoAAcuatualizar] = valorAActualizar;

    $.ajax({
      url: server + '/api/v1/admin/negocio?id=' + idNegocio,
      type: 'PUT',

      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        obtenerListado();
        resolve(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(errorThrown);
      },
      data: JSON.stringify(nuevoCampo)
    });

  });

  return promise;
}

function validarCantidadCaracteres(campoValidar, cnt, maxlimit){
  var campoCantidad = $('#' + cnt);
  var campo  = $('#' + campoValidar );

  if (campo.val().length > maxlimit) {
    campo.val(campo.val().substring(0, maxlimit)) ;
  } else {
    campoCantidad.val(maxlimit - campo.val().length);
  }
}
