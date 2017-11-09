$(document).ready(function(){
  getArchivos();
});
$('#mdlArchivos').on('show.bs.modal', function (event) {
 $("#formDropZone").append("<form id='dZUpload' class='dropzone borde-dropzone' style='cursor: pointer;'>"+
 	                         "<div class='dz-default dz-message text-center'>"+
 	                           "<span><h2>Arrastra los archivos aquí</h2></span><br>"+
 	                         "<p>(o Clic para seleccionar)</p>"+
                           "<p>Cantidad máxima 10 imágenes</p></div></form>");
      myAwesomeDropzone = {
        url: "php/main.php",
        addRemoveLinks: true,
        paramName: "konostech",
        maxFilesize: 4, // MB
        dictRemoveFile: "Eliminar",
        maxFiles: 10,
        params: {
            parametro1:'valor1',
            parametro2:'valor2'
        },
        success: function (file, response) {
            var imgName = response;
            file.previewElement.classList.add("dz-success");
            console.log("Successfully uploaded :" + imgName);
        },
        error: function (file, response) {
          file.previewElement.classList.add("dz-error");
          myDropzone.removeFile(file);
        }

      } // FIN myAwesomeDropzone
  var myDropzone = new Dropzone("#dZUpload", myAwesomeDropzone); 
    myDropzone.on("complete", function(file,response) {


  });
});
$('#mdlArchivos').on('hidden.bs.modal', function (event) {
  $("#formDropZone").empty();
    getArchivos();
});

function getArchivos() {
    $.ajax({
        type: 'GET',
        url: 'php/getArchivos.php',
        success: function(data){
          $("#divMostrarArchivos br").remove();
          $("#divMostrarArchivos").html("<br><p>Archivos:</p>"+data+"</br>");
        }
    });
}