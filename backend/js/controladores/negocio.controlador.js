
    $(function() {

        $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function(e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });

    });

    var negocios;
    var tipoNegocios;
    var polos;
    var nivelPrecios;
    var medioPagos;
    var tipoCocinas;
    var especialidades;
    var servicios;
    var descuentos;

    
var marker;          //variable del marcador
var coords = {};    //coordenadas obtenidas con la geolocalización
var iconBase = 'http://guiamendozagourmet.com/map/'; //direccion base del icono de marcador
//Funcion principal
 initMap = function () 
{
    //usamos la API para geolocalizar el usuario
      navigator.geolocation.getCurrentPosition(
          function (position){
            coords =  {
              lng: position.coords.longitude,
              lat: position.coords.latitude
            };
            setMapa(coords);  //pasamos las coordenadas al metodo para crear el mapa            
          },function(error){console.log(error);});
}

function setMapa (coords)
{   
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
      marker.addListener( 'dragend', function (event)
      {
        //escribimos las coordenadas de la posicion actual del marcador dentro del input #coords
        document.getElementById("lat").value = this.getPosition().lat();
        document.getElementById("long").value = this.getPosition().lng();
      });
}

//callback al hacer clic en el marcador lo que hace es quitar y poner la animacion BOUNCE
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

    obtenerListado();

    function obtenerListado() {
        $('#listadoNegocios').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/negocio',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                negocios = data;          
              _.each(data, function(negocio){
                $('#listadoNegocios').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +negocio.nombreNegocio+ '</td><td>' + negocio.descripcionNegocio+ '</td><td class="centrarbotaccion">' +
                    '<button onClick="mostrar(\'' + negocio._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + negocio._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + negocio._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                    '</td> ' +
                    '</tr>');
               
              });
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    }

    function editar(idNegocio){
       var negocio =  _.find(negocios, { '_id': idNegocio});
       console.log(negocio);
      obtenerListadoTipoNegocios().done(function(data){
            tipoNegocios= data
              
      popularDropdown(negocio.idTipoNegocio);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#nombreNegocio").val(negocio.nombreNegocio);
       $("#descripcionNegocio").val(negocio.descripcionNegocio);
       $("input[name=destacadoNegocio][value=" + negocio.destacadoNegocio + "]").prop("checked",true);
       $("#urlIconoNegocio").val(negocio.urlIconoNegocio);
       $("#tagsNegocio").val(negocio.tagsNegocio);
       $("#tripadvisorNegocio").val(negocio.tripadvisorNegocio);
       $("#twitterNegocio").val(negocio.twitterNegocio);
       $("#instagramNegocio").val(negocio.instagramNegocio);
       $("#facebookNegocio").val(negocio.facebookNegocio);
       $("#idNegocio").val(negocio._id);
       })
    }

    function mostrar(idNegocio){
       var negocio =  _.find(negocios, { '_id': idNegocio});
       console.log(negocio);
             obtenerListadoTipoNegocios().done(function(data){
            tipoNegocios= data
              
      popularDropdown(negocio.idTipoNegocio);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#nombreNegocio").val(negocio.nombreNegocio);
       $("#descripcionNegocio").val(negocio.descripcionNegocio);
       $("input[name=destacadoNegocio][value=" + negocio.destacadoNegocio + "]").prop("checked",true);
       $("#urlIconoNegocio").val(negocio.urlIconoNegocio);
       $("#tagsNegocio").val(negocio.tagsNegocio);
       $("#tripadvisorNegocio").val(negocio.tripadvisorNegocio);
       $("#twitterNegocio").val(negocio.twitterNegocio);
       $("#instagramNegocio").val(negocio.instagramNegocio);
       $("#facebookNegocio").val(negocio.facebookNegocio);
       $("#idNegocio").val(negocio._id);
     })
    }

    function eliminar(idNegocio){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/negocio?id=' + idNegocio,
            type: 'DELETE',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
              obtenerListado();
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
              obtenerListado();
          }
      });    
    }

  // Traer tipos de negocio para lista desplegable
    function obtenerListadoTipoNegocios() {   
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoNegocio',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }
  // Funcion para armar lista desplegable Tipos de Negocio para alta de negocio
    function popularDropdownSolo(){
      $('#tipoNegocio').html('');
      _.each(tipoNegocios, function (tipoNegocio){
        $('<option>').val(tipoNegocio._id).text(tipoNegocio.nombreTipoNegocio).appendTo('#tipoNegocio')
      })
    }
  // Funcion para armar lista desplegable Tipos de Negocio para modificar o ver de negocio
    function popularDropdown(idTipoNegocio){
      $('#tipoNegocio').html('');
      _.each(tipoNegocios, function (tipoNegocio){;
        var option = $('<option>').val(tipoNegocio._id).text(tipoNegocio.nombreTipoNegocio);
        if (idTipoNegocio==tipoNegocio._id)
        option.attr('selected', 'selected');
        option.appendTo('#tipoNegocio');
      });
    }
  // Traer polos para lista desplegable
    function obtenerListadoPolos() {   
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/polo',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }
  // Funcion para armar lista desplegable Polos para alta de negocio
    function popularDropdownPolosAlta(){
      $('#poloNegocio').html('');
      _.each(polos, function (polo){
        $('<option>').val(polo._id).text(polo.nombrePoloGastronomico).appendTo('#poloNegocio')
      })
    }


  // Traer nivel de precio para lista desplegable
    function obtenerListadoNivelPrecio() {   
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/nivelPrecio',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }
  // Funcion para armar lista desplegable Nivel de Precio para alta de negocio
    function popularDropdownNivelPrecioAlta(){
      $('#nivelPrecio').html('');
      _.each(nivelPrecios, function (nivelPrecio){
        $('<option>').val(nivelPrecio._id).text(nivelPrecio.label + '  | Valor inicial $' + nivelPrecio.valorInicial + ' | Valor final $' + nivelPrecio.valorFinal).appendTo('#nivelPrecio')
      })
    }

  // Traer medio de pago para checkbox
    function obtenerListadoMedioPago() {   
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/medioPago',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }
  // Funcion para armar lista checkbox medios de pago para alta de negocio
    function popularDropdownMedioPagoAlta(){
      $('#mediosPagoCheckbox').html('');
      _.each(medioPagos, function (medioPago){
        $('#mediosPagoCheckbox').append(
          '<div class="checkbox"><label><input type="checkbox" value="'+medioPago._id+'">'+medioPago.nombreMedioPago+'</label></div>')              
      });
    }


    // Traer tipo Cocina para lista desplegable
    function obtenerListadoTipoCocina() {   
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoCocina',
            type: 'GET',           
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }

    // Funcion para armar lista desplegable tipo Cocina Principal para alta de local
    function popularDropdownTipoCocinaPpalAlta(){
      $('#TipoCocinaPpal').html('');
      _.each(tipoCocinas, function (tipoCocina){
        $('<option>').val(tipoCocina._id).text(tipoCocina.nombreTipoCocina).appendTo('#TipoCocinaPpal')
      })
    }

    // Funcion para armar lista checkbox otros tipo cocina para alta de negocio
    function popularDropdownMedioOtrosTipoAlta(){
      $('#otroTipoCocina').html('');
      _.each(tipoCocinas, function (tipoCocina){
        $('#otroTipoCocina').append(
          '<div class="checkbox"><label><input type="checkbox" value="'+tipoCocina._id+'">'+tipoCocina.nombreTipoCocina+'</label></div>')              
      });
    }

    // Traer Especialidad para lista desplegable
    function obtenerListadoEspecialidad(){   
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/especialidad',
            type: 'GET',           
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }

    // Funcion para armar lista checkbox Especialidades para alta de negocio
    function popularDropdownEspecialidadAlta(){
      $('#especialidades').html('');
      _.each(especialidades, function (especialidad){
        $('#especialidades').append(
          '<div class="checkbox"><label><input type="checkbox" value="'+especialidad._id+'">'+especialidad.nombreEspecialidad+'</label></div>')              
      });
    }

    // Traer Servicios para lista desplegable
    function obtenerListadoServicio(){   
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/servicio',
            type: 'GET',           
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }

    // Funcion para armar lista checkbox Servicios para alta de negocio
    function popularDropdownServicioAlta(){
      $('#servicios').html('');
      _.each(servicios, function (servicio){
        $('#servicios').append(
          '<div class="checkbox"><label><input type="checkbox" value="'+servicio._id+'">'+servicio.nombreServicio+'</label></div>')              
      });
    }

    // Traer Descuentos para lista desplegable
    function obtenerListadoDescuento(){   
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/descuento',
            type: 'GET',           
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }

    // Funcion para armar lista desplegable Descuento para alta de local
    function popularDropdownDescLunesAlta(){
      $('#descuentoLunes').html('');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoLunes')
      })
    }

    function popularDropdownDescMartesAlta(){
      $('#descuentoMartes').html('');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoMartes')
      })
    }

    function popularDropdownDescMiercolesAlta(){
      $('#descuentoMiercoles').html('');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoMiercoles')
      })
    }

    function popularDropdownDescJuevesAlta(){
      $('#descuentoJueves').html('');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoJueves')
      })
    }

    function popularDropdownDescViernesAlta(){
      $('#descuentoViernes').html('');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoViernes')
      })
    }

    function popularDropdownDescSabadoAlta(){
      $('#descuentoSabados').html('');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoSabados')
      })
    }

    function popularDropdownDescDomingoAlta(){
      $('#descuentoDomingos').html('');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoDomingos')
      })
    }

    function popularDropdownDescFeriadoAlta(){
      $('#descuentoFeriados').html('');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoFeriados')
      })
    }

    
    function agregarNegocio(){
       $('#cabeceraTablaNegocios').hide();
       $('#listadoNegocios').hide();
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idNegocio").val('');
            obtenerListadoTipoNegocios().done(function(data){
                tipoNegocios= data
            popularDropdownSolo();
            });
    }
  // Mostrar form de alta de local y ocultar el de negocio

    function mostrarAltaLocal(){
       $('#formularioAgregar').hide();
       $('#formularioLocal').show();
       $("#formularioLocal :input").attr("disabled", false);
       $("#formularioLocal button").show();
       $("#idLocal").val('');

            obtenerListadoPolos().done(function(data){
                polos = data
            popularDropdownPolosAlta();
            });

            obtenerListadoNivelPrecio().done(function(data){
                nivelPrecios = data
            popularDropdownNivelPrecioAlta();
            });

            obtenerListadoMedioPago().done(function(data){
                medioPagos = data
            popularDropdownMedioPagoAlta();
            });

            obtenerListadoTipoCocina().done(function(data){
                tipoCocinas = data
            popularDropdownTipoCocinaPpalAlta();
            popularDropdownMedioOtrosTipoAlta();
            });

            obtenerListadoEspecialidad().done(function(data){
                especialidades = data
            popularDropdownEspecialidadAlta();
            });

            obtenerListadoServicio().done(function(data){
                servicios = data
            popularDropdownServicioAlta();
            });

            obtenerListadoDescuento().done(function(data){
                descuentos = data
            popularDropdownDescLunesAlta();
            popularDropdownDescMartesAlta();
            popularDropdownDescMiercolesAlta();
            popularDropdownDescJuevesAlta();
            popularDropdownDescViernesAlta();
            popularDropdownDescSabadoAlta();
            popularDropdownDescDomingoAlta();
            popularDropdownDescFeriadoAlta();
            });

    }

    function volverEditarNegocio(){
      
      $('#formularioAgregar').show();
       $('#formularioLocal').hide();
    }

    function send() {
        var isNew = $("#idNegocio").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var negocio = JSON.stringify({
            "nombreNegocio": $("#nombreNegocio").val(),
            "descripcionNegocio": $("#descripcionNegocio").val(),
            "destacadoNegocio": $('input[name=destacadoNegocio]:checked', '#formularioAgregar').val(),
            "urlIconoNegocio": $("#urlIconoNegocio").val(),
            "idTipoNegocio": $("#tipoNegocio").val(),
            "tagsNegocio":$("#tagsNegocio").val(),
            "tripadvisorNegocio":$("#tripadvisorNegocio").val(),
            "twitterNegocio":$("#twitterNegocio").val(),
            "instagramNegocio":$("#instagramNegocio").val(),
            "facebookNegocio":$("#facebookNegocio").val()
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idNegocio").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/negocio' + queryParam,
            type: operacion,
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {

              var resultado = data;
              negocioCreado =  resultado._id;

                $('#formularioAgregar').hide();
                $("#formularioAgregar :input").val('');
             //   obtenerListado() ;
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: negocio
      }); 
    }
