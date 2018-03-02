
var contLista = 1;
var menuCargado = [];

iniciar();

function iniciar(){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        listadoPromocionesLocal();
        listadoPromocionesDisponibles(); //actualizar cuando fede haga la consulta
        dibujarHorariosReservas();
    });
  }

function listadoPromocionesLocal(){

}

function dibujarHorariosReservas(){
    if (_.isUndefined(server)) {
        $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
        });
      }
      var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos", "Feriados"];
      var idLocal = $("#idLocal").val();
      $('#target').html('obteniendo...');
      $.ajax({
        url: server + '/api/v1/admin/locales?id=' + idLocal + "",
        type: 'GET',
    
        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
          var horariosAtencion = data.idHorarioAtencion;
          var cubiertos = data.idCubiertosDia;
          _.each(dias, function (diaSemana) {
            var horariosDia = _.filter(horariosAtencion, {'diaSemanaHorarioAtencion': diaSemana});
            var horarioManana = _.find(horariosDia, {'turnoHorarioAtencion': 'manana'});
            var horarioTarde = _.find(horariosDia, {'turnoHorarioAtencion': 'tarde'});
            var cubiertosDia = _.filter(cubiertos, {'diaSemanaCubiertoDia': diaSemana});
            var cubiertosManana = _.find(cubiertosDia, {'turnoCubiertoDia': 'manana'});
            var cubiertosTarde = _.find(cubiertosDia, {'turnoCubiertoDia': 'tarde'});
    
            if ( (horarioManana  && cubiertosManana) || (horarioTarde && cubiertosTarde) ) {
              aplicarHorarios(diaSemana, true);
              if (horarioManana && cubiertosManana) {
                $("#Hdesde" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(horarioManana.horaInicioHorarioAtencion);
                $("#Hhasta" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(horarioManana.horaFinHorarioAtencion);
                $("#Cubiertos" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(cubiertosManana.cantidadCubiertoDia);
                $("#Duracion" + horarioManana.diaSemanaHorarioAtencion + "Manana").html(cubiertosManana.duracionReserva);
              } else {
                $('#' + diaSemana + ' td:nth-child(2)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
              }
              if (horarioTarde  && cubiertosTarde) {
                $("#Hdesde" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").html(horarioTarde.horaInicioHorarioAtencion);
                $("#Hhasta" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").html(horarioTarde.horaFinHorarioAtencion);
                $("#Cubiertos" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").html(cubiertosTarde.cantidadCubiertoDia);
                $("#Duracion" + horarioTarde.diaSemanaHorarioAtencion + "Tarde").html(cubiertosTarde.duracionReserva);
              } else {
                $('#' + diaSemana + ' td:nth-child(3)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
              }
            }
    
          });
          $('#loading').hide();
          $('.datos-cubiertos').removeClass('hidden');
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $('#target').append("jqXHR: " + jqXHR);
          $('#target').append("textStatus: " + textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
        }
      });
}

function aplicarHorarios(dia, dibujar){
    if($('#horaInicioManana').val() != $('#horaFinManana').val() || dibujar){
      $('#' + dia + ' td:nth-child(2)').removeAttr('style').html('' +
        '<div class="iconoslista">'+
        ' <div class="horariolista"><span id="Hdesde' + dia + 'Manana" >' + $('#horaInicioManana').val() + '</span> - <span id="Hhasta' + dia + 'Manana" >' + $('#horaFinManana').val() + '</span></div>' +
        ' <div class="horariocubiertos"><i class="fa fa-cutlery" aria-hidden="true"></i><span id="Cubiertos' + dia + 'Manana" >' + $('#cantCubiertosManana').val() + '</span></div>' +
        ' <div class="horarioduracionreserva"><i class="fa fa-clock-o" aria-hidden="true"></i><span id="Duracion' + dia + 'Manana" >' + $('#duracionReservaManana').val() + '</span></div>' +
        '</div>');
    } else {
      $('#' + dia + ' td:nth-child(2)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
    }
  
    if($('#horaInicioTarde').val() != $('#horaFinTarde').val() || dibujar){
      $('#' + dia + ' td:nth-child(3)').removeAttr('style').html('' +
        '<div class="iconoslista">'+
        ' <div class="horariolista"><span id="Hdesde' + dia + 'Tarde" >' + $('#horaInicioTarde').val() + '</span> - <span id="Hhasta' + dia + 'Tarde" >' + $('#horaFinTarde').val()  + '</span></div>' +
        ' <div class="horariocubiertos"><i class="fa fa-cutlery" aria-hidden="true"></i><span id="Cubiertos' + dia + 'Tarde" >' + $('#cantCubiertosTarde').val() + '</span></div>' +
        ' <div class="horarioduracionreserva"><i class="fa fa-clock-o" aria-hidden="true"></i><span id="Duracion' + dia + 'Tarde" >' + $('#duracionReservaTarde').val() + '</span></div>' +
        '</div>');
    }else {
      $('#' + dia + ' td:nth-child(3)').attr('style', 'color: #f8981d;').html('Sin datos de reserva');
    }
  }

function listadoPromocionesDisponibles(){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {       
      $.ajax({
          url: server + '/api/v1/admin/promocionesActivas',
          type: 'GET',
          dataType: "json",
          crossDomain: true,
          contentType:"application/json",
          success: function (data) {
              promociones = data;
              $('#selectPromociones').html('');
              $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#selectPromociones');       
              _.each(promociones, function(promocion){
                $('<option>').val(promocion._id).text(promocion.nombrePromocion).appendTo('#selectPromociones');
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

function cargarFormCrear(){
    $("#formPromocion").show();
    $("#listaPromociones").hide();
}

function cancelar(){
    $("#formPromocion").hide();
    limpiarFormMenu();
    $("#listaPromociones").show();
    menuCargado = [];
}

function volverPanelLocal(){
    if (_.isUndefined(server)) {
        $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        });
    }
      var idLocal = $("#idLocal").val();
        $('#target').html('obteniendo...');
        $.ajax({
          url: server + '/api/v1/admin/locales?id='+ idLocal +"",
                type: 'GET',  
                dataType: "json",
                crossDomain: true,
                contentType:"application/json",
                success: function (data) {
                 var local = data;
                 var idNegocio = local.idNegocio._id;
                 var url = "../lacocina/panel-locales.php?idLocal="+ idLocal+"&idNegocio="+idNegocio+"";
                 $(location).attr('href',url);
              },
              error:function(jqXHR,textStatus,errorThrown)
              {
                  $('#target').append("jqXHR: "+jqXHR);
                  $('#target').append("textStatus: "+textStatus);
                  $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
              },
        });
}

function configurarReserva(){
    var idLocal = $("#idLocal").val();
    var url = "../lacocina/editar-cubiertos.php?idLocal="+ idLocal+"";
    $(location).attr('href',url);
}

function eliminarImgMenu(nombreimgweb, accion){
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
              url:   'scripts/eliminarImgMenu.php', 
              type:  'post', 
              success:  function (response) {
                if(accion == 'vieja'){

                }else{
                  $('#contenedorImagenWeb').html('');
                }                
              }
      });
}

$('#mdlImgMenu').on('show.bs.modal', function (event) {
    $("#formDropZone1").html('');
    $("#formDropZone1").append("<form id='dZUpload1' class='dropzone borde-dropzone' style='cursor: pointer;'>"+
                              "<div class='dz-default dz-message text-center'>"+
                                "<span><h2>Arrastra la imagen aquí</h2></span><br>"+
                              "<p>(o Click para seleccionar)</p>"+
                              "</div></form>");
         myAwesomeDropzone1 = {
           url: "scripts/mainImgMenu.php",
           addRemoveLinks: true,
           paramName: "konostech1",
           maxFilesize: 20, // MB
           resizeWidth: 180,
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
                 '<button title="Eliminar" onClick="eliminarImgMenu(\'' + nombreImgWeb + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i></button> '+
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

   function dibujarImagen(dirImagen, contenedor){
    $('#'+contenedor).append(  '<br>' +
    '<li class="miniaturas-orden">'+
       '<a href="#">'+
         '<img class="miniatura-galeria" src="'+dirImagen+'">'+
       '</a>'+
      '<br>'+
      '<button title="Eliminar" onClick="eliminarImgMenu(\'' + dirImagen + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i></button> '+
    '</li>'+
  '');
  }

  function colocarAlerta(idCampo,mensaje){
    $("#"+idCampo).parent().after('<span id="'+idCampo+'Alert" style="color:red">'+mensaje+'</span>');
    $("#"+idCampo).addClass('alert-danger');
  }

  function quitarAlert(idCampo){
    $("#"+idCampo+"Alert").html(''); 
    $("#"+idCampo+"Alert").hide();
    $("#"+idCampo).removeClass('alert-danger');
  }

  function validarOpciones(){
    var error = false;
    var nombreOpcion = $("#nombreMenu").val();
    if(nombreOpcion == ''){
      error = true;
      colocarAlerta('nombreMenu','Debe ingresar un nombre para el menú');
    }
    var cantidadDisponible = $("#cantidadDisponible").val();
    if(cantidadDisponible == ''){
      error = true;
      colocarAlerta('cantidadDisponible','Debe ingresar una cantidad para el menú');
    }
    var descriocionMenu = $("#descriocionMenu").val();
    if(descriocionMenu == ''){
      error = true;
      colocarAlerta('descriocionMenu','Debe ingresar una descripción para el menú');
    }
    var precioMenu = $("#precioMenu").val();
    if(precioMenu ==''){
      error = true;
      colocarAlerta('precioMenu','Debe ingresar una precio para el menú');
    }
    var imgPromocionWeb = $("#imgPromocionWeb").val();
    if(error == false){
      var opcionMenu = {
        "idOpcion": contLista,
        "nombreOpcion": nombreOpcion,
        "cantidadDisponible": cantidadDisponible,
        "descriocionMenu": descriocionMenu,
        "precioMenu": precioMenu,
        "imgPromocionWeb": imgPromocionWeb
        };
        menuCargado.push(opcionMenu);
        agregarOpcionLista(opcionMenu);
    }
    
  }

  function agregarOpcionLista(opcionMenu){
    $("#listaOpcionesMenu").append(''+
     '<tr class="text-center" id="'+opcionMenu.idOpcion+'">'+
       '<td>'+opcionMenu.nombreOpcion+'</td>'+
       '<td>'+opcionMenu.precioMenu+'</td>'+
       '<td>'+opcionMenu.cantidadDisponible+'</td>'+
       '<td class="centrarbotaccion">'+
         '<button onclick="mostrar(\'' + opcionMenu.idOpcion + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>'+
         '<button onclick="editarOpcionLista(\'' + opcionMenu.idOpcion + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button>'+
         '<button title="Eliminar" onclick="eliminarOpLista(\'' + opcionMenu.idOpcion + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button>'+
       '</td>'+
     '</tr>'+
    '');
    contLista++;
    limpiarFormMenu();
  }

  function limpiarFormMenu(){
    $("#nombreMenu").val('');
    $("#cantidadDisponible").val('');
    $("#descriocionMenu").val('');
    $("#precioMenu").val('');
    $("#imgPromocionWeb").val('');
    $("#contenedorImagenWeb").html('');
  }

  function editarOpcionLista(idOpcion){
    limpiarFormMenu();
    _.each(menuCargado, function(menu){
       if(menu.idOpcion == idOpcion){
        $("#nombreMenu").val(menu.nombreOpcion);
        $("#cantidadDisponible").val(menu.cantidadDisponible);
        $("#descriocionMenu").val(menu.descriocionMenu);
        $("#precioMenu").val(menu.precioMenu);
        $("#imgPromocionWeb").val(menu.imgPromocionWeb);
        if(menu.imgPromocionWeb != ''){
          dibujarImagen(menu.imgPromocionWeb, 'contenedorImagenWeb');
        }
        
       }
    });
  }