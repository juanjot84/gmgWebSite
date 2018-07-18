
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
          buscarSugeridos();
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
      '<div class="col-xs-12 col-sm-6 col-md-3 text-center botonmanito" onClick="buscarCocina(\'' + cocina._id + '\')">' +
        '<img src="' + cocina.urlImagenTipoCocina + '" class="img-responsive fotoscocina" alt="">' +
        '<h4 class="titulotipococina" style="text-transform: none;">' + cocina.nombreTipoCocina+ '</h4> ' +
      '</div>' +
    '</a>');
}

function buscarSugeridos() {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  $.ajax({
    url: server + '/api/v1/admin/localesAceptanReservas',
    type: 'GET',

    dataType: "json",
    crossDomain: true,
    contentType: "application/json",
    success: function (data) {
      renderSugeridos(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#target').append("jqXHR: " + jqXHR);
      $('#target').append("textStatus: " + textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
    }
  });
}

function renderSugeridos(locales){

    $('#sugeridosBase').html('');
      var idSugerido = 1;
      var contSugeridos = 1;

      _.each(locales, function(local){
        if (contSugeridos == 1) {
          $("#sugeridosBase").append('' +
          '<div id="container'+idSugerido+'" class="container sugeridos sugeridosFichaBAse">'+
          '</div>'
          );
        } 
        $("#container"+ idSugerido).append('' +
              '<div class="col-md-2 ">'+
                  '<div class="centraimagensugeridos"><a href="ficha.php?id=' + local._id + '"><img class="sugeridos img-responsive" src="' +  _.get(local, 'fotoPrincipalLocal') + '"> </a>'+
                  '</div>'+
                      '<h2 class="titulosugerencia2">' + _.get(local, 'local.nombreNegocio') + '</h2>'+
              '</div>'   
        );
        contSugeridos++;
        if (contSugeridos == 7) {
          contSugeridos = 1;
          idSugerido++;
        }

      });
  


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


