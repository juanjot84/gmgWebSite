<?php 
error_reporting(E_ERROR);
session_start();

$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];
$nombreUsuario = $_SESSION['nombreUsuario'];
$apellidoUsuario = $_SESSION['apellidoUsuario'];

if (!$_SESSION) {
       header('Location: index.php');
} else {
    if ($tipoUsuario == 'mdzUser' || $tipoUsuario == 'superAdmin') {
        
    } else {
        header('Location: index.php');
    }
}

?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" type="image/png" href="favicon.png" />

    <title>La Cocina - Reportes</title>

    <!--Preloader-->
    <script src="js/pace.js"></script>
    <link rel="stylesheet" href="css/pace.css">

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">


    <!--Roboto Font Family-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/lacocina.css" rel="stylesheet">
    <link href="css/forms.css" rel="stylesheet">

    <link href="css/mobile.css" rel="stylesheet">


    <link rel="stylesheet" href="css/barras.css">
    <link rel="stylesheet" href="css/jquery.mCustomScrollbar.css">

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/comportamientos.js"></script>
</head>

<body>
    <!--CAbecera para Web-->
    <header>
        <div class="container">
            <!--Barra de navegacion Full Size-->
            <nav class="navbar navbar-expand-md navbar-dark fixed-top">
                <div class="row">
                    <div class="col-md-4 web">
                        <img src="img/logo-lacocina.png" class="mx-auto d-block ">
                    </div>

                    <div class="col-md-4">
                        <a id="menu-toggle" href="#" class="btn btn-primary btn-lg toggle"><i class="fa"><img src="img/iconos/cog.svg"  title="imagen SVG" class="imgSvg"/></i></a>
                        <div id="sidebar-wrapper">
                            <ul class="sidebar-nav">
                                <a id="menu-close" href="#" class="btn btn-default btn-lg pull-right toggle"><i class="glyphicon glyphicon-remove"></i></a>
                                <li class="has_sub">
                                    <h2> <i class="fa"><img src="img/iconos/user-circle.svg"  title="imagen SVG" class="imgSvg"/></i>
                                        <span class="nav-text">
                                           Bienvenido <?php error_reporting(E_ERROR); echo $nombreUsuario; echo $apellidoUsuario; ?>
                                        </span>
                                    </h2>
                                </li>
                                <li>
                                    <a href="<?php error_reporting(E_ERROR); echo $path; ?>scripts/cerrar_sesion.php" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/sign-out-alt.svg"  title="imagen SVG" class="imgSvg"/></i>
                                        <span class="nav-text">
                                           Salir
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <!--Fin CAbecera para Web-->

    <!--Fin CAbecera para Mobiles-->


    <main id="TipoNegocio" role="main" class="container">
        <div class="row">
            <div class="col-md-12 ">
                <div class="modulo naranja">
                    <form autocomplete="off">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="dropdown">
                                    <a class="btn btn-secondary2 dropdown-toggle text-center mx-auto d-block " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                         <span id="selectorRango">Mes Anterior</span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" style="color:#fff" onclick="obtenerReporte('ultimos7')">Ultima semana</a>
                                        <a class="dropdown-item" style="color:#fff" onclick="obtenerReporte('esteMes')">Mes en Curso</a>
                                        <a class="dropdown-item" style="color:#fff" onclick="obtenerReporte('ultimos30')">Ultimos 30 días</a>
                                        <a class="dropdown-item" style="color:#fff" onclick="obtenerReporte('mesPasado')">Mes Anterior</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <div class="row">

                <div class="col-md-4 ">
                    <div class="modulo naranja stats margin-stats">
                        <h1>Reservas Totales</h1>
                        <div class="row">
                            <div class="col-lg-4">
                                <h1 class="cantReservas2" id="totalReservas"></h1>
                            </div>
                            <div class="col-lg-8">
                                <p class="fechaReservas" id="fechaTotReservas"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="modulo rosado stats">
                        <h1>Cubiertos Totales</h1>
                        <div class="row">
                            <div class="col-lg-4">
                                <h1 class="cantReservas2" id="totalCubiertos"></h1>
                            </div>
                            <div class="col-lg-8">
                                <p class="fechaReservas" id="fechaTotCubiertos"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="modulo verde stats">
                        <h1>Total Comisiones</h1>

                        <div class="row">
                            <div class="col-lg-4">
                                <h1 class="cantReservas2" id="totalReservasEspeciales"></h1>
                            </div>
                            <div class="col-lg-8">
                                <p class="fechaReservas" id="fechaTotResEsp"></p>
                            </div>
                        </div>
                    </div>
                </div>


        </div>

        <div class="row ">
            <div class="col-lg-12">
                <div class="modulo celeste alturaReservas2">
                    <nav>
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#Rhoy" role="tab" aria-controls="nav-home" aria-selected="true">Reporte de Reservas</a>
                        </div>
                    </nav>
                    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="Rhoy" role="tabpanel" aria-labelledby="Rhoy">

                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col" class="col5">Negocio</th>
                                        <th scope="col" class="col6">Total Reservas</th>
                                        <th scope="col" class="col6">Total Cubiertos</th>
                                        <th scope="col" class="col6">Total Comisiones</th>
                                        <th scope="col" class="col4"> </th>
                                    </tr>
                                </thead>
                            </table>
                            <div id="tableReporte">
                                

                            </div>
                        </div>
    </main>


    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img src="img/mancha-gmg.png" alt="">
                </div>
                <div class="col-md-4">
                    <h4>SOPORTE </h4>
                    <ul>
                        <li>soporte@guiamendozagourmet.com</li>
                        <li> 0800 333 0988</li>
                        <li>Lunes a viernes de 9 a 18 hs.</li>
                    </ul>
                </div>
                <div class="col-md-4">

                    <ul class="list-inline social-buttons">
                        <li><a target="_blank" href="https://twitter.com/guiamendozagour"><i class="fa fa-twitter" style="padding-top: 10px;"></i></a>
                        </li>
                        <li><a target="_blank" href="https://www.facebook.com/guiamendozagourmet"><i class="fa fa-facebook" style="padding-top: 10px;"></i></a>
                        </li>
                        <li><a target="_blank" href="https://www.instagram.com/guiamendozagourmet/"><i class="fa fa-instagram" style="padding-top: 10px;"></i></a>
                        </li>
                    </ul>
                    <ul class=" quicklinks">
                        <li>
                            <span class="copyright">Copyright © GMG 2018</span>
                        </li>
                        <li>
                            Desarrollado por <a style="text-decoration: none;" href="#">Estudio Pronet</a>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    </footer>


    <!-- /.container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->


    <script>
      //  window.jQuery || document.write('<script src="js/jquery-slim.min.js"><\/script>')

    </script>
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script> 
        (function($) {
            $(window).on("load", function() {

                $("#content-1").mCustomScrollbar({
                    theme: "minimal"
                });

            });
        })(jQuery);

    </script>
<!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>
<!-- Lodash JavaScript -->
    <script src="js/lodash.js"></script>

<!--   <script src="js/popper.min.js"></script> -->
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <script>
        $("#menu-close").click(function(e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });

    </script>
<!-- Funcione de Local JavaScript -->
    <script src="js/controladores/reporteReservas.controlador.js"></script>

    <script>
        $(function() { iniciar();} );
    </script>
<!--   <script src="js/calendario.js"></script> -->
</body>

</html>