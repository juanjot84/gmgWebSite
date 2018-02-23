
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
    $("#"+idCampo).removeClass('alert-danger');
}

function eliminarFila(idCampo){
   $("#"+idCampo).html('');
}