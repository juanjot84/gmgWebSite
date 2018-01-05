<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Guía Mendoza Gourmet - Quiénes Somos</title>

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

  <!-- ANALYTICS -->

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111410422-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-111410422-1');
  </script>

  <!-- SMARTLOOK -->

  <script type="text/javascript">
      window.smartlook||(function(d) {
      var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
      var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
      c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
      })(document);
      smartlook('init', '0f96f4e577145df7b76f73ea418d1f88a242f08b');
  </script>

  <!-- FIN SMARTLOOK -->

  <?php include("includes/soportezen.php"); ?>

  <style type="text/css">
    a {
      color: #000;
    }
  </style>

</head>

<body id="page-top" class="index">

   <?php
  error_reporting(E_ERROR);
  include("includes/nav.php");
   ?>


  <!-- Texto Politicas -->
  <section id="politicas" class="bg-light-gray" style="margin-top: 5%;">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Descargá el mapa impreso</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 text-center">
          <h3 class="elegimapa">#1 / CIUDAD • PALMARES / 2017</h3>
          <a target="_blank" href="MapaGMG-Ciudad-Palmares.pdf"><img class="descarga-mapa" src="img/tapas-mapas/tapa-001.jpg">
          <h3 class="botdescarmapa text-center"><i class="fa fa-map-o" aria-hidden="true"></i> Descargar</a></h3>
        </div>
        <div class="col-lg-4 text-center">
          <h3 class="elegimapa">#2 / CIUDAD • PALMARES / 2017-18</h3>
          <a target="_blank" href="MapaGMG-Ciudad-Palmares-2.pdf"><img class="descarga-mapa" src="img/tapas-mapas/tapa-002.jpg">
          <h3 class="botdescarmapa text-center"><i class="fa fa-map-o" aria-hidden="true"></i> Descargar</a></h3>
        </div>
        <div class="col-lg-4 text-center">
          <h3 class="elegimapa">#2 / LUJÁN DE CUYO • MAIPÚ / 2017-18</h3>
          <a target="_blank" href="MapaGMG-Lujan-de-Cuyo-Maipu.pdf"><img class="descarga-mapa" src="img/tapas-mapas/tapa-003.jpg">
          <h3 class="botdescarmapa text-center"><i class="fa fa-map-o" aria-hidden="true"></i> Descargar</a></h3>
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
