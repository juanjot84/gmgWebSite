    <?php 
        error_reporting(E_ERROR);
        session_start();

        $idNegocio = $_SESSION['idNegocio'];
        $jwt = $_SESSION['jwt'];
        $tipoUsuario = $_SESSION['tipoUsuario'];
        $nombreUsuario = $_SESSION['nombreUsuario'];
        $apellidoUsuario = $_SESSION['apellidoUsuario'];
        $nombreNegocio = $_SESSION['nombreNegocio'];
        $idLocal = $_SESSION['idLocal'];

        if (!$_SESSION) {
            header('Location: ../index.php');
        } else {
            if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
                
            } else {
                header('Location: ../index.php');
            }
        }
    ?>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="shortcut icon" type="image/png" href="favicon.png" />

        <title>La Cocina - Dashboard</title>

    <!--Preloader-->
        <script src="js/pace.js"></script>
        <link rel="stylesheet" href="css/pace.css">
    
        <!-- Bootstrap core CSS -->
        <link href="css/bootstrap.min.css" rel="stylesheet">

        <!--Roboto Font Family-->
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">

        <!-- CSS -->
        <link href="css/lacocina.css" rel="stylesheet">
        <link href="css/mobile.css" rel="stylesheet">
        <link rel="stylesheet" href="css/barras.css">
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.css">
        
        <!--Js-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js" crossorigin="anonymous"></script>
        <script src="js/comportamientos.js"></script>

        <!-- Charts -->
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/heatmap.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>

    </head>

    <body>
 

    <!--CAbecera para Web-->
    <header>
        <div class="container">
        <input type="text" name="idNegocio" id="idNegocio" value="<?php  error_reporting(E_ERROR); echo $idNegocio; ?>" style="display:none">
        <input type="text" name="jwt" id="jwt" value="<?php error_reporting(E_ERROR); echo $jwt; ?>" style="display:none">
            <!--Barra de navegacion Full Size-->
            <nav class="navbar navbar-expand-md navbar-dark fixed-top">

                <div class="row">
                    <div class="col-xs-5 mobile">
                        <div id="navCel" class="dropdown">
                           
                        </div>
                        
                    </div>
                    <div class="col-xs-5 mobile">
                       <img src="img/LogoResto.png">
                    </div>
                   
                    <div class="col-md-4 web">
                        <img src="img/logo-lacocina.png" class="mx-auto d-block ">
                    </div>
                    <div class="col-md-4 web">
                        <div id="navWeb" class="dropdown">

                        </div>
                    </div>
                    <div class="col-md-4">
                      <div id="logoNegocio">
                        
                      </div>
                        <a id="menu-toggle" href="#" class="btn btn-primary btn-lg toggle"><i class="fa"><img src="img/iconos/cog.svg"  title="imagen SVG" class="imgSvg"/></i></a>
                        <div id="sidebar-wrapper">
                            <ul class="sidebar-nav">
                                <a id="menu-close" href="#" class="btn btn-default btn-lg pull-right toggle"><i class="glyphicon glyphicon-remove"></i></a>

                                <li class="has_sub">
                                    <h2> <i class="fa"><img src="img/iconos/user-circle.svg"  title="imagen SVG" class="imgSvg"/></i>
                                        <span class="nav-text">
                                           Bienvenido,  <?php  error_reporting(E_ERROR); echo $nombreUsuario; echo ' '.$apellidoUsuario; ?>
                                        </span>
                                    </h2>
                                </li>
                                <li>
                                    <a id="formNegocio" href="#"  class="hvr-bounce-to-left">
                                        <i class="fa"><img src="img/iconos/building.svg"  title="imagen SVG" class="imgSvg"/></i>
                                           <span class="nav-text">
                                             Administrar Negocio
                                           </span>
                                    </a>
                                </li>
                                <li>
                                    <a id="formUsuario" href="#" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/user.svg"  title="imagen SVG" class="imgSvg"/></i>
                                            <span class="nav-text">
                                             Usuario
                                            </span></a>
                                </li>
                                <li>
                                    <a id="formDatosContacto" href="#" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/phone.svg"  title="imagen SVG" class="imgSvg"/></i>
                                            <span class="nav-text">
                                              Datos de Contacto
                                            </span></a>
                                </li>
                                <!--li>
                                    <a href="proveedores.pdf" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/list.svg"  title="imagen SVG" class="imgSvg"/></i>
                                            <span class="nav-text">
                                              Lista de Proveedores
                                            </span></a>
                                </li-->
                                <li>
                                    <a href="tutoriales.php" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/play.svg"  title="imagen SVG" class="imgSvg"/></i>
                                            <span class="nav-text">
                                              Tutoriales
                                            </span></a>
                                </li>
                                <li>
                                    <a href="<?php error_reporting(E_ERROR); echo $path; ?>scripts/cerrar_sesion.php" class="hvr-bounce-to-left"><i class="fa"><img src="img/iconos/sign-out-alt.svg"  title="imagen SVG" class="imgSvg"/></i>
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
                    <li class="izquierdoactive">
                        <a href="dashboard.php" class="hvr-bounce-to-right">
                        <i class="fa"><img src="img/iconos/home.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text" data-toggle="tooltip" data-placement="right" >
                            Inicio
                        </span>
                    </a>

                    </li>
                    
                       <li>
                        <a id="formDatosSucursal" href="#" class="hvr-bounce-to-right">
                         <i class="fa"><img src="img/iconos/cog.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Datos de Sucursal
                        </span>
                    </a>

                    </li>
                       
                       <li>
                        <a id="formReservas" href="#" class="hvr-bounce-to-right">
                         <i class="fa"><img src="img/iconos/check.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Ver Reservas Realizadas
                        </span>
                    </a>

                    </li>
                    <li>
                        <a id="formConfigReservas" href="#" class="hvr-bounce-to-right">
                       <i class="fa"><img src="img/iconos/cutlery.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Configurar Reservas
                        </span>
                    </a>

                    </li>
                    <li>
                        <a id="formPromLocal" href="#" class="hvr-bounce-to-right">
                       <i class="fa"><img src="img/iconos/gift.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Descuentos y promociones
                        </span>
                    </a>

                    </li>
                    <li>
                        <a id="formHorarioAtencion" href="#" class="hvr-bounce-to-right">
                        <i class="fa"><img src="img/iconos/clock.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Horarios de Atención
                        </span>
                    </a>
                    </li>
                    <li>
                        <a id="formCalificaciones" href="#" class="hvr-bounce-to-right">
                        <i class="fa"><img src="img/iconos/star.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Calificaciones
                        </span>
                    </a>
                    </li>
                    <li>
                        <a id="formImagenes" href="#" class="hvr-bounce-to-right">
                        <i class="fa"><img src="img/iconos/image.svg"  title="imagen SVG" class="imgSvg"/></i>
                        <span class="nav-text">
                            Cargar Imagenes
                        </span>
                    </a>
                    </li>
                    <li>
                        <a id="formRemarketing" href="#" class="hvr-bounce-to-right">
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


    <main role="main" class="container">

        <div class="row">
            <!--Accesos directos-->
            <div class="col-lg-4">
                <div class="modulo ajusteModulo" id="acceso">

                    <h1>Accesos directos</h1>
                    <ul id="accesosdirectos">
                        <li>
                            <a id="formNegocio2" href="#">
                                <i class="fa fa-building"></i>
                                <span class="nav-text">
                                Administrar Negocio
                                </span>
                            </a>
                        </li>
                        <li>
                            <a id="formUsuario2" href="#"><i class="fa fa-user"></i>
                                <span class="nav-text">
                                Usuarios
                                </span>
                            </a>
                        </li>
                        <li>
                            <a id="formDatosContacto2" href="#"><i class="fa fa-phone"></i>
                                <span class="nav-text">
                                Contacto
                                </span>
                            </a>
                        </li>
                        
                         <!--li>
                            <a href="tutoriales.html"><i class="fa fa-list"></i>
                                <span class="nav-text">
                                Lista de Proveedores
                                </span>
                            </a>
                        </li-->
                        <li>
                            <a href="tutoriales.php"><i class="fa fa-play"></i>
                                <span class="nav-text">
                                Tutoriales
                                </span>
                            </a>
                        </li>
                        <li class="no-border">
                            <a href="<?php error_reporting(E_ERROR); echo $path; ?>scripts/cerrar_sesion.php"><i class="fa fa-sign-out"></i>
                                <span class="nav-text">
                                Salir
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--Reservas para hoy-->
            <div class="col-lg-4">
                <div id="reservasparahoy" class="modulo ajusteModulo celeste">
                    <h1> Hay <span id="cantidadReservas"> </span> para hoy <span class="ver"><a id="formReservas2" href="#">  - Ver todas </a></span> </h1>

                    <div class="content content mCustomScrollbar  mCS-autoHide">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Personas</th>
                                    <th scope="col">Hora</th>
                                </tr>
                            </thead>
                            <tbody id="listaReservasHoy">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--Promociones Activas-->
            <div class="col-lg-4">
                <div id="promocionesActivas" class="modulo ajusteModulo rosado">
                    <h1> Hay <span id="cantidadPromociones"> </span> activas <span class="ver"><a id="formPromLocal2" href="#">  - Ver todas </a></span>   </h1>
                    <div id="listaPromociones" class="content content mCustomScrollbar  mCS-autoHide">

                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4">
                <div id="publicidad" class="modulo ajusteModulo rosado">
                      <!-- Revive Adserver Etiqueta JS asincrónica - Generated with Revive Adserver v4.1.3 -->
<ins data-revive-zoneid="4" data-revive-id="6a42b0d4b55d90b58eb8e42f829d9ed3"></ins>
<script async src="//adserver.guiamendozagourmet.com/www/delivery/asyncjs.php"></script>
                </div>
            </div>
            <div class="col-lg-8">
                <!--Grafico para Proximas Reservas - Google Charts. Column Charts Stacked-->
                <div id="charts" class="modulo verde">
                    <h1><span>Reservas</span> para los proximos 7 dias</h1>
                    <div id="chartProximasReservas" style="width: 100%; "></div>

                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-lg-4">
                   
                   <div id="calificaciones" class="modulo ajusteModulo rosado">
                    <h1><span>Calificaciones</span></h1>
                    
                    <div class="row">
                        <div class="col-md-6" >
                            <p class="general">Calificacion General</p>
                        </div>
                        <div class="col-md-6">
                            <form>
                                <p class="clasificacion" id="estrellasCalificacion">
        
                                </p>
                            </form>
                        </div>
                        
                    </div>
                    <div class="row" id="barrasCalificacion">
                        <div class="col-md-12">
                            <h6>Atención</h6>
                            <div class="progress" id="barraAtencion">
                                
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h6>Lugar</h6>
                            <div class="progress" id="barraLugar">
                                
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h6>Comida</h6>
                            <div class="progress" id="barraComida">
                                
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="col-lg-4">
               
               
               <div id="HorariosAtencion" class="modulo ajusteModulo celeste">
                    <h1><span>Horarios</span> de Atención <span class="ver"><a id="formHorarioAtencion2" href="#">  - Configurar </a></span></h1>

                    <div class="content content mCustomScrollbar  mCS-autoHide">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Dia</th>
                                    <th scope="col">Turno 1</th>
                                    <th scope="col">Turno 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id='Lunes'>
                                    <th scope="row">Lunes</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id='Martes'>
                                    <th scope="row">Martes</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id='Miercoles'>
                                    <th scope="row">Miercoles</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id='Jueves'>
                                    <th scope="row">Jueves</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id='Viernes'>
                                    <th scope="row">Viernes</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id='Sabados'>
                                    <th scope="row">Sábado</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id='Domingos'>
                                    <th scope="row">Domingo</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id='Feriados'>
                                    <th scope="row">Feriados</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               
              
            </div>
            <div class="col-lg-4">
                
                   <div id="tips" class="modulo ajusteModulo naranja">
              <!-- Revive Adserver Etiqueta JS asincrónica - Generated with Revive Adserver v4.1.3 -->
        <ins data-revive-zoneid="5" data-revive-id="6a42b0d4b55d90b58eb8e42f829d9ed3"></ins>
        <script async src="//adserver.guiamendozagourmet.com/www/delivery/asyncjs.php"></script>
                </div>
                   
                  
            </div>
        </div>
        
      
        <!-- Slider de Proveedores
           <div class="row">
            <div class="col-md-12">
                <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="img/proveedores/R-Cristal.png" alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/Lagus.png"  alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/Zuelo.png"  alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/Eco.png"  alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/elite.png"  alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/Kimberly.png" alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/AltaCocina.png" alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/R-Cristal.png" alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/Lagus.png"  alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/Zuelo.png"  alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/Eco.png"  alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/elite.png"  alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/Kimberly.png"  alt="" />
		</div>
		<div class="slide">
			<img src="img/proveedores/AltaCocina.png" alt="" />
		</div>
	</div>
</div>
            </div>
            
        </div-->
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


    <!-- Funciones de Dashboard JavaScript -->
    <script src="js/controladores/dashboard.controlador.js"></script>
    <script src="js/controladores/actualizarSession.controlador.js"></script>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
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

    <script>
      setJWT('<?php echo $jwt; ?>', '<?php echo $idLocal; ?>');
    </script>

    <script>
        $(function() {
           iniciar('<?php echo $idNegocio; ?>' , '<?php echo $idLocal; ?>');
        });
    </script>


</body>

</html>
