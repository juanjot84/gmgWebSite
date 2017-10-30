<?php session_start();
$idLocal = $_GET["id"];


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

  <div class="container" style="padding-top: 7%;">
    <div class="row">
      <div class="col-md-12">
        <h3 class="titulo">ZAMPA | Cocina + Barra</h3>
        <p>Hacé tu reserva online GRATIS!</p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <p>
          <div class="form-group">
            <label for="selectAdulto">¿Para cuántos adultos?</label>
            <select class="form-control" id="selectAdulto">
              <option value="1">1 adulto</option>
              <option value="2">2 adultos</option>
              <option value="3">3 adultos</option>
              <option value="4">4 adultos</option>
              <option value="5">5 adultos</option>
              <option value="6">6 adultos</option>
              <option value="7">7 adultos</option>
              <option value="8">8 adultos</option>
              <option value="9">9 adultos</option>
              <option value="10">10 adultos</option>
              <option value="11">11 adultos</option>
              <option value="12">12 adultos</option>
              <option value="13">13 adultos</option>
              <option value="14">14 adultos</option>
              <option value="15">15 adultos</option>
              <option value="16">16 adultos</option>
              <option value="17">17 adultos</option>
              <option value="18">18 adultos</option>
              <option value="19">19 adultos</option>
              <option value="20">20 adultos</option>
              <option value="0">21 adultos o más</option>
            </select>
          </div>
        </p>
      </div>
      <div class="col-md-4">
        <p>
          <div class="form-group">
            <label for="selectNino">¿Para cuántos niños?</label>
            <select class="form-control" id="selectNino">
              <option value="1">1 niño</option>
              <option value="2">2 niños</option>
              <option value="3">3 niños</option>
              <option value="4">4 niños</option>
              <option value="5">5 niños</option>
              <option value="6">6 niños</option>
              <option value="7">7 niños</option>
              <option value="8">8 niños</option>
              <option value="9">9 niños</option>
              <option value="10">10 niños</option>
              <option value="11">11 niños</option>
              <option value="12">12 niños</option>
              <option value="13">13 niños</option>
              <option value="14">14 niños</option>
              <option value="15">15 niños</option>
              <option value="16">16 niños</option>
              <option value="17">17 niños</option>
              <option value="18">18 niños</option>
              <option value="19">19 niños</option>
              <option value="20">20 niños</option>
              <option value="0">21 niños o más</option>
            </select>
          </div>
        </p>
      </div>
      <div class="col-md-4">
        <p>
          <div class="form-group">
            <label for="selectDia">¿Qué día?</label>
            <select class="form-control" id="selectDia">
            </select>
          </div>
        </p>
      </div>
    </div>

    <div id="noHorario" style="display: none">
      No existen horarios que cumplan con los datos ingresados.
    </div>

    <div class="horas row" style="display: none">
      <div class="col-md-12" style="display: inline-flex;">
        <ul  id="selecHoras" style="flex-direction: row; flex-wrap: wrap; display: flex;">
        </ul>
      </div>
      <div style="text-align: center;">
        <a href="#" onClick="checkLogin()" id="reservar" class="page-scroll btn btn-xl" style="max-width: 300px; margin: 5% 0;">RESERVAR</a>
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

    <div class="modal fade" id="realizarReserva" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h3>Confirmar Reserva</h3>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="alert alert-info" style="text-align: center; font-size: 1.5em;">
                  <strong>Atención!</strong> Esta reserva no posee ningún descuento.
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <h3 class="titulo">ZAMPA | Cocina + Barra</h3>
                <p id="cantidadReserva"></p>
                <p id="horarioReserva" >21:30 hs. | Mañana 10 de Octubre</p>
                <p id="direccionLocal" >Av. Bartolomé Mitre 794, Ciudad</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#" class="page-scroll btn btn-xl" style="max-width: 300px; margin: 5% 0;">MODIFICAR</a>

            <a href="#" class="page-scroll btn btn-xl" style="max-width: 300px; margin: 5% 0;">CONFIRMAR RESERVA</a>
          </div>
        </div>
      </div>
    </div>

    </div>

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
  <!-- Funciones de Local JavaScript -->
  <script src="js/controladores/reserva.controlador.js"></script>
  <script>
    setJWT('<?php echo $jwt; ?>');
    getOpcionesReservaLocal('<?php echo $idLocal; ?>');
  </script>

</body>

</html>
