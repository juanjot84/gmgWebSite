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
      <div class="col-md-12">
        <h3>Mi perfil</h3>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label class="control-label col-sm-2" for="nombre">Nombre:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control perfil perfilfront" id="nombre" placeholder="Nombre">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="apellido">Apellido:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control perfil perfilfront" id="apellido" placeholder="Apellido">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Email:</label>
          <div class="col-sm-10">
            <input type="email" class="form-control perfil perfilfront" disabled="disabled" id="email" placeholder="Enter email">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="nroCelular">Celular:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control perfil perfilfront" id="nroCelular" placeholder="Celular">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="fechaNacimientoUsuario">Fecha de nacimiento:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control perfil perfilfront" id="fechaNacimientoUsuario" placeholder="Fecha de nacimiento">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="fechaNacimientoUsuario">Sexo</label>
          <div class="col-sm-10" style="display: inline-flex;" >
           <div><input type="radio" name="sexoUsuario" value="Hombre" id="hombre"> Hombre</div>
           <div style="padding: 0 5%;"><input type="radio" name="sexoUsuario" value="Mujer" id="mujer"> Mujer</div>
           <div><input type="radio" name="sexoUsuario" value="Otro" id="otro"> Otro</div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label><input type="checkbox" value=true id="recibeDescuentos">Deseo recibir ofertas y descuentos.</label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label><input type="checkbox" id="aceptoTerminos"> Acepto los términos y condiciones.<a target="_blank" style="color: #ababab;" href="terminos-y-condiciones.php"> Ver.</a></label>
            </div>
          </div>
        </div>   
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <p>
          <a href="#"  onClick="actualizarPerfil()" class="page-scroll btn btn-xl" style="max-width: 300px; margin: 5% 0;">MODIFICAR</a>
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
