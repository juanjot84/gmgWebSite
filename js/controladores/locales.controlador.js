

function obtenerListado() {
    $('.container.locales').html('');
    $('#target').html('obteniendo...');
    $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local',
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
            locales = data;
          _.each(data, function(local){
              renderLocal(local);
          });
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      }
  });
}

function buscar(parametro, filtro) {
  if( _.isEmpty(parametro) || _.isEmpty(filtro)  ){
    obtenerListado()
  } else {
    $('.container.locales').html('');
    var obj={};
    var llamada;
    if (filtro ==  "nombre"){
      llamada ="buscar";
      obj.parametro = parametro;
    } else {
     llamada = "filtro";
      obj[filtro] = parametro
    }

    $.ajax({
      url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/' + llamada,
      type: 'POST',

      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
      success: function (data) {
        locales = data;
        _.each(data, function(local){
          renderLocal(local);
        });
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
        $('#target').append("jqXHR: "+jqXHR);
        $('#target').append("textStatus: "+textStatus);
        $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      },
      data:JSON.stringify( obj)
    });
  }
}

function getTituloBusqueda(parametro, filtro) {
  var titulo = $("#labelRestaurantesBusquedas");
  titulo.text('Restaurantes para la búsqueda "' + parametro +'"' );
}

function renderLocal(local){
  $('.container.locales').append('' +
    '<div class="row" style="padding-top: 5%;">' +
    '<div class="col-md-4">' +
    '<img class="img-responsive" src="' + local.idNegocio.urlIconoNegocio + '">' +
    '</div>' +
    '<div class="col-md-6">' +
    '<h3 class="titulo">' + local.idNegocio.nombreNegocio + ' | ' + local.idNegocio.bajadaNegocio + '</h3>' +
    '<span class="polo">' + local.idPoloGastronomico.nombrePoloGastronomico +'</span> | ' +
    '<span class="tiponegocio">' +local.idNegocio.tipoNegocio +'</span> <br>' +
    // '<ul style="display: inline-flex; list-style: none;"">' +
    // '<li>' +
    // '<i class="fa fa-star" aria-hidden="true"></i>' +
    // '<i class="fa fa-star" aria-hidden="true"></i>' +
    // '<i class="fa fa-star" aria-hidden="true"></i>' +
    // '<i class="fa fa-star" aria-hidden="true"></i>' +
    // '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    // '</li>' +
    // '</ul> | ' +
    // '<span class="precio">' + local.idNivelPrecio.label +'</span> <br>' +
    '<span class="descripcion">' + local.idNegocio.descripcionNegocio + '</span>' +
    '</div>' +
    '<div class="col-md-2">' +
    '<a href="ficha.php?id=' + local._id +'" class="page-scroll btn btn-xl" style="width: 100%; margin-top: 8%; margin-bottom: 4.9%;">IR</a> <br><h2 style="text-align: center;">-10% OFF</h2>' +
    '</div>' +
    '</div>');
}
