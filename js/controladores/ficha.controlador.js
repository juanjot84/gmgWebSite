var espacio = ' ';
var coma = ', ';
var jwt;
var localFavorito;
var marker;          //variable del marcador
var coords = {};    //coordenadas obtenidas con la geolocalización
var iconBase = 'http://guiamendozagourmet.com/map/'; //direccion base del icono de marcador
//Funcion principal
function getDetalleLocal(idLocal) {
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

    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    }
  });

});

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
  var longNivelPrecio = local.idNivelPrecio.label.length;
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
  var facebook;
  if(local.facebookLocal == ''){
    facebook = local.idNegocio.facebookNegocio;
  }else{
    facebook = local.facebookLocal;
  }
  var twitter;
  if(local.twitterLocal == ''){
    twitter = local.idNegocio.twitterNegocio;
  }else {
    twitter = local.twitterLocal;
  }
  var instagram;
  if(local.instagramLocal == ''){
    instagram = local.idNegocio.instagramNegocio;
  }else {
    instagram = local.instagramLocal;
  }
  var tripadvisor;
  if(local.tripadvisorLocal == ''){
    tripadvisor = local.idNegocio.tripadvisorNegocio
  }else {
    tripadvisor = local.tripadvisorLocal;
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
  $('#nivelPrecio').text(local.idNivelPrecio.label);
  $('#nivelPrecio').append('<span style="color: #cbcbcb">'+labelGrises+'</span>');
  $('#descripcionNegocio').text(local.idNegocio.descripcionNegocio);
  $('#facebookNegocio').attr('href', facebook);
  $('#twitterNegocio').attr('href', twitter);
  $('#instagramNegocio').attr('href', instagram);
  $('#tripadvisorNegocio').attr('href', tripadvisor);
  $('#paginaNegocio').attr('href', web);
  $('#direccionLocal').text(local.calleLocal + espacio + local.alturaLocal + coma + local.idLocalidad.nombreLocalidad);
  $('#telefonoLocal').text(local.telContacto);
  $('#mailLocal').text(local.mailContacto);
  $('#tipoCocinaPrincipal').text(local.idTipoCocinaPrincipal.nombreTipoCocina);
  $('#reservar').attr('href', 'reserva.php?id=' + local._id);
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

  $('#medioPago').text(mediosPago);
  dibujarServicios(local.idServicio);
  var coordenadas = {lng: local.longitudLocal, lat: local.latitudLocal};
  setMapa(coordenadas);
  $('.container.ficha').show();
  $('#loading').hide();
}

function buscarFavoritos(local){
  var bajadaNegocio = '';
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
      '<p ><i class="fa fa-map-marker" aria-hidden="true"></i><span id="polo">' + local.idPoloGastronomico.nombrePoloGastronomico + '<i class="fa fa-cutlery" aria-hidden="true"></i><span class="tiponegocio">  ' +local.idTipoCocinaPrincipal.nombreTipoCocina +'</span></p>');

     },
     error:function(jqXHR,textStatus,errorThrown)
     {
      var iconoCorazon = 'favoritosfichagris fa fa-heart';
      $("#iconoFavorito").append('<h3 class="titulo"><span id="nombreNegocio">'+local.idNegocio.nombreNegocio+'</span>  <span id="bajadaNegocio">'+bajadaNegocio+'</span>'+
      '<i id="corazon" style="cursor:pointer;" class="'+iconoCorazon+'" aria-hidden="true" ></i></h3>'+
      '<p ><i class="fa fa-map-marker" aria-hidden="true"></i> <span id="polo">' + local.idPoloGastronomico.nombrePoloGastronomico + ' |  <i class="fa fa-cutlery" aria-hidden="true"></i><span class="tiponegocio">  ' +local.idTipoCocinaPrincipal.nombreTipoCocina +'</span></p>');
         
         $('#target').append("jqXHR: "+jqXHR);
         $('#target').append("textStatus: "+textStatus);
         $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
     },
     headers: {
         Authorization: 'JWT ' + jwt
     }
 });
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

//Funcion principal inicio mapa
initMap = function (latitudLocal, longitudLocal) {
  coords = {lng: latitudLocal, lat: longitudLocal};
  // coords =  {lng: -68.839412, lat: -32.890667};
  setMapa(coords);  //pasamos las coordenadas al metodo para crear el mapa
};

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

  _.each(locales, function(local){
    $('.container.sugeridos').append('' +
      '<div class="col-md-2">' +
      '    <a href="ficha.php?id=' + local._id + '"><img  class="sugeridos img-responsive" src="' +  local.fotoPrincipalLocal + '"> </a>' +
      '    <h2 class="titulosugerencia2">' + local.idNegocio.nombreNegocio + '</h2>' +
      '</div>');
  });
}


