<?php
   $idNegocio = $_GET['idNegocio'];
?>

<?php include("includes/head.php"); ?>

<body id="page-top" class="index">


<?php include("includes/nav.php"); ?>

   

    <div class="container-fluid" style="padding: 1%;background: yellow;margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="BUSCAR..." style="padding: 25.6px;">
                      <span class="input-group-btn">
                        <button class="btn btn-default botonbuscar" style="color: #333; background-color: #fff; border: 1px solid #ccc; padding: 15px; border-radius: 0;" type="button"><i style="font-size: 1.5em;" class="fa fa-search" aria-hidden="true"></i></button>
                      </span>
                    </div>
                </div>
                <div class="col-md-6" style="text-align: right;">
                    <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="padding: 17px;" onClick="agregarNegocio()"><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVO</button>
                      </span>
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

                <h5 class="titulosalta"> Datos de contacto</h5>

                    <p> 
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                          <input id="telContacto" name="telContacto" type="text" class="form-control" placeholder="Teléfono" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                          <input id="mailContacto" name="mailContacto" type="text" class="form-control" placeholder="Mail" aria-describedby="sizing-addon3">
                        </div>
                    </p>

                <h5 class="titulosalta"> Dirección fiscal</h5>

                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-road" aria-hidden="true"></i></span>
                          <input id="calleLocal" name="calleLocal" type="text" class="form-control" placeholder="Calle" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-road" aria-hidden="true"></i></span>
                          <input id="alturaLocal" name="alturaLocal" type="text" class="form-control" placeholder="Altura" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p>
                <h5 class="titulosalta"> Localidad</h5>

                  <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="idLocalidad" name="idLocalidad" class="form-control"></select>
                  </div></p>
                    
                <h5 class="titulosalta"> Marcar en Google Maps</h5>
                        <div id="map"></div>
                        <input type="text" id="lat"  class="hidden" value="-32.890667" />
                        <input type="text" id="long"  class="hidden" value="-68.839412" />
                    </p>

              <h5 class="titulosalta"> Polo gastronómico</h5>

                  <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="poloNegocio" name="poloNegocio" class="form-control"></select>
                  </div></p>

              <h5 class="titulosalta"> Acepta reserva</h5>

                 <p>
                    <label class="radio-inline"><input type="radio" name="aceptaReservaNegocio" id="aceptaReservaNegocio-true" value="true">Si</label>
                    <label class="radio-inline"><input type="radio" name="aceptaReservaNegocio" id="aceptaReservaNegocio-false" value="false">No</label>
                  </p>

              <h5 class="titulosalta"> Nivel de precio</h5>

                  <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="nivelPrecio" name="nivelPrecio" class="form-control"></select>
                  </div></p>

              <h5 class="titulosalta"> Indicar medio de pago</h5>

                    <p>
                        <div class="form-group" id="mediosPagoCheckbox">
                          
                        </div>
                    </p>

              <h5 class="titulosalta"> Tipo de cocina principal - 1 sola opción</h5>

                  <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="TipoCocinaPpal" name="TipoCocinaPpal" class="form-control"></select>
                  </div></p>

              <h5 class="titulosalta"> Otros tipos de cocina</h5>
                   
                  <p>
                        <div class="form-group">

                            <div class="row">
                                <div class="col-md-3" id="otroTipoCocina">

                                </div>
                            </div>
                        </div>
                  </p> 

              <h5 class="titulosalta"> Indicar especialidades</h5>
              
                  <p>
                        <div class="form-group">

                            <div class="row">
                                <div class="col-md-3" id="especialidades">

                                </div>
                            </div>
                        </div>
                  </p>

              <h5 class="titulosalta"> Servicios - Marcar los que correspondan</h5>

                  <p>
                        <div class="form-group">

                            <div class="row">
                                <div class="col-md-3" id="servicios">

                                </div>
                            </div>
                        </div>
                  </p>

              <div class="input-group">
                 <span class="input-group-btn">
                  <button class="btn btn-default" type="button" style="padding: 17px;" onClick="send()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar y Continuar</button>
                </span>
              </div>

            </form>

                  <!-- Table -->
                  <div id="cabeceraTablaNegocios">
                   <div class="panel-heading tituloseccion" style="display: none">Negocios</div>
                    <table class="table">
                        <thead class="titulotabla">
                            <tr> 
                                <th >#</th>
                                    <th >Nombre</th>
                                    <th >Descripción</th>
                                    <th style="text-align: center;">Acción</th>
                                </tr>
                        </thead>
                        <tbody id="listadoLocal">

                        </tbody>
                    </table> 
                  </div> 
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">

        <!--
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            -->
        </div>
    </div>
    
    
    <?php include("includes/footer.php"); ?>
    

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

</script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHhrWZLpRB2OO1JJEU3Ls9FpfZzbXaQ-A&callback=initMap"></script>

</body>

</html>
