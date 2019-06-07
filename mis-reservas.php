<?php
error_reporting(E_ERROR);
session_start();
$idLocal = $_GET["id"];
$idReserva = $_GET["idReserva"];

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
     <?php include("includes/analytics.php"); ?>
  <!-- SMARTLOOK -->
     <?php include("includes/smartlook.php"); ?>
  <!-- FIN SMARTLOOK -->

  <?php include("includes/soportezen.php"); ?>

</head>

<body id="page-top" class="index">

  <?php 
  error_reporting(E_ERROR);
  include("includes/nav.php");
   ?>

  <!-- Texto Politicas -->
  <section id="politicas" style="margin-top: 5%; min-height: 50vh;">
    <div class="container mis-reservas">
    </div>
  </section>

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

  <div class="modal fade" id="detallesReserva" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 id="h3NombreNegocio"></h3>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 text-center">
              <img class="col-md-12" id="fotoRestaurant">
            </div>
            <div class="col-md-6">
              <h3 class="titulo"></h3>
              <div><i class="iconofichamisreservas fa fa-check"></i><span id="cantidadReserva"></span></div>
              <div><i class="iconofichamisreservas fa fa-clock-o"></i><span id="horarioReserva" ></span></div>
              <div><i class="iconofichamisreservas fa fa-map-marker"></i><span id="direccionLocal" ></span></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center" id="botonCancelarReserva">
              <a href="#" class="btn btn-danger cancelarreserva" id="detalleReservaBotonCancelar" style="max-width: 300px; margin: 5% 0;"><i class="fa fa-times"></i> Cancelar Reserva</a>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          
          <a href="#" class="page-scroll btn btn-xl" data-dismiss="modal" onclick="limpiar('telefonoReserva')" style="max-width: 300px; margin: 5% 0;">Cerrar</a>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="reservaCancelada" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3>Reserva Cancelada</h3>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              Su reserva ha sido cancelada correctamente
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a href="#" class="page-scroll btn btn-xl" data-dismiss="modal" style="max-width: 300px; margin: 5% 0;" onclick="cerrarModales()">Cerrar</a>
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
  <!-- Funciones de Local JavaScript -->
  <script src="js/controladores/reserva.controlador.js"></script>
  <script>
    setJWT('<?php echo $jwt; ?>', null, '<?php echo $idReserva; ?>');
  </script>

</body>

</html>
