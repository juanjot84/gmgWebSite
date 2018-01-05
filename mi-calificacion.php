<?php session_start();
    error_reporting(E_ERROR);
    $jwt = $_SESSION['jwt'];
?>

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
    .btn-link {
        color: #f8981d;
    }
    .btn-link:hover {
        color: #000;
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

  </header>

  <div class="container miperfilusuario">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2>Calificar mi experiencia</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <p>Hola <strong>Martín</strong>, contanos cómo te fue con tu reserva</p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3>Califica el ambiente</h3>
        <ul class="calificastars">
          <li><button class="btn-link"><i class="fa fa-star" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star-o" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star-o" aria-hidden="true"></i></button></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>Califica la comida</h3>
        <ul class="calificastars">
          <li><button class="btn-link"><i class="fa fa-star" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star-o" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star-o" aria-hidden="true"></i></button></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>Califica la atención</h3>
        <ul class="calificastars">
          <li><button class="btn-link"><i class="fa fa-star" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star-o" aria-hidden="true"></i></button></li>
          <li><button class="btn-link"><i class="fa fa-star-o" aria-hidden="true"></i></button></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>Deja un comentario</h3>
        <div class="form-group">
          <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p>
          <a href="#"  onClick="actualizarPerfil()" class="page-scroll btn btn-xl" style="max-width: 300px; margin: 5% 0;">ENVIAR</a>
        </p>
      </div>
    </div>
  </div>


  <div class="modal fade" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3>No has iniciado sesión</h3>
        </div>
        <div class="modal-body">
          <h5>Por favor, inicie sesión para continuar</h5>

        </div>
        <div class="modal-footer">
          <a href="login.php" data-confirm="modal" class="btn btn-info" id="botonLogin">Iniciar sesión</a>
          <a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="aceptarCondiciones" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3>No has aceptados los términos y condiciones.</h3>
        </div>
        <div class="modal-body">
          <h5>Por favor, acepte los términos y condiciones. para continuar</h5>

        </div>
        <div class="modal-footer">
          <a href="#" data-dismiss="modal" class="btn btn btn-xl">Aceptar</a>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="datosActualizados" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3>Datos actualizados correctamente.</h3>
        </div>
        <div class="modal-body">
          <h5>Sus datos han sido actualizados correctamente</h5>

        </div>
        <div class="modal-footer">
          <a href="#" data-dismiss="modal" class="btn btn btn-xl">Aceptar</a>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h3>No has iniciado sesión</h3>
          </div>
          <div class="modal-body">
            <h5>Por favor, inicie sesión para continuar</h5>

          </div>
          <div class="modal-footer">
            <a href="login.php" data-confirm="modal" class="btn btn-info" id="botonLogin">Iniciar sesión</a>
            <a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
          </div>
        </div>
      </div>
    </div>

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

  <!-- Theme JavaScript -->
  <script src="js/agency.min.js"></script>

  <script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
  crossorigin="anonymous"></script>

  <script src="js/utils/jwt-decode.min.js"></script>
  <!-- Funciones de perfil JavaScript -->
  <script src="js/controladores/perfil.controlador.js"></script>
  <script>
    setJWT('<?php echo $jwt; ?>');
  </script>


</body>

</html>

