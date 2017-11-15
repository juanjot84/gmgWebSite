    <!DOCTYPE html>
    <html lang="es">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Ficha - Guía Mendoza Gourmet</title>

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

    </head>
    <?php
    error_reporting(E_ERROR);
    $idLocal = $_GET["id"];
    ?>
    <body id="page-top" class="index">

        <?php 
        error_reporting(E_ERROR);
        include("includes/nav.php");
         ?>

        <!-- Header -->
        <header class="fondoficha">
            <div class="container ficha">
                <div class="row" style="margin: 10% 0 5% 0;">
                    <div class="col-md-8 text-left texto-ficha">
                        <div class="row">
                            <div class="col-md-8">
                                <h3 class="titulo"><span id="nombreNegocio"></span> | <span id="bajadaNegocio"></span><i class="fa fa-heart-o" style="color: #e02222 !important; font-size: 1em; padding-left: 6px;" aria-hidden="true"></i></h3>

                                <p >RUBRO <span id="rubro"></span> > TIPO DE COCINA <span id="tipoCocinaPrincipal"></span></p>
                            </div>
                            <div class="col-md-4 text-center precioficha">
                                <p id="nivelPrecio"></p>
                            </div>

                        </div>

                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                          <!-- Indicators -->
                          <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                          </ol>

                          <!-- Wrapper for slides -->
                          <div class="carousel-inner">
                            <div class="item active">
                              <img src="img/resto00.jpg" alt="Novedades">
                            </div>

                            <div class="item">
                              <img src="img/resto01.jpg" alt="Novedades">
                            </div>

                            <div class="item">
                              <img src="img/resto02.jpg" alt="Novedades">
                            </div>

                            <div class="item">
                              <img src="img/resto03.jpg" alt="Novedades">
                            </div>
                          </div>

                          <!-- Left and right controls -->
                          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>
                    </div>

                    <div class="col-md-4 text-justify texto-ficha">
                        <a href="#" class="page-scroll btn btn-xl" style="width: 100%; margin-top: 8%; margin-bottom: 4.9%;" id="reservar">RESERVAR</a>
                        <p class="textoreserva" id="descripcionNegocio"></p>

                        <ul style="list-style: none;">
                            <li>
                                <p style="text-align: center;">
                                <a id="facebookNegocio" href="#"><i class="fa fa-facebook redesficha" aria-hidden="true"></i></a>
                                <a id="twitterNegocio" href="#"><i class="fa fa-twitter redesficha" aria-hidden="true"></i></a>
                                <a id="instagramNegocio" href="#"><i class="fa fa-instagram redesficha" aria-hidden="true"></i></a>
                                <a id="tripadvisorNegocio" href="#"><i class="fa fa-tripadvisor redesficha" aria-hidden="true"></i></a>
                                <a id="paginaNegocio" href="#"><i class="fa fa-globe redesficha" aria-hidden="true"></i></a>
                                </p>
                            </li>
                            <li style="padding-top: 5%;">
                                <p class="textodatosficha"><i class="fa fa-map-marker datosficha" aria-hidden="true"></i> <span id="direccionLocal"></span></p>
                            </li>
                            <li>
                                <p class="textodatosficha"><i class="fa fa-phone datosficha" aria-hidden="true"></i><span id="telefonoLocal"></span> </p>
                            </li>
                            <li>
                                <p class="textodatosficha"><i class="fa fa-envelope-o datosficha" aria-hidden="true"></i><span id="mailLocal"></span> </p>
                            </li>
                            <li>
                                <p class="textodatosficha"><i class="fa fa-usd datosficha" aria-hidden="true"></i> <span id="medioPago"></span></p>
                            </li>
                        </ul>
                    </div>
                </div>

                </div>
            </div>

            <section style="padding: 0 0 3% 0 !important;">
                <div class="container">
                    <div class="row servicios">

                    </div>
                </div>
            </section>

            <!-- MAPA -->
            <div class="container">
                <div class="row">
                    <div id="map"></div>
                </div>
            </div>
        </header>

        <!-- Novedades -->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <!-- <h2 class="section-heading">Restaurantes Sugeregidos</h2> -->
                        <h2 class="titulosugerencia1">Restaurantes Sugeridos</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-2">
                        <img class="sugeridos img-responsive" src="img/suger.jpg">
                        <h2 class="titulosugerencia2">Azafrán</h2>
                    </div>
                    <div class="col-md-2">
                        <img class="sugeridos img-responsive" src="img/suger.jpg">
                        <h2 class="titulosugerencia2">El Mercadito</h2>
                    </div>
                    <div class="col-md-2">
                        <img class="sugeridos img-responsive" src="img/suger.jpg">
                        <h2 class="titulosugerencia2">Ceibo</h2>
                    </div>
                    <div class="col-md-2">
                        <img class="sugeridos img-responsive" src="img/suger.jpg">
                        <h2 class="titulosugerencia2">Orégano</h2>
                    </div>
                    <div class="col-md-2">
                        <img class="sugeridos img-responsive" src="img/suger.jpg">
                        <h2 class="titulosugerencia2">Praga</h2>
                    </div>
                    <div class="col-md-2">
                        <img class="sugeridos img-responsive" src="img/suger.jpg">
                        <h2 class="titulosugerencia2">M Bistró</h2>
                    </div>
                </div>
            </div>
        </section>


        <!-- Publicidad -->
        <section style="padding: 0px 0 !important;">
            <div class="container-fluid fondopubli">
                <div class="row">
                    <div class="col-lg-12 text-center">

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

        <script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
        crossorigin="anonymous"></script>

        <!-- Tooltip -->
        <script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
        </script>

        <!-- Funciones de Local JavaScript -->
        <script src="js/controladores/ficha.controlador.js"></script>
        <script>
        getDetalleLocal('<?php echo $idLocal; ?>');

        </script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHhrWZLpRB2OO1JJEU3Ls9FpfZzbXaQ-A&callback=initMap"></script>


    </body>

    </html>
