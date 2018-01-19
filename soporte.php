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
