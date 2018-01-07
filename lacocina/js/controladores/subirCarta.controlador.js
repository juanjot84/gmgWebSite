
/*
$(document).ready(function(){
  //  getArchivos();
  //  mostrarImagenes()
  
  }); */
  
  $('#mdlArchivos').on('show.bs.modal', function (event) {
   $("#formDropZone").append("<form id='dZUpload' class='dropzone borde-dropzone' style='cursor: pointer;'>"+
                             "<div class='dz-default dz-message text-center'>"+
                               "<span><h2>Arrastra el archivo pdf aquí</h2></span><br>"+
                             "<p>(o Clic para seleccionar)</p>"+
                             "</div></form>");
        myAwesomeDropzone = {
          url: "scripts/mainCarta.php",
          addRemoveLinks: true,
          paramName: "konostech",
          maxFilesize: 10, // MB
          acceptedFiles: 'application/pdf',
          dictRemoveFile: "Eliminar",
          maxFiles: 1,
          success: function (file, response) {           
              var cartaName = response;
              var nombreCarta = cartaName.trim();
              $("#cartaLocal").val() = nombreCarta;
              file.previewElement.classList.add("dz-success");
              console.log("Successfully uploaded :" + cartaName);
          },
          error: function (file, response) {
            file.previewElement.classList.add("dz-error");
            myDropzone.removeFile(file);
          }
          
        } // FIN myAwesomeDropzone
    var myDropzone = new Dropzone("#dZUpload", myAwesomeDropzone); 
      
      myDropzone.on("complete", function(file) {
         if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {  
        //  obtenerLocal(imagenesLocal);
        //  console.log(imagenesLocal);
        } else {
          console.log('todavia hay archivos subiendose ')
        }
      });
      
  });
  $('#mdlArchivos').on('hidden.bs.modal', function (event) {
    $("#formDropZone").empty();
    //  getArchivos();
  });
 /* 
  function getArchivos() {
      $.ajax({
          type: 'GET',
          url: 'scripts/getArchivos.php',
          success: function(data){
            $("#divMostrarArchivos br").remove();
            $("#divMostrarArchivos").html("<br><p>Archivos:</p>"+data+"</br>");
          }
      });
  }
  */
  
  function mostrarImagenes(){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
      var idLocal = $("#idLocal").val();
    return $.ajax({
      url: server + '/api/v1/admin/local?id='+ idLocal,
      type: 'GET',
              
      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
        success: function (data) {        
          var imagenesGuardadas = data.fotoLocal;
          var imgPrincipal = data.fotoPrincipalLocal;
          var iconoEstrella = '';
          $('#contenedorImagenes').html('');
            _.each(imagenesGuardadas, function (imagen){
  
              if(imgPrincipal == imagen){
                  iconoEstrella = 'fa fa-star';
              }else{
                  iconoEstrella = 'fa fa-star-o';
              }
  
  
                $('#contenedorImagenes').append(  '' +
                    '<li class="miniaturas-orden">'+
                       '<a href="#">'+
                         '<img class="miniatura-galeria" src="'+imagen+'">'+
                       '</a>'+
                      '<br>'+
                      '<button title="Eliminar" onClick="eliminarImagen(\'' + imagen + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> '+
                      '<button title="Imagen Principal" onClick="seleccionarPrincipal(\'' + imagen + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="'+iconoEstrella+'" aria-hidden="true"></i> </button> '+
                    '</li>'+
                '');
            });
        } 
    }); 
  });
  }
  
  function eliminarImagen(urlImagen){
    if (_.isUndefined(server)) {
      $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
      });
    }
  
    var idLocal = $("#idLocal").val();
    return $.ajax({
      url: server + '/api/v1/admin/local?id='+ idLocal,
      type: 'GET',
              
      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
        success: function (data) {        
         var imagenesGuardadas = data.fotoLocal;
  
          var largoString = urlImagen.length;
          var nombreImagen = urlImagen.substr(42, largoString);
          var index = imagenesGuardadas.indexOf(urlImagen);
          var parametros = {
                  "nombreArchivo" : nombreImagen,
          };
          $.ajax({
                  data:  parametros, 
                  url:   'scripts/eliminarImagen.php', 
                  type:  'post', 
                  success:  function (response) {
                    if(response.trim() == 'borrado'){
                        var idLocal = $("#idLocal").val();
                        var campo = 'fotoLocal';
                        imagenesGuardadas.splice(index, 1);
                        actualizarLocal(idLocal,imagenesGuardadas,campo); 
                    }
                  }
          });
        } 
    });
  }
  