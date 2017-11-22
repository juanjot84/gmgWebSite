<?php 
error_reporting(E_ERROR);
session_start();

$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];


if (!$_SESSION) {
       header('Location: index.php');
} else {
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
        
    } else {
        header('Location: index.php');
    }
}

?>
<?php
error_reporting(E_ERROR);
   $idLocal = $_GET['idLocal'];
?>

<?php 
error_reporting(E_ERROR);
include("includes/head.php"); ?>

<body id="page-top" class="index">


<?php
error_reporting(E_ERROR);
     if($tipoUsuario == 'usuarioNegocio'){
        $nav = 'perfil/'; 
        include("perfil/includes/nav-perfil-superior.php");   
    }else if($tipoUsuario == 'superAdmin'){
        include("includes/nav.php"); 
    }
?>


    <div class="container" style="padding-top: 2%; padding-bottom: 1%;">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                 <!-- Table -->
            <!-- Formulario de alta de local -->
            <input type="text" name="idLocalRecibido" id="idLocalRecibido" value="<?php  error_reporting(E_ERROR); echo $idLocal; ?>" class="hidden">
            <input type="text" name="idNegocio" id="idNegocio" class="hidden">
            <input type="text" name="tipoUs" id="tipoUs" value="<?php error_reporting(E_ERROR); echo $tipoUsuario; ?>" class="hidden">

            <form action="" id="formularioLocal">
              <h2 class="tituloseccion">Alta De Local</h2>

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

                <h5 class="titulosalta"> Dirección fiscal</h5>

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
                <h5 class="titulosalta"> Localidad</h5>

                  <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="idLocalidad" name="idLocalidad" class="form-control" onfocus="limpiar('idLocalidad')" required></select>
                  </div></p>

                <h5 class="titulosalta"> Marcar en Google Maps</h5>
                        <div id="map"></div>
                        <input type="text" id="lat"  class="hidden" />
                        <input type="text" id="long"  class="hidden" />
                    </p>

              <h5 class="titulosalta"> Polo gastronómico</h5>

                  <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="poloNegocio" name="poloNegocio" class="form-control" onfocus="limpiar('poloNegocio')" required></select>
                  </div></p>

              <h5 class="titulosalta"> Acepta reserva</h5>

                 <p>
                    <label class="radio-inline"><input type="radio" name="aceptaReservaNegocio" id="aceptaReservaNegocio-true" value="true">Si</label>
                    <label class="radio-inline"><input type="radio" name="aceptaReservaNegocio" id="aceptaReservaNegocio-false" value="false">No</label>
                  </p>

              <h5 class="titulosalta"> Nivel de precio</h5>

                  <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="nivelPrecio" name="nivelPrecio" class="form-control" onfocus="limpiar('nivelPrecio')" required></select>
                  </div></p>

              <h5 class="titulosalta"> Indicar medio de pago</h5>

                    <p>
                        <div class="form-group" id="mediosPagoCheckbox">

                        </div>
                    </p>

             <h5 class="titulosalta"> Seleccionar Ocaciones</h5>

                    <p>
                        <div class="form-group" id="ocasionesCheckbox">

                        </div>
                    </p>

              <h5 class="titulosalta"> Tipo de cocina principal - 1 sola opción</h5>

                  <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="TipoCocinaPpal" name="TipoCocinaPpal" class="form-control" onfocus="limpiar('TipoCocinaPpal')" required></select>
                  </div></p>

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
                        <div class="form-group">

                            <div class="opcionesLocal row">
                                <div class="col-md-12" id="servicios">

                                </div>
                            </div>
                        </div>
                  </p>

              <div class="input-group">
                 <span class="input-group-btn">
                 <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar('editar')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                </span>
              </div>

            </form>


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
      editarLocal();
    });

</script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHhrWZLpRB2OO1JJEU3Ls9FpfZzbXaQ-A&callback=initMap"></script>

</body>

</html>
