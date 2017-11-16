<?php 
error_reporting(E_ERROR);
session_start();

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
        include("../includes/nav.php"); 
    }
?>


    <div class="container-fluid fondococina">
        <div class="container" style="height: 65vh; padding-top: 5%; min-height: 715px;">

        <input type="text" name="idNegocio" id="idNegocio" value="<?php  error_reporting(E_ERROR); echo $idNegocio; ?>" class="hidden">
        <input type="text" name="tipoUs" id="tipoUs" value="<?php  error_reporting(E_ERROR); echo $tipoUsuario; ?>" class="hidden">

            <div class="row text-center">
                <div class="col-md-12" style="padding: 5% 0;">
                    <span style="color: #fff; font-size: 2.5em; font-weight: 700;">Bienvenido a la cocina de <?php  error_reporting(E_ERROR); echo $nombreNegocio; ?></span>
                </div>
            </div>

            <div class="row text-center">
                <div class="col-md-4">
                    <a class="botonpanelmiperfil" onclick="cargarForm('negocio')"><div>
                        <span class="iconosmiperfil glyphicon glyphicon-cog" aria-hidden="true"></span><br>
                        DATOS GENERALES
                    </div></a>
                </div>
                <div class="col-md-4">
                    <a class="botonpanelmiperfil" onclick="cargarForm('contacto')"><div>
                        <span class="iconosmiperfil glyphicon glyphicon-list-alt" aria-hidden="true"></span><br>
                        DATOS DE USUARIO
                    </div></a>
                </div>
                <div class="col-md-4">
                    <a class="botonpanelmiperfil" onclick="cargarForm('local')"><div>
                        <span class="iconosmiperfil glyphicon glyphicon-th" aria-hidden="true"></span><br>
                        LOCALES
                    </div></a>
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

        <!-- Funciones de Negocio JavaScript -->
    <script src="../js/controladores/perfilNegocio.controlador.js"></script>

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

</body>

</html>
