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
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Theme CSS -->
    <link href="../css/gmgstyle.css" rel="stylesheet">
    <link href="../css/agency.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" integrity="sha384-0s5Pv64cNZJieYFkXYOTId2HMA2Lfb6q2nAcx2n0RTLUnCAoTTsS0nKEO27XyKcY" crossorigin="anonymous"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" integrity="sha384-ZoaMbDF+4LeFxg6WdScQ9nnR1QC2MIRxA1O9KWEXQwns1G8UNyIEZIQidzb0T1fo" crossorigin="anonymous"></script>
    <![endif]-->

</head>

<body id="page-top" class="index">

    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#"><img class="logoweb" src="img/logo-gmg.png"></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-user" aria-hidden="true"></i> ACCEDER</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    


<div class="container" style="height: 90vh; margin-top: 10%;">
  
  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Editar Reserva</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
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


    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 menufooter">
                    <p>QUIÉNES SOMOS</p>
                    <p>TÉRMINOS Y CONDICIONES</p>
                    <p>POLÍTICAS DE PRIVACIDAD</p>
                    <p>PREGUNTAS FRECUENTES</p>
                </div>
                <div class="col-md-4 menufooter">
                        <p>RESTAURANTES</p>
                        <p>TAKE A W</p>
                        <p>MUNDO DULCE</p>
                        <p>DESCARGAR APP</p>
                </div>
                <div class="col-md-4">

                    <ul class="list-inline social-buttons">
                        <li><a href="#"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a>
                        </li>
                    </ul>

                    <ul class="list-inline quicklinks">
                        <li>
                            <span class="copyright">Copyright &copy; GMG 2018</span>
                        </li>
                        <li>
                            Desarrollado por <a style="text-decoration: none;" href="#">Estudio Pronet</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    

    <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

    <!-- Contact Form JavaScript -->
    <script src="../js/jqBootstrapValidation.js"></script>
    <script src="../js/contact_me.js"></script>

    <!-- Theme JavaScript -->
    <script src="../js/agency.min.js"></script>

    <!-- Funcione de Login JavaScript -->
    <script src="js/controladores/login.controlador.js"></script>
    <script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js" crossorigin="anonymous"></script>
    <script src="../js/utils/jwt-decode.min.js"></script>

    <script type="text/javascript">
        

    $(function() {

        $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });

    });

</script>

</body>

</html>

