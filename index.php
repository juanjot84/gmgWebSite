<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Reservá tu mesa! Buscá y reservá en tu restaurante favorito, totalmente GRATIS!">
    <meta property="og:image" content="https://guiamendozagourmet.com/guiamendozagourmet.jpg" />
    <meta name="author" content="Guía Mendoza Gourmet">
    <meta name="keywords" content="guia mendoza gourmet, reserva, online, restaurantes, restorant, comer afuera, peatonal sarmiento, calle sarmiento, av. belgrano, av. arístides villanueva, av. juan b. justo, alameda, barrio bombal, av. san martín sur, panamericana, chacras de coria, cacheuta, alta montaña, potrerillos, valle de uco, palmares, centro, vistalba, maipú, gourmet, alta cocina, casera, regional, italiana, peruana, nikkei, peruano, japonesa, argentina, sin gluten, sushi, parrilla, cosas dulces, cenar afuera, almuerzos, reservas">

    <meta name="apple-itunes-app" content="app-id=1300430301">
    <meta name="google-play-app" content="app-id=pronet.apps.com.guiamendozagourmet">

    <title>Guía Mendoza Gourmet</title>

    <link rel="shortcut icon" type="image/png" href="https://guiamendozagourmet.com/favicon.png" />

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="css/gmgstyle.css" rel="stylesheet">
    <link href="css/agency.min.css" rel="stylesheet">
    <link href="css/simple-sidebar.css" rel="stylesheet">
    <link href="css/burguerbutton.css" rel="stylesheet">

    <!-- <link href="assets/css/bootstrapTheme.css" rel="stylesheet"> -->
    <link href="assets/css/custom.css" rel="stylesheet">

    <!-- Owl Carousel Assets -->
    <link href="owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="owl-carousel/owl.theme.css" rel="stylesheet">

    <link href="assets/js/google-code-prettify/prettify.css" rel="stylesheet">

    <style type="text/css">
        h2.section-heading {
            color: #111;
            font-family: "Roboto", sans-serif;
        }

        h3.section-subheading.text-muted {
            color: #777;
            font-family: "Roboto", sans-serif;
            font-size: 16px;
            text-transform: none;
            font-weight: 400;
            margin-bottom: 75px;
        }

    </style>

    <!-- Popup -->

    <style type="text/css">
        .modal-content {}

        .modal-dialog {
            z-index: 999999;
            width: 450px;
            text-align: center;
        }

        .modal-header {
            padding: 15px 15px 0 0;
            border-bottom: 0px solid #e5e5e5;
        }

        .fade {
            padding-top: 10%;
        }

        .modaltexto1 {
            font-weight: bold;
            font-size: 2em;
            line-height: 1.5em;
        }

        .modaltexto2 {
            font-size: 1.4em;
            line-height: 1.3em;
        }

        .tamimg {
            width: 100%;
            max-width: 450px;
            height: auto;
        }

        @media (max-width: 1440px) {
            .modal-dialog {
                width: 450px;
                margin: 30px auto;
            }
            .fade {
                padding-top: 12%;
            }
        }

        @media (max-width: 1024px) {
            .modal-dialog {
                width: 450px;
                margin: 10px auto;
            }
            .fade {
                padding-top: 20%;
            }
        }

        @media (max-width: 768px) {
            .modal-dialog {
                width: 450px;
                margin: 15px auto;
            }
            .fade {
                padding-top: 25%;
            }
        }

        @media (max-width: 425px) {
            .modal-dialog {
                width: 200px;
                margin: 155px auto;
            }
            .tamimg {
                width: 100%;
                height: auto;
            }
            .fade {
                padding-top: 10%;
            }
            .modaltexto1 {
                font-weight: bold;
                font-size: 1.4em;
                line-height: 1.5em;
            }
            .modaltexto2 {
                font-size: 1.4em;
                line-height: 1.3em;
            }
            .input-index {

                width: 100%;
                float: left;
                border-radius: 4px 0 0 4px
            }

            button.btn.btn-default.btnbuscar {

                width: 50%;
                float: none;
                padding: 0;
                padding: 3% 2%;
                margin: 15px auto 0 auto;
                border-radius: 4px
            }
            button.btn.btn-default.btnbuscar:hover {

                width: 50%;
                float: none;
                padding: 0;
                padding: 3% 2%;
                margin: 0
            }
            .contenedor-boton {

                padding: 50px 0 0 0
            }
        }

        @media (max-width: 375px) {
            .modal-dialog {
                width: 200px;
                margin: 120px auto;
            }

            .fade {
                padding-top: 10%;
            }
            .modaltexto1 {
                font-weight: bold;
                font-size: 1.4em;
                line-height: 1.5em;
            }
            .modaltexto2 {
                font-size: 1.2em;
                line-height: 1.3em;
            }


        }

        @media (max-width: 320px) {
            .modal-dialog {
                width: 200px;
                margin: 90px auto;
            }

            .fade {
                opacity: 1;
                padding-top: 10%;
            }
            .modaltexto1 {
                font-weight: bold;
                font-size: 1em;
                line-height: 1.5em;
            }
            .modaltexto2 {
                font-size: 1em;
                line-height: 1.3em;
            }
        }

    </style>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

    <script type="text/javascript">
        $(document).ready(function() {
            $("#myModal").modal('show');
        });

    </script>

    <!-- Fin popup -->



    <!-- ANALYTICS -->
    <?php include("includes/analytics.php"); ?>
    <!-- SMARTLOOK -->
    <?php include("includes/smartlook.php"); ?>
    <!-- FIN SMARTLOOK -->

    <!-- Facebook Pixel Code -->
    <?php include("includes/pixelFace.php"); ?>
    <!-- End Facebook Pixel Code -->
    <?php include("includes/soportezen.php"); ?>
    <!-- Google Analitics Polenta -->

    <!-- Google Tag Manager -->
    <?php include("includes/googleTagManager.php"); ?>
    <!-- End Google Tag Manager -->


    <link rel="stylesheet" href="smartbanner/jquery.smartbanner.css" type="text/css" media="screen">
    <script src="smartbanner/jquery.smartbanner.js"></script>
    
    


</head>

<body id="page-top" class="index" onload="aleatorio()">

    <script type='text/javascript' src='js/jquery.smartbanner.js'></script>
    <script type="text/javascript">
        var android = location.href.match(/#android$/) || navigator.userAgent.match(/Android/i) != null;
        $.smartbanner({
            title: 'Guia Mendoza Gourmet',
            author: 'GMG',
            icon: 'http://www.guiamendozagourmet.com/img/IconApp.jpg',
            /*force: android ? 'android' : 'ios',*/
            daysHidden: 0,
            daysReminder: 0
        });

        $('.theme-toggle').on('click', function(e) {
            e.preventDefault();
            $.smartbanner('switchType')
            $(this).text($(this).text() == 'Preview Android' ? 'Preview iOS' : 'Preview Android')
        })

        if (android) $('.theme-toggle').text('Preview iOS');

    </script>



    <!-- Google Analitics Polenta -->
    <!-- Google Tag Manager (noscript) -->
    <?php include("includes/googleTagManagerBody.php"); ?>
    <!-- End Google Tag Manager (noscript) -->


    <!--div id="myModal" class="modal fade">
      <div class="modal-dialog">
          <div class="modal-content">
           
              <div class="modal-body">
                 <a href="#" class="close" data-dismiss="modal" aria-hidden="true" style="cursor: pointer; color: #000; text-decoration: none; font-size: 14px; font-weight: bold; opacity: 1;
    text-shadow: none;"> <img src="img/icono-cerrar.png" alt=""> </a>
                  <img class="tamimg" src="img/banner-publicidad-vertical2.jpg" alt="Guía Mendoza Gourmet">
                 
              </div>
          </div>
      </div>
  </div-->

    <div id="wrapper">

        <?php 
          
          include("includes/menulateral.php");
      ?>

        <div id="page-content-wrapper" class="logoindex">

            <a href="#menu-toggle" class="btn btn-secondary" id="menu-toggle">
                <div id="nav-icon3">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>


            <?php 
          error_reporting(E_ERROR);
          include("includes/nav-home.php"); 
          ?>

            <!-- Header -->
            <header>
                <div class="container" id="wrapper">
                   <div class="snow" id="snow">
    <div class="copos f1">&#10053</div>
    <div class="copos f2">&#10052</div>
    <div class="copos f3">&#10053</div>
    <div class="copos f4">&#10052</div>
    <div class="copos f5">&#10052</div>
    <div class="copos f6">&#10052</div>
    <div class="copos f7">&#10053</div>
    <div class="copos f8">&#10052</div>
    <div class="copos f9">&#10052</div>
  </div>
                    <div class="row">
                        <div class="col-md-6 intro-text" style="margin-top: 5%;">

                            <img class="img-responsive img-reserva" style="margin: 0 auto;" src="img/reserva.png">
                            <!-- <div class="intro-heading">RESERVÁ TU LUGAR</div>
                  <div class="intro-lead-in">Buscá <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Elegí <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Reservá <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> ES GRATIS!!</div>
                  <a href="#" class="page-scroll btn btn-xl">CÓMO FUNCIONA</a> -->
                            <div class="form-group" style="padding-top: 7%;">
                                <form action="resultados-busqueda.php" method="post">
                                    <input type="text" class="form-control input-index" placeholder="Buscá por nombre, zona o tipo de cocina" name="parametro">
                                    <button type="submit" class="btn btn-default btnbuscar">BUSCAR</button>


                                    <!-- <div class="filtros">
                        <input type="radio" name="filtro" value="nombre" aria-label="..."> POR NOMBRE
                        <input type="radio" name="filtro" value="localidad" aria-label="..."> POR ZONA
                        <input type="radio" name="filtro" value="tipoCocina" aria-label="..."> TIPO DE COMIDA
                      </div> -->
                                    <div style="padding-top: 5%;">
                                        <!-- <button type="button" class="btn btn-default">FECHA</button>
                        <button type="button" class="btn btn-default">HORA</button>
                        <button type="button" class="btn btn-default">COMENSALES</button> -->

                                    </div>
                                </form>
                            </div>

                            <div class="row" id="seccion-especiales">
                                <!--div class="col-md-8">
                                    <img class="img-responsive" style="margin: 0 auto;" src="img/reservaALMAlbec.png">
                                </div>
                                <div class="col-md-4 contenedor-boton">
                                    <a class="boton-restos" href="resultados-busqueda.php?promocion=ALMAlbec">VER RESTAURANTES</a>
                                </div-->
                                <div class="col-md-12">


                                    <div class="descargateApp">

                                        <iframe width="640" height="360" src="descargarapp/descargarapp.html" frameborder="0" allowfullscreen></iframe>

                                    </div>

                                </div>
                            </div>


                        </div>
                        <div class="col-md-6 intro-text">
                            <img style="margin: 0 auto;" class="img-responsive" src="img/FrontEd4.png" >
                        </div>
                    </div>
                </div>
            </header>

            <section class="sugeridosIndex">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <!-- <h2 class="section-heading">Restaurantes Sugeregidos</h2> -->
                        <h1>Restaurantes que aceptan reservas. </h1>
                        <h2 class="section-heading">Reservá en un click!</h2>
                    </div>
                </div>
                <div id="sugeridosBase">

                </div>
            </section>

            <!-- Ocasiones -->
            <section id="portfolio" class="bg-light-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">Ocasiones</h2>

                        </div>
                    </div>

                    <div class="row">
                        <div id="demo">
                            <div class="container">
                                <div class="row">
                                    <div class="span12">

                                        <div id="owl-demo" class="owl-carousel">

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- Publicidad -->
            <section style="padding: 0px 0 !important;">

                <!--Publicidad 1360x300-->
                <div class="container-fluid fondopubli-web">

                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <!-- <img style="margin: 5% auto;" class="img-responsive" src="img/publicidad.png"> -->



                            <!-- Revive Adserver Etiqueta JS asincrónica - Generated with Revive Adserver v4.1.3 - 1360x300-->
                            <ins data-revive-zoneid="1" data-revive-id="6a42b0d4b55d90b58eb8e42f829d9ed3"></ins>
                            <script async src="//adserver.guiamendozagourmet.com/www/delivery/asyncjs.php"></script>


                        </div>
                    </div>
                </div>
                <div class="container-fluid fondopubli-mobile">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <!-- <img class="img-responsive" src="img/publicidad-mobile.png"> -->

                            <!-- Revive Adserver Etiqueta JS asincrónica - Generated with Revive Adserver v4.1.3 - 350x350 -->
                            <ins data-revive-zoneid="2" data-revive-id="6a42b0d4b55d90b58eb8e42f829d9ed3"></ins>
                            <script async src="//adserver.guiamendozagourmet.com/www/delivery/asyncjs.php"></script>

                        </div>
                    </div>
                </div>
            </section>


            <!-- About Section -->
            <section id="about">
                <div class="container polos">
                </div>
            </section>

            <!-- ELEGÍ TU COCINA -->
            <section id="team" class="bg-light-gray">

                <h2 style="text-align: center; margin-bottom: 2%;" class="section-heading">Elegí tu cocina</h2>

                <div class="container tipoCocinas">

                </div>
            </section>

            <?php 
        error_reporting(E_ERROR);
        include("includes/footer.php");
        ?>
        </div>
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

    <!-- Funciones de Home JavaScript -->
    <script src="js/controladores/home.controlador.js"></script>

    <!-- Theme JavaScript -->
    <script src="js/agency.min.js"></script>

    <script src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js" crossorigin="anonymous"></script>

    <script src="assets/js/jquery-1.9.1.min.js"></script>
    <script src="owl-carousel/owl.carousel.js"></script>

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



    <script>
        obtenerListadoCocinas();
        obtenerListadoTiposNegocio();

    </script>
    <style>
        #owl-demo .item {
            background: none;
            padding: 5px 0px;
            margin: 5px;
            color: #FFF;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            text-align: center;
        }

        .customNavigation {
            text-align: center;
        }

        .customNavigation a {
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        @media only screen and (max-width: 1024px) {
            .fotosocasiones {
                object-fit: cover;
                object-position: center;
                height: 260px;
                width: 180px;
            }
        }

    </style>

    <!-- Funciones de Ocasiones JavaScript -->
    <script src="js/controladores/ocasiones.controlador.js"></script>

    <!-- Funciones de Polos JavaScript -->
    <script src="js/controladores/polos.controlador.js"></script>



    <script src="assets/js/bootstrap-collapse.js"></script>
    <script src="assets/js/bootstrap-transition.js"></script>
    <script src="assets/js/bootstrap-tab.js"></script>

    <script src="assets/js/google-code-prettify/prettify.js"></script>
    <script src="assets/js/application.js"></script>
        
        <!--PLugin de Nieve
        
        <script src="js/jquery.snow.min.1.0.js"></script>
        <script>
$(document).ready( function(){ $.fn.snow();
});
</script>-->

</body>

</html>
