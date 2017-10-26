<?php session_start();

$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];

if (!$_SESSION) {
       header('Location: ../index.php');
} else {
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
        
    } else {
        header('Location: ../index.php');
    }
}

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

<?php 
    if($tipoUsuario == 'usuarioNegocio'){
        include("includes/nav-perfil.php"); 
    }else if($tipoUsuario == 'superAdmin'){
        include("../includes/nav.php"); 
    }
?>

    

    <div class="container-fluid" style="padding: 1%;background: yellow;margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="BUSCAR..." style="padding: 25.6px;">
                      <span class="input-group-btn">
                        <button class="btn btn-default botonbuscar" style="color: #333; background-color: #fff; border: 1px solid #ccc; padding: 15px; border-radius: 0;" type="button"><i style="font-size: 1.5em;" class="fa fa-search" aria-hidden="true"></i></button>
                      </span>
                    </div>
                </div>
                <div class="col-md-6" style="text-align: right;">
                    <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="padding: 17px;"><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVO</button>
                      </span>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <input type="text" name="idNegocio" id="idNegocio" value="<?php echo $idNegocio; ?>" class="hidden">

    <div class="container" style="padding-top: 2%; padding-bottom: 1%;">

        <div class="panel-heading tituloseccion">Reservas</div>

                <div class="panel panel-default">
                    <div class="panel-heading">
                      <p class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseA">
                        <table class="table" style="margin-bottom: 0;">                        
                            <tbody>
                                <tr>
                                    <td>
                                        Local 1
                                    </td>
                                </tr>
                            </tbody>
                        </table></a>
                      </p>
                    </div>
                    <div id="collapseA" class="panel-collapse collapse in">
                      <div class="panel-body">

                        <div class="row">
                            <div class="col-md-12">
<!-- Segundo bucle de locales -->
                                <h3 >Hoy</h3>

                                  <div class="panel panel-default">
                                    <div class="panel-heading">
                                      <p class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseA1">
                                        <table class="table" style="margin-bottom: 0;">                        
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Roberto Carlos Hernández
                                                    </td>
                                                    <td><img src="imgs/adultos.png"> 3</td>
                                                    <td><img src="imgs/ninos.png"> 1</td>
                                                    <td>21:30 hs</td>
                                                    <td><i class="fa fa-cutlery" aria-hidden="true"></i></td>
                                                    <td class="centrarbotaccion">
                                                        <button title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>
                                                        <button title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                                        <button title="Eliminar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table></a>
                                      </p>
                                    </div>
                                    <div id="collapseA1" class="panel-collapse collapse">
                                      <div class="panel-body">

                                        <p><i class="fa fa-mobile" aria-hidden="true"></i> +54 9 261 000 0000</p>
                                        <p><i class="fa fa-envelope-o" aria-hidden="true"></i> mail@mail.com</p>
                                        <p>Observaciones:</p>
                                      </div>
                                    </div>
                                  </div>

                            </div>
                        </div>

                      </div>
                    </div>
                </div>


             <div class="container locales">
                 


             </div>   

    </div>


    <div class="container">

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

</body>

</html>
