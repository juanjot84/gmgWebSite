var tiposNegocios = [];

function obtenerListadoTiposNegocio() {
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    $('.container.ocasiones').html('');
    $('#target').html('obteniendo...');
    $.ajax({
        url: server + '/api/v1/admin/tipoNegocio',
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
          tiposNegocios = data;
          renderMenu(data);
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
        console.log("jqXHR: "+jqXHR);
        console.log("textStatus: "+textStatus);
        console.log("You can not send Cross Domain AJAX requests: "+errorThrown);
      }
  });
});
}

function renderMenu(tiposNegocio){
_.each(tiposNegocio, function(tipoNegocio){
  if(tipoNegocio.nombreTipoNegocio != 'Restaurante'){
    $('#menuLateral').append(' ' +
       '<li>'+
         '<a href="#" onclick="buscarTipoNegocio(\'' + tipoNegocio.nombreTipoNegocio + '\')">'+tipoNegocio.nombreTipoNegocio+'</a>'+
       '</li>'+
    '');
  }
});
}

function buscarTipoNegocio(nombreTipoNegocio) {
redirectTN('resultados-busqueda.php', 'post', 'tipoNegocio',  nombreTipoNegocio);
}

var redirectTN = function(url, method, filtro, idParam) {
var form = $('<form>', {
  method: method,
  action: url
});
$(document.body).append(form);

$('<input />').attr('type', 'hidden')
  .attr('name', "parametro")
  .attr('value', idParam)
  .appendTo(form);

$('<input />').attr('type', 'hidden')
  .attr('name', "filtro")
  .attr('value', filtro)
  .appendTo(form);

form.submit();
};

