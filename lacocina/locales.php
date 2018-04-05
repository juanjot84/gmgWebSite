<?php 
error_reporting(E_ERROR);
session_start();

$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];
$display = '';

if (!$_SESSION) {
       header('Location: index.php');
} else {
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
          
    } else {
        header('Location: index.php');
    }
}

if($tipoUsuario == 'usuarioNegocio'){
  $display = 'display: none';
}
      


?>
<?php 
error_reporting(E_ERROR);   
   $idNegocio = $_GET['idNegocio'];
?>
<?php include("includes/head.php"); ?>

<head>
    <style type="text/css">
        .text-primary, a {
            color: #000000;
        }
        #loading {
          display: none;
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

        <div class="container-fluid" style="padding: 1%; background: #fff; margin-top: -21px; <?php  error_reporting(E_ERROR); echo $display; ?> ">
        <div class="container">
            <div class="row">
                <div class="col-md-6">

                </div>
                <div class="col-md-6" style="text-align: right;">

                    <div class="input-group">
                      <span class="input-group-btn">
                        <button id="botonAtras" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelNegocio()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                        <button class="botonagregarnuevo btn btn-default" type="button" style="padding: 17px;" onClick="crearLocal()"><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVO</button>
                      </span>
                    </div>
                </div>

            </div>
        </div>
    </div>

            <!-- /.navbar-collapse -->


    <div class="container" style="padding-top: 2%; min-height: 715px;">
     <input type="text" name="idNegocio" id="idNegocio" value="<?php  error_reporting(E_ERROR); echo $idNegocio; ?>" class="hidden">
     <input type="text" name="tipoUs" id="tipoUs" value="<?php  error_reporting(E_ERROR); echo $tipoUsuario; ?>" class="hidden">

       <div class="row" style="padding-top: 5%;color: #252525; padding-bottom: 2%;">
          <div class="container" id="estiloUsuarioNegocio">

       </div>

      </div>
        <div class="row text-center" id="disenioSuperAdmin">
                  <!-- Table -->
                  <div id="cabeceraTablaNegocios">


                        
                  </div> 
        </div>
        </br>
        </br>
              <div class="input-group">
                 <span class="input-group-btn">
                  <button id="botonAtras" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelNegocio()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                </span>
              </div>
    </div>

    <!-- LISTA COMO RESULTADOS DE BUSQUEDA -->


    <!-- FIN LISTA COMO RESULTADOS DE BUSQUEDA -->
    

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

    $(function() {
      var accion = 'locales';
      iniciar(accion);
    });

</script>

</body>

</html>