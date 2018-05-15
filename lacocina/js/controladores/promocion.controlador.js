
var porcentaje = '';
var impactaEnReserva;
var promocionFlexible;
var tipoVoucher;
var voucherPrimerUso;
var modalidadCobro;
var horarioPromocion;
var idRangoComision = 99;
var rangosComisiones = [];
var localHorariosCreados = [];
var horariosViejos = [];
var cantidadHorarios = 0;

var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos", "Feriados"];

iniciar();

function iniciar(){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
       controlarRadioSeleccionado();
       dibujarListadoLocales();
       dibujarListadoPromociones();
       popularDropdownHorarios();
    });
}

function controlarRadioSeleccionado(){
    var radioPorcentaje = $('input[name=radioComision]:checked').val();  
        if(radioPorcentaje == 'porcentaje'){
            $("#myRange").prop('disabled', false);
            $("#valorDesde").attr('disabled', 'disabled');
            $("#valorHasta").attr('disabled', 'disabled');
            $("#valorFijo").attr('disabled', 'disabled');
            $("#btnAgregarValor").attr('disabled', 'disabled');
            $("#tablaRangos").hide();
        }else if(radioPorcentaje == 'valorFijo'){
            $("#myRange").prop('disabled', true);
            $("#myRange").val(1);
            $("#valorDesde").removeAttr('disabled');
            $("#valorHasta").removeAttr('disabled');
            $("#valorFijo").removeAttr('disabled');
            $("#btnAgregarValor").removeAttr('disabled');
            $("#tablaRangos").show();
        }
}

function dibujarListaRangos(rangos){
 $('#listaComision').html('');
  _.each(rangos, function(rango){
    $('#listaComision').append(''+
     '<tr id="'+rango.idRango+'" class="text-center listacomision">'+
        '<td>'+rango.desde+'</td>'+
        '<td class="text-center">'+rango.hasta+'</td>'+
        '<td class="text-center">'+rango.valor+'</td>'+
        '<td class="centrarbotaccion">'+
            '<button title="Eliminar" onclick="eliminarFila(\'' + rango.idRango + '\')" class="btn btn-default botaccion" type="button">'+
               '<i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i>'+
            '</button>'+
        '</td>'+
      '</tr>'+
    '')
  });
}

function eliminarFila(idCampo){
    var evens = _.remove(rangosComisiones, function(n) { return n.idRango == idCampo;});
    dibujarListaRangos(rangosComisiones);
}

function colocarAlerta(idCampo,mensaje){
  $("#"+idCampo).parent().after('<span id="'+idCampo+'Alert" style="color:red">'+mensaje+'</span>');
  $("#"+idCampo).addClass('alert-danger');
}

function validarDatosLista(){
    var error = false;
    var valorDesde = parseInt($("#valorDesde").val(), 10);
    var valorHasta = parseInt($("#valorHasta").val(), 10);
    var valorFijo =  parseInt($("#valorFijo").val(), 10);

    if(valorDesde == 0){
        error = true;
        $("#valorDesdeAlert").html(''); 
        colocarAlerta('valorDesde','Ingresar Valor');
    }
    if(valorHasta == 0){
        error = true;
        $("#valorHastaAlert").html(''); 
        colocarAlerta('valorHasta','Ingresar Valor');
    }
    if(valorFijo == 0){
        error = true;
        $("#valorFijoAlert").html(''); 
        colocarAlerta('valorFijo','Ingresar Valor');
    }
    if(valorDesde > valorHasta){
        error = true;
        $("#valorHastaAlert").html(''); 
        colocarAlerta('valorHasta','Debe ser mayor que el valor desde');
    }
    if(valorDesde == valorHasta){
      error = true;
      $("#valorDesdeAlert").html(''); 
      colocarAlerta('valorDesde','Desde y hasta no pueden ser iguales');
    }

    if(error == false){
      var rango = {
        "idRango": idRangoComision,
        "desde": valorDesde,
        "hasta": valorHasta,
        "valor": valorFijo
        };
        rangosComisiones.push(rango);
        idRangoComision++;
        dibujarListaRangos(rangosComisiones);
    }   
}

function quitarAlert(idCampo){
    $("#"+idCampo+"Alert").html(''); 
    $("#"+idCampo+"Alert").hide();
    $("#"+idCampo).removeClass('alert-danger');
}

function eliminarIcono(nombreicono, accion){
    if (_.isUndefined(server)) {
       $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
       });
    }
       var largoString = nombreicono.length;
       var nombreIcono = nombreicono.substr(49, largoString);
       var parametros = {
              "nombreArchivo" : nombreIcono,
       };
       $.ajax({
          data:  parametros, 
          url:   'scripts/eliminarIcono.php', 
          type:  'post', 
          success:  function (response) {
            if(accion == 'vieja'){
                
            }else{
              $('#contenedorImagenes').html('');
            }
          }
       });
}

$('#mdlArchivos').on('show.bs.modal', function (event) {
  $("#formDropZone").html('');
    $("#formDropZone").append("<form id='dZUpload3' class='dropzone borde-dropzone' style='cursor: pointer;'>"+
                              "<div class='dz-default dz-message text-center'>"+
                                "<span><h2>Arrastra el icono aquí</h2></span><br>"+
                              "<p>(o Click para seleccionar)</p>"+
                              "</div></form>");
         myAwesomeDropzone3 = {
           url: "scripts/mainIcono.php",
           addRemoveLinks: true,
           paramName: "konostech",
           maxFilesize: 7, // MB
           resizeWidth: 80,
           acceptedFiles: '.png',
           dictRemoveFile: "Eliminar",
           maxFiles: 1,
           success: function (file, response) {           
               var iconoName = response;
                nombreIcono = iconoName.trim();
               var iconoViejo = $("#iconoPromocion").val();
               if(iconoViejo != ''){
                 var accion = 'vieja';
                 eliminarIcono(iconoViejo, accion);
                 $('#contenedorImagenes').html('');
               } 
               $("#iconoPromocion").val(nombreIcono);
               $('#contenedorImagenes').append(  '<br>' +
               '<li class="miniaturas-orden">'+
                  '<a href="#">'+
                    '<img class="miniatura-icono" src="'+nombreIcono+'">'+
                  '</a>'+
                 '<br>'+
                 '<button title="Eliminar" onClick="eliminarIcono(\'' + nombreIcono + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i></button> '+
               '</li>'+
               '');              
               file.previewElement.classList.add("dz-success");
           },
           error: function (file, response) {
             file.previewElement.classList.add("dz-error");
             myDropzone3.removeFile(file);
           }
           
         } // FIN myAwesomeDropzone
     var myDropzone3 = new Dropzone("#dZUpload3", myAwesomeDropzone3);    
       myDropzone3.on("complete", function(file) {
          if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {  
         } else {
           console.log('todavia hay archivos subiendose ');
         }
       });       
   });

   function eliminarImgWeb(nombreimgweb, accion){
    if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }
      var largoString = nombreimgweb.length;
      var nombreImgWeb = nombreimgweb.substr(49, largoString);
      var parametros = {
              "nombreArchivo" : nombreImgWeb,
      };
      $.ajax({
              data:  parametros, 
              url:   'scripts/eliminarImgWeb.php', 
              type:  'post', 
              success:  function (response) {
                if(accion == 'vieja'){

                }else{
                  $('#contenedorImagenWeb').html('');
                }                
              }
      });
}

   $('#mdlImgWeb').on('show.bs.modal', function (event) {
    $("#formDropZone1").html('');
    $("#formDropZone1").append("<form id='dZUpload1' class='dropzone borde-dropzone' style='cursor: pointer;'>"+
                              "<div class='dz-default dz-message text-center'>"+
                                "<span><h2>Arrastra la imagen aquí</h2></span><br>"+
                              "<p>(o Click para seleccionar)</p>"+
                              "</div></form>");
         myAwesomeDropzone1 = {
           url: "scripts/mainImgWeb.php",
           addRemoveLinks: true,
           paramName: "konostech1",
           maxFilesize: 20, // MB
           resizeWidth: 260,
           acceptedFiles: '.jpg,.jpeg',
           dictRemoveFile: "Eliminar",
           maxFiles: 1,
           success: function (file, response) {           
               var imgWebName = response;
                nombreImgWeb = imgWebName.trim();
               var imgWebVieja = $("#imgPromocionWeb").val();
               if(imgWebVieja != ''){
                 var accion = 'vieja';
                eliminarImgWeb(imgWebVieja);
                $('#contenedorImagenWeb').html('');
               } 
               $("#imgPromocionWeb").val(nombreImgWeb);
               $('#contenedorImagenWeb').append(  '<br>' +
               '<li class="miniaturas-orden">'+
                  '<a href="#">'+
                    '<img class="miniatura-galeria" src="'+nombreImgWeb+'">'+
                  '</a>'+
                 '<br>'+
                 '<button title="Eliminar" onClick="eliminarImgWeb(\'' + nombreImgWeb + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i></button> '+
               '</li>'+
           '');
               file.previewElement.classList.add("dz-success"); 
           },
           error: function (file, response) {
             file.previewElement.classList.add("dz-error");
             myDropzone1.removeFile(file);
           }
           
         } // FIN myAwesomeDropzone

         var myDropzone1 = new Dropzone("#dZUpload1", myAwesomeDropzone1);    
         myDropzone1.on("complete", function(file) {
            if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {  
           } else {
             console.log('todavia hay archivos subiendose ');
           }
         });
   });


   function eliminarImgApp(nombreimgapp, accion){
    if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
      }
      var largoString = nombreimgapp.length;
      var nombreImgApp = nombreimgapp.substr(49, largoString);
      var parametros = {
              "nombreArchivo" : nombreImgApp,
      };
      $.ajax({
              data:  parametros, 
              url:   'scripts/eliminarImgApp.php', 
              type:  'post', 
              success:  function (response) {
                if(accion == 'vieja'){

                }else{
                  $('#contenedorImagenApp').html('');
                }
                
              }
      });
}

   $('#mdlImgApp').on('show.bs.modal', function (event) {
    $("#formDropZone2").html('');
    $("#formDropZone2").append("<form id='dZUpload2' class='dropzone borde-dropzone' style='cursor: pointer;'>"+
                              "<div class='dz-default dz-message text-center'>"+
                                "<span><h2>Arrastra la imagen aquí</h2></span><br>"+
                              "<p>(o Click para seleccionar)</p>"+
                              "</div></form>");
         myAwesomeDropzone2 = {
           url: "scripts/mainImgApp.php",
           addRemoveLinks: true,
           paramName: "konostech2",
           maxFilesize: 20, // MB
           resizeWidth: 150,
           acceptedFiles: '.jpg,.jpeg',
           dictRemoveFile: "Eliminar",
           maxFiles: 1,
           success: function (file, response) {           
               var imgAppName = response;
                nombreImgApp = imgAppName.trim();
               var imgAppVieja = $("#imgPromocionApp").val();
               if(imgAppVieja != ''){
                 var accion = 'vieja';
                eliminarImgApp(imgAppVieja, accion);
               } 
               $("#imgPromocionApp").val(nombreImgApp);
               $('#contenedorImagenApp').append(  '<br>' +
               '<li class="miniaturas-orden">'+
                  '<a href="#">'+
                    '<img class="miniatura-galeria" src="'+nombreImgApp+'">'+
                  '</a>'+
                 '<br>'+
                 '<button title="Eliminar" onClick="eliminarImgApp(\'' + nombreImgApp + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i></button> '+
               '</li>'+
           '');

               file.previewElement.classList.add("dz-success");
              
           },
           error: function (file, response) {
             file.previewElement.classList.add("dz-error");
             myDropzone2.removeFile(file);
           }
           
         } // FIN myAwesomeDropzone

         var myDropzone2 = new Dropzone("#dZUpload2", myAwesomeDropzone2);    
         myDropzone2.on("complete", function(file) {
            if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {  
           } else {
             console.log('todavia hay archivos subiendose ');
           }
         });
   });

   function cargarFormCrear(){
     limpiarForm();
     dibujarListadoLocales();
     $("#formPromocion").show();
     $("#tablaPromociones").hide();
   }

   function cancelar(){
    dibujarListadoPromociones();
    limpiarForm();
    dibujarListadoLocales();
   }

   function subirWeb(seccion){
    $('html,body').animate({
      scrollTop: $("#"+seccion).offset().top
    }, 2000);
  }

   function validarDatosPromocio(){
     var error = false;
     var nombrePromocion = $("#nombrePromocion").val();
     if(nombrePromocion == ''){
       error = true;
       colocarAlerta('nombrePromocion','Ingresar nombre de la promoción');
       subirWeb('formPromocion');
     }
     var radioPorcentaje = $('input[name=radioComision]:checked').val();
     porcentaje = 0;
     if(radioPorcentaje == 'porcentaje'){
       porcentaje = $("#myRange").val();
     }
     impactaEnReserva = $('input[name=impactaReservas]:checked').val();
     if(impactaEnReserva == 'true'){
      impactaEnReserva = true;
     }else{
      impactaEnReserva = false;
     }

     promocionFlexible = $('input[name=promocionFlexible]:checked').val();
     if(promocionFlexible == 'true'){
      promocionFlexible = true;
     }else{
      promocionFlexible = false;
     }

     tipoVoucher = $('input[name=tipoVoucher]:checked').val();
     if(tipoVoucher == 'true'){
      tipoVoucher = true;
     }else{
      tipoVoucher = false;
     }

     voucherPrimerUso = $('input[name=voucherPrimerUso]:checked').val();
     if(voucherPrimerUso == 'true'){
      voucherPrimerUso = true;
     }else{
      voucherPrimerUso = false;
     }

     horarioPromocion = $('input[name=horarioPromocion]:checked').val();
     if(horarioPromocion == 'true'){
      horarioPromocion = true;
     }else{
      horarioPromocion = false;
     }

     var nombreCortoPromocion = $("#nombreCortoPromocion").val();
     if(nombreCortoPromocion == ''){
      error = true;
      colocarAlerta('nombreCortoPromocion','Ingresar nombre corto de la promoción');
      subirWeb('formPromocion');
     }
     var colorPromocion = $("#colorPromocion").val();
     if(colorPromocion == ''){
      error = true;
      colocarAlerta('colorPromocion','Ingresar color de la promoción');
      subirWeb('formPromocion');
     }
     if(!error){guardarPromocion()}
   }

function guardarPromocion(){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  var isNew =$("#idPromocion").val() == '';
  var operacion = isNew  ? "POST": "PUT";
  var duracionPromocion = $("#duracionPromocion").val();
  var duracionPromocionDesde = duracionPromocion.substr(0,10);
  var duracionPromocionHasta = duracionPromocion.substr(13,10);
  var localesSeleccionados = [];
  var seleccionados = $('input[name=localCheck]:checked');
    _.each(seleccionados, function(item){ 
      localesSeleccionados.push(item.value);
  })

  var promocion = JSON.stringify({
      "nombrePromocion": $("#nombrePromocion").val(),
      "nombreCortoPromocion": $("#nombreCortoPromocion").val(),
      "colorPromocion" : $("#colorPromocion").val(),
      "comisionPromocion": porcentaje,
      "impactaEnReserva": impactaEnReserva,
      "tipoVoucher": tipoVoucher,
      "voucherPrimerUso": voucherPrimerUso,
      "horarioPromocion": horarioPromocion,
      "promocionFlexible": promocionFlexible,
      "modalidadCobro": $("#modalidadCobro").val(),
      "imagenWebPromocion": $("#imgPromocionWeb").val(),
      "imagenAppPromocion": $("#imgPromocionApp").val(),
      "iconoPromocion": $("#iconoPromocion").val(),
      "terminosCondicionesPromocion": $("#terminosCondiciones").val(),
      "rangoPromocion": rangosComisiones,
      "duracionDesdePromocion": duracionPromocionDesde,
      "duracionHastaPromocion": duracionPromocionHasta,
      "idLocal": localesSeleccionados
  });
  $('#target').html('sending..');
  var queryParam = isNew  ? "": "?id=" + $("#idPromocion").val();
  $.ajax({
      url: server + '/api/v1/admin/promocion' + queryParam,
      type: operacion,
      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
      success: function (data) {
        dibujarListadoPromociones();
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
    },
    data: promocion
});
}

function editarPromocion(idPromocion){
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    $('#listadoPromociones').html('');
    $('#loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span>');       
    $.ajax({
        url: server + '/api/v1/admin/promocion?id='+idPromocion+"",
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
          var promocion = data;
          $("#listadoLocales").html('');
          $("#idPromocion").val(promocion._id);
          $("#nombrePromocion").val(promocion.nombrePromocion);
          $("#nombreCortoPromocion").val(promocion.nombreCortoPromocion);
          $("#colorPromocion").val(promocion.colorPromocion);
          var comisionPromocion = promocion.comisionPromocion;
          if(comisionPromocion != 0){
            $("input[name=radioComision][value=porcentaje]").prop("checked",true);
            $("#myRange").val(comisionPromocion);
            $("#demo").html('');
            $("#demo").append(comisionPromocion);
          }else{
            $("input[name=radioComision][value=valorFijo]").prop("checked",true);
            rangosComisiones = promocion.rangoPromocion;
            dibujarListaRangos(promocion.rangoPromocion);
          }
          controlarRadioSeleccionado();
          if(promocion.impactaEnReserva == true){
            $("input[name=impactaReservas][value=true]").prop("checked",true);
          }
          if(promocion.promocionFlexible == true){
            $("input[name=promocionFlexible][value=true]").prop("checked",true);
          }
          if(promocion.tipoVoucher == true){
            $("input[name=tipoVoucher][value=true]").prop("checked",true);
          }
          if(promocion.horarioPromocion == true){
            $("input[name=horarioPromocion][value=true]").prop("checked",true);
          }
          if(promocion.voucherPrimerUso == true){
            $("input[name=voucherPrimerUso][value=true]").prop("checked",true);
          }
          $("#modalidadCobro").val(promocion.modalidadCobro);
          $("#iconoPromocion").val(promocion.iconoPromocion);
          $("#contenedorImagenes").html('');
          dibujarImagen(promocion.iconoPromocion,'contenedorImagenes');
          $("#imgPromocionWeb").val(promocion.imagenWebPromocion);
          $("#contenedorImagenWeb").html('');
          dibujarImagen(promocion.imagenWebPromocion,'contenedorImagenWeb');
          $("#imgPromocionApp").val(promocion.imagenAppPromocion);
          $("#contenedorImagenApp").html('');
          dibujarImagen(promocion.imagenAppPromocion,'contenedorImagenApp');
          var rangoPromocion = promocion.duracionDesdePromocion+' - '+promocion.duracionHastaPromocion;
          $("#duracionPromocion").val(rangoPromocion);
          $("#terminosCondiciones").val(promocion.terminosCondicionesPromocion);
          var localesSeleccionados = promocion.idLocal;
          obtenerListadoLocales().done(function(data){
              locales = data
              popularDropdownLocalesEditar(localesSeleccionados);
          });
     
          $("#tablaPromociones").hide();
          $("#formPromocion").show();
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

function obtenerListadoLocales() {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }   
    return $.ajax({
        url: server + '/api/v1/admin/localesNegocio',
        type: 'GET',           
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
           return data;
        } 
  });
}

function popularDropdownLocalesEditar(localesSeleccionados){
  $('#listadoLocales').html('');
  $('#listadoLocales').append('' +
  '<tr>'+
    '<td>'+
       '<div class="checkbox">'+
           '<label><input type="checkbox" id="localCheckTodos" value="true" onclick="seleccionarTodos()"></label>'+
      '</div>'+
    '</td>'+
    '<td>Todos</td>'+
    '<td class="text-center">-</td>'+
  '</tr>'+
'');
  _.each(locales, function (local){
      $('#listadoLocales').append('' +
       '<tr>'+
       '<td>'+
         '<div class="checkbox">'+
             '<label><input type="checkbox" id="localCheck" name="localCheck" value="'+local.idLocal+'"></label>'+
        '</div>'+
       '</td>'+
       '<td>'+local.nombreNegocio+'</td>'+
       '<td class="text-center">'+local.nombreLocal+'</td>'+
       '</tr>'+
     ''); 
      _.each(localesSeleccionados, function (localSeleccionado){
        if(localSeleccionado == local.idLocal){
          $("input[name=localCheck][value=" + local.idLocal + "]").prop("checked",true);  
        }   
     });           
  });
}

function dibujarImagen(dirImagen, contenedor){
  var metodo= '';
  if(contenedor == 'contenedorImagenes'){
    metodo = 'Icono';
  }else if(contenedor == 'contenedorImagenWeb'){
    metodo = 'Web';
  }else if(contenedor == 'contenedorImagenApp'){
    metodo = 'App';
  }
  $('#'+contenedor).append(  '<br>' +
  '<li class="miniaturas-orden">'+
     '<a href="#">'+
       '<img class="miniatura-galeria" src="'+dirImagen+'">'+
     '</a>'+
    '<br>'+
    '<button title="Eliminar" onClick="eliminarImg'+metodo+'(\'' + dirImagen + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i></button> '+
  '</li>'+
'');
}

function dibujarListadoLocales(){
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    $('#listadoLocales').html('');
    $('#loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span>');       
    $.ajax({
        url: server + '/api/v1/admin/localesNegocio',
        type: 'GET',      
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
            locales = data;
            $('#listadoLocales').append('' +
            '<tr>'+
              '<td>'+
                 '<div class="checkbox">'+
                     '<label><input type="checkbox" id="localCheckTodos" name="localCheckTodos" value="true" onclick="seleccionarTodos()"></label>'+
                '</div>'+
              '</td>'+
              '<td>Todos</td>'+
              '<td class="text-center">-</td>'+
            '</tr>'+
          '');
            _.each(locales, function(local){
                $('#listadoLocales').append('' +
                  '<tr>'+
                    '<td>'+
                       '<div class="checkbox">'+
                           '<label><input type="checkbox" id="localCheck" name="localCheck" value="'+local.idLocal+'"></label>'+
                      '</div>'+
                    '</td>'+
                    '<td>'+local.nombreNegocio+'</td>'+
                    '<td class="text-center">'+local.nombreLocal+'</td>'+
                  '</tr>'+
                '');        
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
  });
}

function dibujarListadoPromociones(){
  limpiarForm();
  $("#formPromocion").hide();
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    $('#listadoPromociones').html('');
    $('#loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span>');       
    $.ajax({
        url: server + '/api/v1/admin/promocionesActivas',
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
            promociones = data;
            var contPromociones = 1;       
            _.each(promociones, function(promocion){
              var comision;
              if(promocion.comisionPromocion == 0){
                comision = '-';
              }else{
                comision = promocion.comisionPromocion;
              }
              var estadoVisible;
              if(promocion.visible == true){
                estadoVisible = "fa fa-eye";
              }
              if(promocion.visible == false){
                estadoVisible = "fa fa-eye-slash";
              }
              $('#listadoPromociones').append('' +
                '<tr class="text-center">'+
                  '<td>'+contPromociones+'</td>'+
                  '<td>'+promocion.nombrePromocion+'</td>'+
                  '<td>'+comision+'</td>'+
                  '<td>-</td>'+
                  '<td>-</td>'+
                  '<td>-</td>'+
                  '<td class="centrarbotaccion">'+
                    '<button onclick="actualizarVisible(\'' + promocion._id + '\',\'' + promocion.visible + '\')" title="Activar / desactivar" class="btn btn-default botaccion" type="button">'+
                      '<i style="font-size: 1.5em;" class="'+estadoVisible+'" aria-hidden="true"></i>'+
                    '</button>'+
                  '</td>'+
                  '<td class="centrarbotaccion">'+
                    '<button onclick="editarPromocion(\'' + promocion._id + '\')" title="Editar" class="btn btn-default botaccion" type="button">'+
                      '<i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
                    '</button>'+
                    '<button title="Eliminar" onclick="mostrarModalEliminar()" class="btn btn-default botaccion" type="button">'+
                      '<i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i>'+
                    '</button>'+
                  '</td>'+
                '</tr>'+
              '');
                  contPromociones++; 
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
  });
          $("#tablaPromociones").show();
}

function actualizarVisible(idPromocion, estado){
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    var nuevoCampo = {};
    var valorAActualizar;
    if(estado == 'true'){
      valorAActualizar = false;
    }else if(estado == 'false'){
      valorAActualizar = true;
    }
    campoAAcuatualizar = 'visible';
    nuevoCampo[campoAAcuatualizar] = valorAActualizar;

    $.ajax({
      url: server + '/api/v1/admin/promocion?id=' + idPromocion,
      type: 'PUT',

      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        dibujarListadoPromociones();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(errorThrown);
      },
      data: JSON.stringify(nuevoCampo)
    });
   });
}

function seleccionarTodos(){
  var checkTodos = $('#localCheckTodos').prop('checked') ;
  obtenerListadoLocales().done(function(data){
      locales = data
  });

  if(checkTodos == true){
    _.each(locales, function (local){
        $("input[name=localCheck][value=" + local.idLocal + "]").prop("checked",true);  
   }); 
  }else{
    _.each(locales, function (local){
      $("input[name=localCheck][value=" + local.idLocal + "]").prop("checked",false);  
    }); 
  }

}

function limpiarForm(){
  $('input[type="text"]').val('');
  $('input[type="number"]').val(0);
  $("#colorPromocion").val('');
  $("#listaComision").html('');
  $("#tablaRangos").hide();
  $("#terminosCondiciones").val('');
  $("input[name=radioComision][value=porcentaje]").prop("checked",true);
  $("input[name=impactaReservas][value=true]").prop("checked",false);
  $('input[name=impactaReservas]:checked').val();
  $("#contenedorImagenes").html('');
  $("#contenedorImagenWeb").html('');
  $("#contenedorImagenApp").html('');
  $("#listadoLocales").html('');
  $("#myRange").val(1);
}

function Volver(){
  var url = "../lacocina/negocios.php"; 
  $(location).attr('href',url);
}

function popularDropdownHorarios(){
  var rangoHorario = cadaMediaHora('00:00', '23:30');
  $('.select-horario').each(function(){
    $(this).html('');
    var elem = this;
    _.each(rangoHorario, function(hora){
      $(elem).append($('<option>', {
          value: hora,
          text: hora
      }));
    });
  });
}

$('.botonagregarhorario').click(function (e) {
  $('.diashorario :checked').each(function(){
    // console.log($(this).attr('value'));
    aplicarHorarios($(this).attr('value'))
  })
});

$('#todos').click(function (e) {
  if ($('#todos').is(':checked')) {
    $(".diashorario:not(:first)").each(function(){
      $(this).find('input').prop('checked', true);
    })
  } else {
    $(".diashorario:not(:first)").each(function(){
      $(this).find('input').prop('checked', false);
    })
  }
});


function aplicarHorarios(dia, dibujar){
  if($('#horaInicioManana').val() != $('#horaFinManana').val() || dibujar){
    $('#' + dia + ' td:nth-child(2)').removeAttr('style').html('<span id="Hdesde' + dia + 'Manana" >' + $('#horaInicioManana').val() + '</span> - <span id="Hhasta' + dia + 'Manana" >' + $('#horaFinManana').val() + '</span>' );
  } else {
    $('#' + dia + ' td:nth-child(2)').attr('style', 'color: #f8981d;').html('Sin horario de atención')
  }

  if($('#horaInicioTarde').val() != $('#horaFinTarde').val() || dibujar)  {
    $('#' + dia + ' td:nth-child(3)').removeAttr('style').html('<span id="Hdesde' + dia + 'Tarde" >' + $('#horaInicioTarde').val() + '</span> - <span id="Hhasta' + dia + 'Tarde" >' + $('#horaFinTarde').val());
  } else {
    $('#' + dia + ' td:nth-child(3)').attr('style', 'color: #f8981d;').html('Sin horario de atención')
  }
 }


var toInt = function(time){
   var tiempo = time.split(':').map(parseFloat);
   return (tiempo[0]*2 + tiempo[1]/30);
 };


 var toTime = function(int){
   var hora = Math.floor(int/2);
   if ( hora >= 24 )
     hora -= 24;

   hora = hora.toString().length === 1 ? "0" + hora : hora;


   return [hora, int % 2 ? '30' : '00'].join(':');
  };

 var range = function(from, to){
   var rango = Array(to-from+1).fill();

   for (var i = 0; i < rango.length; i++) {
     rango[i] = from + i;
   }
   return rango;
 };

 //funcion que convierte una hora a int, luego crea un rango entre esas horas y despues lo completa convirtiendo cada int a hora nuevamente
 //viene de: https://codereview.stackexchange.com/questions/128260/populating-an-array-with-times-with-half-hour-interval-between-them
 var cadaMediaHora = function(t1,t2){
   var rangoNums = range(toInt(t1), toInt(t2));
   var rangoHoras = [];
   _.each(rangoNums, function(hora){
     rangoHoras.push(toTime(hora));
   });
   return rangoHoras;
 };