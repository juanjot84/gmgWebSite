<?php 
error_reporting(E_ERROR);
session_start();

$idLocal = $_GET['idLocal'];
$_SESSION['idLocal'] = $idLocal ;
$idNegocio = $_GET['idNegocio'];
$_SESSION['idNegocio'] = $idNegocio;
$tipoUsuario = $_SESSION['tipoUsuario'];


if (!$_SESSION) {
       header('Location: index.php');
} else {
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
        
    } else {
        header('Location: index.php');
    }
}

?>

<?php 
error_reporting(E_ERROR);
include("includes/head.php"); ?>

<head>
    <style type="text/css">
        .text-primary, a {
            color: #000000;
        }
    </style>
</head>

<body id="page-top" class="index">


<!-- Navigation -->
<?php 
error_reporting(E_ERROR);
    if($tipoUsuario == 'usuarioNegocio'){
        $nav = 'perfil/'; 
        include("perfil/includes/nav-perfil-superior.php");   
    }else if($tipoUsuario == 'superAdmin'){
        include("includes/nav.php"); 
    }
?>


    <div class="container-fluid fondopanel">
        <div class="container" style="padding: 2% 0; color: #fff;">
        <input type="text" name="idLocal" id="idLocal" value="<?php echo $idLocal; ?>" class="hidden">
        <input type="text" name="idNegocio" id="idNegocio" value="<?php echo $idNegocio; ?>" class="hidden">

            <div class="row text-center" style="padding-bottom: 3%;">
                <div class="col-md-3">
                    <h3 id="nombreLocalN"></h3>
                </div>
            </div>
         <div id="menuGeneral">   
            <div class="row text-center">
                <div class="col-md-4 botonmanito" id="reservasRealizadas" style="display: none">
                    <a class="sombrabotonpanel" href="perfil/reservas.php"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-ok" aria-hidden="true"></span><br>
                        VER RESERVAS REALIZADAS
                    </div></a>
                </div>
                <div class="col-md-4 botonmanito" id="configReservas" style="display: none">
                    <a class="sombrabotonpanel" onclick="editarCubiertos()"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-cutlery" aria-hidden="true"></span><br>
                        CONFIGURAR RESERVAS
                </div></a>
                </div>
                <div class="col-md-4 botonmanito" id="descuentos" style="display: none">
                    <a class="sombrabotonpanel" onclick="editarDescuentos()"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-usd" aria-hidden="true"></span><br>
                        DESCUENTOS
                    </div></a>
                </div>
            </div>
            <div class="row text-center" style="padding-top: 5%;">
                <div class="col-md-4 botonmanito col-md-offset-2" id="columna2" style="display: none">
                    <a class="sombrabotonpanel" onclick="editarHorarios()"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-time" aria-hidden="true"></span><br>
                        HORARIOS DE ATENCIÓN
                    </div></a>
                </div>
                <div class="col-md-4 botonmanito" id="calificaciones" style="display: none">
                    <a class="sombrabotonpanel" onclick="verCalificaciones()"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-star" aria-hidden="true"></span><br>
                        VER CALIFICACIONES
                    </div></a>
                </div>
                <div class="col-md-4 botonmanito" id="datosSucursal" style="display: none">
                    <a class="sombrabotonpanel" onclick="cargarForm('local')"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-cog" aria-hidden="true"></span><br>
                        DATOS DE SUCURSAL
                    </div></a>
                </div>
            </div>
            <div class="row text-center" style="padding-top: 5%;">                
                <div class="col-md-4 botonmanito col-md-offset-2" id="columna1" style="display: none">
                    <a class="sombrabotonpanel" onclick="editarContacto()"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span><br>
                        CONTACTO DEL LOCAL
                    </div></a>
                </div>
                <div class="col-md-4 botonmanito" id="cargarImagen" style="display: none">
                    <a class="sombrabotonpanel" onclick="cargarImagenes()"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-picture" aria-hidden="true"></span><br>
                        CARGAR IMÁGENES
                    </div></a>
                </div>
                <div class="col-md-4 botonmanito" id="remarketing" style="display: none">
                    <a class="sombrabotonpanel" href="perfil/remarketing.php"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-stats" aria-hidden="true"></span><br>
                        REMARKETING
                    </div></a>
                </div>
            </div>
            <div class="row text-center" style="padding-top: 5%;">
                <div class="col-md-4 botonmanito" id="promociones" style="display: none">
                    <a class="sombrabotonpanel" href="perfil/remarketing.php"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-gift" aria-hidden="true"></span><br>
                        PROMOCIONES
                    </div></a>
                </div>
                <div class="col-md-4 botonmanito" id="promociones">
                    <a class="sombrabotonpanel" href="tutoriales.php"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 5%;" class="glyphicon glyphicon-play" aria-hidden="true"></span><br>
                        TUTORIALES
                    </div></a>
                </div>
                <div class="col-md-4 botonmanito">
                    <a class="sombrabotonpanel" onclick="cargarLocales()"><div style="font-size: 1.5em;">
                        <span style="font-size: 2.5em; padding: 1%;" class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span><br>
                        VOLVER
                    </div></a>
                </div>
            </div>
           </div> 
        </div>
    </div>
    
    <?php 
    error_reporting(E_ERROR);
    include("includes/footer.php"); ?>
    

    <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

    <!-- Contact Form JavaScript -->
    <script src="../js/jqBootstrapValidation.js"></script>
    <script src="../js/contact_me.js"></script>

    <!-- Funcione de Local JavaScript -->
    <script src="js/controladores/panelControlLocal.controlador.js"></script>

    <!-- Theme JavaScript -->
    <script src="../js/agency.min.js"></script>

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

    $(function() {
      var accion = 'panel';
      iniciar(accion);
    });

</script>

</body>

                </div></a>
</html>
