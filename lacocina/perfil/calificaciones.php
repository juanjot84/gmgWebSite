<?php 
error_reporting(E_ERROR);
session_start();

$idLocal = $_GET["idLocal"];
$jwt = $_SESSION['jwt'];
$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];
$nombreUsuario = $_SESSION['nombreUsuario'];
$apellidoUsuario = $_SESSION['apellidoUsuario'];
$nombreNegocio = $_SESSION['nombreNegocio'];

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



<body id="page-top" class="index">

<?php 
error_reporting(E_ERROR);
    if($tipoUsuario == 'usuarioNegocio'){
        include("includes/nav-perfil.php"); 
    }else if($tipoUsuario == 'superAdmin'){
        include("../includes/nav-superior.php"); 
    }
?>

    <input type="text" name="idNegocio" id="idNegocio" value="<?php error_reporting(E_ERROR); echo $idNegocio; ?>" class="hidden">
    <input type="text" name="idLocal" id="idLocal" value="<?php error_reporting(E_ERROR); echo $idLocal; ?>" class="hidden">
    <div class="container-fluid" style="min-height: 65vh; padding-top: 3%;">
      <div class="row">
        <div class="container">
            <div class="row">
              <div class="col-md-10 text-center" style="padding-bottom: 3%;">
                <h2>Mis calificaciones recibidas</h2>
              </div>
              <div class="col-md-2 text-center">
                <!-- BOTON VOLVER -->
                <div class="input-group" style="text-align: right;">
                  <span class="input-group-btn">
                    <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                  </span>
                </div>
              </div>
            </div>
        </div>


      <!-- INICIO CALIFICACION -->

      <div class="container-fluid calificaciones">

      </div>
        <!-- FIN CALIFICACION -->

      <!-- BOTON VOLVER 
      <div class="container">
        <div class="input-group" style="padding: 3% 0;">
          <span class="input-group-btn">
            <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
          </span>
        </div>
      </div>
    </div>
-->
    
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

        <!-- Funciones de Negocio JavaScript -->
    <script src="js/controladores/calificaciones.controlador.js"></script>
    <script>
      setJWT('<?php echo $jwt; ?>', '<?php echo $idLocal; ?>');
    </script>

    <!-- Theme JavaScript -->
    <script src="js/agency.min.js"></script>

    <script type="text/javascript">
</script>

</body>

</html>
