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
      } else if (filtro == "tipoNegocio") {
        llamada = "buscarPorTipoNegocio";
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
          
          if(data.length == 0){
            $('.container.locales').append('' +
            '<div class="imgnoresultado-web">'+
            '<img class="img-responsive" src="http://guiamendozagourmet.com/img/fondo-sin-resultados.jpg">'+
            '</div>'+
            '<div class="imgnoresultado-mobile">'+
            '<img class="img-responsive" src="http://guiamendozagourmet.com/img/fondo-sin-resultados-vertical.jpg">'+
            '</div>');
          }else{
            _.each(data, function (local) {
              renderLocal(local);
            });
            

          }

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
    titulo.text('Resultado de la búsqueda ' + busqueda);
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
}

function renderLocal(local) {

  var nivelPrecio = 0;
  var longNivelPrecio = 0;
  var nombrePolo = '';
  var tipoCocina = '';
  var labelOscuras = '';
  if(local.idNivelPrecio == null){
    longNivelPrecio = 0;
    labelOscuras = '';
  }else{
    longNivelPrecio = local.idNivelPrecio.label.length;
    labelOscuras = local.idNivelPrecio.label;
  }
  if(local.idPoloGastronomico == null){
    nombrePolo = '';
  }else {
    nombrePolo = local.idPoloGastronomico.nombrePoloGastronomico;
  }

  if(local.idTipoCocinaPrincipal == null){
    tipoCocina = '';
  }else{
    tipoCocina = local.idTipoCocinaPrincipal.nombreTipoCocina;
  }

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
    descuento = '<p class="etiquetadescuento">' + descuentoDia[0].idDescuento.nombreDescuento + '</p>';
  }

  $('.container.locales').append('' +
    '<div class="row resultadoficha"><a class="linkresultadobuscador" href="ficha.php?id=' + local._id + '">' +
    '<div class="col-sm-3 col-md-3">' +
    '<img class="img-responsive imgslocalesbusqueda" src="' + local.fotoPrincipalLocal + '">' +
    '</div>' +
    '<div class="col-sm-6 col-md-6">' +
    '<p><span style="font-size: 1.5em;"><strong>' + local.idNegocio.nombreNegocio + '</strong> ' + bajadaNegocio + '</span></p>' +
    '<i class="fa fa-map-marker iconoficha" aria-hidden="true"></i><span class="polo">   ' + nombrePolo + '</span> |  ' +
    '<i class="fa fa-cutlery iconoficha" aria-hidden="true"></i><span class="tiponegocio">  ' + tipoCocina + '</span></br>' +
    '<p style="letter-spacing: 1px;"><strong>' + labelOscuras + '</strong><span style="color: #cbcbcb">' + labelGrises + '</span></p>' +
    '<p><span class="descripcion">' + local.idNegocio.descripcionNegocio.substr(0, 147) + '...</span></p>' +

    '</a></div>' +
    '<div class="col-sm-2 col-md-3 text-center"><div class="contenedorpromos">'+
    '<div class="botslidervert"><a href="#" class="vc_goUp"><i class="fa fa-fw fa-angle-up"></i></a></div>'+
      '<ul class="promosvertical vc_list">'+
        '<li>'+ descuento +'</li>'+
        '<li><img class="etiquetapromo" src="img/promos/promodemo.png"></li>'+
        '<li><img class="etiquetapromo" src="img/promos/promodemo.png"></li>'+
        '<li><img class="etiquetapromo" src="img/promos/promodemo.png"></li>'+
        '<li><img class="etiquetapromo" src="img/promos/promodemo.png"></li>'+
      '</ul>'+
    '<div class="botslidervert"><a href="#" class="vc_goDown"><i class="fa fa-fw fa-angle-down"></i></a></div>' +
    '</div>');

}

