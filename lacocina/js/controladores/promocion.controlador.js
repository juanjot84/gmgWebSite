
var contLista = 0;
var porcentaje = '';
var impactaEnReserva;

iniciar();

function iniciar(){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
       controlarRadioSeleccionado();  
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
            $("#valorDesde").removeAttr('disabled');
            $("#valorHasta").removeAttr('disabled');
            $("#valorFijo").removeAttr('disabled');
            $("#btnAgregarValor").removeAttr('disabled');
            $("#tablaRangos").show();
        }
}

function agregarRangoLista(valorDesde, valorHasta, valorFijo){
    contLista++;
    $('#listaComision').append(''+
     '<tr id="'+contLista+'" class="text-center listacomision">'+
        '<td>'+contLista+'</td>'+
        '<td><input id="valorDesde'+contLista+'" value="'+valorDesde+'" type="text"></td>'+
        '<td class="text-center"><input id="valorHasta'+contLista+'" value="'+valorHasta+'" type="text"></td>'+
        '<td class="text-center"><input id="valorFijo'+contLista+'" value="'+valorFijo+'" type="text"></td>'+
        '<td class="centrarbotaccion">'+
            '<button title="Eliminar" onclick="eliminarFila(\'' + contLista + '\')" class="btn btn-default botaccion" type="button">'+
               '<i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i>'+
            '</button>'+
        '</td>'+
      '</tr>'+
    '')
}

function validarDatosLista(){
    var error = false;
    var valorDesde = $("#valorDesde").val();
    var valorHasta = $("#valorHasta").val();
    var valorFijo = $("#valorFijo").val();
    if(valorDesde == ''){
        error = true;
        $("#valorDesde").parent().after('<span id="valorDesdeAlert" style="color:red">Ingresar Valor</span>');
        $("#valorDesde").addClass('alert-danger');
    }
    if(valorHasta == ''){
        error = true;
        $("#valorHasta").parent().after('<span id="valorHastaAlert" style="color:red">Ingresar Valor</span>');
        $("#valorHasta").addClass('alert-danger');
    }
    if(valorFijo == ''){
        error = true;
        $("#valorFijo").parent().after('<span id="valorFijoAlert" style="color:red">Ingresar Valor</span>');
        $("#valorFijo").addClass('alert-danger');
    }
    if(valorDesde > valorHasta){
        error = true;
        $("#valorHasta").parent().after('<span id="valorHastaAlert" style="color:red">Debe ser mayor que el valor desde</span>');
        $("#valorHasta").addClass('alert-danger');
    }
    if(valorDesde == valorHasta){
      error = true;
      $("#valorDesde").parent().after('<span id="valorDesdeAlert" style="color:red">Desde y hasta no pueden ser iguales</span>');
      $("#valorDesde").addClass('alert-danger');
    }
    if(error == false){
        agregarRangoLista(valorDesde, valorHasta, valorFijo);
    }   
}

function quitarAlert(idCampo){
    $("#"+idCampo+"Alert").hide();
    $("#"+idCampo+"Alert").html('');  
    $("#"+idCampo).removeClass('alert-danger');
}

function eliminarFila(idCampo){
   $("#"+idCampo).html('');
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
     $("#formPromocion").show();
     $("#tablaPromociones").hide();
   }

   function cancelar(){
    $("#formPromocion").hide();
    $("#tablaPromociones").show();
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
       $("#nombrePromocion").parent().after('<span id="nombrePromocionAlert" style="color:red">Ingresar nombre de la promoción</span>');
       $("#nombrePromocion").addClass('alert-danger');
       subirWeb('formPromocion');
     }
     var radioPorcentaje = $('input[name=radioComision]:checked').val();
     porcentaje = 0;
     if(radioPorcentaje == 'porcentaje'){
       porcentaje = $("#myRange").val();
     }else if(radioPorcentaje == 'valorFijo'){
      
      if(contLista == 0){
        error = true;
        $("#valorDesde").parent().after('<span id="valorDesdeAlert" style="color:red">Ingresar al menos un rango de precios</span>');
        $("#valorDesde").addClass('alert-danger');
        subirWeb('formPromocion');
      }
     }
     impactaEnReserva = $('input[name=impactaReservas]:checked').val();
     if(impactaEnReserva == 'true'){
      impactaEnReserva = true;
     }else{
      impactaEnReserva = false;
     }

     if(error == false){
       guardarPromocion()
     }

   }

function guardarPromocion(){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  var isNew =$("#idPromocion").val() == '';
  var operacion = isNew  ? "POST": "PUT";
  var rangoPromocion = [];
  for (i = 1; i < contLista + 1; i++){ 
    var rango = {
    "desde": $("#valorDesde"+i).val(),
    "hasta": $("#valorHasta"+i).val(),
    "valor": $("#valorFijo"+i).val()
    };
    rangoPromocion.push(rango);
  }
  var duracionPromocion = $("#duracionPromocion").val();
  var duracionPromocionDesde = duracionPromocion.substr(0,10);
  var duracionPromocionHasta = duracionPromocion.substr(13,10);

  var promocion = JSON.stringify({
      "nombrePromocion": $("#nombrePromocion").val(),
      "comisionPromocion": porcentaje,
      "impactaEnReserva": impactaEnReserva,
      "imagenWebPromocion": $("#imgPromocionWeb").val(),
      "imagenAppPromocion": $("#imgPromocionApp").val(),
      "iconoPromocion": $("#iconoPromocion").val(),
      "terminosCondicionesPromocion": $("#terminosCondiciones").val(),
      "rangoPromocion": rangoPromocion,
      "duracionDesdePromocion": duracionPromocionDesde,
      "duracionHastaPromocion": duracionPromocionHasta
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
           alert('se guardo');
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
    },
    data: promocion
});
}