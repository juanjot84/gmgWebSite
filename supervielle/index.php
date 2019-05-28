<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Guía Mendoza Gourmet - Términos y condiciones</title>

  <link rel="shortcut icon" type="image/png" href="favicon.png"/>

  <!-- Bootstrap Core CSS -->
  <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

  <!-- Theme CSS -->
  <link href="../css/gmgstyle.css" rel="stylesheet">
  <link href="../css/agency.min.css" rel="stylesheet">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" integrity="sha384-0s5Pv64cNZJieYFkXYOTId2HMA2Lfb6q2nAcx2n0RTLUnCAoTTsS0nKEO27XyKcY" crossorigin="anonymous"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" integrity="sha384-ZoaMbDF+4LeFxg6WdScQ9nnR1QC2MIRxA1O9KWEXQwns1G8UNyIEZIQidzb0T1fo" crossorigin="anonymous"></script>
  <![endif]-->

  <!-- ANALYTICS -->
     <?php include("../includes/analytics.php"); ?>
  <!-- SMARTLOOK -->
     <?php include("../includes/smartlook.php"); ?>
  <!-- FIN SMARTLOOK -->

  <!-- Facebook Pixel Code -->
     <?php include("../includes/pixelFace.php"); ?>
  <!-- End Facebook Pixel Code -->

  <?php include("../includes/soportezen.php"); ?>

  <style type="text/css">
    a.enlace {
        color: #f8981d;
    }
  </style>

</head>

<body id="page-top" class="index">

<?php

  session_start();
  //session_destroy(); // comment this out if it gives you trouble

  // Comment this out to test and using your own method of user check.
  // $idLocal = $_GET["id"];

      // $jwt = $_SESSION['jwt'];

  $tipoUsuario = $_SESSION['tipoUsuario'];
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
    $login = '<li><a href="login.php"><i class="fa fa-user" aria-hidden="true"></i> ACCEDER</a></li>';
    $check_login = $login;
    session_destroy();
    
   
  }else{
    $nombreUsuario = $_SESSION['nombreUsuario'];
    $apellidoUsuario = $_SESSION['apellidoUsuario'];
  
    $login = '<li class="acceder-mobile"><a href="login.php"><i class="fa fa-user" aria-hidden="true"></i> ACCEDER</a></li>';
    $logout = '<div class="nombreusuarionav acceder-mobile"><a class="linkperfil" href="mi-perfil.php"> <i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;'. $nombreUsuario.' '.$apellidoUsuario.'</a> <a class="botonsalirfront" href="cerrar_sesion.php"><i class="fa fa-sign-out" aria-hidden="true"></i> Salir</a></div><li><a href="mis-favoritos.php"><i class="fa fa-heart" style="color: #e02222 !important;" aria-hidden="true"></i> FAVORITOS</a></li><li><a href="mis-reservas.php"><i class="fa fa-check" aria-hidden="true"></i> RESERVAS</a></li>';
  
    $check_login = isset($_SESSION['jwt']) ? $logout : $login;
  }




  // ** Logout the current user. **
  $logoutAction = $_SERVER['PHP_SELF']."?doLogout=true";
  if ((isset($_SERVER['QUERY_STRING'])) && ($_SERVER['QUERY_STRING'] != "")){
    $logoutAction .="&". htmlentities($_SERVER['QUERY_STRING']);
  }

  if ((isset($_GET['doLogout'])) &&($_GET['doLogout']=="true")){
    //to fully log out a visitor we need to clear the session varialbles
    $_SESSION['MM_Username'] = NULL;
    $_SESSION['MM_UserGroup'] = NULL;
    $_SESSION['PrevUrl'] = NULL;
    unset($_SESSION['MM_Username']);
    unset($_SESSION['MM_UserGroup']);
    unset($_SESSION['PrevUrl']);

    $logoutGoTo = "login.php";
    if ($logoutGoTo) {
      header("Location: $logoutGoTo");
      exit;
    }
  }
?>
  <!-- Navigation -->
  <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
          <a  href="../index.php"><img  id="LogoMobile" class="logoweb" src="../img/logo-gmg.png"></a>

        
           <form id="buscador"class="buscadorresultados" action="resultados-busqueda.php" method="post">
            <div class="input-group">
              <input type="text" class="form-control buscadornav2" placeholder="Buscá por nombre, zona o tipo de cocina" name="parametro">
            </div>
            <span class="input-group-btn">
              <button type="submit" class="btn btn-default btnbuscarnav2"><i class="fa fa-search" aria-hidden="true"></i></button>
            </span>
            
          </form>
          <!--img id="loguito" src="img/IconoGMGMobile.png" alt=""-->
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right acceder-pc">

          <li class="hidden">
            <a href="#page-top"></a>
          </li>
          <?php echo $check_login; ?>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>




  <!-- Texto Politicas -->
  <section id="politicas" class="bg-light-gray" style="margin-top: 5%; min-height: 65vh;">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Bases y Condiciones</h2>
          <h3 class="section-subheading text-muted">Promoción Supervielle</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          
          

          <p>CARTERA CONSUMO. Válido en Argentina. 1) Promociones vigentes del 01/09/2018 y el 30/04/2019. Para compras abonadas con Tarj. de Crédito Visa y/o Mastercard ("Las Tarjetas de Crédito") que formen parte de un paquete de productos del Banco Supervielle (“el Banco”). Las promociones no son aplicables a tarjetas corporativas ni a tarjetas emitidas en origen por Cordial Compañía Financiera S.A.. No combinables. 2) BODEGAS: Para consumos realizados por el cliente todos los días de la semana, en cualquiera de los locales del rubro bodegas participante de la promoción. Incluye restaurantes, degustación y compra de vinos. Promoción sin tope de reintegro. Se otorgará un descuento vía reintegro sobre el precio total de la transacción. Cartera general 20%; Clientes Identité 30%.. Para compras abonadas en hasta 3 cuotas sin interés. Tasa Nominal Anual (TNA): 0,00% Tasa Efectiva Anual (TEA): 0,00% Costo Financiero Total Efectivo Anual (CFTEA): 0,00%. El CFTEA y demás datos económicos informados en el presente, corresponden exclusivamente a la operación de compra en cuotas objeto de la presente. Ej.: (i) Para la compra de un producto cuyo precio fuera $1000 se realizará un descuento vía reintegro del 20% sobre el precio. En el 1er. Resumen que se emita con posterioridad al cierre y luego de realizada la compra se verá reflejado un consumo de $1000. El reintegro de $200 se podrá ver reflejado en el primer o segundo resumen. ii) Para la compra de un producto en 3 cuotas sin interés cuyo precio fuera $1200 se realizará un descuento vía reintegro del 20% sobre el precio. En el 1er., 2do. y 3er. resumen que se emitan con posterioridad al cierre y luego de realizada la compra se verá reflejado un consumo de $400 en cada uno de ellos. El reintegro de $240 se podrá ver reflejado en el 1er. o 2do. resumen. Beber con moderación. Prohibida su venta a menores de 18 años. Ley 24.788. 3) RESTAURANTES: Válido de jueves a domingos para compras en un solo pago. Tope de reintegro por cuenta y por mes considerando la totalidad de consumos realizados por el cliente en cualquiera de los locales del rubro restaurante participante de la promoción Cartera General: $400. Clientes Identité $700.- Ej.: Se otorgará un descuento vía reintegro del 20% sobre el precio total de la transacción. Ej.: Compra por $ 1000, con 20% de descuento; en el primer o segundo resumen luego de la compra se reflejará un consumo de $1000 y un reintegro de $200. Consultar adheridos en www.supervielle.com.ar. Banco Supervielle S.A. - Bmé. Mitre 434 – C.A.B.A., Cuit 33-50000517-9, Inscrip. I.G.J. N° 23, F° 502, L. 45, T° A de Estatutos Nac. </p>

        </div>
      </div>
      <div class="row" style="text-align:center; margin: 20px 0 0 0">
          <div class="col-lg-4"></div>
          <div class="col-lg-4"><a href="http://www.guiamendozagourmet.com/resultados-busqueda.php?promocion=supervielle"><img src="http://www.guiamendozagourmet.com/img/OcasionSupervielle.jpg" alt=""></a></div>
          <div class="col-lg-4"></div>
          
      </div>
    </div>
  </section>

 
<footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 menufooter">
          <!-- <p><a style="color: #000;" href="quienes-somos.php">Quiénes somos</a></p>
          <p><a style="color: #000;" href="terminos-y-condiciones.php">Términos y condiciones</a></p> -->
          <div class="row">
            <div class="col-md-4 col-lg-6">
              <p><a style="color: #000;" href="mi-perfil.php">Ver perfil</a></p>
              <p><a style="color: #000;" href="mis-reservas.php">Ver Mis Reservas</a></p>
              <p><a style="color: #000;" href="quienes-somos.php">Quiénes somos</a></p>
              <p><a style="color: #000;" target="_blank" href="http://aliciasistero.com">Blog</a></p>
              <p><a style="color: #000;" target="_blank" href="soporte.php">Soporte</a></p>

            </div>
            <div class="col-md-8 col-lg-6">
              <p><a style="color: #000;" target="_blank" href="lacocina/registrar-mi-negocio.php">Registrar mi negocio</a></p>
              <p><a style="color: #000;" target="_blank" href="lacocina/index.php">Acceso Restaurantes</a></p>
              <p><a style="color: #000;" href="politicas-de-privacidad.php">Políticas de Privacidad</a></p>
              <p><a style="color: #000;" href="condiciones-de-uso.php">Condiciones de Uso</a></p>
              <p><a style="color: #000;" href="preguntas-frecuentes.php">Preguntas Frecuentes</a></p>
            </div>
          </div>
          
          <!-- <p><a style="color: #000;" href="faqs.php">Preguntas frecuentes</a></p> -->
          <p><a style="color: #000; font-weight: bold; text-transform: uppercase; font-size: 1.2em;" target="_blank" href="../descarga-el-mapa-impreso.php"><i class="fa fa-map-o" aria-hidden="true"></i>Descargá el mapa impreso</a></p>
        </div>
        <div class="col-md-4 menufooter">
        
          <img class="img-responsive bajateapp" src="../img/bajate.svg">
          <p style="text-align: center;">
            <a target="_blank" href="https://itunes.apple.com/us/app/gu%C3%ADa-mendoza-gourmet/id1300430301?l=es&ls=1&mt=8"><img class="img-responsive appstore" src="../img/app-apple.svg"></a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=pronet.apps.com.guiamendozagourmet&hl=es"><img class="img-responsive appstore" src="../img/app-google.svg"></a>
          </p>
      
        </div>
        <div class="col-md-4">

          <ul class="list-inline social-buttons">
            <li><a target="_blank" href="https://twitter.com/guiamendozagour"><i class="fa fa-twitter"></i></a>
            </li>
            <li><a target="_blank" href="https://www.facebook.com/guiamendozagourmet"><i class="fa fa-facebook"></i></a>
            </li>
            <li><a target="_blank" href="https://www.instagram.com/guiamendozagourmet"><i class="fa fa-instagram"></i></a>
            </li>
            <li><a target="_blank" href="mailto:hola@guiamendozagourmet.com" data-toggle="tooltip" title="hola@guiamendozagourmet.com"><i class="fa fa-envelope"></i></a>
            </li>
          </ul>

          <ul class="list-inline quicklinks">
            <li>
              <span class="copyright">Copyright &copy; GMG 2018</span>
            </li>
            <li>
              Desarrollado por <a style="text-decoration: none; color: #000;" href="#">Estudio Pronet</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>



  <!-- jQuery -->
  <script src="../vendor/jquery/jquery.min.js"></script>

  <!-- Bootstrap Core JavaScript -->
  <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

  <!-- Contact Form JavaScript -->
  <script src="../js/jqBootstrapValidation.js"></script>
  <script src="../js/contact_me.js"></script>

  <!-- Funciones de Home JavaScript -->
  <script src="../js/controladores/home.controlador.js"></script>

  <!-- Theme JavaScript -->
  <script src="../js/agency.min.js"></script>

  <script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
  crossorigin="anonymous"></script>

  <script>
    obtenerListadoCocinas();

  </script>
  
       <!-- Script para mostrar y ocultar Logo en mobiles-->
        <script>
            if ($(window).innerWidth() < 800) {
                var lastScrollTop = 0;
                $(window).scroll(function(event) {
                    var st = $(this).scrollTop();
                    if (st > lastScrollTop) {
                        // downscroll code
                        document.getElementById("LogoMobile").style.display = "none";
                        document.getElementById("buscador").style.marginTop = "40px";
                        document.getElementById("nav-icon3").style.top = "20px";
                        document.getElementById("loguito").style.display = "inline"
                    } else {
                        // upscroll code
                        document.getElementById("LogoMobile").style.display = "inline";
                        document.getElementById("buscador").style.marginTop = "0px";
                        document.getElementById("nav-icon3").style.top = "0px";
                        document.getElementById("loguito").style.display = "none"
                    }
                    lastScrollTop = st;
                });
            }

        </script>

        <!-- Script para mostrar y ocultar Logo en mobiles-->


</body>

</html>
