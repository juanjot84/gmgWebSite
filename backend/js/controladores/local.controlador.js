
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
    
    var locales;
    var negocios;
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
            coords =  {lng: -68.839412, lat: -32.890667};
            setMapa(coords);  //pasamos las coordenadas al metodo para crear el mapa
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
      mostrarAltaLocal();

    function obtenerListado() {
        $('#listadoLocal').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                locales = data;          
              _.each(data, function(local){
                $('#listadoLocal').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +local.idNegocio.nombreNegocio+ '</td><td>' + local.idNegocio.descripcionNegocio+ '</td><td class="centrarbotaccion">' +
                    '<button onClick="mostrar(\'' + local._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + local._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + local._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
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

    function eliminar(idLocal){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local?id=' + idLocal,
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
          '<div class="checkbox"><label><input type="checkbox" value="'+medioPago._id+'" id="medioPagoCheck" name="medioPagoCheck">'+medioPago.nombreMedioPago+'</label></div>')              
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
          '<div class="checkbox"><label><input type="checkbox" value="'+tipoCocina._id+'" id="tipoCocinasCheck" name="tipoCocinasCheck">'+tipoCocina.nombreTipoCocina+'</label></div>')              
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
          '<div class="checkbox"><label><input type="checkbox" value="'+especialidad._id+'" id="especialidadCheck" name="especialidadCheck">'+especialidad.nombreEspecialidad+'</label></div>')              
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
          '<div class="checkbox"><label><input type="checkbox" value="'+servicio._id+'" id="servicioCheck" name="servicioCheck">'+servicio.nombreServicio+'</label></div>')              
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
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoLunes');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoLunes')
      })
    }

    function popularDropdownDescMartesAlta(){
      $('#descuentoMartes').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoMartes');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoMartes')
      })
    }

    function popularDropdownDescMiercolesAlta(){
      $('#descuentoMiercoles').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoMiercoles');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoMiercoles')
      })
    }

    function popularDropdownDescJuevesAlta(){
      $('#descuentoJueves').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoJueves');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoJueves')
      })
    }

    function popularDropdownDescViernesAlta(){
      $('#descuentoViernes').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoViernes');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoViernes')
      })
    }

    function popularDropdownDescSabadoAlta(){
      $('#descuentoSabados').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoSabados');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoSabados')
      })
    }

    function popularDropdownDescDomingoAlta(){
      $('#descuentoDomingos').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoDomingos');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoDomingos')
      })
    }

    function popularDropdownDescFeriadoAlta(){
      $('#descuentoFeriados').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoFeriados');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoFeriados')
      })
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

    function send(){

      var medioPagoSeleccionado = [];
      var seleccionados = $('input[name=medioPagoCheck]:checked', '#formularioLocal');
        _.each(seleccionados, function(item){ 
            medioPagoSeleccionado.push(item.value);
        })

      var servicioSeleccionado = [];
      var seleccionados = $('input[name=servicioCheck]:checked', '#formularioLocal');
        _.each(seleccionados, function(item){ 
            servicioSeleccionado.push(item.value);
        })

      var especialidadSeleccionada = [];
      var seleccionados = $('input[name=especialidadCheck]:checked', '#formularioLocal');
        _.each(seleccionados, function(item){ 
            especialidadSeleccionada.push(item.value);
        })

      var tipoCocinaSeleccionado = [];
      var seleccionados = $('input[name=tipoCocinasCheck]:checked', '#formularioLocal');
        _.each(seleccionados, function(item){ 
            tipoCocinaSeleccionado.push(item.value);
        })        

       var isNew = $("#idLocal").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var local = JSON.stringify({
            "idNegocio": $("#idNegocio").val(),
            "idPoloGastronomico": $("#poloNegocio").val(),
            "idNivelPrecio": $("#nivelPrecio").val(),
            "idTipoCocinaPrincipal": $("#TipoCocinaPpal").val(),
            "idMedioPago": medioPagoSeleccionado,
            "idServicio": servicioSeleccionado,
            "idEspecialidad": especialidadSeleccionada,
            "idTipoCocina": tipoCocinaSeleccionado,
            "longitudLocal":$("#long").val(),
            "latitudLocal":$("#lat").val(),
            "telContacto":$("#telContacto").val(),
            "mailContacto":$("#mailContacto").val(),
            "alturaLocal":$("#alturaLocal").val(),
            "calleLocal":$("#calleLocal").val(),
            "aceptaReservaNegocio":$('input[name=aceptaReservaNegocio]:checked', '#formularioLocal').val()
        });



        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idLocal").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local' + queryParam,
            type: operacion,
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {

              var resultado = data;
              var localCreado =  resultado._id;

          //    var url = "http://localhost/gmg/gmgWebSite/backend/usuario-negocio.php?idNegocio="+ localCreado+""; 
          //    $(location).attr('href',url);

           //     $("#formularioLocal :input").val('');
          
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: local
      });    
    }
 

