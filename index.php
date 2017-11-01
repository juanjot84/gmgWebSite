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

</head>

<body id="page-top" class="index">

  <!-- Navigation -->
  <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span> <i class="fa fa-bars"></i>
        </button>
        <a class="navbar-brand page-scroll" href="#"><img class="logoweb" src="img/logo-gmg.png"></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li class="hidden">
            <a href="#page-top"></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i> ACCEDER</a>
          </li>
          <li>
            <a href="#"><i class="fa fa-heart" style="color: #e02222 !important;" aria-hidden="true"></i> FAVORITOS</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>

  <!-- Header -->
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-6 intro-text" style="margin-top: 7%;">

          <img class="img-responsive" style="margin: 0 auto;" src="img/reserva.png">
          <!-- <div class="intro-heading">RESERVÁ TU LUGAR</div>
          <div class="intro-lead-in">Buscá <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Elegí <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Reservá <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> ES GRATIS!!</div>
          <a href="#" class="page-scroll btn btn-xl">CÓMO FUNCIONA</a> -->
          <div class="form-group" style="padding-top: 5%;">
            <form action="resultados-busqueda.php" method="post">
              <input type="text" class="form-control" placeholder="Qué buscas?" name="parametro">

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
        <iframe class="altoocasiones" width='101%' height='auto' frameBorder='0' scrolling='no' src="ocasiones.php"></iframe>
      </div>

    </div>
  </section>

  <!-- Publicidad -->
  <section style="padding: 0px 0 !important;">
    <div class="container-fluid fondopubli">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 style="color: #fff; padding-top: 8%;" class="section-heading">PUBLICIDAD</h2>
          <h3 style="color: #fff;" class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
    </div>
  </section>


  <!-- About Section -->
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">POLOS GASTRONÓMICOS</h2>
          
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i id="prueba" class="fa fa-chevron-right" aria-hidden="true"></i> Peatonal Sarmiento</h3></a>
        </div>
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Calle Sarmiento</h3></a>
        </div>
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Calle Belgrano</h3></a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Av. Arístides Villanueva</h3></a>
        </div>
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Av. Juan B. Justo</h3></a>
        </div>
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Alameda</h3></a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Barrio Bombal</h3></a>
        </div>
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Av. San Martín Sur</h3></a>
        </div>
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Panamericana</h3></a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Chacras de Coria</h3></a>
        </div>
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Cacheuta</h3></a>
        </div>
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Alta Montaña</h3></a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Potrerillos</h3></a>
        </div>
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Valle de Uco</h3></a>
        </div>
        <div class="col-md-4">
          <a class="linkpolo" href="#"><h3 class="section-heading"><i class="fa fa-chevron-right" aria-hidden="true"></i> Otro</h3></a>
        </div>
      </div>
    </div>
  </section>

  <!-- ELEGÍ TU COCINA -->
  <section id="team" class="bg-light-gray">

    <h2 style="text-align: center; margin-bottom: 2%;" class="section-heading">Elegí tu cocina</h2>

    <div class="container tipoCocinas">

    </div>
  </section>

<?php include("includes/footer.php"); ?>

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

  <script>
    obtenerListadoCocinas();

  </script>

</body>

</html>
