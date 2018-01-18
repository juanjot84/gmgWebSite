<!DOCTYPE html>
<html lang="es">

<head>



  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Guía Mendoza Gourmet - Quiénes somos</title>

  <link rel="shortcut icon" type="image/png" href="favicon.png"/>

  <!-- Bootstrap Core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">


  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'

  <!-- Theme CSS -->
  <link href="css/gmgstyle.css" rel="stylesheet">
  <link href="css/agency.min.css" rel="stylesheet">


  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->

  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

  <!--[if lt IE 9]>

  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" integrity="sha384-0s5Pv64cNZJieYFkXYOTId2HMA2Lfb6q2nAcx2n0RTLUnCAoTTsS0nKEO27XyKcY" crossorigin="anonymous"></script>

  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" integrity="sha384-ZoaMbDF+4LeFxg6WdScQ9nnR1QC2MIRxA1O9KWEXQwns1G8UNyIEZIQidzb0T1fo" crossorigin="anonymous"></script>

  <![endif]-->

  <!-- ANALYTICS -->

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111410422-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-111410422-1');
  </script>

  <?php include("includes/soportezen.php"); ?>

</head>

<body id="page-top" class="index">

  <?php 

  error_reporting(E_ERROR);

  include("includes/nav.php"); 

  ?>


<section class="bg-light-gray" style="margin-top: 5%;">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading">Mendoza</h2>
        <h3 class="section-subheading text-muted">El destino enogastronómico más importante de Argentina.</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <img class="img-responsive" src="img/quienes-somos-gmg-larga.jpg" style="margin:  0 auto;
">
      </div>
      <div class="col-md-6">

        <p>La oferta de restaurantes en Mendoza ha crecido en cantidad y calidad en los últimos años, impulsada en gran medida por la exigencia del consumidor que pide una cocina a la altura de los grandes vinos locales.</p>
        <p>Esta provincia es el principal destino enogastronómico de Argentina, produce más del 70% de los vinos de todo el país y posee más de 60 restaurantes ubicados en bodegas.</p>
        <p>Te invito a descubrir Mendoza, probando nuevos lugares, platos y vinos.</p>

        <h4>¡Animate a conocer más sabores!</h4>

        <a target="_blank" href="http://aliciasistero.com/"><img style="float: right; width: 200px; margin-right: 3%; margin-top: 3%;" src="img/firmaalicia.svg"></a>
      </div>
    </div>
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

  <script>

    obtenerListadoCocinas();

  </script>

</body>

</html>

