var jwt;
var idReserva;
var calificacion = {
  "ambiente": null,
  "comida": null,
  "atencion": null
};

function setJWT(jwtToken, idRes) {
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    if (_.isNil(jwtToken) || _.isEmpty(jwtToken)) {
      mostrarModalLogin();
    } else {
      jwt = jwtToken;
      idReserva = idRes;
      console.log(jwt_decode(jwt));
      $('#nombre').html(jwt_decode(jwt).nombre);
      validarReserva();
    }
  });
}

function mostrarModalLogin() {
  $("#botonLogin").attr("href", 'login.php?redirect=' + encodeURIComponent(window.location.href));
  $("#mostrarmodal").modal("show");
}

function mostrarModalNoReserva() {
  $("#noReserva").modal("show");
}

function calificar(parametro, valor) {
  $("#" + parametro + " li i").slice(0, valor).removeClass('fa-star-o').addClass('fa-star');
  calificacion[parametro] = valor;
}
function validarReserva() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $.ajax({
    url: server + '/api/v1/admin/reservaUsuarioSinCalificar?id=' + idReserva,
    type: 'GET',
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      //$('.titulo').text(data.idNegocio.nombreNegocio + " | " + data.idNegocio.bajadaNegocio);
      //$('#direccionLocal').text(data.calleLocal + espacio + data.alturaLocal + coma + data.idLocalidad.nombreLocalidad);
      if (_.isEmpty(data)){
        mostrarModalNoReserva();
      } else {
        $('#loading').hide();
        $('.datosEvaluar').show();
      }

    },
    error: function (jqXHR, textStatus, errorThrown) {
      //$('#target').append("jqXHR: " + jqXHR);
      //$('#target').append("textStatus: " + textStatus);
      //$('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
      mostrarModalNoReserva();
    },
    headers: {
      Authorization: 'JWT ' + jwt
    }
  });
}

function enviarCalificacion() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  if (requeridosCompletos()) {
    var data = {};
    data.puntajeAmbienteEvaluacion = calificacion.ambiente;
    data.puntajeAtencionEvaluacion = calificacion.atencion;
    data.puntajeComidaEvaluacion = calificacion.comida;
    data.comentarioEvaluacion = $('#comment').val();
    data.idReserva = idReserva;
    $.ajax({
      url: server + '/api/v1/admin/usuarioEvaluacion',
      type: 'POST',
      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {

        $("#calificacionEnviada").modal("show");
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
    $("#aceptarCondiciones").modal("show");
  }
}

function requeridosCompletos() {
  return !(calificacion.ambiente === null || calificacion.atencion === null || calificacion.comida === null );
}

function crearSesion(jwt) {
  var parametros = {
    "jwt": jwt.token
  };
  $.ajax({
    data: parametros,
    url: 'redirect-login.php',
    type: "POST",
    error: function () {
    },
    success: function (response) {
      setJWT(jwt);
    }
  });
}

var redirect = function (url, method, idCocina) {
  var form = $('<form>', {
    method: method,
    action: url
  });
  $(document.body).append(form);

  $('<input />').attr('type', 'hidden')
    .attr('name', "parametro")
    .attr('value', idCocina)
    .appendTo(form);

  $('<input />').attr('type', 'hidden')
    .attr('name', "filtro")
    .attr('value', 'tipoCocina')
    .appendTo(form);

  form.submit();
};
