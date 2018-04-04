<?php 
error_reporting(E_ERROR);
session_start();
$idLocal = $_GET["id"];


    $jwt = $_SESSION['jwt'];
    $telefonoUsuario = $_SESSION['telefonoUsuario'];

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
  <link href="css/simple-sidebar.css" rel="stylesheet">
  <link href="css/burguerbutton.css" rel="stylesheet">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" integrity="sha384-0s5Pv64cNZJieYFkXYOTId2HMA2Lfb6q2nAcx2n0RTLUnCAoTTsS0nKEO27XyKcY" crossorigin="anonymous"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" integrity="sha384-ZoaMbDF+4LeFxg6WdScQ9nnR1QC2MIRxA1O9KWEXQwns1G8UNyIEZIQidzb0T1fo" crossorigin="anonymous"></script>
  <![endif]-->

  <!-- ANALYTICS -->

  <!-- Global site tag (gtag.js) - Google Analytics -->
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

  <style type="text/css">
      @media only screen and (max-width : 425px) {
          img.logoweb {
              max-width: 230px;
              float: left;
              margin-left: 60px;
              padding-top: 8px;
          }
      }
  </style>

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

          <input type="text" name="idLocal" id="idLocal" value="<?php echo $idLocal; ?>" class="hidden">

          <div class="container reservafront">
            <div class="row">
              <div class="col-md-12">
                <h3 class="titulo"></h3>
                <p></p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <p>
                  <div class="form-group">
                    <label for="selectAdulto">¿Para cuántos adultos?</label>
                    <select class="form-control" id="selectAdulto">
                      <option value="1">1 adulto</option>
                      <option value="2">2 adultos</option>
                      <option value="3">3 adultos</option>
                      <option value="4">4 adultos</option>
                      <option value="5">5 adultos</option>
                      <option value="6">6 adultos</option>
                      <option value="7">7 adultos</option>
                      <option value="8">8 adultos</option>
                      <option value="9">9 adultos</option>
                      <option value="10">10 adultos</option>
                      <option value="11">11 adultos</option>
                      <option value="12">12 adultos</option>
                      <option value="13">13 adultos</option>
                      <option value="14">14 adultos</option>
                      <option value="15">15 adultos</option>
                      <option value="16">16 adultos</option>
                      <option value="17">17 adultos</option>
                      <option value="18">18 adultos</option>
                      <option value="19">19 adultos</option>
                      <option value="20">20 adultos</option>
                      <option value="0">21 adultos o más</option>
                    </select>
                  </div>
                </p>
              </div>
              <div class="col-md-4">
                <p>
                  <div class="form-group">
                    <label for="selectNino">¿Para cuántos niños?</label>
                    <select class="form-control" id="selectNino">
                    <option value="0">0 niño</option>
                      <option value="1">1 niño</option>
                      <option value="2">2 niños</option>
                      <option value="3">3 niños</option>
                      <option value="4">4 niños</option>
                      <option value="5">5 niños</option>
                      <option value="6">6 niños</option>
                      <option value="7">7 niños</option>
                      <option value="8">8 niños</option>
                      <option value="9">9 niños</option>
                      <option value="10">10 niños</option>
                      <option value="11">11 niños</option>
                      <option value="12">12 niños</option>
                      <option value="13">13 niños</option>
                      <option value="14">14 niños</option>
                      <option value="15">15 niños</option>
                      <option value="16">16 niños</option>
                      <option value="17">17 niños</option>
                      <option value="18">18 niños</option>
                      <option value="19">19 niños</option>
                      <option value="20">20 niños</option>
                      <option value="0">21 niños o más</option>
                    </select>
                  </div>
                </p>
              </div>
              <div class="col-md-4">
                <p>
                  <div class="form-group">
                    <label for="selectDia">¿Qué día?</label>
                    <select class="form-control" id="selectDia">
                    </select>
                  </div>
                </p>
              </div>
              
            <div class="row">
              <div class="col-md-4">
                  <label for="selectNino">Observación:</label>
                  <input id="observacionPersona" name="observacionPersona" type="text" class="form-control" placeholder="" aria-describedby="sizing-addon3" >  
              </div>
            </div>

            <div id="sinHorarios"></div>

            </div>


            <div id="noHorario" style="display: none">
              No existen horarios que cumplan con los datos ingresados.
            </div>

            <div class="horas row" style="display: none">
              <div class="col-md-12" style="display: inline-flex;">
                <ul  id="selecHoras" style="flex-direction: row; flex-wrap: wrap; display: flex;" onclick="limpiar('selecHoras')">
                </ul>
              </div>
            </div>

            <section class="seccionopcionesreserva">
              <div id="seccionOpcionesReserva">
                <div class="row">
                  <h3>Elegí una opción para tu reserva</h3>
                </div>
                <!-- INICIO PROMO -->
                <div class="row separadoropcionesreservas">
                  <div class="radio">
                    <label><input type="radio" name="optradio" id="optradio" value="sinPromocion" checked="checked"><h4 class="elegiopcionreserva">Sin promoción ni descuento</h4></label>
                  </div>
                </div>
              </div>
              <div id="contenedorPromociones">

              </div>
            </section>

            <div class="row">
              <div style="text-align: center;">
                <a href="#" onClick="realizarReserva()" id="reservar" class="page-scroll btn btn-xl" style="max-width: 300px; margin: 5% 0;">RESERVAR</a>
              </div>
            </div>

            <div class="modal fade" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div class="text-center">
                      <img src="http://guiamendozagourmet.com/img/logo-gmg.png">
                    </div>
                  </div>
                  <div class="modal-body text-center">
                    <h4>Iniciar sesión</h4>
                    <p>Iniciá sesión o creá una cuenta para continuar con la reserva.</p>
                  </div>
                  <div class="modal-footer" style="text-align: center !important;">
                    <a href="#" data-dismiss="modal" class="btn btn-danger"><i class="fa fa-ban"></i> Cancelar</a>
                    <a href="login.php" data-confirm="modal" class="btn btn-info" id="botonLogin"><i class="fa fa-arrow-right"></i> Continuar</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="realizarReserva" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3>Confirmar Reserva</h3>
                  </div>
                  <div class="modal-body">
                    <div class="row" id="noDescuento" style="display:none">
                      <div class="col-md-12">
                        <div class="alert alert-info" style="text-align: center; font-size: 1.5em;">
                          <strong>Atención!</strong> Esta reserva no posee ningún descuento.
                        </div>
                      </div>
                    </div>

                    <div class="row" id="conDescuento" style="display:none">
                      <div class="col-md-12">
                        <div class="alert alert-info" style="text-align: center; font-size: 1.5em;">
                          <strong>Atención!</strong> Esta reserva posee un descuento del <span id="porcentajeDescuento"></span><span>&#37;</span>.
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <h3 class="titulo"></h3>
                        <p id="0Reserva"></p>
                        <p id="horarioReserva" ></p>
                        <p id="direccionLocal" ></p>
                      </div>
                      <div class="col-md-12">
                        <p>
                          <div class="form-group">
                              <input type="text" name="telefonoReserva" id="telefonoReserva" tabindex="1" class="form-control cantopcionesmenureserva" placeholder="Teléfono de contacto" value="<?php error_reporting(E_ERROR); echo $telefonoUsuario; ?>" onfocus="limpiar('telefonoReserva')">
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>



                  <div class="modal-footer">
                    <a href="#" class="page-scroll btn btn-xl" data-dismiss="modal" onclick="limpiar('telefonoReserva')" style="max-width: 300px; margin: 5% 0;">MODIFICAR</a>

                    <a href="#" class="page-scroll btn btn-xl" onClick="confirmarReserva()" style="max-width: 300px; margin: 5% 0;">CONFIRMAR RESERVA</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="reservaConfirmada" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3>Reserva realizada</h3>
                  </div>
                  <div class="modal-body">

                    <div class="row">
                      <div class="col-md-12">
                        <h3 class="titulo">La reserva se ha realizado correctamente</h3>
                        <p > Un email con los datos será enviado a su casilla de contacto.</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <a href="mis-reservas.php" class="page-scroll btn btn-xl" style="max-width: 300px; margin: 5% 0;">ACEPTAR</a>
                  </div>
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

  <!-- Funciones de Barra JavaScript -->
  <script src="js/controladores/barraLateral.controlador.js"></script>

  <!-- Funciones de Home JavaScript -->
  <script src="js/controladores/home.controlador.js"></script>

  <!-- Theme JavaScript -->
  <script src="js/agency.min.js"></script>

  <script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
  crossorigin="anonymous"></script>
  <!-- Funciones de Local JavaScript -->
  <script src="js/controladores/reserva.controlador.js"></script>
  <script>
    obtenerListadoTiposNegocio();
    setJWT('<?php echo $jwt; ?>', '<?php echo $idLocal; ?>');
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
