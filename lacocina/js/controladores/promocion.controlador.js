
var contLista = 0;


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
        '<td>Fijo por Rango</td>'+
        '<td>'+valorDesde+'</td>'+
        '<td class="text-center">'+valorHasta+'</td>'+
        '<td class="text-center">$'+valorFijo+'</td>'+
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
    if(valorHasta < valorDesde){
        error = true;
        $("#valorHasta").parent().after('<span id="valorHastaAlert" style="color:red">Debe ser mayor que el valor desde</span>');
        $("#valorHasta").addClass('alert-danger');
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

function eliminarIcono(nombreicono){
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
                $('#contenedorImagenes').html('');
              }
      });
}

$('#mdlArchivos').on('show.bs.modal', function (event) {
    $("#formDropZone").append("<form id='dZUpload' class='dropzone borde-dropzone' style='cursor: pointer;'>"+
                              "<div class='dz-default dz-message text-center'>"+
                                "<span><h2>Arrastra el icono aquí</h2></span><br>"+
                              "<p>(o Click para seleccionar)</p>"+
                              "</div></form>");
         myAwesomeDropzone = {
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
                 eliminarIcono(iconoViejo);
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
             myDropzone.removeFile(file);
           }
           
         } // FIN myAwesomeDropzone
     var myDropzone = new Dropzone("#dZUpload", myAwesomeDropzone);    
       myDropzone.on("complete", function(file) {
          if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {  
         } else {
           console.log('todavia hay archivos subiendose ');
         }
       });
       
   });

   function eliminarImgWeb(nombreimgweb){
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
                $('#contenedorImagenWeb').html('');
              }
      });
}

   $('#mdlImgWeb').on('show.bs.modal', function (event) {
    $("#formDropZone1").append("<form id='dZUpload' class='dropzone borde-dropzone' style='cursor: pointer;'>"+
                              "<div class='dz-default dz-message text-center'>"+
                                "<span><h2>Arrastra la imagen aquí</h2></span><br>"+
                              "<p>(o Click para seleccionar)</p>"+
                              "</div></form>");
         myAwesomeDropzone = {
           url: "scripts/mainImgWeb.php",
           addRemoveLinks: true,
           paramName: "konostech",
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
                eliminarImgWeb(imgWebVieja);
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
             myDropzone.removeFile(file);
           }
           
         } // FIN myAwesomeDropzone
     var myDropzone = new Dropzone("#dZUpload", myAwesomeDropzone);    
       myDropzone.on("complete", function(file) {
          if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {  
         } else {
           console.log('todavia hay archivos subiendose ')
         }
       });
       
   });


   function eliminarImgApp(nombreimgapp){
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
                $('#contenedorImagenApp').html('');
              }
      });
}


   $('#mdlImgApp').on('show.bs.modal', function (event) {
    $("#formDropZone2").append("<form id='dZUpload' class='dropzone borde-dropzone' style='cursor: pointer;'>"+
                              "<div class='dz-default dz-message text-center'>"+
                                "<span><h2>Arrastra la imagen aquí</h2></span><br>"+
                              "<p>(o Click para seleccionar)</p>"+
                              "</div></form>");
         myAwesomeDropzone = {
           url: "scripts/mainImgApp.php",
           addRemoveLinks: true,
           paramName: "konostech",
           maxFilesize: 20, // MB
           resizeWidth: 260,
           acceptedFiles: '.jpg,.jpeg',
           dictRemoveFile: "Eliminar",
           maxFiles: 1,
           success: function (file, response) {           
               var imgAppName = response;
                nombreImgApp = imgAppName.trim();
               var imgAppVieja = $("#imgPromocionApp").val();
               if(imgAppVieja != ''){
                eliminarImgApp(imgAppVieja);
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
     var myDropzone2 = new Dropzone("#dZUpload", myAwesomeDropzone);    
       myDropzone2.on("complete", function(file) {
          if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {  
         } else {
           console.log('todavia hay archivos subiendose ')
         }
       });
       
   });