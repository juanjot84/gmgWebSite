<?php 
error_reporting(E_ERROR);
session_start();

$idLocal = $_GET['idLocal'];
$_SESSION['idLocal'] = $idLocal;
$idNegocio = $_GET['idNegocio'];
$_SESSION['idNegocio'] = $idNegocio;

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
        <div class="col-md-6">
        </div>
        <div class="col-md-6" style="text-align: right;">
          <div class="input-group">
            <span class="input-group-btn">
               <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
                 <!-- Table -->
            <!-- Formulario de alta de local -->
            <input type="text" name="idLocalRecibido" id="idLocalRecibido" value="<?php  error_reporting(E_ERROR); echo $idLocal; ?>" class="hidden">
            <input type="text" name="idNegocio" id="idNegocio" value="<?php  error_reporting(E_ERROR); echo $idNegocio; ?>" class="hidden">
            <input type="text" name="tipoUs" id="tipoUs" value="<?php error_reporting(E_ERROR); echo $tipoUsuario; ?>" class="hidden">

            <form action="" id="formularioLocal">

              <h2 class="tituloseccion">Alta De Local</h2>

              <h5 class="titulosalta"> Nombre del local</h5>

              <p>
                <div class="input-group input-group-sm">
                  <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                  <input id="nombreLocal" name="nombreLocal" type="text" class="form-control" placeholder="Nombre del local" aria-describedby="sizing-addon3">
                </div>
              </p>

              <h5 class="titulosalta" id="tituloPremium"> Local Premium</h5>

              <p id="radioPremium">
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

              <p>
                <div class="input-group input-group-sm">
                  <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-globe" aria-hidden="true"></i></span>
                  <input id="webLocal" name="webLocal" type="text" class="form-control" placeholder="http://..." aria-describedby="sizing-addon3">
                </div>
              </p>

              <h5 class="titulosalta"> Datos de contacto de redes sociales</h5>

              <p>
                <div class="input-group input-group-sm">
                  <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                  <input id="facebookLocal" name="facebookLocal" type="text" class="form-control" placeholder="Facebook del Local" aria-describedby="sizing-addon3">
                </div>
              </p>

              <p>
                <div class="input-group input-group-sm">
                  <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-instagram" aria-hidden="true"></i></span>
                  <input id="instagramLocal" name="instagramLocal" type="text" class="form-control" placeholder="Instagram del Local" aria-describedby="sizing-addon3">
                </div>
              </p>

              <p>
                <div class="input-group input-group-sm">
                  <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                  <input id="twitterLocal" name="twitterLocal" type="text" class="form-control" placeholder="Twitter del Local" aria-describedby="sizing-addon3">
                </div>
              </p>

              <p>
                <div class="input-group input-group-sm">
                  <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-tripadvisor" aria-hidden="true"></i></span>
                  <input id="tripadvisorLocal" name="tripadvisorLocal" type="text" class="form-control" placeholder="Tripadvisor del Local" aria-describedby="sizing-addon3">
                </div>    
              </p>

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

                <p class="textodatosficha"><a id="cartaLocal" style="color: #777;" href="" target="_blank"><i class="fa fa-file-text-o datosficha" aria-hidden="true"></i>
                  <span id="vercarta">Ver carta</span></a>
                </p>

                <input type="text" id="cartaLocal1" class="hidden"/> 

                <h5 class="titulosalta"> Marcar en Google Maps</h5>

                <div id="map"></div>

                <input type="text" id="lat"  class="hidden" />
                <input type="text" id="long"  class="hidden" />

              </p>
              
              <h5 class="titulosalta" id="tituloPolo"> Polo gastronómico</h5>

              <p>
                <div class="input-group input-group-sm" id="listaPolo">
                  <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                  <select id="poloNegocio" name="poloNegocio" class="form-control" onfocus="limpiar('poloNegocio')" required></select>
                </div>
              </p>

              <h5 class="titulosalta" id="tituloReserva"> Acepta reserva</h5>

                <p id="aceptaReserva">
                  <label class="radio-inline"><input type="radio" name="aceptaReservaNegocio" id="aceptaReservaNegocio-true" value="true">Si</label>
                  <label class="radio-inline"><input type="radio" name="aceptaReservaNegocio" id="aceptaReservaNegocio-false" value="false">No</label>
                </p>

              <h5 class="titulosalta" id="tituloNivel"> Nivel de precio</h5>

                <p id="nivel">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><div id="iconoNivel"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div></span>
                    <select id="nivelPrecio" name="nivelPrecio" class="form-control" onfocus="limpiar('nivelPrecio')" required></select>
                  </div>
                </p>

              <h5 class="titulosalta" id="tituloPago"> Indicar medio de pago</h5>

               
                  <div class="form-group" id="mediosPagoCheckbox"></div>
                

              <h5 class="titulosalta" id="tituloOcasiones"> Seleccionar Ocasiones</h5>
                
                  <div class="form-group" id="ocasionesCheckbox" style="min-height: 75px;"></div>
                

              <h5 class="titulosalta" id="titTpoCocPrin"> Tipo de cocina principal - 1 sola opción</h5>

              <div class="form-group" id="TpoCocPrin">

                  <div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="TipoCocinaPpal" name="TipoCocinaPpal" class="form-control" onfocus="limpiar('TipoCocinaPpal')" required></select>
                  </div>

              </div>
            
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
                      <div class="col-md-12" id="especialidades"></div>
                    </div>
                  </div>
                </p>

                <h5 class="titulosalta"> Servicios - Marcar los que correspondan</h5>

                <p>
                  <div class="form-group">
                    <div class="opcionesLocal row">
                      <div class="col-md-12" id="servicios"></div>
                    </div>
                  </div>
                </p>

                <h5 class="titulosalta"> Parametros de Busqueda</h5>

                <p>
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-globe" aria-hidden="true"></i></span>
                    <input id="tagBusqueda" name="tagBusqueda" type="text" class="form-control" placeholder="Tag de busqueda" aria-describedby="sizing-addon3">
                  </div>
                </p>
                <p>
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <input id="valorTagBusqueda" name="valorTagBusqueda" type="text" class="form-control" placeholder="Valor de busqueda" aria-describedby="sizing-addon3">
                  </div>
                </p>

              </div>

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
    <script src="js/dropzone.js"></script>
    <script src="js/controladores/subirCarta.controlador.js"></script>
    <script src="js/controladores/local.controlador.js"></script>

    <!-- <link rel="stylesheet" href="css/bootstrap.css"> -->
    <link rel="stylesheet" href="css/dropzone.css"> 

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
        var accion = 'editar';
        iniciar(accion);
    });

</script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHhrWZLpRB2OO1JJEU3Ls9FpfZzbXaQ-A&callback=initMap"></script>

</body>

</html>
