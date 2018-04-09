var espacio = ' ';
var coma = ', ';
var contSugeridos = 1;
var jwt;
var localFavorito;
var nombrePolo = '';
var tipoCocina = '';
var contLista = 199;
var menuCargado = [];
var marker;          //variable del marcador
var coords = {};    //coordenadas obtenidas con la geolocalización
var iconBase = 'https://guiamendozagourmet.com/map/'; //direccion base del icono de marcador
//Funcion principal
function getDetalleLocal(idLocal, modal) {
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    $('#target').html('obteniendo...');
    $.ajax({
      url: server + '/api/v1/admin/locales?id=' + idLocal,
      type: 'GET',
      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        buscarSugeridos();
        locales = data;
        popularLocal(data);
        if (!_.isNil(modal) && !_.isEmpty(modal)) {
          mostrarModalLocal(data._id, modal);
        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
        $('#target').append("jqXHR: " + jqXHR);
        $('#target').append("textStatus: " + textStatus);
        $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
      }
    });
  });
}

function mostrarModalLocal(idLocal, modal){
  cargarPromociones(idLocal, modal);
}

function buscar(parametro, filtro) {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }

  if (_.isEmpty(parametro) || _.isEmpty(filtro)) {
    obtenerListado()
  } else {
    $('.container.locales').html('');
    var obj = {};
    var llamada;
    if (filtro == "nombre") {
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
        //_.each(data, function(local){
        renderLocal(local);
        //});
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $('#target').append("jqXHR: " + jqXHR);
        $('#target').append("textStatus: " + textStatus);
        $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
      },
      data: JSON.stringify(obj)
    });
  }
}

function getTituloBusqueda(parametro, filtro) {
  var titulo = $("#labelRestaurantesBusquedas");
  titulo.text('Restaurantes para la búsqueda "' + parametro + '"');
}

function popularLocal(local) {

  if(local.aceptaReservaNegocio == false){
    $("#reservar").css('visibility', 'hidden');
    $("#myP").css('visibility', 'hidden');
  }
  var nivelPrecio = 0;
  var longNivelPrecio = 0;

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
  for(i = 0; i < nivelGris; i++){
    labelGrises += '$'
  }

  var web;
  if(local.webLocal.length == ''){
    web = local.idNegocio.webNegocio;
  }else {
    web = local.webLocal;
  }
  if (typeof(web) == "undefined"){
     web = '-';
  }
  var facebook;
  if(local.facebookLocal == ''){
    facebook = local.idNegocio.facebookNegocio;
  }else{
    facebook = local.facebookLocal;
  }
  if (typeof(facebook) == "undefined"){
    facebook = '-';
 }
  var twitter;
  if(local.twitterLocal == ''){
    twitter = local.idNegocio.twitterNegocio;
  }else {
    twitter = local.twitterLocal;
  }
  if (typeof(twitter) == "undefined"){
    twitter = '-';
 }
  var instagram;
  if(local.instagramLocal == ''){
    instagram = local.idNegocio.instagramNegocio;
  }else {
    instagram = local.instagramLocal;
  }
  if (typeof(instagram) == "undefined"){
    instagram = '-';
 }
 var carta;
 if(typeof(local.menuLocal) == "undefined"){
    carta = '';
 }else{
   carta = local.menuLocal;
 }
  var tripadvisor;
  if(local.tripadvisorLocal == ''){
    tripadvisor = local.idNegocio.tripadvisorNegocio
  }else {
    tripadvisor = local.tripadvisorLocal;
  }
  if (typeof(tripadvisor) == "undefined"){
    tripadvisor = '-';
 }

  var bajadaNegocio = '';
  var raya = ' | ';
  if(local.idNegocio.bajadaNegocio.length > 2){
    bajadaNegocio = raya + local.idNegocio.bajadaNegocio;
  }

  localFavorito = local;
  buscarFavoritos(local);
  $('#nombreNegocio').text(local.idNegocio.nombreNegocio);
  $('#bajadaNegocio').text(bajadaNegocio);
  $('#nivelPrecio').text(labelOscuras);
  $('#direccionLocal').text(local.calleLocal +' '+local.alturaLocal);
  $('#nivelPrecio').append('<span style="color: #cbcbcb">'+labelGrises+'</span>');
  $('#descripcionNegocio').text(local.idNegocio.descripcionNegocio);
  $("#cartaLocal").attr('href', carta);
  if(facebook.length < 2){
    $('#facebookNegocio').hide();
  }else{
    $('#facebookNegocio').attr('href', facebook);
  }
  if(twitter.length < 2){
    $('#twitterNegocio').hide();
  }else{
    $('#twitterNegocio').attr('href', twitter);
  }
  if(instagram.length < 2){
    $('#instagramNegocio').hide();
  }else{
    $('#instagramNegocio').attr('href', instagram);
  }
  if(tripadvisor.length < 2){
    $('#tripadvisorNegocio').hide();
  }else{
    $('#tripadvisorNegocio').attr('href', tripadvisor);
  }
  if(web.length < 2){
    $('#paginaNegocio').hide();
  }else{
$('#paginaNegocio').attr('href', web);
  }
  
  $('#telefonoLocal').text(local.telContacto);
  $('#mailLocal').text(local.mailContacto);
  $('#tipoCocinaPrincipal').text(tipoCocina);
  $('#reservar').attr('href', 'reserva.php?id=' + local._id);
  $('#myP').attr('href', 'reserva.php?id=' + local._id);
  var mediosPago = '';

  var cont = 0;
  _.each(local.fotoLocal, function (imagen) {
    if (cont == 0) {
      $('#indicadorSlide').append('<li data-target="#myCarousel" data-slide-to="' + cont + '" class="active"></li>');
      $('#imagenesSlide').append('<div class="item active">' +
        '<img src="' + imagen + '">' +
        '</div>');
    } else {
      $('#indicadorSlide').append('<li data-target="#myCarousel" data-slide-to="' + cont + '"></li>');
      $('#imagenesSlide').append('<div class="item">' +
        '<img src="' + imagen + '">' +
        '</div>');
    }
    cont++;
  });

  $('#myCarousel').carousel();

  _.each(local.idMedioPago, function (medioPago) {
    mediosPago += medioPago.descripcionMedioPago + coma;
  });
  cargarPromociones(local._id);
  $('#medioPago').text(mediosPago);
  dibujarServicios(local.idServicio);
  var coordenadas = {lng: local.longitudLocal, lat: local.latitudLocal};
  setMapa(coordenadas);
  $('.container.ficha').show();
  $('#loading').hide();
}

function buscarFavoritos(local){
  jwt = $("#jwtU").val();
  {var bajadaNegocio = '';
  var raya = ' | ';
  if(local.idNegocio.bajadaNegocio.length > 2){
    bajadaNegocio = raya + local.idNegocio.bajadaNegocio;
  }
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  jwt = $("#jwtU").val();
  $.ajax({
     url: server + '/api/v1/admin/favoritosUsuario',
     type: 'GET',
     dataType: "json",
     crossDomain: true,
     contentType:"application/json",
     success: function (data) {
      var iconoCorazon = 'favoritosfichagris fa fa-heart';
      var idFavorito = '';
      _.each(data, function (favorito) {
        if(favorito.idLocal._id == local._id){
          iconoCorazon = 'favoritosficharojo fa fa-heart';
          idFavorito = favorito._id;
        }
      });

      $("#iconoFavorito").append('<h3 class="titulo"><span id="nombreNegocio">'+local.idNegocio.nombreNegocio+'</span>  <span id="bajadaNegocio">'+bajadaNegocio+'</span>'+
      '<i id="corazon" style="cursor:pointer;" class="'+iconoCorazon+'" aria-hidden="true" onClick="editarFavorito(\'' + local._id + '\',\'' + idFavorito + '\')"></i></h3>'+
      '<p ><i class="fa fa-map-marker iconoficha" aria-hidden="true"></i> <span id="polo">' + nombrePolo + ' |  <i class="fa fa-cutlery iconoficha" aria-hidden="true"></i><span class="tiponegocio">  ' +tipoCocina +'</span></p>');

     },
     error:function(jqXHR,textStatus,errorThrown)
     {
      var iconoCorazon = 'favoritosfichagris fa fa-heart';
      $("#iconoFavorito").append('<h3 class="titulo"><span id="nombreNegocio">'+local.idNegocio.nombreNegocio+'</span>  <span id="bajadaNegocio">'+bajadaNegocio+'</span>'+
      '<i id="corazon" style="cursor:pointer;" class="'+iconoCorazon+'" aria-hidden="true" ></i></h3>'+
      '<p ><i class="fa fa-map-marker iconoficha" aria-hidden="true"></i> <span id="polo">' + nombrePolo + ' |  <i class="fa fa-cutlery iconoficha" aria-hidden="true"></i><span class="tiponegocio">  ' +tipoCocina +'</span></p>');

         $('#target').append("jqXHR: "+jqXHR);
         $('#target').append("textStatus: "+textStatus);
         $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
     },
     headers: {
         Authorization: 'JWT ' + jwt
     }
 });}
}


function mostrarModalLogin(){
  $("#botonLogin").attr("href", 'login.php?redirect=' + encodeURIComponent(window.location.href));
  $("#mostrarmodal").modal("show");
}


function editarFavorito(idLocal,idFavorito){
  var idUsuarioReserva = $("#idUsuarioReserva").val();
  if(idFavorito == ''){
     crearFavorito(idLocal,idUsuarioReserva);
  }else{
    eliminarFavorito(idLocal,idFavorito);
  }
}

function crearFavorito(idLocal,idUsuarioReserva){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  jwt = $("#jwtU").val();
  var favorito = JSON.stringify({
    "idLocal": idLocal
  });
  $.ajax({
     url: server + '/api/v1/admin/favoritosUsuario',
     type: 'POST',
     dataType: "json",
     crossDomain: true,
     contentType:"application/json",
     success: function (data) {
      $("#iconoFavorito").html('');
      buscarFavoritos(localFavorito);
     },
     error:function(jqXHR,textStatus,errorThrown)
     {
         $('#target').append("jqXHR: "+jqXHR);
         $('#target').append("textStatus: "+textStatus);
         $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
     },
     headers: {
         Authorization: 'JWT ' + jwt
     },
     data: favorito
 });
}

function eliminarFavorito(idLocal,idFavorito){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  jwt = $("#jwtU").val();
  $.ajax({
     url: server + '/api/v1/admin/favoritosUsuario?id='+idFavorito+'',
     type: 'DELETE',
     dataType: "json",
     crossDomain: true,
     contentType:"application/json",
     success: function (data) {
      $("#iconoFavorito").html('');
      buscarFavoritos(localFavorito);
     },
     error:function(jqXHR,textStatus,errorThrown)
     {
         $('#target').append("jqXHR: "+jqXHR);
         $('#target').append("textStatus: "+textStatus);
         $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
     },
     headers: {
         Authorization: 'JWT ' + jwt
     }
 });
}


function dibujarServicios(servicios) {
  _.each(servicios, function (servicio) {
    $('.servicios').append('<div class="col-xs-3 col-md-2">' +
      '<a href="#" data-toggle="tooltip" data-placement="bottom" title="' + servicio.descripcionServicio + '"><img class="img-responsive iconos" src="' + servicio.urlIconoServicio + '"></a> ' +
      '</div>');
  });
}
function setMapa(coords) {
  //Se crea una nueva instancia del objeto mapa
  var map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 17,
    center:new google.maps.LatLng(coords.lat,coords.lng),
  });
  //Creamos el marcador en el mapa con sus propiedades
  //para nuestro obetivo tenemos que poner el atributo draggable en true
  //position pondremos las mismas coordenas que obtuvimos en la geolocalización
  marker = new google.maps.Marker({
    icon: iconBase + 'marcador.png',
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: new google.maps.LatLng(coords.lat, coords.lng)
  });
  //agregamos un evento al marcador junto con la funcion callback al igual que el evento dragend que indica
  //cuando el usuario a soltado el marcador
  marker.addListener('click', toggleBounce);
}

//callback al hacer clic en el marcador lo que hace es quitar y poner la animacion BOUNCE
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function buscarSugeridos() {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  $.ajax({
    url: server + '/api/v1/admin/locales',
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      renderSugeridos(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    }
  });
}

function renderSugeridos(locales){
  $('.container.sugeridos').html('');
  contSugeridos = 1;
  

_.each(locales, function(local){
  if(contSugeridos < 7){
  $('.container.sugeridos').append('' +
    '<div class="col-md-2 ">' +
    '    <div class="centraimagensugeridos"><a href="ficha.php?id=' + local._id + '"><img  class="sugeridos img-responsive" src="' +  local.fotoPrincipalLocal + '"> </a></div>' +
    '    <h2 class="titulosugerencia2">' + local.idNegocio.nombreNegocio + '</h2>' +
    '</div>');
    contSugeridos++;
  }
});
}

function cargarPromociones(idLocal, modal){
  var openModal = modal;
  $.ajax({
      url: server + '/api/v1/admin/promocionesLocal?id='+idLocal+'',
      type: 'GET',
      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
      success: function (data) {
       promociones = data;
        console.log(promociones);
        if(promociones.length != 0){
          $('#listaPromociones').html('');
          _.each(promociones, function(promocion){
              $('#listaPromociones').append(''+
                 '<li class="etiquetapromoficha"><a ><img onclick="crearModal(\'' + promocion.idLocalPromocion+ '\',\'' + promocion.imagenWebPromocion+ '\',\'' + promocion.nombrePromocion+ '\',\'' + promocion.duracionDesdePromocion+ '\',\'' + promocion.duracionHastaPromocion+ '\',\'' + promocion.terminosCondicionesPromocion+ '\')" class="etiquetapromo" src="'+promocion.iconoPromocion+'"></a></li>'+
              '');
          });
          if(openModal){
            crearModal(promocion.idLocalPromocion, promocion.imagenWebPromocion, promocion.nombrePromocion, promocion.duracionDesdePromocion, promocion.duracionHastaPromocion, promocion.terminosCondicionesPromocion);
          }
        }
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
        $('#target').append("jqXHR: "+jqXHR);
        $('#target').append("textStatus: "+textStatus);
        $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      },
  });
}

function limpiarModal(){
  menuCargado = [];
  $("#fotoPromo").attr('src', '');
  $("#nombrePromo").html('');
  $("#opcionMenu").html('');
}

function crearModal(idLocalPromocion, imagenPromocion, nombrePromocion,duracionDesdePromocion, duracionHastaPromocion, terminos){
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

