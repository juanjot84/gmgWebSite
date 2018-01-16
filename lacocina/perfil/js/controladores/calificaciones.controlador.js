var jwt;
var idLocal;
var calificacion = {
  "ambiente": null,
  "comida": null,
  "atencion": null
};

function setJWT(jwtToken, idLoc) {
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    if (_.isNil(jwtToken) || _.isEmpty(jwtToken)) {
      mostrarModalLogin();
    } else {
      jwt = jwtToken;
      idLocal = idLoc;
      buscarCalificaciones();
    }
  });
}

function mostrarModalLogin() {
  $("#botonLogin").attr("href", 'login.php?redirect=' + encodeURIComponent(window.location.href));
  $("#mostrarmodal").modal("show");
}

function mostrarModalNoCalificaciones() {
  $("#noReserva").modal("show");
}

function calificar(parametro, valor) {
  $("#" + parametro + " li i").slice(0, valor).removeClass('fa-star-o').addClass('fa-star');
  calificacion[parametro] = valor;
}
function buscarCalificaciones() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $.ajax({
    url: server + '/api/v1/admin/evaluacionesLocal?id=' + idLocal,
    type: 'GET',
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      if (_.isEmpty(data)){
        mostrarModalNoCalificaciones();
      } else {
        mostrarCalificaciones(data)
      }

    },
    error: function (jqXHR, textStatus, errorThrown) {
      //$('#target').append("jqXHR: " + jqXHR);
      //$('#target').append("textStatus: " + textStatus);
      //$('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
      mostrarModalNoCalificaciones();
    },
    headers: {
      Authorization: 'JWT ' + jwt
    }
  });
}

function mostrarCalificaciones(data){
  $('.calificaciones').html('');

  _.each(data, function(reserva){
    $('.calificaciones').append('' +
      '<div class="row" ><div class="container" style="padding-top: 2%; border-bottom: 1px solid #e0e0e0;">' +
      '  <div class="row">' +
      '    <div class="col-md-2 text-center">' +
      '      <img class="fotoperfilcalif" src="imgs/avatar.png">' +
      '      <p><strong>' + reserva.idUsuarioReserva.nombre + ' ' + reserva.idUsuarioReserva.apellido +'</strong></p>' +
      '    </div>' +
      '    <div class="col-md-8">' +
      '      <div class="row">' +
      '        <div class="col-md-4">' +
      '          <ul>' +
      '            <li>'+ reserva.idReserva.fechaReserva +'</li>' +
      '            <li>'+ reserva.idReserva.horaReserva +'</li>' +
      '          </ul>' +
      '        </div>' +
      '        <div class="col-md-4">' +
      '          <ul>' +
      '            <li>' + reserva.idUsuarioReserva.fechaNacimientoUsuario + '</li>' +
      '            <li>' + reserva.idUsuarioReserva.sexoUsuario + '</li>' +
      '          </ul>' +
      '         </div>' +
      '         <div class="col-md-4">' +
      '           <ul>' +
      '             <li>' + reserva.idUsuarioReserva.email +'</li>' +
      '             <li>' + reserva.idUsuarioReserva.nroCelular +'</li>' +
      '           </ul>' +
      '         </div>' +
      '       </div>' +
      '     </div>' +
      '  </div>' +
      '  <div class="row ratingstyle">' +
      '    <div class="col-md-2 text-center">' +
      '      <p><strong>Ambiente</strong></p>' +
      '      <ul class="calificastars">' +
      '        <li><i class="fa fa-star" aria-hidden="true"></i></li>' +
      '        <li><i class="fa fa-star" aria-hidden="true"></i></li>' +
      '        <li><i class="fa fa-star" aria-hidden="true"></i></li>' +
      '        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>' +
      '        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>' +
      '       </ul>' +
      '     </div>' +
      '     <div class="col-md-2 text-center">' +
      '       <p><strong>Comida</strong></p>' +
      '       <ul class="calificastars">' +
      '         <li><i class="fa fa-star" aria-hidden="true"></i></li> ' +
      '         <li><i class="fa fa-star" aria-hidden="true"></i></li>' +
      '         <li><i class="fa fa-star" aria-hidden="true"></i></li> ' +
      '         <li><i class="fa fa-star-o" aria-hidden="true"></i></li>' +
      '         <li><i class="fa fa-star-o" aria-hidden="true"></i></li>' +
      '       </ul>' +
      '     </div>' +
      '   <div class="col-md-2 text-center">' +
      '     <p><strong>Atención</strong></p>' +
      '     <ul class="calificastars">' +
      '       <li><i class="fa fa-star" aria-hidden="true"></i></li>' +
      '       <li><i class="fa fa-star" aria-hidden="true"></i></li>' +
      '       <li><i class="fa fa-star" aria-hidden="true"></i></li>' +
      '       <li><i class="fa fa-star-o" aria-hidden="true"></i></li>' +
      '       <li><i class="fa fa-star-o" aria-hidden="true"></i></li>' +
      '     </ul>' +
      '   </div>' +
      '   <div class="col-md-6">' +
      '     <p><strong>Comentario</strong></p>' +
      '     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
      '   </div>' +
      ' </div>' +
      ' <div class="row">' +
      '  <div class="col-md-2 text-center">' +
      '    <h4>Responder</h4>' +
      '  </div>' +
      '  <div class="col-md-6">' +
      '   <div class="form-group">' +
      '    <textarea class="form-control" rows="4" id="comment"></textarea>' +
      '  </div>' +
      '</div>' +
      '<div class="col-md-4">' +
      '  <label class="radio-inline"><input type="radio" name="optradio">Público</label>' +
      '  <label class="radio-inline"><input type="radio" name="optradio">Privado</label>' +
      '  <p>    <a href="#"  onClick="" class="page-scroll btn btn-xl" style="max-width: 300px; margin: 5% 0;">ENVIAR</a>    </p>' +
      '</div>' +
      '</div> ' +
      '</div>')
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
    data.idReserva = idLocal;
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

function irPerfil() {
  $(location).attr('href', 'mi-perfil.php');
}
