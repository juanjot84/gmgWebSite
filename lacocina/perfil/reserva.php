<?php 
error_reporting(E_ERROR);
session_start();
    $idLocal = $_GET['id'];
    $idNegocio = $_SESSION['idNegocio'];
    $tipoUsuario = $_SESSION['tipoUsuario'];

    $jwt = $_SESSION['jwt'];

if (!$_SESSION) {
       header('Location: ../index.php');
} else {
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
        
    } else {
        header('Location: ../index.php');
    }
}

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
  <link href="css/gmgbackstyle-perfil.css" rel="stylesheet">
  <link href="css/agency.min.css" rel="stylesheet">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" integrity="sha384-0s5Pv64cNZJieYFkXYOTId2HMA2Lfb6q2nAcx2n0RTLUnCAoTTsS0nKEO27XyKcY" crossorigin="anonymous"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" integrity="sha384-ZoaMbDF+4LeFxg6WdScQ9nnR1QC2MIRxA1O9KWEXQwns1G8UNyIEZIQidzb0T1fo" crossorigin="anonymous"></script>
  <![endif]-->

</head>


<body id="page-top" class="index">

<?php 
error_reporting(E_ERROR);
    if($tipoUsuario == 'usuarioNegocio'){
        include("includes/nav-perfil.php"); 
    }else if($tipoUsuario == 'superAdmin'){
        include("../includes/nav-superior.php"); 
    }
?>

<div class="container" style="padding-top: 2%; min-height: 60vh;">

  <input type="text" name="idNegocio" id="idNegocio" value="<?php error_reporting(E_ERROR); echo $idNegocio; ?>" class="hidden">
  <input type="text" name="idLocal" id="idLocal" value="<?php error_reporting(E_ERROR); echo $idLocal; ?>" class="hidden">
    <div class="row">
      <div class="col-md-2">
        <div class="input-group">
            <span class="input-group-btn">
                <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverReservas()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
            </span>
        </div>
      </div>
      <div class="col-md-4">

      </div>
    </div></br>

    <h4>Crear reserva manual</h4>

    <div class="row">
      <div class="col-md-12">
        <label for="selectNino">Seleccionar medio de origen de la reserva</label>
        <div style="margin: 15px 0;">
          <label class="radio-inline"><input type="radio" name="opMedio" value="facebook"><i class="naranjabold fa fa-facebook"></i>Facebook</label> | 
          <label class="radio-inline"><input type="radio" name="opMedio" value="instagram"><i class="naranjabold fa fa-instagram"></i>Instagram</label> | 
          <label class="radio-inline"><input type="radio" name="opMedio" value="phone"><i class="naranjabold fa fa-phone"></i>Teléfono</label> | 
          <label class="radio-inline"><input type="radio" name="opMedio" value="whatsapp"><i class="naranjabold fa fa-whatsapp"></i>WhatsApp</label> |
          <label class="radio-inline"><input type="radio" name="opMedio" value="mail"><i class="naranjabold fa fa-envelope-o"></i>Mail</label>
        </div>
      </div>
    </div>
    

    <div class="row">
      <div class="col-md-4">
      <label for="selectNino">Nombre y apellido</label>
       <input id="nombrePersona" name="nombrePersona" type="text" class="form-control" placeholder="" aria-describedby="sizing-addon3" >  
      </div>
      <div class="col-md-4">
      <label for="selectNino">Teléfono</label>
       <input id="telPersona" name="telPersona" type="text" class="form-control" placeholder="" aria-describedby="sizing-addon3" >  
      </div>
      <div class="col-md-4">
      <label for="selectNino">Email</label>
       <input id="mailPersona" name="mailPersona" type="email" class="form-control" placeholder="" aria-describedby="sizing-addon3" >  
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <p>
          <div class="form-group">
            <label for="selectAdulto">¿Para cuántos adultos? </label>
            <select class="form-control" id="selectAdulto">

            </select>
          </div>
        </p>
      </div>
      <div class="col-md-4">
        <p>
          <div class="form-group">
            <label for="selectNino">¿Para cuántos niños?</label>
            <select class="form-control" id="selectNino">

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

    <div class="row">
      <div class="col-md-4">
      <label for="selectNino">Observación:</label>
       <input id="observacionPersona" name="observacionPersona" type="text" class="form-control" placeholder="" aria-describedby="sizing-addon3" >  
      </div>
    </div>

    <div id="noHorario" style="display: none">
      No existen horarios que cumplan con los datos ingresados.
    </div>

    <div class="horas row" style="display: none">
      <div class="col-md-12" style="display: inline-flex;">
        <ul  id="selecHoras" style="flex-direction: row; flex-wrap: wrap; display: flex; list-style: none;">
        </ul>
      </div>
      <div style="text-align: center;">
        <a href="#" onClick="realizarReserva()" id="reservar" class="page-scroll btn btn-xl" style="max-width: 300px; margin: 5% 0;">CREAR RESERVA</a>
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
                <h3 class="titulo"></h3>
                <p id="personaReserva"></p>
                <p id="telPersReserva"></p>
                <p id="mailPersReserva"></p>
                <p id="cantidadReserva"></p>
                <p id="horarioReserva" ></p>
                <p id="direccionLocal" ></p>
                <p id="observacion" ></p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#" class="page-scroll btn btn-xl" data-dismiss="modal" style="max-width: 300px; margin: 5% 0;">MODIFICAR</a>

            <a href="#" class="page-scroll btn btn-xl" onClick="confirmarReserva()" style="max-width: 300px; margin: 5% 0;">CONFIRMAR RESERVA</a>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="reservaConfirmada" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h3>Reserva realizada</h3>
          </div>
          <div class="modal-body">

            <div class="row">
              <div class="col-md-12">
                <h3 class="titulo">La reserva se ha realizado correctamente</h3>
                <p > Un email con los datos sera enviado a su casilla de contacto.</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#" class="page-scroll btn btn-xl"  data-dismiss="modal" style="max-width: 300px; margin: 5% 0;">ACEPTAR</a>
          </div>
        </div>
      </div>
    </div>

    </div>

  <?php 
  error_reporting(E_ERROR);
  include("includes/footer-perfil.php"); ?>


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
  <script src="js/controladores/reservaPerfil.controlador.js"></script>
  <script>
    setJWT('<?php echo $jwt; ?>');
  </script>

</body>

</html>
