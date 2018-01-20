<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Guía Mendoza Gourmet - Soporte</title>

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

  <!-- Facebook Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '510992362591893');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=510992362591893&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Facebook Pixel Code -->

  <?php include("includes/soportezen.php"); ?>

  <style type="text/css">
    body {
      background: #fff;
    }
    .text-primary, a {
      color: #505050;
    }
  </style>

</head>

<body id="page-top" class="index">

  <?php 

  error_reporting(E_ERROR);

  include("includes/nav.php"); 

  ?>



  <!-- Texto Politicas -->
  <section style="margin-top: 2%; margin-bottom: -3.5%;">
    <div class="container-fluid" style="background: #fff; min-height: 615px;">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-center">
            <img class="img-responsive" src="img/soporte-ice.png" style="margin: 0 auto;">
          </div>
          <div class="col-lg-6 text-center">
            <img src="img/ayuda-black.png" style="width: 100%; max-width: 500px; margin: 15% 0 0 0;">
            <h2 style="font-size: 1.8em; color: #000; line-height: 1.5em;"><a href="mailto:soporte@guiamendozagourmet.com">soporte@guiamendozagourmet.com</p></h2>
          </div>
        </div>
      </div>
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
