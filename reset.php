<?php
error_reporting(E_ERROR);
$token = isset($_GET['token']) ? $_GET['token'] : '';

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
    
    <!-- ANALYTICS -->
       <?php include("includes/analytics.php"); ?>

</head>

<body id="page-top" class="index">

    <?php
      error_reporting(E_ERROR);
      include("includes/nav.php");
    ?>

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-login">
                    <div class="panel-heading">
                        <div class="row text-center">
                            <div class="col-xs-6">
                                <a href="#" class="active" id="login-form-link">Recuperar Contraseña</a>
                            </div>

                        </div>
                        <hr>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <form id="login-form" method="post" role="form" style="display: block;">
                                    <div class="form-group">
                                        <input type="text" name="emailUsuario" id="emailUsuario" tabindex="1" class="form-control" placeholder="Ingrese su mail" value=""       onfocus="limpiar('emailUsuario')" onclick="limpiar('passwordUsuario')">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" name="passwordUsuario" id="passwordUsuario" tabindex="2" class="form-control" placeholder="Ingrese Contraseña" onfocus="limpiar('passwordUsuario')">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" name="verificarPassword" id="verificarPassword" tabindex="2" class="form-control" placeholder="Verifique Contraseña" onfocus="limpiar('verificarPassword')">
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-6 col-sm-offset-3" id="mensaje"></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6 col-sm-offset-3">
                                                <input type="button" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Acceder" onclick="resetPass()">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img style="padding-top: 22%;" class="img-responsive" src="img/fondologin.jpg">
            </div>
        </div>
    </div>



    <!-- Publicidad -->
    <section style="padding: 0px 0 !important;">
        <div class="container-fluid fondopubli">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 style="color: #fff; padding-top: 8%;" class="section-heading"> </h2>
                    <h3 style="color: #fff;" class="section-subheading text-muted"> </h3>
                </div>
            </div>
        </div>
    </section>

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

    <script src="js/utils/jwt-decode.min.js"></script>

    <script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
    crossorigin="anonymous"></script>
    <!-- Funcione de Login JavaScript -->
    <script src="js/controladores/login.controlador.js"></script>

    <script>
      setToken('<?php echo $token; ?>');
    </script>

    <script type="text/javascript">

</script>

</body>

</html>
