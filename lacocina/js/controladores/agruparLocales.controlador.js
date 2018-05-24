
iniciar();

function iniciar(){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    dibujarListadoLocales();
    dibujarListadoGrupos(); 
    });
}

function dibujarListadoGrupos(){
    limpiarForm();
    $("#formAgrupador").hide();
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

  function cargarFormCrear(){
    limpiarForm();
    dibujarListadoGrupos();
    $("#formAgrupador").show();
    $("#tablaGrupos").hide();
  }

  function cancelar(){
    dibujarListadoGrupos();
    limpiarForm();
    dibujarListadoLocales();
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

  function limpiarForm(){
    $('input[type="text"]').val('');
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

  function subirWeb(seccion){
    $('html,body').animate({
      scrollTop: $("#"+seccion).offset().top
    }, 2000);
  }

  function validarDatosGrupo(){
    var error = false;
    var nombreGrupo = $("#nombreGrupo").val();
    if(nombreGrupo == ''){
      error = true;
      colocarAlerta('nombreGrupo','Ingresar nombre del Grupo');
      subirWeb('formAgrupador');
    }
    var parametro = $("#parametro").val();
    if(parametro == ''){
     error = true;
     colocarAlerta('parametro','Ingresar parametro del Grupo');
     subirWeb('formAgrupador');
    }
    var valor = $("#valor").val();
    if(valor == ''){
     error = true;
     colocarAlerta('valor','Ingresar valor del Grupo');
     subirWeb('formAgrupador');
    }

    if(!error){guardarGrupo()}
  }

  function quitarAlert(idCampo){
    $("#"+idCampo+"Alert").html(''); 
    $("#"+idCampo+"Alert").hide();
    $("#"+idCampo).removeClass('alert-danger');
  }

  function colocarAlerta(idCampo,mensaje){
    $("#"+idCampo).parent().after('<span id="'+idCampo+'Alert" style="color:red">'+mensaje+'</span>');
    $("#"+idCampo).addClass('alert-danger');
  }

  function guardarGrupo(){
    if (_.isUndefined(server)) {
      $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
      });
    }
    var isNew =$("#idGrupo").val() == '';
    var operacion = isNew  ? "POST": "PUT";
    var localesSeleccionados = [];
    var seleccionados = $('input[name=localCheck]:checked');
      _.each(seleccionados, function(item){ 
        localesSeleccionados.push(item.value);
    })
  
    var grupoLocales = JSON.stringify({
        "nombreGrupo": $("#nombreGrupo").val(),
        "descripcionGrupo": $("#descripcionGrupo").val(),
        "parametro" : $("#parametro").val(),
        "valor" : $("#valor").val()
    });
    $('#target').html('sending..');
    var queryParam = isNew  ? "": "?id=" + $("#idGrupo").val();
    $.ajax({
        url: server + '/api/v1/admin/agrupadorLocales' + queryParam,
        type: operacion,
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
          guardarLocalAgrupador();
          dibujarListadoGrupos(localesSeleccionados, data._id);
        },
        error:function(jqXHR,textStatus,errorThrown)
        {
      },
      data: grupoLocales
  });
  }

  function dibujarListadoGrupos(localesSeleccionados, idGrupo){

  }