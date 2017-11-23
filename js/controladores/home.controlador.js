
function obtenerListadoCocinas() {
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    $('.container.locales').html('');
    $('#target').html('obteniendo...');
    $.ajax({
        url: server + '/api/v1/admin/tipoCocinaDestacados',
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
          locales = data;
          _.each(data, function(cocinas){
            renderTipoCocina(cocinas);
          });
          obtenerListadoOcasiones();
          obtenerListadoPolos();
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

function renderTipoCocina(cocina){
  $('.container.tipoCocinas').append('' +
    '<a style="text-decoration: none; color: #111;">' +
      '<div class="col-md-3 text-center" onClick="buscarCocina(\'' + cocina._id + '\')">' +
        '<img src="' + cocina.urlImagenTipoCocina + '" class="img-responsive fotoscocina" alt="">' +
        '<h4 style="text-transform: none;">' + cocina.nombreTipoCocina+ '</h4> ' +
      '</div>' +
    '</a>');
}

function buscarCocina(idCocina) {
  redirect('resultados-busqueda.php', 'post', 'tipoCocina',  idCocina);
}

var redirect = function(url, method, filtro, idParam) {
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
