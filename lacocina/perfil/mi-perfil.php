
<?php 

$idNegocio = '59c98d0394897d2100a5727f';

?>

<?php include("includes/head-perfil.php"); ?>

<head>
    <style type="text/css">
        .text-primary, a {
            color: #000000;
        }
    </style>
</head>

<body id="page-top" class="index">


<?php include("includes/nav-perfil.php"); ?>

    

    <div class="container-fluid" style="padding: 1%;background: yellow;margin-top: -21px;">
        <div class="container">
        </div>
    </div>
    <div class="container" style="height: 65vh; padding-top: 13%; min-height: 715px;">

    <input type="text" name="idNegocio" id="idNegocio" value="<?php echo $idNegocio; ?>" class="hidden">

        <div class="row text-center">
            <div class="col-md-4">
                <a onclick="cargarForm('negocio')"><div style="font-size: 2em;">
                    <span style="font-size: 3em; padding: 5%;" class="glyphicon glyphicon-cog" aria-hidden="true"></span><br>
                    DATOS GENERALES
                </div></a>
            </div>
            <div class="col-md-4">
                <a onclick="cargarForm('contacto')"><div style="font-size: 2em;">
                    <span style="font-size: 3em; padding: 5%;" class="glyphicon glyphicon-list-alt" aria-hidden="true"></span><br>
                    DATOS DE ACCESO
                </div></a>
            </div>
            <div class="col-md-4">
                <a onclick="cargarForm('local')"><div style="font-size: 2em;">
                    <span style="font-size: 3em; padding: 5%;" class="glyphicon glyphicon-th" aria-hidden="true"></span><br>
                    LOCALES
                </div></a>
            </div>
        </div>
    </div>

    
    <?php include("includes/footer-perfil.php"); ?>
    

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
