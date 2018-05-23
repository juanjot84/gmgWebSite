

iniciar();

function iniciar(){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
     //  controlarRadioSeleccionado();
    //   dibujarListadoLocales();
    dibujarListadoGrupos(); 
    });
}

function dibujarListadoGrupos(){
  //  limpiarForm();
 //   $("#formAgrupador").hide();
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
      $('#listadoGrupos').html('');
      $('#loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span>');       
      $.ajax({
          url: server + '/api/v1/admin/agrupadorLocales',
          type: 'GET',
          dataType: "json",
          crossDomain: true,
          contentType:"application/json",
          success: function (data) {
              gruposLocales = data;
              var contGrupos = 1;       
              _.each(gruposLocales, function(grupo){
                
                var estadoGrupo;
                if(grupo.estadoAgrupador == true){
                    estadoGrupo = "fa fa-eye";
                }
                if(grupo.estadoAgrupador == false){
                    estadoGrupo = "fa fa-eye-slash";
                }
                $('#listadoGrupos').append('' +
                  '<tr class="text-center">'+
                    '<td>'+contGrupos+'</td>'+
                    '<td>'+grupo.nombreGrupo+'</td>'+
                    '<td>'+grupo.parametro+'</td>'+
                    '<td>'+grupo.valor+'</td>'+
                    '<td class="centrarbotaccion">'+
                      '<button onclick="actualizarEstadoGrupo(\'' + grupo._id + '\',\'' + grupo.estadoAgrupador + '\')" title="Activar / desactivar" class="btn btn-default botaccion" type="button">'+
                        '<i style="font-size: 1.5em;" class="'+estadoGrupo+'" aria-hidden="true"></i>'+
                      '</button>'+
                    '</td>'+
                    '<td class="centrarbotaccion">'+
                      '<button onclick="editarGrupo(\'' + grupo._id + '\')" title="Editar" class="btn btn-default botaccion" type="button">'+
                        '<i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
                      '</button>'+
                      '<button title="Eliminar" onclick="mostrarModalEliminar()" class="btn btn-default botaccion" type="button">'+
                        '<i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i>'+
                      '</button>'+
                    '</td>'+
                  '</tr>'+
                '');
                contGrupos++; 
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
            $("#tablaGrupos").show();
  }

  function actualizarEstadoGrupo(idGrupo, estado){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
        var nuevoCampo = {};
        var valorAActualizar;
        if(estado == 'true'){
          valorAActualizar = false;
        }else if(estado == 'false'){
          valorAActualizar = true;
        }
        campoAAcuatualizar = 'estadoAgrupador';
        nuevoCampo[campoAAcuatualizar] = valorAActualizar;
    
        $.ajax({
          url: server + '/api/v1/admin/agrupadorLocales?id=' + idGrupo,
          type: 'PUT',
    
          dataType: "json",
          crossDomain: true,
          contentType: "application/json",
          success: function (data) {
            dibujarListadoGrupos();
          },
          error: function (jqXHR, textStatus, errorThrown) {
            reject(errorThrown);
          },
          data: JSON.stringify(nuevoCampo)
        });
       });
  }