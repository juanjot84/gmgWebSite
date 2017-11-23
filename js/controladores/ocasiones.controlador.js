
function obtenerListadoOcasiones() {
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    $('.container.ocasiones').html('');
    $('#target').html('obteniendo...');
    $.ajax({
        url: server + '/api/v1/admin/ocasionDestacadas',
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
          renderOcasiones(data);

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

function renderOcasiones(ocasiones){
  $('#owl-demo').html('');
  _.each(ocasiones, function(ocasion){
    $('#owl-demo').append('' +
      '<div class="item"  onClick="buscarOcasion(\'' + ocasion._id + '\')">' +
        '<img class="img-responsive fotosocasiones" style="max-width:280px; " src="' + ocasion.urlImagenOcasion + '">' +
        '<h2 style="font-size: 1.4em; margin-top: 4%;" class="tituloocasiones section-heading">' + ocasion.nombreOcasion + '</h2>' +
      '</div>');
  });

   iniciarCarousel();
}

function buscarOcasion(idOcasion) {
  redirect('resultados-busqueda.php', 'post', idOcasion);
}

function iniciarCarousel(){
  var owl = $("#owl-demo");

  owl.owlCarousel({

    autoPlay : 2000,
    autoplayHoverPause:true,
    items : 4, //10 items above 1000px browser width
    itemsDesktop : [1000,5], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
    itemsTablet: [600,2], //2 items between 600 and 0;
    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option

  });
}
