<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>Guía Mendoza Gourmet - Políticas de Privacidad</title>
  <link rel="shortcut icon" type="image/png" href="favicon.png"/>
  <!-- Bootstrap Core CSS -->
  <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
  <!-- Theme CSS -->
  <link href="../css/gmgbackstyle.css" rel="stylesheet">
  <link href="../css/agency.min.css" rel="stylesheet">
</head>

<body id="page-top" class="index" style="background-color: yellow;">

  <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#"><img class="logoweb" src="img/logo-lacocina.png"></a>
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
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

  <section class="fraseregistrar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <p class="frase1">Conseguí nuevos clientes <br>y fidelizalos.</p>
          <p class="bajada1">Utilizá nuestra plataforma de reservas online.</p>
          <a class="botregistrarminegocio" href="#contacto">Registrar mi negocio</a>
        </div>
      </div>
    </div>
  </section>

  <section class="ventajasbkg">
    <div class="container">
      <div class="row">
          <div class="col-md-6"> 
            <div class="sumate"><img src="img/sumate.png"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/BU5TUU0LBwQ?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
          </div>
          <div class="col-md-6">
            <div class="ventajas">
              <ul class="listadoventajas">
                <li><i class="fa fa-users" aria-hidden="true"></i> <span class="textoventajas"> Menor RRHH dedicados a tomar reservas</span></li>
                <li><i class="fa fa-pie-chart" aria-hidden="true"></i> <span class="textoventajas"> Mayor rendimiento de cupos de reservas</span></li>
                <li><i class="fa fa-magic" aria-hidden="true"></i> <span class="textoventajas"> Administración simple de todas las reservas</span></li>
                <li><i class="fa fa-calendar" aria-hidden="true"></i> <span class="textoventajas"> Sistema automático 24/7</span></li>
                <li><i class="fa fa-cutlery" aria-hidden="true"></i> <span class="textoventajas"> Automatización de cubiertos disponibles</span></li>
                <li><i class="fa fa-area-chart" aria-hidden="true"></i> <span class="textoventajas"> Reporte mensual de estadísticas</span></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </section>

  <section id="contacto" class="contactobkg">
    <div class="container">
      <div class="row">
          <div class="col-md-6"> 
            <div class="quiero"><img src="img/quiero-registrar.png"></div>
            <iframe scrolling="no" width="100%" height="470px" frameborder="0" src="contacto/contacto.html""></iframe>
          </div>
          <div class="col-md-6">
          
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

