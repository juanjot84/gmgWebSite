var cont= 1;
var contLista = 199;
var modalHabilitado = true;
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
    '<div class="col-sm-2 col-md-3 text-center" id="contTotalPromo'+cont+'">'+

   '</div>'+
  '');
   cargarSlide(cont, local._id, descuento);
   cont++;
}

function cargarSlide(idDiv, idLocal, descuento){
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {       
    $.ajax({
        url: server + '/api/v1/admin/promocionesLocal?id='+idLocal+'',
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
         promociones = data;
         if(promociones.length != 0){
            $("#contTotalPromo"+idDiv).append(''+
               '<div class="contenedorpromos'+idDiv+'">'+
                   '<div class="botslidervert">'+
                     '<a href="#" class="vc_goUp"><i class="fa fa-fw fa-angle-up"></i></a>'+
                   '</div>'+
                      '<ul class="promosvertical vc_list" id="contSlide'+idDiv+'">'+
                      '</ul>'+
                   '<div class="botslidervert">'+
                     '<a href="#" class="vc_goDown"><i class="fa fa-fw fa-angle-down"></i></a>'+
                   '</div>'+
               '</div>'+
            '');
            if(descuento != ''){
              $('#contSlide'+idDiv).append('<li>'+descuento+'</li>');
            }
            _.each(promociones, function(promocion){
               $('#contSlide'+idDiv).append(''+
                  '<li class="etiquetapromoficha"><a ><img onclick="crearModal(\'' + promocion.idLocalPromocion+ '\',\'' + promocion.imagenWebPromocion+ '\',\'' + promocion.nombrePromocion+ '\',\'' + promocion.duracionDesdePromocion+ '\',\'' + promocion.duracionHastaPromocion+ '\',\'' + promocion.terminosCondicionesPromocion+ '\')" class="etiquetapromo" src="'+promocion.iconoPromocion+'"></a></li>'+
               '');
              
               $(".contenedorpromos"+idDiv).verticalCarousel({
                  currentItem: 1,
                  showItems: 3,
               });
            });
         }else if(promociones.length == 0 && descuento != ''){
          $("#contTotalPromo"+idDiv).append(''+
             '<div class="contenedorpromos'+idDiv+'">'+
               '<div class="botslidervert">'+
                '<a href="#" class="vc_goUp"><i class="fa fa-fw fa-angle-up"></i></a>'+
               '</div>'+
                 '<ul class="promosvertical vc_list" id="contSlide'+idDiv+'">'+
                    '<li>'+descuento+'</li>'+
                 '</ul>'+
               '<div class="botslidervert">'+
                '<a href="#" class="vc_goDown"><i class="fa fa-fw fa-angle-down"></i></a>'+
               '</div>'+
             '</div>'+
          '');
         }
        },
        error:function(jqXHR,textStatus,errorThrown)
        {           
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
        },
    });
  });
}

function limpiarModal(){
  menuCargado = [];
  $("#fotoPromo").attr('src', '');
  $("#nombrePromo").html('');
  $("#opcionMenu").html('');
}

$('#modalPromocion').on('hidden.bs.modal', function () {
  modalHabilitado = true;
});

function crearModal(idLocalPromocion, imagenPromocion, nombrePromocion,duracionDesdePromocion, duracionHastaPromocion, terminos){
  if (modalHabilitado){
    modalHabilitado = !modalHabilitado;
    limpiarModal();
    $("#fotoPromo").attr('src', imagenPromocion);
    $("#nombrePromo").append(nombrePromocion);
    $("#fechaInicioPromo").html(duracionDesdePromocion);
    $("#fechaFinPromo").html(duracionHastaPromocion);
    $("#terminos").html(terminos);
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
      $.ajax({
          url: server + '/api/v1/admin/localPromocion?id='+idLocalPromocion+'',
          type: 'GET',
          dataType: "json",
          crossDomain: true,
          contentType:"application/json",
          success: function (data){
            buscarOpcionesMenu(data.idOpcionPromocion);
          },
          error:function(jqXHR,textStatus,errorThrown)
          {           
            $('#target').append("jqXHR: "+jqXHR);
            $('#target').append("textStatus: "+textStatus);
            $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    });
  }

}

function buscarOpcionesMenu(idOpcionPromocion){
  var obtenerOpcionesPromocion = [];
  _.each(idOpcionPromocion, function(idOpcionMenu){
    var guardar =  obtenerOpcionMenu(idOpcionMenu).then(function(menu){
      menu.idOpcion = contLista;
      menuCargado.push(menu);
      contLista++;
    });
    obtenerOpcionesPromocion.push(guardar);
  });
  Promise.all(obtenerOpcionesPromocion).then(function () {
    dibujarListaOpciones(menuCargado);
  });
}

function obtenerOpcionMenu(idOpcionMenu){
  var promise = new Promise(function(resolve, reject) {
    if (_.isUndefined(server)) {
      $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
      });
    }
    $.ajax({
      url: server + '/api/v1/admin/opcionPromocion?id='+ idOpcionMenu +"",
          type: 'GET',  
          dataType: "json",
          crossDomain: true,
          contentType:"application/json",
          success: function (data) {
            resolve(data);
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          }
    });   
  });
  return promise
}

function dibujarListaOpciones(opcionesMenu){
  _.each(_.orderBy(opcionesMenu, ['nombreOpcion'], ['asc']), function(opcion){
    $("#opcionMenu").append(''+
         '<div class="row separadormodalpromoficha">'+
            '<div class="col-md-4">'+
                '<img class="img-responsive imgspromoficha" src="'+opcion.fotoOpcion+'">'+
            '</div>'+
            '<div class="col-md-6">'+
              '<h3>'+opcion.nombreOpcion+'</h3>'+
              '<p class="decrippromoficha">'+opcion.descripcionOpcion+'</p>'+
            '</div>'+
            '<div class="col-md-2">'+
              '<h3>$'+opcion.precioOpcion+'</h3>'+
              '<br>'+
            '</div>'+
            '<div class="separador"></div>'+
         '</div>'+
    '');
  });

  $("#modalPromocion").modal();

}
