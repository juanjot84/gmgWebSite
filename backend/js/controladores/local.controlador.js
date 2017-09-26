
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
    var localidades;
    
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
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#poloNegocio');
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
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#nivelPrecio');
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
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#TipoCocinaPpal');
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

  // Traer localidades para lista desplegable
    function obtenerListadoLocalidades() {   
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/localidad',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }
  // Funcion para armar lista desplegable Localidades para alta de negocio
    function popularDropdownLocalidadesAlta(){
      $('#idLocalidad').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#idLocalidad');
      _.each(localidades, function (localidad){
        $('<option>').val(localidad._id).text(localidad.nombreLocalidad).appendTo('#idLocalidad')
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

            obtenerListadoLocalidades().done(function(data){
                localidades = data
            popularDropdownLocalidadesAlta();
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
            "idEspecialidad": especialidadSeleccionada,
            "idTipoCocina": tipoCocinaSeleccionado,
            "longitudLocal":$("#long").val(),
            "latitudLocal":$("#lat").val(),
            "telContacto":$("#telContacto").val(),
            "mailContacto":$("#mailContacto").val(),
            "alturaLocal":$("#alturaLocal").val(),
            "calleLocal":$("#calleLocal").val(),
            "idLocalidad":$("#idLocalidad").val(),
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

              var url = "../backend/contacto.php?idLocal="+ localCreado+""; 
              $(location).attr('href',url);

                $("#formularioLocal :input").val('');         
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: local
      });    
    }
 
function validar(){
  $("#botonGuardar").addClass('disabled');
  var telContacto = $("#telContacto").val();
  var mailContacto = $("#mailContacto").val();
  var calleLocal = $("#calleLocal").val();
  var alturaLocal = $("#alturaLocal").val();
  var idLocalidad = $("#idLocalidad").val();
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

   if(idLocalidad == null){
      $("#idLocalidad").parent().after('<span id="idLocalidadAlert" style="color:red"> Debe seleccionar una Localidad para el Local</span>');
      $("#idLocalidad").addClass('alert-danger');
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
   }

  if(hayError==false){
     send();
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
