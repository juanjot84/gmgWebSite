<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Ocasiones</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- <link href="assets/css/bootstrapTheme.css" rel="stylesheet"> -->
    <link href="assets/css/custom.css" rel="stylesheet">

    <!-- Owl Carousel Assets -->
    <link href="owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="owl-carousel/owl.theme.css" rel="stylesheet">

    <link href="assets/js/google-code-prettify/prettify.css" rel="stylesheet">

    <style type="text/css">
      h2.section-heading {
        color: #111;
        font-family: "Roboto", sans-serif;
      }
      h3.section-subheading.text-muted {
        color: #777;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        text-transform: none;
        font-weight: 400;
        margin-bottom: 75px;
      }
      .tituloocasiones {
          font-size: 1.4em !important;
          margin-top: 4% !important;
      }
    </style>


    <!-- ANALYTICS -->
       <?php include("includes/analytics.php"); ?>
    <!-- SMARTLOOK -->
       <?php include("includes/smartlook.php"); ?>
    <!-- FIN SMARTLOOK -->

  </head>
  <body>

      <div id="demo">
        <div class="container">
          <div class="row">
            <div class="span12">

              <div id="owl-demo" class="owl-carousel">
                <div class="item"><img class="img-responsive fotosocasiones" style="max-width:280px; " src="img/ocasion01.png">
                  <h2 class="section-heading">Cena romántica</h2>


                </div>
                <div class="item"><img class="img-responsive fotosocasiones" style="max-width:280px; " src="img/ocasion02.png">
                  <h2 class="section-heading">Salida en familia</h2>


                </div>
                <div class="item"><img class="img-responsive fotosocasiones" style="max-width:280px; " src="img/ocasion03.png">
                  <h2 class="section-heading">Juntada con amigos</h2>


                </div>
                <div class="item"><img class="img-responsive fotosocasiones" style="max-width:280px; " src="img/ocasion04.png">
                  <h2 class="section-heading">Comer con niños</h2>


                </div>
                <div class="item"><img class="img-responsive fotosocasiones" style="max-width:280px; " src="img/ocasion05.png">
                  <h2 class="section-heading">Reunión de negocios</h2>


                </div>
                <div class="item"><img class="img-responsive fotosocasiones" style="max-width:280px; " src="img/ocasion06.png">
                  <h2 class="section-heading">Festejo</h2>


                </div>
                <div class="item"><img class="img-responsive fotosocasiones" style="max-width:280px; " src="img/ocasion07.png">
                  <h2 class="section-heading">Pic nic</h2>


                </div>
                <div class="item"><img class="img-responsive fotosocasiones" style="max-width:280px; " src="img/ocasion08.png">
                  <h2 class="section-heading">Fin de año</h2>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>



    <script src="assets/js/jquery-1.9.1.min.js"></script>
    <script src="owl-carousel/owl.carousel.js"></script>


    <!-- Demo -->

    <style>
    #owl-demo .item{
        background: none;
        padding: 5px 0px;
        margin: 5px;
        color: #FFF;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        text-align: center;
    }
    .customNavigation{
      text-align: center;
    }
    .customNavigation a{
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    @media only screen and (max-width : 1024px) {
        .fotosocasiones {
          object-fit: cover;
          object-position: center;
          height: 260px;
          width: 180px;
      }
    }

    </style>


    <script>

    $(document).ready(function() {

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




    });
    </script>


    <script src="assets/js/bootstrap-collapse.js"></script>
    <script src="assets/js/bootstrap-transition.js"></script>
    <script src="assets/js/bootstrap-tab.js"></script>

    <script src="assets/js/google-code-prettify/prettify.js"></script>
    <script src="assets/js/application.js"></script>

  </body>
</html>
