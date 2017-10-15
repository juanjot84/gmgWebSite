<?php session_start();

$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];


if (!$_SESSION) {
       header('Location: login-un.php');
} else {
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
        
    } else {
        header('Location: login-un.php');
    }
}

?>
<?php    
   $idNegocio = $_GET['idNegocio'];
?>
<?php include("includes/head.php"); ?>

<head>
    <style type="text/css">
        .text-primary, a {
            color: #000000;
        }
    </style>
</head>

<body id="page-top" class="index">


<!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Menu</span> <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#"><img class="logoweb" src="../img/logo-gmg-back.png"></a><div class="tituloback"> Panel de administración</div>
            </div>
                            <div class="col-md-6" style="text-align: right;">
                    <div class="input-group">
                      <span class="input-group-btn">
                      </span>
                    </div>
                </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-user" aria-hidden="true"></i> SALIR</a>
                    </li>
                </ul>
            </div>

            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <div class="container" style="height: 65vh; padding-top: 13%; min-height: 715px;">
     <input type="text" name="idNegocio" id="idNegocio" value="<?php echo $idNegocio; ?>" class="hidden">
     <input type="text" name="tipoUs" id="tipoUs" value="<?php echo $tipoUsuario; ?>" class="hidden">
        <div class="row text-center">
                  <!-- Table -->
                  <div id="cabeceraTablaNegocios">
                   <div class="panel-heading tituloseccion" style="display: none">Negocios</div>
                   <table class="table">
                        <thead class="titulotabla">
                            <tr> 
                                <th >#</th>
                                    <th >Nombre Negocio</th>
                                    <th >Dirección</th>
                                    <th style="text-align: center;">Acción</th>
                                </tr>
                        </thead>
                        <tbody id="listadoLocal">

                        </tbody>
                    </table>
                  </div> 
        </div>
        </br>
        </br>
        </br>
        </br>
              <div class="input-group">
                 <span class="input-group-btn">
                  <button id="botonAtras" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelNegocio()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                </span>
              </div>
    </div>

    <?php include("includes/footer.php"); ?>
    

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

</script>

</body>

</html>