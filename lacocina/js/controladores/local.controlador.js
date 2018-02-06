
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
    var ocasiones;
    var tipoNegocio = '';

    
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

function iniciar(accion){
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    if(accion == 'editar'){
      ocultarDatosUsuario();
      buscarTipoNegocio(accion);
     // editarLocal();
    }else if(accion == 'crear'){
      ocultarDatosUsuario();      
      buscarTipoNegocio(accion);
      mostrarAltaLocal();
    }
  });
}

function ocultarDatosUsuario(){
  var tipoUsuario = $("#tipoUs").val();
  if(tipoUsuario == 'usuarioNegocio'){
     $("#localPremium-true").hide();
     $("#localPremium-false").hide();
     $("#tituloPremium").hide();
     $("#radioPremium").hide();
     $("#nivelPrecio").attr("disabled", true);
  }
}

function buscarTipoNegocio(accion){
   var idNegocio = $("#idNegocio").val();
   $.ajax({
    url: server + '/api/v1/admin/negocio?id='+ idNegocio +"",
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      var negocio = data;
      tipoNegocio = negocio.idTipoNegocio.nombreTipoNegocio;
      if(tipoNegocio != 'Restaurante'){
        $("#tituloPolo").hide();
        $("#listaPolo").hide();
        $("#tituloReserva").hide();
        $("#aceptaReserva").hide();
        $("#tituloNivel").hide();
        $("#nivel").hide();
        $("#iconoNivel").hide();
        $("#nivelPrecio").hide();
        $("#tituloPago").hide();
        $("#mediosPagoCheckbox").hide();
        $("#tituloOcasiones").hide();
        $("#ocasionesCheckbox").hide();
        $("#titTpoCocPrin").hide();
        $("#TpoCocPrin").hide();
        $("#datosNoResto").hide();
      }

      editarLocal();

    },
    error:function(jqXHR,textStatus,errorThrown)
    {
      $('#target').append("jqXHR: "+jqXHR);
      $('#target').append("textStatus: "+textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
    },
  });

}

  
    function obtenerListado() {
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }
        $('#listadoLocal').html('');
        $('#loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span>');       
        $.ajax({
            url: server + '/api/v1/admin/locales',
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
                    '<button onClick="editar(\'' + local._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + local._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                    '</td> ' +
                    '</tr>');
              });
              $('#loading').hide();
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    }

    function editarLocal(){
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }
       var idLocal = $('#idLocalRecibido').val();
        $('#target').html('obteniendo...');       
        $.ajax({
            url: server + '/api/v1/admin/locales?id='+ idLocal +"",
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                var local = data;
            $('#idNegocio').val(local.idNegocio._id);
            $('#nombreLocal').val(local.nombreLocal);
            $("input[name=localPremium][value=" + local.localPremium + "]").prop("checked",true);
             $('#telContacto').val(local.telContacto);
             $('#mailContacto').val(local.mailContacto);
             $('#calleLocal').val(local.calleLocal);
             $('#alturaLocal').val(local.alturaLocal);
             var coordenadas = {lng: local.longitudLocal, lat: local.latitudLocal};
             setMapa (coordenadas);
             $('#cartaLocal1').val(local.menuLocal);
             $('#cartaLocal').attr('href', local.menuLocal);
             $('#long').val(local.longitudLocal);
             $('#lat').val(local.latitudLocal);
             $("#webLocal").val(local.webLocal);
             $("#facebookLocal").val(local.facebookLocal);
             $("#instagramLocal").val(local.instagramLocal);
             $("#twitterLocal").val(local.twitterLocal);
             $("#tripadvisorLocal").val(local.tripadvisorLocal);
             if(tipoNegocio == 'Restaurante'){
              var idPolo = local.idPoloGastronomico._id;
              obtenerListadoPolos().done(function(data){
                 polos = data
              popularDropdownPolosEditar(idPolo);
              });
              $("input[name=aceptaReservaNegocio][value=" + local.aceptaReservaNegocio + "]").prop("checked",true);
             var idNivelPrecio = local.idNivelPrecio._id ;
             obtenerListadoNivelPrecio().done(function(data){
                 nivelPrecios = data
             popularDropdownNivelPrecioEditar(idNivelPrecio);
             });

             var idTipoCocinaPpal = '';
             if(local.idTipoCocinaPrincipal == null){
              idTipoCocinaPpal = '';
             }else{
              idTipoCocinaPpal = local.idTipoCocinaPrincipal._id;
             }
             
             var tipoCocinaSeleccionados = local.idTipoCocina;
             obtenerListadoTipoCocina().done(function(data){
                 tipoCocinas = data
             popularDropdownTipoCocinaPpalEditar(idTipoCocinaPpal);
             popularDropdownOtrosTipoEditar(tipoCocinaSeleccionados);
             });
             var mediosSeleccionados = local.idMedioPago;
             obtenerListadoMedioPago().done(function(data){
                 medioPagos = data
             popularDropdownMedioPagoEditar(mediosSeleccionados);
             });
             var especialidadesSeleccionadas = local.idEspecialidad;
             obtenerListadoEspecialidad().done(function(data){
                 especialidades = data
             popularDropdownEspecialidadEditar(especialidadesSeleccionadas);
             });
             var ocasionesSeleccionadas = local.idOcasion
             obtenerListadoOcasiones().done(function(data){
                 ocasiones = data
                 popularDropdownOcasionEditar(ocasionesSeleccionadas)
             });
             var ServiciosSeleccionados = local.idServicio;
             obtenerListadoServicio().done(function(data){
                 servicios = data
             popularDropdownServicioEditar(ServiciosSeleccionados);
             });
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




  // Traer polos para lista desplegable
    function obtenerListadoPolos() {
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }   
        return $.ajax({
            url: server + '/api/v1/admin/polo',
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
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#poloNegocio');
      _.each(polos, function (polo){
        $('<option>').val(polo._id).text(polo.nombrePoloGastronomico).appendTo('#poloNegocio')
      })
    }
  // Funcion para armar lista desplegable polos para editar local
      function popularDropdownPolosEditar(idPolo){
      $('#poloNegocio').html('');
      _.each(polos, function (polo){;
        var option = $('<option>').val(polo._id).text(polo.nombrePoloGastronomico);
        if (idPolo==polo._id)
        option.attr('selected', 'selected');
        option.appendTo('#poloNegocio');
      });
    }
  // Traer nivel de precio para lista desplegable
    function obtenerListadoNivelPrecio() {
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }   
        return $.ajax({
            url: server + '/api/v1/admin/nivelPrecio',
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
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#nivelPrecio');
      _.each(nivelPrecios, function (nivelPrecio){
        $('<option>').val(nivelPrecio._id).text(nivelPrecio.label + '  | Valor inicial $' + nivelPrecio.valorInicial + ' | Valor final $' + nivelPrecio.valorFinal).appendTo('#nivelPrecio')
      })
    }
      // Funcion para armar lista desplegable Nivel de Precio para editar el local
      function popularDropdownNivelPrecioEditar(idNivelPrecio){
      $('#nivelPrecio').html('');
      _.each(nivelPrecios, function (nivelPrecio){;
        var option = $('<option>').val(nivelPrecio._id).text(nivelPrecio.label + '  | Valor inicial $' + nivelPrecio.valorInicial + ' | Valor final $' + nivelPrecio.valorFinal);
        if (idNivelPrecio==nivelPrecio._id)
        option.attr('selected', 'selected');
        option.appendTo('#nivelPrecio');
      });
    }

  // Traer medio de pago para checkbox
    function obtenerListadoMedioPago() {
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }   
        return $.ajax({
            url: server + '/api/v1/admin/medioPago',
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
  // Funcion para armar lista checkbox medios de pago para editar local
    function popularDropdownMedioPagoEditar(mediosSeleccionados){
      $('#mediosPagoCheckbox').html('');
      _.each(medioPagos, function (medioPago){
           $('#mediosPagoCheckbox').append(
           '<div class="checkbox"><label><input type="checkbox" value="'+medioPago._id+'" id="medioPagoCheck" name="medioPagoCheck">'+medioPago.nombreMedioPago+'</label></div>')
           
        _.each(mediosSeleccionados, function (medioPagoSeleccionado){
             if(medioPagoSeleccionado._id == medioPago._id){
             $("input[name=medioPagoCheck][value=" + medioPago._id + "]").prop("checked",true);    
          }
        });
      });
    }

    // Traer tipo Cocina para lista desplegable
    function obtenerListadoTipoCocina() {
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }   
        return $.ajax({
            url: server + '/api/v1/admin/tipoCocina',
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
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#TipoCocinaPpal');
      _.each(tipoCocinas, function (tipoCocina){
        $('<option>').val(tipoCocina._id).text(tipoCocina.nombreTipoCocina).appendTo('#TipoCocinaPpal')
      })
    }
      // Funcion para armar lista desplegable Yipo Cocina Ppal para editar el local
      function popularDropdownTipoCocinaPpalEditar(idTipoCocinaPpal){
      $('#TipoCocinaPpal').html('');
      _.each(tipoCocinas, function (tipoCocina){;
        var option = $('<option>').val(tipoCocina._id).text(tipoCocina.nombreTipoCocina);
        if (idTipoCocinaPpal==tipoCocina._id)
        option.attr('selected', 'selected');
        option.appendTo('#TipoCocinaPpal');
      });
    }
    // Funcion para armar lista checkbox otros tipo cocina para editar local
    function popularDropdownOtrosTipoEditar(tipoCocinaSeleccionados){
      $('#otroTipoCocina').html('');
      _.each(tipoCocinas, function (tipoCocina){
            $('#otroTipoCocina').append(
            '<div class="checkbox col-md-4"><label><input type="checkbox" value="'+tipoCocina._id+'" id="tipoCocinasCheck" name="tipoCocinasCheck">'+tipoCocina.nombreTipoCocina+'</label></div>') 

          _.each(tipoCocinaSeleccionados, function (tipoSeleccionado){
            if(tipoSeleccionado._id == tipoCocina._id){
              $("input[name=tipoCocinasCheck][value=" + tipoCocina._id + "]").prop("checked",true);  
            }   
         });           
      });
    }
    // Funcion para armar lista checkbox otros tipo cocina para alta de negocio
    function popularDropdownMedioOtrosTipoAlta(){
      $('#otroTipoCocina').html('');
      _.each(tipoCocinas, function (tipoCocina){
        $('#otroTipoCocina').append(
          '<div class="checkbox col-md-4"><label><input type="checkbox" value="'+tipoCocina._id+'" id="tipoCocinasCheck" name="tipoCocinasCheck">'+tipoCocina.nombreTipoCocina+'</label></div>')              
      });
    }

    // Traer Especialidad para check box
    function obtenerListadoEspecialidad(){
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }   
        return $.ajax({
            url: server + '/api/v1/admin/especialidad',
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
          '<div class="checkbox col-md-4"><label><input type="checkbox" value="'+especialidad._id+'" id="especialidadCheck" name="especialidadCheck">'+especialidad.nombreEspecialidad+'</label></div>')              
      });
    }
    // Funcion para armar lista checkbox Especialidades para editar
    function popularDropdownEspecialidadEditar(especialidadesSeleccionadas){
      $('#especialidades').html('');
      _.each(especialidades, function (especialidad){
        $('#especialidades').append(
          '<div class="checkbox col-md-4"><label><input type="checkbox" value="'+especialidad._id+'" id="especialidadCheck" name="especialidadCheck">'+especialidad.nombreEspecialidad+'</label></div>')
        _.each(especialidadesSeleccionadas, function (especialidadSeleccionada){
            if(especialidadSeleccionada._id == especialidad._id){
               $("input[name=especialidadCheck][value=" + especialidad._id + "]").prop("checked",true); 
            }
        });
      });
    }
    //Traer ocasiones para check box
    function obtenerListadoOcasiones(){
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }   
      return $.ajax({
          url: server + '/api/v1/admin/ocasion',
          type: 'GET',           
          dataType: "json",
          crossDomain: true,
          contentType:"application/json",
          success: function (data) {
             return data;
          } 
      });
    }

    //Funcion para armar lista checkbox Ocasiones para alta de local
    function popularDropdownOcasionAlta(){
      $('#ocasionesCheckbox').html('');
      _.each(ocasiones, function (ocasion){
        $('#ocasionesCheckbox').append(
          '<div class="checkbox col-md-4"><label><input type="checkbox" value="'+ocasion._id+'" id="ocasionCheck" name="ocasionCheck">'+ocasion.nombreOcasion+'</label></div>')              
      });
    }
    //Funcion para armar lista checkbox Ocasiones para editar
    function popularDropdownOcasionEditar(ocasionesSeleccionadas){
      $('#ocasionesCheckbox').html('');
      _.each(ocasiones, function (ocasion){
        $('#ocasionesCheckbox').append(
          '<div class="checkbox col-md-4"><label><input type="checkbox" value="'+ocasion._id+'" id="ocasionCheck" name="ocasionCheck">'+ocasion.nombreOcasion+'</label></div>')
        _.each(ocasionesSeleccionadas, function (ocasionesSelec){
            if(ocasionesSelec == ocasion._id){
               $("input[name=ocasionCheck][value=" + ocasion._id + "]").prop("checked",true); 
            }
        });
      });
    }

    // Traer Servicios para lista desplegable
    function obtenerListadoServicio(){
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }   
        return $.ajax({
            url: server + '/api/v1/admin/servicio',
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
          '<div class="checkbox col-md-4"><label><input type="checkbox" value="'+servicio._id+'" id="servicioCheck" name="servicioCheck">'+servicio.nombreServicio+'</label></div>')              
      });
    }
    // Funcion para armar lista checkbox Servicios para editar local
    function popularDropdownServicioEditar(ServiciosSeleccionados){
      $('#servicios').html('');
      _.each(servicios, function (servicio){
        $('#servicios').append(
          '<div class="checkbox col-md-4"><label><input type="checkbox" value="'+servicio._id+'" id="servicioCheck" name="servicioCheck">'+servicio.nombreServicio+'</label></div>')
            _.each(ServiciosSeleccionados, function (servicioSeleccionado){
              if(servicioSeleccionado._id == servicio._id){
                  $("input[name=servicioCheck][value=" + servicio._id + "]").prop("checked",true); 
              }
            });          
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

            obtenerListadoOcasiones().done(function(data){
               ocasiones = data
               popularDropdownOcasionAlta();
            });
    }

  function actualizarLocal(){
    if (_.isUndefined(server)) {
      $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
      });
    }
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

      var ocasionSeleccionada = [];
      var seleccionados = $('input[name=ocasionCheck]:checked', '#formularioLocal');
        _.each(seleccionados, function(item){ 
          ocasionSeleccionada.push(item.value);
        })

      var tipoCocinaSeleccionado = [];
      var seleccionados = $('input[name=tipoCocinasCheck]:checked', '#formularioLocal');
        _.each(seleccionados, function(item){ 
            tipoCocinaSeleccionado.push(item.value);
        })  
       

       var isNew = $("#idLocal").val() == "";
        var local = JSON.stringify({
            "idNegocio": $("#idNegocio").val(),
            "idPoloGastronomico": $("#poloNegocio").val(),
            "idNivelPrecio": $("#nivelPrecio").val(),
            "idTipoCocinaPrincipal": $("#TipoCocinaPpal").val(),             
            "idMedioPago": medioPagoSeleccionado,
            "idServicio": servicioSeleccionado,
            "idEspecialidad": especialidadSeleccionada,
            "idOcasion": ocasionSeleccionada,
            "idTipoCocina": tipoCocinaSeleccionado,
            "menuLocal": $("#cartaLocal1").val(),
            "longitudLocal":$("#long").val(),
            "latitudLocal":$("#lat").val(),
            "webLocal": $("#webLocal").val(),
            "facebookLocal": $("#facebookLocal").val(),
            "instagramLocal": $("#instagramLocal").val(),
            "twitterLocal": $("#twitterLocal").val(),
            "tripadvisorLocal": $("#tripadvisorLocal").val(),
            "telContacto":$("#telContacto").val(),
            "mailContacto":$("#mailContacto").val(),
            "alturaLocal":$("#alturaLocal").val(),
            "calleLocal":$("#calleLocal").val(),
            "nombreLocal":$("#nombreLocal").val(),
            "aceptaReservaNegocio":$('input[name=aceptaReservaNegocio]:checked', '#formularioLocal').val(),
            "localPremium":$('input[name=localPremium]:checked', '#formularioLocal').val()
        });
        var idLocalActualizar = $("#idLocalRecibido").val();
        $('#target').html('sending..');
        $.ajax({
            url: server + '/api/v1/admin/local?id=' + idLocalActualizar,
            type: "PUT",          
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {

              var resultado = data;
              var localCreado =  resultado._id;
              var idNegocio = $("#idNegocio").val();

              var url = "../lacocina/panel-locales.php?idLocal="+ localCreado+"&idNegocio="+idNegocio+""; 
              $(location).attr('href',url);

                $("#formularioLocal :input").val('');         
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: local
      });    
  }



    function send(){
      if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }

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

      var ocasionSeleccionada = [];
      var seleccionados = $('input[name=ocasionCheck]:checked', '#formularioLocal');
        _.each(seleccionados, function(item){ 
            ocasionSeleccionada.push(item.value);
        })  

      var tipoCocinaSeleccionado = [];
      var seleccionados = $('input[name=tipoCocinasCheck]:checked', '#formularioLocal');
        _.each(seleccionados, function(item){ 
            tipoCocinaSeleccionado.push(item.value);
        })  

        var idNeg =   $("#idNegocio").val();  

       var isNew = $("#idLocal").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var local = JSON.stringify({
            "idNegocio": idNeg,
            "idPoloGastronomico": $("#poloNegocio").val(),
            "idNivelPrecio": $("#nivelPrecio").val(),
            "idTipoCocinaPrincipal": $("#TipoCocinaPpal").val(),
            "idMedioPago": medioPagoSeleccionado,
            "idServicio": servicioSeleccionado,
            "idOcasion": ocasionSeleccionada,
            "idEspecialidad": especialidadSeleccionada,
            "idTipoCocina": tipoCocinaSeleccionado,
            "menuLocal": $("#cartaLocal1").val(),
            "longitudLocal":$("#long").val(),
            "latitudLocal":$("#lat").val(),
            "webLocal": $("#webLocal").val(),
            "facebookLocal": $("#facebookLocal").val(),
            "instagramLocal": $("#instagramLocal").val(),
            "twitterLocal": $("#twitterLocal").val(),
            "tripadvisorLocal": $("#tripadvisorLocal").val(),
            "telContacto":$("#telContacto").val(),
            "mailContacto":$("#mailContacto").val(),
            "alturaLocal":$("#alturaLocal").val(),
            "calleLocal":$("#calleLocal").val(),
            "nombreLocal":$("#nombreLocal").val(),
            "aceptaReservaNegocio":$('input[name=aceptaReservaNegocio]:checked', '#formularioLocal').val(),
            "localPremium":$('input[name=localPremium]:checked', '#formularioLocal').val()
        });


        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idLocal").val();
        $.ajax({
            url: server + '/api/v1/admin/local' + queryParam,
            type: operacion,          
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {

              var resultado = data;
              var localCreado =  resultado._id;

              var url = "../lacocina/contacto.php?idLocal="+ localCreado+"&idNegocio="+idNeg+""; 
              $(location).attr('href',url);

                $("#formularioLocal :input").val('');         
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: local
      });    
    }
 
function validar(accion){
  $("#botonGuardar").addClass('disabled');
  var telContacto = $("#telContacto").val();
  var mailContacto = $("#mailContacto").val();
  var calleLocal = $("#calleLocal").val();
  var alturaLocal = $("#alturaLocal").val();
  var poloNegocio = $("#poloNegocio").val();
  var nivelPrecio = $("#nivelPrecio").val();
  var TipoCocinaPpal = $("#TipoCocinaPpal").val();
  var hayError = false;

    if(telContacto.length < 7){
      $("#telContacto").parent().after('<span id="telContactoAlert" style="color:red"> Debe ingresar un Teléfono de contacto del Local</span>');
      $("#telContacto").addClass('alert-danger');
      hayError = true;
    }

   if(mailContacto.length < 2){
      $("#mailContacto").parent().after('<span id="mailContactoAlert" style="color:red"> Debe ingresar un Email de contacto para el Local</span>');
      $("#mailContacto").addClass('alert-danger');
      hayError = true;
   }else {
      caracteresCorreoValido(mailContacto);
    }
/*
   if(calleLocal.length < 2){
      $("#calleLocal").parent().after('<span id="calleLocalAlert" style="color:red"> Debe ingresar una Calle para el Local</span>');
      $("#calleLocal").addClass('alert-danger');
      hayError = true;
   }

   if(alturaLocal.length < 2){
      $("#alturaLocal").parent().after('<span id="alturaLocalAlert" style="color:red"> Debe ingresar una Altura para el Local</span>');
      $("#alturaLocal").addClass('alert-danger');
      hayError = true;
   }

   if(poloNegocio == null){
      $("#poloNegocio").parent().after('<span id="poloNegocioAlert" style="color:red"> Debe seleccionar un Polo Gastronómico para el Local</span>');
      $("#poloNegocio").addClass('alert-danger');
      hayError = true;
   }

   if(nivelPrecio == null){
      $("#nivelPrecio").parent().after('<span id="nivelPrecioAlert" style="color:red"> Debe seleccionar un Nivel de Precio para el Local</span>');
      $("#nivelPrecio").addClass('alert-danger');
      hayError = true;
   }

   if(TipoCocinaPpal == null){
      $("#TipoCocinaPpal").parent().after('<span id="TipoCocinaPpalAlert" style="color:red"> Debe seleccionar un Tipo de Cocina Principal para el Local</span>');
      $("#TipoCocinaPpal").addClass('alert-danger');
      hayError = true;
   } */

  if(hayError==false){
    if(accion == 'crear'){
       send();
    }else if(accion == 'editar'){
       actualizarLocal();
    }
     
  }else{
    $(location).attr('href',"#formularioLocal");
  }

}

function limpiar(campo){
   $("#"+campo+"Alert").hide();
   $("#"+campo).removeClass('alert-danger');
   $("#botonGuardar").removeClass('disabled');
}

function caracteresCorreoValido(email){
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);   
    if (! caract.test(email)){
      $("#mailContacto").parent().after('<span id="mailContactoAlert" style="color:red"> Debe ingresar un Email válido para el contacto del Local</span>');
      $("#mailContacto").addClass('alert-danger');
      hayError = true;      
    }
}

function volverPanelLocal(){
    var localEditado = $("#idLocalRecibido").val();
    var idNegocio = $("#idNegocio").val(); 
    var url = "../lacocina/panel-locales.php?idLocal="+ localEditado+"&idNegocio="+ idNegocio +"";
    $(location).attr('href',url);
}

function volverPanelNegocio(){
    var idNegocio = $("#idNegocio").val(); 
    var url = "../lacocina/panel-negocio.php?idNegocio="+ idNegocio +"";
    $(location).attr('href',url);
}