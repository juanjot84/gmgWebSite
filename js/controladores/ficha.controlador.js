var espacio = ' ';
var coma = ', ';
var marker;          //variable del marcador
var coords = {};    //coordenadas obtenidas con la geolocalización
var iconBase = 'http://guiamendozagourmet.com/map/'; //direccion base del icono de marcador
//Funcion principal
function getDetalleLocal(idLocal) {
    // $('.container.ficha').html('');
    $('#target').html('obteniendo...');
    $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/locales?id=' + idLocal,
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
            locales = data;
            popularLocal(data);

      },
      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      }
  });
}

function buscar(parametro, filtro) {
  if( _.isEmpty(parametro) || _.isEmpty(filtro)  ){
    obtenerListado()
  } else {
    $('.container.locales').html('');
    var obj={};
    var llamada;
    if (filtro ==  "nombre"){
      llamada ="buscar";
      obj.parametro = parametro;
    } else {
     llamada = "filtro";
      obj[filtro] = parametro
    }

    $.ajax({
      url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/' + llamada,
      type: 'POST',
      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
      success: function (data) {
        locales = data;
        //_.each(data, function(local){
          renderLocal(local);
        //});
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
        $('#target').append("jqXHR: "+jqXHR);
        $('#target').append("textStatus: "+textStatus);
        $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      },
      data:JSON.stringify( obj)
    });
  }
}

function getTituloBusqueda(parametro, filtro) {
  var titulo = $("#labelRestaurantesBusquedas");
  titulo.text('Restaurantes para la búsqueda "' + parametro +'"' );
}

function popularLocal(local) {
  $('#nombreNegocio').text(local.idNegocio.nombreNegocio);
  $('#bajadaNegocio').text(local.idNegocio.bajadaNegocio);
  $('#nivelPrecio').text(local.idNivelPrecio.label);
  $('#descripcionNegocio').text(local.idNegocio.descripcionNegocio);
  $('#facebookNegocio').attr('href', local.idNegocio.facebookNegocio);
  $('#twitterNegocio').attr('href', local.idNegocio.twitterNegocio);
  $('#instagramNegocio').attr('href', local.idNegocio.instagramNegocio);
  $('#tripadvisorNegocio').attr('href', local.idNegocio.tripadvisorNegocio);
  $('#direccionLocal').text(local.calleLocal + espacio + local.alturaLocal + coma + local.idLocalidad.nombreLocalidad);
  $('#telefonoLocal').text(local.telContacto);
  $('#mailLocal').text(local.mailContacto);
  var mediosPago = '';
  _.each(local.idMedioPago, function(medioPago){
    mediosPago += medioPago.descripcionMedioPago + coma;
  })
  $('#medioPago').text(mediosPago);
  dibujarServicios(local.idServicio);
  var coordenadas = {lng: local.longitudLocal, lat: local.latitudLocal};
  setMapa (coordenadas);
}

function dibujarServicios(servicios){
  _.each(servicios, function(servicio){
    $('.servicios').append('<div class="col-xs-3 col-md-2">' +
        '<a href="#" data-toggle="tooltip" data-placement="bottom" title="' + servicio.descripcionServicio + '"><img class="img-responsive iconos" src="' + servicio.urlIconoServicio + '"></a> ' +
      '</div>');
  });
}

//Funcion principal inicio mapa
 initMap = function (latitudLocal, longitudLocal){
            coords = {lng: latitudLocal, lat: longitudLocal};
            // coords =  {lng: -68.839412, lat: -32.890667};
            setMapa(coords);  //pasamos las coordenadas al metodo para crear el mapa
}

function setMapa (coords){
      //Se crea una nueva instancia del objeto mapa
      var map = new google.maps.Map(document.getElementById('map'),
      {
        zoom: 13,
        center:new google.maps.LatLng(coords.lat,coords.lng),
      });
      //Creamos el marcador en el mapa con sus propiedades
      //para nuestro obetivo tenemos que poner el atributo draggable en true
      //position pondremos las mismas coordenas que obtuvimos en la geolocalización
      marker = new google.maps.Marker({
        icon: iconBase + 'marcador.png',
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(coords.lat,coords.lng),
      });
      //agregamos un evento al marcador junto con la funcion callback al igual que el evento dragend que indica
      //cuando el usuario a soltado el marcador
      marker.addListener('click', toggleBounce);
}

//callback al hacer clic en el marcador lo que hace es quitar y poner la animacion BOUNCE
function toggleBounce(){
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


// function renderLocal(local){
//   $('.container.ficha').append('' +
//     '<div class="row" style="margin: 10% 0 5% 0;">  ' +
//       '<div class="col-md-8 text-left texto-ficha">' +
//         '<div class="row"><div class="col-md-6">' +
//     '      <h3 class="titulo">ZAMPA | Cocina + Barra</h3>' +
//     '      <p>RUBRO > TIPO DE COCINA</p>' +
//     '    </div>' +
//     '    <div class="col-md-3 text-center precioficha">' +
//     '      <p>$$$$</p>' +
//     '    </div>' +
//     '    <div class="col-md-3 text-right" style="height: 90px; bottom: -54px;">   ' +
//     '       <ul style="display: inline-flex; list-style: none;">   ' +
//     '          <li>          ' +
//     '             <i class="fa fa-star" aria-hidden="true"></i>' +
//     '             <i class="fa fa-star" aria-hidden="true"></i>' +
//     '             <i class="fa fa-star" aria-hidden="true"></i>' +
//     '             <i class="fa fa-star" aria-hidden="true"></i>' +
//     '             <i class="fa fa-star-o" aria-hidden="true"></i>' +
//     '          </li>' +
//     '       </ul>' +
//     '    </div>' +
//     '  </div>' +
//     '  <div id="myCarousel" class="carousel slide" data-ride="carousel">                          <!-- Indicators -->                          <ol class="carousel-indicators">                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>                            <li data-target="#myCarousel" data-slide-to="1"></li>                            <li data-target="#myCarousel" data-slide-to="2"></li>                            <li data-target="#myCarousel" data-slide-to="3"></li>                          </ol>                            <!-- Wrapper for slides -->                          <div class="carousel-inner">                            <div class="item active">                              <img src="img/resto00.jpg" alt="Novedades">                            </div>                              <div class="item">                              <img src="img/resto01.jpg" alt="Novedades">                            </div>                              <div class="item">                              <img src="img/resto02.jpg" alt="Novedades">                            </div>                              <div class="item">                              <img src="img/resto03.jpg" alt="Novedades">                            </div>                          ' +
//     '     </div>  ' +
//     '           <!-- Left and right controls -->                          ' +
//     '        <a class="left carousel-control" href="#myCarousel" data-slide="prev"> ' +
//     '           <span class="glyphicon glyphicon-chevron-left"></span>' +
//     '           <span class="sr-only">Previous</span>  ' +
//     '        </a>                          ' +
//     '        <a class="right carousel-control" href="#myCarousel" data-slide="next">                         ' +
//     '        <span class="glyphicon glyphicon-chevron-right"></span>                          ' +
//     '        <span class="sr-only">Next</span>                       ' +
//     '        </a>                      ' +
//     '     </div>                  ' +
//     '   </div>                 ' +
//     '   <div class="col-md-4 text-justify texto-ficha">                   ' +
//     '      <a href="#" class="page-scroll btn btn-xl" style="width: 100%; margin-top: 8%; margin-bottom: 4.9%;">RESERVAR</a>                 ' +
//     '         <p class="textoreserva">Ambiente cálido y familiar que invita a disfrutar una variada oferta de platos regionales creados por el Chef Martin Gonzalez. Productos de estación, cocina casera y una completa carta de vinos que los amantes de la buena mesa sabrán valorar.                        Ambiente cálido y familiar que invita a disfrutar una variada oferta de platos regionales creados por el Chef Martin Gonzalez. Productos de estación, cocina casera y una completa carta de vinos que los amantes de la buena mesa sabrán valorar.</p>                         ' +
//     '            <ul style="list-style: none;">                 ' +
//     '               <li>                    ' +
//     '                  <p style="text-align: center;">                                <a href="#"><i class="fa fa-facebook redesficha" aria-hidden="true"></i></a>                                <a href="#"><i class="fa fa-twitter redesficha" aria-hidden="true"></i></a>                                <a href="#"><i class="fa fa-instagram redesficha" aria-hidden="true"></i></a>                                <a href="#"><i class="fa fa-tripadvisor redesficha" aria-hidden="true"></i></a>                                <a href="#"><i class="fa fa-globe redesficha" aria-hidden="true"></i></a>                                </p>                            </li>                            <li style="padding-top: 5%;">                                <p class="textodatosficha"><i class="fa fa-map-marker datosficha" aria-hidden="true"></i> Av. Bartolomé Mitre 794, Ciudad</p>                            </li>                            <li>                                <p class="textodatosficha"><i class="fa fa-phone datosficha" aria-hidden="true"></i> +54 261 423-8823</p>                            </li>                            <li>                                <p class="textodatosficha"><i class="fa fa-envelope-o datosficha" aria-hidden="true"></i> info@zampacocina.com.ar</p>                            </li>                            <li>                                <p class="textodatosficha"><i class="fa fa-usd datosficha" aria-hidden="true"></i> Efectivo, Crédito, Débito</p>                            </li>                        </ul>                    </div>                </div>                  </div>');
// }
