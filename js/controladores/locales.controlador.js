function obtenerListado() {
  if (_.isUndefined(server)) {
    $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    });
  }
  $('.container.locales').html('');
  $.ajax({
    url: server + '/api/v1/admin/locales',
    type: 'GET',
    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      locales = data;
      _.each(data, function (local) {
        renderLocal(local);
      });
      $('#loading').hide();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
      $('#loading').hide();
    }
  });
}

function buscar(parametro, filtro) {

  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {


    if (_.isEmpty(parametro) && _.isEmpty(filtro)) {
      obtenerListado();
      getTituloBusqueda(parametro, filtro);
    } else {
      $('.container.locales').html('');
      var obj = {};
      var llamada;
      if (filtro == "" || filtro == "nombre") {
        llamada = "buscar";
        obj.parametro = parametro;
      } else {
        llamada = "filtro";
        obj[filtro] = parametro
      }

      $.ajax({
        url: server + '/api/v1/admin/' + llamada,
        type: 'POST',

        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
          locales = data;
          _.each(data, function (local) {
            renderLocal(local);
          });
          $('#loading').hide();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $('#target').append("jqXHR: " + jqXHR);
          $('#target').append("textStatus: " + textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
          $('#loading').hide();
        },
        data: JSON.stringify(obj)
      });
      getTituloBusqueda('');
    }
  });
}

function getTituloBusqueda(parametro, filtro) {
  $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
    var titulo = $("#labelRestaurantesBusquedas");
    var busqueda = parametro !== '' ? '"' + parametro + '"' : '';
    titulo.text('Restaurantes para la búsqueda ' + busqueda);
  });
}

function getDia(dia) {
  var d = new Date();
  var n = dia || d.getDay();
  var dias = {
    0: "Domingo",
    0: "Domingos",
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado",
    6: "Sabados"
  };
  return dias[n];
};

function renderLocal(local) {
  var longNivelPrecio = local.idNivelPrecio.label.length;
  var nivelGris = 5 - longNivelPrecio;
  var labelGrises = '';
  var bajadaNegocio = '';
  var raya = ' | ';
  if (local.idNegocio.bajadaNegocio.length > 2) {
    bajadaNegocio = raya + local.idNegocio.bajadaNegocio;
  }
  for (i = 0; i < nivelGris; i++) {
    labelGrises += '$'
  }

  var descuentoDia = _.filter(local.idLocalDescuento, {'diaDescuento': getDia()});
  var descuento = '';
  if (!_.isEmpty(descuentoDia)) {
    descuento = ' <br><h2 class="etiquetadescuento">' + descuentoDia[0].idDescuento.nombreDescuento + '</h2>';
  }

  $('.container.locales').append('' +
    '<a href="ficha.php?id=' + local._id + '"><div class="row" style="padding-top: 5%;color: #252525;border-bottom: 1px solid #e3e3e3;padding-bottom: 2%;">' +
    '<div class="col-sm-3 col-md-3">' +
    '<img class="img-responsive imgslocalesbusqueda" src="' + local.fotoPrincipalLocal + '">' +
    '</div>' +
    '<div class="col-sm-6 col-md-6">' +
    '<p><span style="font-size: 1.5em;"><strong>' + local.idNegocio.nombreNegocio + '</strong> ' + bajadaNegocio + '</span></p>' +
    '<i class="fa fa-map-marker iconoficha" aria-hidden="true"></i><span class="polo">   ' + local.idPoloGastronomico.nombrePoloGastronomico + '</span> |  ' +
    '<i class="fa fa-cutlery iconoficha" aria-hidden="true"></i><span class="tiponegocio">  ' + local.idTipoCocinaPrincipal.nombreTipoCocina + '</span></br>' +
    '<p style="letter-spacing: 1px;"><strong>' + local.idNivelPrecio.label + '</strong><span style="color: #cbcbcb">' + labelGrises + '</span></p>' +
    '<p><span class="descripcion">' + local.idNegocio.descripcionNegocio.substr(0, 147) + '...</span></p>' +

    '</div>' +
    '<div class="col-sm-2 col-md-3">' +
    descuento +
    '</div>' +
    '</div></a>');

}
