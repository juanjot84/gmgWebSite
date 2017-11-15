<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Guía Mendoza Gourmet</title>

  <link rel="shortcut icon" type="image/png" href="favicon.png"/>

  <!-- Bootstrap Core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

  <!-- Theme CSS -->
  <link href="css/gmgstyle.css" rel="stylesheet">
  <link href="css/agency.min.css" rel="stylesheet">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" integrity="sha384-0s5Pv64cNZJieYFkXYOTId2HMA2Lfb6q2nAcx2n0RTLUnCAoTTsS0nKEO27XyKcY" crossorigin="anonymous"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" integrity="sha384-ZoaMbDF+4LeFxg6WdScQ9nnR1QC2MIRxA1O9KWEXQwns1G8UNyIEZIQidzb0T1fo" crossorigin="anonymous"></script>
  <![endif]-->



      <!-- <link href="assets/css/bootstrapTheme.css" rel="stylesheet"> -->
  <link href="assets/css/custom.css" rel="stylesheet">

  <!-- Owl Carousel Assets -->
  <link href="owl-carousel/owl.carousel.css" rel="stylesheet">
  <link href="owl-carousel/owl.theme.css" rel="stylesheet">

  <link href="assets/js/google-code-prettify/prettify.css" rel="stylesheet">

  <!-- Le fav and touch icons -->
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
  <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">

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
  </style>

</head>

<body id="page-top" class="index">

  <?php 
  error_reporting(E_ERROR);
  include("includes/nav.php"); 
  ?>

  <!-- Header -->
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-6 intro-text" style="margin-top: 5%;">

          <img class="img-responsive" style="margin: 0 auto;" src="img/reserva.png">
          <!-- <div class="intro-heading">RESERVÁ TU LUGAR</div>
          <div class="intro-lead-in">Buscá <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Elegí <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Reservá <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> ES GRATIS!!</div>
          <a href="#" class="page-scroll btn btn-xl">CÓMO FUNCIONA</a> -->
          <div class="form-group" style="padding-top: 7%;">
            <form action="resultados-busqueda.php" method="post">
              <input type="text" class="form-control" placeholder="Buscá por nombre, zona o tipo de cocina" name="parametro">

              <!-- <div class="filtros">
                <input type="radio" name="filtro" value="nombre" aria-label="..."> POR NOMBRE
                <input type="radio" name="filtro" value="localidad" aria-label="..."> POR ZONA
                <input type="radio" name="filtro" value="tipoCocina" aria-label="..."> TIPO DE COMIDA
              </div> -->
              <div style="padding-top: 5%;">
                <!-- <button type="button" class="btn btn-default">FECHA</button>
                <button type="button" class="btn btn-default">HORA</button>
                <button type="button" class="btn btn-default">COMENSALES</button> -->
                <button type="submit" class="btn btn-default btnbuscar">BUSCAR</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6 intro-text">
          <img style="margin: 0 auto;" class="img-responsive" src="img/cortes.png">
        </div>
      </div>
    </div>
  </header>

  <!-- Ocasiones -->
  <section id="portfolio" class="bg-light-gray">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Ocasiones</h2>

        </div>
      </div>

      <div class="row">
        <div id="demo">
          <div class="container">
            <div class="row">
              <div class="span12">

                <div id="owl-demo" class="owl-carousel">

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Publicidad -->
  <section style="padding: 0px 0 !important;">
    <div class="container-fluid fondopubli">
      <div class="row">
        <div class="col-lg-12 text-center">
          <!-- <h2 style="color: #fff; padding-top: 8%;" class="section-heading">PUBLICIDAD</h2>
          <h3 style="color: #fff;" class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> -->
        </div>
      </div>
    </div>
  </section>


  <!-- About Section -->
  <section id="about">
    <div class="container polos">
    </div>
  </section>

  <!-- ELEGÍ TU COCINA -->
  <section id="team" class="bg-light-gray">

    <h2 style="text-align: center; margin-bottom: 2%;" class="section-heading">Elegí tu cocina</h2>

    <div class="container tipoCocinas">

    </div>
  </section>

<?php 
error_reporting(E_ERROR);
include("includes/footer.php");
 ?>

  <!-- jQuery -->
  <script src="vendor/jquery/jquery.min.js"></script>

  <!-- Bootstrap Core JavaScript -->
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

  <!-- Contact Form JavaScript -->
  <script src="js/jqBootstrapValidation.js"></script>
  <script src="js/contact_me.js"></script>

  <!-- Funciones de Home JavaScript -->
  <script src="js/controladores/home.controlador.js"></script>

  <!-- Theme JavaScript -->
  <script src="js/agency.min.js"></script>

  <script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
  crossorigin="anonymous"></script>



      <script src="assets/js/jquery-1.9.1.min.js"></script>
      <script src="owl-carousel/owl.carousel.js"></script>

  <script>
    obtenerListadoCocinas();

  </script>
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

  <!-- Funciones de Ocasiones JavaScript -->
  <script src="js/controladores/ocasiones.controlador.js"></script>
  <script>
    obtenerListadoOcasiones();

  </script>

  <!-- Funciones de Ocasiones JavaScript -->
  <script src="js/controladores/polos.controlador.js"></script>
  <script>
    obtenerListadoPolos();

  </script>

  <script src="assets/js/bootstrap-collapse.js"></script>
  <script src="assets/js/bootstrap-transition.js"></script>
  <script src="assets/js/bootstrap-tab.js"></script>

  <script src="assets/js/google-code-prettify/prettify.js"></script>
  <script src="assets/js/application.js"></script>


</body>

</html>
