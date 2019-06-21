<?php 
error_reporting(E_ERROR);
session_start();

$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];

if (!$_SESSION) {
       header('Location: index.php');
} else {
    if ($tipoUsuario == 'superAdmin') {
        
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
                                           Bienvenido, Ariel Karlen
                                        </span>
                                    </h2>
                                </li>
                                <li>
                                    <a href="index.html" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/sign-out-alt.svg"  title="imagen SVG" class="imgSvg"/></i>
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
                                    <div class="form-element form-input">
                                        <input id="nombre" class="form-element-field" placeholder="Ingrese nombre del nuevo tipo de negcio" type="input" required="">
                                        <div class="form-element-bar"></div>
                                        <label class="form-element-label" for="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9">Nombre</label>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-element form-input">
                                        <input id="nombre" class="form-element-field" placeholder="Ingrese descripcion del nuevo tipo de negcio" type="input" required="">
                                        <div class="form-element-bar"></div>
                                        <label class="form-element-label" for="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9">Descripcion</label>
                                    </div>
                                </div>
                                <div class="col-lg-4"><button type="button" class="btn btn-primary btn-sm " data-toggle="collapse" data-target="#collapseCrearReserva" aria-expanded="true" aria-controls="collapse01">Guardar</button></div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>

        <div class="row ">
            <div class="col-lg-12">
                <div class="modulo celeste">
                    <h1>Reportes de Reservas</h1>
                    <table class="table">
                        <thead class="titulotabla">
                            <tr>
                                <th>Negocio</th>
                                <th>Reservas Totales</th>
                                <th>Cubiertos Totales</th>
                                <th>Valor Cubierto</th>
                                <th>Reservas Especiales</th>
                                <th>Valor Cubierto Reserva Especial</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody id="listadoTipoNegocios">
                            <tr>
                                <th>1</th>
                                <td>Restaurante</td>
                                <td>Local de venta de comida</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Food Truck</td>
                                <td>Local de venta de comida</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Capacitación</td>
                               <td>Local de venta de comida</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Restaurante</td>
                                <td>Local de venta de comida</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Food Truck</td>
                                <td>Local de venta de comida</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Capacitación</td>
                               <td>Local de venta de comida</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Restaurante</td>
                                <td>Local de venta de comida</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Food Truck</td>
                                <td>Local de venta de comida</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Capacitación</td>
                               <td>Local de venta de comida</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
<!--    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script> -->

    <script> 
        (function($) {
            $(window).on("load", function() {

                $("#content-1").mCustomScrollbar({
                    theme: "minimal"
                });

            });
        })(jQuery);

    </script>

 <!--   <script src="js/popper.min.js"></script> -->
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
 <!--   <script src="js/calendario.js"></script> -->
</body>

</html>