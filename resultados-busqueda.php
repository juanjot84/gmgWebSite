<!DOCTYPE html>
<html lang="es">

<head>
    <script>
        var url = window.location.href;
        var indexSlash = url.lastIndexOf("/");
        var indexPHP = url.lastIndexOf(".php");
        if (indexSlash > indexPHP) {
            window.location.href = url.slice(0, indexSlash) + url.slice(indexSlash + 1, url.length)
        }

    </script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Guía Mendoza Gourmet</title>

    <link rel="shortcut icon" type="image/png" href="favicon.png" />

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Theme CSS -->
    <link href="css/gmgstyle.css" rel="stylesheet">
    <link href="css/agency.min.css" rel="stylesheet">
    <link href="css/simple-sidebar.css" rel="stylesheet">
    <link href="css/burguerbutton.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" integrity="sha384-0s5Pv64cNZJieYFkXYOTId2HMA2Lfb6q2nAcx2n0RTLUnCAoTTsS0nKEO27XyKcY" crossorigin="anonymous"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" integrity="sha384-ZoaMbDF+4LeFxg6WdScQ9nnR1QC2MIRxA1O9KWEXQwns1G8UNyIEZIQidzb0T1fo" crossorigin="anonymous"></script>
  <![endif]-->

    <style type="text/css">
        .imgslocalesbusqueda {
            object-fit: cover;
            object-position: center;
            height: 150px;
            width: 260px;
            margin: 0;
        }

        @media only screen and (max-width: 768px) {
            .descripcion {
                font-size: 13px;
            }
            p {
                line-height: 1.45;
            }
        }

        @media only screen and (max-width: 425px) {
            .resultadosbusqueda {
                padding-top: 20%;
            }
            .imgslocalesbusqueda {
                object-fit: cover;
                object-position: center;
                height: 150px;
                width: 260px;
                margin: 0 auto 5%;
            }

            .etiquetadescuento {
                text-align: center;
                background: #f8981d;
                font-size: 1.4em;
                padding: 3% 0;
                font-weight: 400;
                color: #fff;
                border-radius: 5px;
                width: 45%;
                margin: 0 auto;
            }
            img.logoweb {
                max-width: 230px;
                float: left;
                margin-left: 60px;
                padding-top: 8px;
            }
        }
        
        /****Estos estilos pasarlos a hoja una vez implementado**/
        
        .nav-tabs>li>a {
            
            color:#e3e3e3
        }
        
        .nav-tabs>li>a:hover {
           border:none;
            border-bottom: 2px solid #f8981d;
            background-color: #fff;
            border-radius: 0; 
            
        }
        
        .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
            
            border:none;
            border-bottom: 2px solid #f8981d;
            background-color: #fff;
            border-radius: 0;
        }

    </style>

    <!-- ANALYTICS -->
    <?php include("includes/analytics.php"); ?>
    <!-- SMARTLOOK -->
    <?php include("includes/smartlook.php"); ?>
    <!-- FIN SMARTLOOK -->

    <?php include("includes/soportezen.php"); ?>

    <link rel="stylesheet" href="css/jQuery.verticalCarousel.css">


</head>

<?php
error_reporting(E_ERROR);
$parametro = '';
$filtro = '';

$parametro = $_POST["parametro"];
$filtro = $_POST['filtro'];
$promocion = $_GET["promocion"];

if (empty($parametro)) $parametro = '';
if (empty($filtro)) $filtro = '';
if (empty($promocion)) $promocion = '';
?>


    <body id="page-top" class="index">

        <div id="wrapper">

            <?php 
        
        include("includes/menulateral.php");
    ?>

            <div id="page-content-wrapper">

                <a href="#menu-toggle" class="btn btn-secondary" id="menu-toggle">
                    <div id="nav-icon3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>

                <input type="text" name="parametro" id="parametro" value="<?php echo $parametro; ?>" class="hidden">
                <input type="text" name="filtro" id="filtro" value="<?php echo $filtro; ?>" class="hidden">

                <?php
          error_reporting(E_ERROR);
          include("includes/nav.php");
           ?>

                    <!-- Header -->
                    <header>

                    </header>





                    <div class="container resultadosbusqueda">


                        <div class="row">
                            
                                <!--Tabs -->

                               
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h3 id="labelRestaurantesBusquedas"></h3>

                                            <div class="tabbable-panel">
                                                <div class="tabbable-line">
                                                    <ul class="nav nav-tabs ">
                                                        <li class="active">
                                                            <a href="#tab_default_1" data-toggle="tab">
							<i class="fa fa-list" aria-hidden="true"></i> Listado</a>
                                                        </li>
                                                        <li>
                                                            <a href="#tab_default_2" data-toggle="tab">
							<i class="fa fa-map" aria-hidden="true"></i> Mapa</a>
                                                        </li>

                                                    </ul>
                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="tab_default_1">
                                                            <center>
                                                                <div id="loading"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span></div>
                                                            </center>
                                                            <div class="container locales">
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane" id="tab_default_2">
                                                            <div class="container">
                                                                <div class="row">
                                                                  
                                                                   <div class="col-md-12">
                                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.131610619595!2d-68.85743274200003!3d-32.89120819523445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090719fd9c99%3A0xd01bd7cbc22fd262!2sMart%C3%ADnez+de+Rozas+773%2C+Mendoza!5e0!3m2!1ses-419!2sar!4v1541602767725" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- End Tabs-->

                             
                            
                        </div>



                    </div>
                    
                        <?php
         error_reporting(E_ERROR);
         include("includes/footer.php");
          ?>
            </div>

            <!-- jQuery -->
            <script src="vendor/jquery/jquery.min.js"></script>

            <!-- Bootstrap Core JavaScript -->
            <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

            <!-- Plugin JavaScript -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

            <!-- Contact Form JavaScript -->
            <script src="js/jqBootstrapValidation.js"></script>
            <script src="js/contact_me.js"></script>

            <!-- Funciones de Barra JavaScript -->
            <script src="js/controladores/barraLateral.controlador.js"></script>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
            <script src="js/jQuery.verticalCarousel.js"></script>

            <!-- Funciones de Locales JavaScript -->
            <script src="js/controladores/locales.controlador.js"></script>

            <!-- Theme JavaScript -->
            <script src="js/agency.min.js"></script>

            <script src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js" crossorigin="anonymous"></script>

            <script>
                obtenerListadoTiposNegocio();
                buscar('<?php echo $parametro; ?>', '<?php echo $filtro; ?>', '<?php echo $promocion; ?>');

            </script>

            <!-- Menu lateral -->
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <!-- Animacion boton cerrar menú lateral -->
            <script type="text/javascript">
                $(document).ready(function() {
                    $('#nav-icon3').click(function() {
                        $(this).toggleClass('open');
                    });
                });

            </script>

            <!-- Menu Toggle Script -->
            <script>
                $("#menu-toggle").click(function(e) {
                    e.preventDefault();
                    $("#wrapper").toggleClass("toggled");
                });

            </script>

            <div class="modal fade" id="modalPromocion" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div class="modal-dialog">
                    <!-- ESTO VA EN UN MODAL AL HACER CLICK EN UNA PROMO-->
                    <div class="container modalpromoficha">
                        <div class="row text-center headermodalpromoficha">
                            <div class="col-md-6">
                                <img class="img-responsive imgspromoficha" id="fotoPromo">
                            </div>
                            <div class="col-md-6">
                                <h2 id="nombrePromo" class="nombrePromocion"></h2>
                            </div>
                        </div>
                        <div class="separador"></div>
                        <div id="opcionMenu"></div>
                        <div>
                            <a href="reserva.php?id=<?php  error_reporting(E_ERROR); echo $idLocal; ?>" class="page-scroll btn btn-xl" style="width: 100%; margin-top: 2%; margin-bottom: 4%;" id="reservarBoton">RESERVAR</a>
                        </div>
                        <div>Promoción válida desde <span id="fechaInicioPromo">00-00</span> hasta <span id="fechaFinPromo">00-00</span></div>
                        <div class="tycmenupromos">
                            <h3>Términos y condiciones</h3>
                            <p id="terminos"></p>
                        </div>
                    </div>
                    <!-- FIN MODAL -->
                </div>
            </div>

    </body>

    <!--Nav1-->
    <script>
        if ($(window).innerWidth() < 800) {
            var lastScrollTop = 0;
            $(window).scroll(function(event) {
                var st = $(this).scrollTop();
                if (st > lastScrollTop) {
                    // downscroll code
                    document.getElementById("LogoMobile").style.display = "none";
                    document.getElementById("loguito").style.display = "inline"
                } else {
                    // upscroll code
                    document.getElementById("LogoMobile").style.display = "inline";
                    document.getElementById("loguito").style.display = "none"
                }
                lastScrollTop = st;
            });
        }

    </script>
    <!--Fin Nav1-->

</html>
