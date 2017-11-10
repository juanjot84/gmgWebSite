


$(document).ready(function(){
  getArchivos();

});

var imagenesLocal=[];

$('#mdlArchivos').on('show.bs.modal', function (event) {
 $("#formDropZone").append("<form id='dZUpload' class='dropzone borde-dropzone' style='cursor: pointer;'>"+
 	                         "<div class='dz-default dz-message text-center'>"+
 	                           "<span><h2>Arrastra las imagenes aquí</h2></span><br>"+
 	                         "<p>(o Clic para seleccionar)</p>"+
                           "<p>Cantidad máxima 10 imágenes</p></div></form>");
      
      myAwesomeDropzone = {
        url: "scripts/main.php",
        addRemoveLinks: true,
        paramName: "konostech",
        maxFilesize: 4, // MB
        acceptedFiles: '.jpg',
        dictRemoveFile: "Eliminar",
        maxFiles: 10,
        params: {
            idLocal: $("#idLocal").val()
        },
        success: function (file, response) {
            
            var imgName = response;
            var nombreImagen = imgName.trim();
            imagenesLocal.push(nombreImagen);
            file.previewElement.classList.add("dz-success");
            console.log("Successfully uploaded :" + imgName);

        },
        error: function (file, response) {
          file.previewElement.classList.add("dz-error");
          myDropzone.removeFile(file);
        }
        
      } // FIN myAwesomeDropzone
  var myDropzone = new Dropzone("#dZUpload", myAwesomeDropzone); 
    

    myDropzone.on("complete", function(file) {
       if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {
        console.log('todos subidos');
        console.log(imagenesLocal)
      } else {
        console.log('todavia hay archivos subiendose ')
      }
    });

   

    
});
$('#mdlArchivos').on('hidden.bs.modal', function (event) {
  $("#formDropZone").empty();
    getArchivos();
});

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