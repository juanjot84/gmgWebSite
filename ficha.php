<?php
session_start();
      error_reporting(E_ERROR);
      $jwt = $_SESSION['jwt'];
      $idUsuarioReserva = $_SESSION['idUsuarioReserva'];
      $idLocal = $_GET["id"];
      
?>
    
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
        <link href="css/burguerbutton.css" rel="stylesheet">
        <link href="css/agency.min.css" rel="stylesheet">
        <link href="css/simple-sidebar.css" rel="stylesheet">

        

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111410422-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-111410422-1');
        </script>

        <!-- SMARTLOOK -->

        <script type="text/javascript">
            window.smartlook||(function(d) {
            var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
            var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
            c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '0f96f4e577145df7b76f73ea418d1f88a242f08b');
        </script>

        <!-- FIN SMARTLOOK -->

        <?php include("includes/soportezen.php"); ?>
        
    </head>

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

                <?php 
                  error_reporting(E_ERROR);
                  include("includes/nav.php");
                 ?>

                <!-- Header -->
                <header class="fondoficha">
                    <center><div id="loading"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span></div></center>

                    <a id="myP" class="reservarfijo" href="#" class="page-scroll btn btn-xl" >
                        
                        <p>RESERVAR</p>
                    </a>

                    <div class="container ficha" style="display:none">
                        <div class="row" style="margin: 10% 0 5% 0;">
                            <div class="col-sm-12 col-md-8 text-left texto-ficha">
                                <div class="row">
                                    <div id="iconoFavorito" class="col-sm-10 col-md-8">

                                    </div>
                                    <div class="col-sm-2 col-md-4 text-center precioficha">
                                        <p id="nivelPrecio"></p>
                                    </div>

                                </div>

                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                  <!-- Indicators -->
                                  <ol class="carousel-indicators" id="indicadorSlide">
                                  </ol>

                                  <!-- Wrapper for slides -->
                                  <div class="carousel-inner" id="imagenesSlide">

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
                            <input type="text" name="jwtU" id="jwtU" value="<?php  error_reporting(E_ERROR); echo $jwt; ?>" class="hidden">
                            <input type="text" name="idUsuarioReserva" id="idUsuarioReserva" value="<?php  error_reporting(E_ERROR); echo $idUsuarioReserva; ?>" class="hidden">
                            <div class="col-sm-12 col-md-4 text-justify texto-ficha">
                                <a href="#" class="page-scroll btn btn-xl" style="width: 100%; margin-top: 8%; margin-bottom: 4.9%;" id="reservar">RESERVAR</a>
                                <p class="textoreserva" id="descripcionNegocio"></p>

                                <ul style="list-style: none;">
                                    <li>
                                        <p style="text-align: center;">
                                        <a id="facebookNegocio" href="#" target="_blank"><i class="fa fa-facebook redesficha" aria-hidden="true"></i></a>
                                        <a id="twitterNegocio" href="#" target="_blank"><i class="fa fa-twitter redesficha" aria-hidden="true"></i></a>
                                        <a id="instagramNegocio" href="#" target="_blank"><i class="fa fa-instagram redesficha" aria-hidden="true"></i></a>
                                        <a id="tripadvisorNegocio" href="#" target="_blank"><i class="fa fa-tripadvisor redesficha" aria-hidden="true"></i></a>
                                        <a id="paginaNegocio" href="#" target="_blank"><i class="fa fa-globe redesficha" aria-hidden="true"></i></a>
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
                                        <p class="textodatosficha"><i class="fa fa-usd datosficha" aria-hidden="true"></i><span id="medioPago"></span></p>
                                    </li>
                                    <li>
                                        <p class="textodatosficha"><a id="cartaLocal" style="color: #777;" href="" target="_blank"><i class="fa fa-file-text-o datosficha" aria-hidden="true"></i> <span id="vercarta">Ver carta</span></a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        </div>
                    </div>

                    <section style="padding: 0 0 3% 0 !important;">
                        <div class="container text-center">
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
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <!-- <h2 class="section-heading">Restaurantes Sugeregidos</h2> -->
                                <h2 class="titulosugerencia1">También te puede interesar...</h2>
                            </div>
                        </div>
                    <div class="container sugeridos">
                        <div class="row sugeridos">

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

                <div class="modal fade" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <h3>No has iniciado sesión</h3>
                    </div>
                    <div class="modal-body">
                      <h5>Por favor, inicie sesión para continuar</h5>

                    </div>
                    <div class="modal-footer">
                      <a href="login.php" data-confirm="modal" class="btn btn-info" id="botonLogin">Iniciar sesión</a>
                      <a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
                    </div>
                  </div>
                </div>
               </div>

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

        <!-- Funciones de Barra JavaScript -->
        <script src="js/controladores/barraLateral.controlador.js"></script>

        <!-- Funciones de Local JavaScript -->
        <script src="js/controladores/ficha.controlador.js"></script>
        <script>
          obtenerListadoTiposNegocio();
          getDetalleLocal('<?php echo $idLocal; ?>');

        </script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHhrWZLpRB2OO1JJEU3Ls9FpfZzbXaQ-A&callback=initMap"></script>

        <script>
        window.onscroll = function() {myFunction()};

        function myFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.getElementById("myP").className = "reservarfijo verreservar";
            } else {
                document.getElementById("myP").className = "";
            }
        }
        </script>

        <!-- Menu lateral -->
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Animacion boton cerrar menú lateral -->
        <script type="text/javascript">
          $(document).ready(function(){
            $('#nav-icon3').click(function(){
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


    </body>

    </html>
