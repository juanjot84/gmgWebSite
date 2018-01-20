<?php 
error_reporting(E_ERROR);
session_start();

$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];
$idLocal  = $_SESSION['idLocal'];
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


<?php 
error_reporting(E_ERROR);
include("includes/head-perfil.php"); ?>

<head>
    <style type="text/css">
        .text-primary, a {
            color: #000000;
        }
    </style>
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

    <div class="container-fluid" style="padding: 1%;background: yellow;margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="BUSCAR..." style="padding: 25.6px;">
                      <span class="input-group-btn">
                       <button  class="btn btn-default botonbuscar" style="color: #333; background-color: #fff; border: 1px solid #ccc; padding: 15px; border-radius: 0;" type="button"><i style="font-size: 1.5em;" class="fa fa-search" aria-hidden="true"></i></button>
                      </span>
                    </div>
                </div>
                <div class="col-md-6" style="text-align: right;">
                    <div class="input-group">
                      <span class="input-group-btn">
                        <a href="reserva.php" class="btn btn-default" type="button" style="padding: 17px;"><i class="fa fa-plus-square-o" aria-hidden="true"></i> CREAR RESERVA</a>
                      </span>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <input type="text" name="idNegocio" id="idNegocio" value="<?php error_reporting(E_ERROR); echo $idNegocio; ?>" class="hidden">
    <input type="text" name="idLocal" id="idLocal" value="<?php error_reporting(E_ERROR); echo $idLocal; ?>" class="hidden">

    <div class="container" style="padding-top: 2%; padding-bottom: 1%;">

    <div class="input-group">
        <span class="input-group-btn">
            <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
        </span>
    </div>
 
    <div class="reservaspestanas"> 
        <ul class="nav nav-tabs nav-justified" style="margin-bottom: 3%;">
            <li class="active"><a data-toggle="tab" href="#reservasHoy" onclick="ocultarPestaña('reservasHoy','proximas','historial')">Reservas para hoy</a></li>
            <li><a data-toggle="tab" href="#proximas" onclick="ocultarPestaña('proximas','reservasHoy','historial')">Próximas Reservas</a></li>
            <li><a data-toggle="tab" href="#historial" onclick="ocultarPestaña('historial','reservasHoy','proximas')">Historial de reservas</a></li>
        </ul>
        <div class="tab-content">
          <div id="reservasHoy" class="tab-pane fade in active">
             <div class="panel-heading tituloseccion">Reservas para hoy</div>
                 <div class="container locales">
                    <center><div id="loading"></div></center> 
                 </div>
             </div>

          </div>
          <div id="proximas" class="tab-pane fade">
             <div class="panel-heading tituloseccion">Próximas Reservas</div>
                 <div class="container proximas">
                    <center><div id="loading"></div></center> 
                 </div>
             </div>
          </div>
          <div id="historial" class="tab-pane fade">
            <div class="panel-heading tituloseccion">Historial de reservas</div>
                 <div class="container historial">
                    <center><div id="loading"></div></center> 
                 </div>
            </div>
          </div>


        </div>
    </div>
<div class="container" style="height: 90vh; margin-top: 10%;">
  
  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style="display: none">Editar Reserva</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Editar Reserva</h4>
        </div>
        <div class="modal-body">
          <p>Juan Carlos Hernandez | <i class="fa fa-cutlery" aria-hidden="true"></i> </p>
          <p><span style="font-size: 1.5em;"><strong>Bardot</strong> | Comer &amp; Beber</span></p>
          <p>Reserva para
            <input type="text" class="form-control" placeholder="3" aria-describedby="sizing-addon3"> personas</p>
          <p>El día
            <input type="text" class="form-control" placeholder="3 de octubre" aria-describedby="sizing-addon3"></p>
          <p>A las <input type="text" class="form-control" placeholder="21:00 hs" aria-describedby="sizing-addon3"></p>
          <p>Observaciones:</p>
          <p> <textarea class="form-control" rows="3" id="comment"></textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="modal-footer">
          <button id="botonGuardar" type="button" class="btn btn-default" data-dismiss="modal">Guardar cambios</button>
          <button id="botoncancelar" type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        </div>
      </div>  
    </div>
  </div>
  
</div>



    <div class="container">

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

    <!-- Funcione de Local JavaScript -->
    <script src="js/controladores/reservas.controlador.js"></script>

    <!-- Theme JavaScript -->
    <script src="js/agency.min.js"></script>

    <script type="text/javascript">
        

    $(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    });

</script>
<script>
    setJWT('<?php echo $jwt; ?>');
</script>

</body>

</html>
