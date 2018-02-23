
var contLista = 0;

iniciar();

function iniciar(){
    controlarRadioSeleccionado();  
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
           maxFilesize: 5, // MB
           resizeWidth: 80,
           acceptedFiles: '.png',
           dictRemoveFile: "Eliminar",
           maxFiles: 1,
           success: function (file, response) {           
               var iconoName = response;
               nombreIcono = iconoName.trim();
          //     var iconoViejo = $("#cartaLocal1").val();
          /*     if(cartaVieja != ''){
                 eliminarCartaVieja(cartaVieja);
               } */
               $("#iconoPromocion").val(nombreIcono);
               $('#cartaLocal').attr('href', nombreIcono);
               file.previewElement.classList.add("dz-success");
               console.log("Successfully uploaded :" + iconoName);
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
   $('#mdlArchivos').on('hidden.bs.modal', function (event) {
     $("#formDropZone").empty();
     //  getArchivos();
   });