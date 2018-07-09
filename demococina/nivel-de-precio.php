<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">

    <title>La Cocina - Dashboard</title>

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
    <script type="text/javascript" src="js/ProximasReservas.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/comportamientos.js"></script>
    <link rel="stylesheet" href="css/superadminMenu.css">







</head>

<body>
    <!--CAbecera para Web-->
    <header>


        <div class="container">


            <!--Barra de navegacion Full Size-->
            <nav class="navbar navbar-expand-md navbar-dark fixed-top">



                <div class="row">
                    <div class="col-xs-5 mobile">
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Palmares
  </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Palmares</a>
                                <a class="dropdown-item" href="#">Chacras de Coria</a>
                                <a class="dropdown-item" href="#">Lujan de Cuyo</a>
                                <a class="dropdown-item" href="#">Aristides Villanueva</a>
                            </div>
                        </div>

                    </div>
                    <div class="col-xs-5 mobile">
                        <img src="img/LogoResto.png">
                    </div>



                    <div class="col-md-4 web">
                        <img src="img/logo-lacocina.png" class="mx-auto d-block ">
                    </div>
                    <div class="col-md-4 web">
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle text-center mx-auto d-block " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Palmares
  </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Palmares</a>
                                <a class="dropdown-item" href="#">Chacras de Coria</a>
                                <a class="dropdown-item" href="#">Lujan de Cuyo</a>
                                <a class="dropdown-item" href="#">Aristides Villanueva</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">

                        <img src="img/LogoResto.png" class="web">

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
                                    <a href="admin-negocio.html" class="hvr-bounce-to-left">
                       <i class="fa"><img src="img/iconos/building.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                           Administrar Negocios
                        </span>
                    </a>
                                </li>
                                <li>
                                    <a href="usuarios.html" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/user.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                           Usuarios
                        </span></a>
                                </li>
                                <li>
                                    <a href="datoscontacto.html" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/phone.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                           Datos de Contacto
                        </span></a>
                                </li>
                                <li>
                                    <a href="proveedores.pdf" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/list.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                           Lista de Proveedores
                        </span></a>
                                </li>
                                <li>
                                    <a href="tutoriales.html" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/play.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                           Tutoriales
                        </span></a>
                                </li>
                                <li>
                                    <a href="index.html" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/sign-out-alt.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                           Salir
                        </span></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </nav>

            <!--Menu Izquierdo-->
            <nav class="main-menu">
                <ul>
                    <li>
                        <a href="dashboard.html" class="hvr-bounce-to-right">
                        <i class="fa"><img src="img/iconos/home.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text" data-toggle="tooltip" data-placement="right" >
                            Inicio
                        </span>
                    </a>

                    </li>
                    <li>
                        <a href="ver-reservas.html" class="hvr-bounce-to-right">
                         <i class="fa"><img src="img/iconos/check.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Ver Reservas Realizadas
                        </span>
                    </a>

                    </li>
                    <li>
                        <a href="configurar-reservas.html" class="hvr-bounce-to-right">
                       <i class="fa"><img src="img/iconos/cutlery.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Configurar Reservas
                        </span>
                    </a>

                    </li>
                    <li>
                        <a href="descuentos.html" class="hvr-bounce-to-right">
                       <i class="fa"><img src="img/iconos/gift.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Descuentos y promociones
                        </span>
                    </a>

                    </li>
                    <li>
                        <a href="horarios.html" class="hvr-bounce-to-right">
                        <i class="fa"><img src="img/iconos/clock.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Horarios de Atención
                        </span>
                    </a>
                    </li>
                    <li>
                        <a href="calificaciones.html" class="hvr-bounce-to-right">
                        <i class="fa"><img src="img/iconos/star.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Calificaciones
                        </span>
                    </a>
                    </li>
                    <li>
                        <a href="cargar-imagenes.html" class="hvr-bounce-to-right">
                        <i class="fa"><img src="img/iconos/image.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Cargar Imagenes
                        </span>
                    </a>
                    </li>
                    <li>
                        <a href="remarketing.html" class="hvr-bounce-to-right">
                        <i class="fa"><img src="img/iconos/chart-area.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Remarketing
                        </span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <!--Fin CAbecera para Web-->
    <!--Fin CAbecera para Mobiles-->


    <!--Fin CAbecera para Mobiles-->


    <main id="TipoNegocio" role="main" class="container">

        <div class="row">

            <div class="col-md-12 ">
                <div id="btn-ReservaManual" class="naranja justify-content-end">
                    <button type="button" class="btn btn-primary btn-sm " data-toggle="collapse" data-target="#collapseCrearReserva" aria-expanded="true" aria-controls="collapse01">Nuevo tipo de Negocio</button>
                </div>
                <div id="collapseCrearReserva" class="collapse content-collapse" aria-labelledby="collapseCrearReserva" data-parent="#accordion">
                    <div class="modulo naranja">





                        <form autocomplete="off">
                            <div class="row">

                            </div>
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

        </div>





        <div class="row ">

            <div class="col-lg-12">
                <div class="modulo celeste">
                    <h1>Tipos de Negocio</h1>
                    <table class="table">
                        <thead class="titulotabla">
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody id="listadoTipoNegocios">
                            <tr>
                                <th>1</th>
                                <td>Restaurante</td>
                                <td>Local de venta de comida</td>
                                <td><a href="#" data-toggle="collapse" data-target="#collapseCrearReserva"><img src="img/iconos/edit.svg" title="Editar" class="imgSvg"></a><a href="#"><img src="img/iconos/trash.svg" title="Eliminar" class="imgSvg trash"></a></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Food Truck</td>
                                <td>Local de venta de comida</td>
                                <td><a href="#" data-toggle="collapse" data-target="#collapseCrearReserva"><img src="img/iconos/edit.svg" title="Editar" class="imgSvg"></a><a href="#"><img src="img/iconos/trash.svg" title="Eliminar" class="imgSvg trash"></a></td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Capacitación</td>
                                <td>Local de venta de comida</td>
                                <td><a href="#" data-toggle="collapse" data-target="#collapseCrearReserva"><img src="img/iconos/edit.svg" title="Editar" class="imgSvg"></a><a href="#"><img src="img/iconos/trash.svg" title="Eliminar" class="imgSvg trash"></a></td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Chef a domicilio</td>
                                <td>Local de venta de comida</td>
                                <td><a href="#" data-toggle="collapse" data-target="#collapseCrearReserva"><img src="img/iconos/edit.svg" title="Editar" class="imgSvg"></a><a href="#"><img src="img/iconos/trash.svg" title="Eliminar" class="imgSvg trash"></a></td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Bazar</td>
                                <td>Local de venta de comida</td>
                                <td><a href="#" data-toggle="collapse" data-target="#collapseCrearReserva"><img src="img/iconos/edit.svg" title="Editar" class="imgSvg"></a><a href="#"><img src="img/iconos/trash.svg" title="Eliminar" class="imgSvg trash"></a></td>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>Librería</td>
                                <td>Local de venta de comida</td>
                                <td><a href="#" data-toggle="collapse" data-target="#collapseCrearReserva"><img src="img/iconos/edit.svg" title="Editar" class="imgSvg"></a><a href="#"><img src="img/iconos/trash.svg" title="Eliminar" class="imgSvg trash"></a></td>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td>Almacén Gourmet</td>
                                <td>Local de venta de comida</td>
                                <td><a href="#" data-toggle="collapse" data-target="#collapseCrearReserva"><img src="img/iconos/edit.svg" title="Editar" class="imgSvg"></a><a href="#"><img src="img/iconos/trash.svg" title="Eliminar" class="imgSvg trash"></a></td>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td>Vinería</td>
                                <td>Local de venta de comida</td>
                                <td><a href="#" data-toggle="collapse" data-target="#collapseCrearReserva"><img src="img/iconos/edit.svg" title="Editar" class="imgSvg"></a><a href="#"><img src="img/iconos/trash.svg" title="Eliminar" class="imgSvg trash"></a></td>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td>Bodega</td>
                                <td>Local de venta de comida</td>
                                <td><a href="#" data-toggle="collapse" data-target="#collapseCrearReserva"><img src="img/iconos/edit.svg" title="Editar" class="imgSvg"></a><a href="#"><img src="img/iconos/trash.svg" title="Eliminar" class="imgSvg trash"></a></td>
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
        <div class="container superadmin">
            <nav class="navbar fixed-bottom navbar-light bg-dark">
                <ul class="nav">
                    <li>
                        <a href="negocios.html">Negocios</a>

                    </li>
                    <li>
                        <a href="tipo-de-negocio.html">Tipo de negocio</a>
                    </li>
                    <li>
                        <a href="regiones.html" role="button" aria-haspopup="true" aria-expanded="false">Regiones</a>
                    </li>
                    <li>
                        <a href="polos-gastronomicos.html" role="button" aria-haspopup="true" aria-expanded="false">Polos</a>
                    </li>
                    <li>
                        <a href="tipo-de-cocina.html" role="button" aria-haspopup="true" aria-expanded="false">Cocina</a>
                    </li>
                    <li>
                        <a href="especialidades.html" role="button" aria-haspopup="true" aria-expanded="false">Especialidades</a>
                    </li>
                    <li>
                        <a href="ocasiones.html" role="button" aria-haspopup="true" aria-expanded="false">Ocasiones</a>
                    </li>
                    <li>
                        <a href="servicios.html" role="button" aria-haspopup="true" aria-expanded="false">Servicios</a>
                    </li>
                    <li>
                        <a href="medio-de-pago.html" role="button" aria-haspopup="true" aria-expanded="false">Formas de pago</a>
                    </li>
                    <li>
                        <a href="nivel-de-precio.php" role="button" aria-haspopup="true" aria-expanded="false" class="active">Precio</a>
                    </li>

                    <li>
                        <a href="promociones.html">Promociones</a>
                    </li>

                </ul>

            </nav>
        </div>
    </footer>
  


    <!-- /.container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->


    <script>
        window.jQuery || document.write('<script src="js/jquery-slim.min.js"><\/script>')

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

    <script src="js/popper.min.js"></script>
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
    <script src="js/calendario.js"></script>
</body>

</html>
