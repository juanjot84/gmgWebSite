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
<?php
error_reporting(E_ERROR);
   $idNegocio = $_GET['idNegocio'];
?>

<?php 
error_reporting(E_ERROR);
include("includes/head.php"); ?>

<body id="page-top" class="index">


<?php 
error_reporting(E_ERROR);
include("includes/nav.php"); ?>



    <div class="container-fluid" style="padding: 1%;background: yellow;margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group">
                      <span class="input-group-btn">
                    </div>
                </div>
                <div class="col-md-6" style="text-align: right;">
                    <div class="input-group">

                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 2%; padding-bottom: 1%;">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                 <!-- Table -->
            <!-- Formulario de alta de local -->

            <form action="" id="formularioLocal">
              <h2 class="tituloseccion">Alta De Local</h2>
                <input type="text" name="idLocal" id="idLocal" class="hidden">
                <input type="text" name="idNegocio" id="idNegocio" value="<?php echo $idNegocio; ?>" class="hidden">

                <h5 class="titulosalta"> Nombre del local</h5>

                  <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <input id="nombreLocal" name="nombreLocal" type="text" class="form-control" placeholder="Nombre del local" aria-describedby="sizing-addon3">
                  </div></p>

                <h5 class="titulosalta"> Local Premium</h5>

                 <p>
                    <label class="radio-inline"><input type="radio" name="localPremium" id="localPremium-true" value="true">Si</label>
                    <label class="radio-inline"><input type="radio" name="localPremium" id="localPremium-false" value="false">No</label>
                  </p>

                <h5 class="titulosalta"> Datos de contacto del local visibles para el cliente</h5>

                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                          <input id="telContacto" name="telContacto" type="text" class="form-control" placeholder="Teléfono" aria-describedby="sizing-addon3" onfocus="limpiar('telContacto')" required>
                        </div>
                    </p>
                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                          <input id="mailContacto" name="mailContacto" type="email" class="form-control" placeholder="Mail" aria-describedby="sizing-addon3" onfocus="limpiar('mailContacto')" required>
                        </div>
                    </p>


              <h5 class="titulosalta"> Página web del local</h5>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-globe" aria-hidden="true"></i></span>
                <input id="webLocal" name="webLocal" type="text" class="form-control" placeholder="http://..." aria-describedby="sizing-addon3">
              </div></p>

              <h5 class="titulosalta"> Datos de contacto de redes sociales</h5>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                <input id="facebookLocal" name="facebookLocal" type="text" class="form-control" placeholder="Facebook del Local" aria-describedby="sizing-addon3">
              </div></p>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-instagram" aria-hidden="true"></i></span>
                <input id="instagramLocal" name="instagramLocal" type="text" class="form-control" placeholder="Instagram del Local" aria-describedby="sizing-addon3">
              </div></p>

             <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                <input id="twitterLocal" name="twitterLocal" type="text" class="form-control" placeholder="Twitter del Local" aria-describedby="sizing-addon3">
              </div></p>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-tripadvisor" aria-hidden="true"></i></span>
                <input id="tripadvisorLocal" name="tripadvisorLocal" type="text" class="form-control" placeholder="Tripadvisor del Local" aria-describedby="sizing-addon3">
              </div></p>

              <h5 class="titulosalta"> Dirección </h5>

                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-road" aria-hidden="true"></i></span>
                          <input id="calleLocal" name="calleLocal" type="text" class="form-control" placeholder="Calle" aria-describedby="sizing-addon3" onfocus="limpiar('calleLocal')" required>
                        </div>
                    </p>
                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-road" aria-hidden="true"></i></span>
                          <input id="alturaLocal" name="alturaLocal" type="number" class="form-control" placeholder="Altura" aria-describedby="sizing-addon3" onfocus="limpiar('alturaLocal')" required>
                        </div>
                    </p>
                    <p>

              <h5 class="titulosalta"> Carta</h5>

              <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="padding: 17px;" data-toggle="modal"  data-target="#mdlArchivos"><i class="fa fa-plus-square-o" aria-hidden="true"></i> CARGAR CARTA</button>
                      </span>
              </div>
              <p class="textodatosficha"><a id="cartaLocal" style="color: #777;" href="" target="_blank"><i class="fa fa-file-text-o datosficha" aria-hidden="true"></i> <span id="vercarta">Ver carta</span></a></p>
              <input type="text" id="cartaLocal1" class="hidden"/> 

                <h5 class="titulosalta"> Marcar en Google Maps</h5>
                        <div id="map"></div>
                        <input type="text" id="lat"  class="hidden" value="-32.890667" />
                        <input type="text" id="long"  class="hidden" value="-68.839412" />
                    </p>

              <h5 class="titulosalta" id="tituloPolo"> Polo gastronómico</h5>

                  <p><div class="input-group input-group-sm" id="listaPolo">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="poloNegocio" name="poloNegocio" class="form-control" onfocus="limpiar('poloNegocio')" required></select>
                  </div></p>

              <h5 class="titulosalta" id="tituloReserva"> Acepta reserva</h5>

                 <p id="aceptaReserva">
                    <label class="radio-inline"><input type="radio" name="aceptaReservaNegocio" id="aceptaReservaNegocio-true" value="true" checked="checked">Si</label>
                    <label class="radio-inline"><input type="radio" name="aceptaReservaNegocio" id="aceptaReservaNegocio-false" value="false">No</label>
                  </p>

              <h5 class="titulosalta" id="tituloNivel"> Nivel de precio</h5>

                  <p id="nivel"><div class="input-group input-group-sm">
                   <span class="input-group-addon" id="sizing-addon3"><div id="iconoNivel"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div></span>
                    <select id="nivelPrecio" name="nivelPrecio" class="form-control" onfocus="limpiar('nivelPrecio')" required></select>
                  </div></p>

              <h5 class="titulosalta" id="tituloPago"> Indicar medio de pago</h5>

                    <p>
                        <div class="form-group" id="mediosPagoCheckbox">

                        </div>
                    </p>

              <h5 class="titulosalta" id="tituloOcaciones"> Seleccionar Ocaciones</h5>

                    <p>
                        <div class="form-group" id="ocasionesCheckbox">

                        </div>
                    </p>

              <h5 class="titulosalta" id="titTpoCocPrin"> Tipo de cocina principal - 1 sola opción</h5>

                  <div id="TpoCocPrin"><p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="TipoCocinaPpal" name="TipoCocinaPpal" class="form-control" onfocus="limpiar('TipoCocinaPpal')" required></select>
                  </div></p></div>
            <div id="datosNoResto">
              <h5 class="titulosalta"> Otros tipos de cocina</h5>

                  <p>
                        <div class="form-group">

                            <div class="opcionesLocal row">
                                <div class="col-md-12" id="otroTipoCocina">

                                </div>
                            </div>
                        </div>
                  </p>

              <h5 class="titulosalta"> Indicar especialidades</h5>

                  <p>
                        <div class="form-group">

                            <div class="opcionesLocal row">
                                <div class="col-md-12" id="especialidades">

                                </div>
                            </div>
                        </div>
                  </p>

              <h5 class="titulosalta"> Servicios - Marcar los que correspondan</h5>

                  <p>
                        <div class="opcionesLocal form-group">

                            <div class="row">
                                <div class="col-md-12" id="servicios">

                                </div>
                            </div>
                        </div>
                  </p>
               </div>
              <div class="input-group">
                  <span class="input-group-btn">
                  <button id="botonAtras" class="btn btn-default" type="button" style="padding: 17px;" onClick=" volverPanelNegocio()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar('crear')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar y Continuar</button>
                </span>
              </div>

            </form>
            
    <!-- Modal -->
    <div id="mdlArchivos" class="modal fade">
        <div class="modal-dialog" style="width: 65%;">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Subir Carta</h4>
            </div>
            <div class="modal-body">
            <div class="row">
              <div class="col-md-12" id="formDropZone"></div>
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->

                  <!-- Table -->
                  <div id="cabeceraTablaNegocios">
                   <div class="panel-heading tituloseccion" style="display: none">Negocios</div>

                  </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">

        </div>
    </div>


    <?php 
    error_reporting(E_ERROR);
    include("includes/footer.php"); ?>


    <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

    <!-- Contact Form JavaScript -->
    <script src="js/dropzone.js"></script>
    <script src="js/controladores/subirCarta.controlador.js"></script>

    <!-- <link rel="stylesheet" href="css/bootstrap.css"> -->
    <link rel="stylesheet" href="css/dropzone.css"> 

    <script src="../js/jqBootstrapValidation.js"></script>
    <script src="../js/contact_me.js"></script>

    <!-- Funcione de Local JavaScript -->
        <script src="js/controladores/actualizarLocal.controlador.js"></script>
    <script src="js/controladores/local.controlador.js"></script>



    <!-- Theme JavaScript -->
    <script src="../js/agency.min.js"></script>

    <script type="text/javascript">


    $(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    });

    $(function() {
        var accion = 'crear';
        iniciar(accion);
    });

</script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHhrWZLpRB2OO1JJEU3Ls9FpfZzbXaQ-A&callback=initMap"></script>

</body>

</html>
