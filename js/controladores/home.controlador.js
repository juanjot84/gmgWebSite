
function obtenerListadoCocinas() {
    $('.container.locales').html('');
    $('#target').html('obteniendo...');
    $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoCocinaDestacados',
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
          locales = data;
          _.each(data, function(cocinas){
            renderTipoCocina(cocinas);
          });
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
        console.log("jqXHR: "+jqXHR);
        console.log("textStatus: "+textStatus);
        console.log("You can not send Cross Domain AJAX requests: "+errorThrown);
      }
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
  redirect('resultados-busqueda.php', 'post', idCocina);
}

var redirect = function(url, method, idCocina) {
  var form = $('<form>', {
    method: method,
    action: url
  });
  $(document.body).append(form);

  $('<input />').attr('type', 'hidden')
    .attr('name', "parametro")
    .attr('value', idCocina)
    .appendTo(form);

  $('<input />').attr('type', 'hidden')
    .attr('name', "filtro")
    .attr('value', 'tipoCocina')
    .appendTo(form);

  form.submit();
};

