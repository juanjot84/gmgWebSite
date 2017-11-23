
function obtenerListadoPolos() {
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    $('.container.polos').html('');
    $('#target').html('obteniendo...');
    $.ajax({
        url: server + '/api/v1/admin/polo',
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
          renderPolos(data);

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

function renderPolos(polos){
  $('.container.polos').html('');
  $('.container.polos').append('<div class="row">    <div class="col-lg-12 text-center">      <h2 class="section-heading">POLOS GASTRONÓMICOS</h2>    </div>  </div>');


  _.each(polos, function(polo){
    $('.container.polos').append('' +
      '<div class="col-md-4" onClick="buscarPolo(\'' + polo._id + '\')">' +
        '<a class="linkpolo"><h3 class="section-heading"><i id="prueba" class="fa fa-chevron-right" aria-hidden="true"></i> ' + polo.nombrePoloGastronomico + '</h3></a>' +
      '</div>'
    )
  });

}

function buscarPolo(idPolo) {
  redirect('resultados-busqueda.php', 'post', 'polos', idPolo);
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
