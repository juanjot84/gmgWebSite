



$(document).ready(function(){
  getArchivos();
  mostrarImagenes()

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
        resizeWidth: 750,
        resizeHeight: 420,
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
        obtenerLocal(imagenesLocal);
        console.log(imagenesLocal);
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

function actualizarLocal(idLocal, valorAActualizar, campoAAcuatualizar){

  var promise = new Promise(function(resolve, reject) {
    var nuevoCampo = {};
    nuevoCampo[campoAAcuatualizar] = valorAActualizar;

    $.ajax({
      url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local?id=' + idLocal,
      type: 'PUT',
      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        resolve(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(errorThrown);
      },
      data: JSON.stringify(nuevoCampo)
    });
  });
  return promise;
}

function obtenerLocal(vectorImagenes){
  var idLocal = $("#idLocal").val();
  return $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local?id='+ idLocal,
    type: 'GET',
            
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
      success: function (data) {        
       var imagenesGuardadas = data.fotoLocal;
        _.each(vectorImagenes, function (imagen){
          imagenesGuardadas.push(imagen);
        })
        var idLocal = $("#idLocal").val();
        var campo = 'fotoLocal';
        actualizarLocal(idLocal,imagenesGuardadas,campo);
      } 
  });    
}

function mostrarImagenes(){
    var idLocal = $("#idLocal").val();
  return $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local?id='+ idLocal,
    type: 'GET',
            
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
      success: function (data) {        
        var imagenesGuardadas = data.fotoLocal;
          _.each(imagenesGuardadas, function (imagen){

              $('#contenedorImagenes').append(  '' +
                  '<li class="miniaturas-orden">'+
                     '<a href="#">'+
                       '<img class="miniatura-galeria" src="'+imagen+'">'+
                     '</a>'+
                    '<br>'+
                    '<i class="fa fa-trash" aria-hidden="true"></i>'+
                  '</li>'+
              '');
          });
      } 
  });    
}