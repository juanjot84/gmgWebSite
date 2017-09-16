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

          <!-- Formulario de alta negocio -->
            <form action="" id="formularioAgregar" style="display:none">

            <h2 class="tituloseccion">Alta Negocio</h2>
 
              <input type="text" name="idNegocio" id="idNegocio" class="hidden">

             <h5 class="titulosalta"> Nombre</h5>
 
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="nombreNegocio" name="nombreNegocio" type="text" class="form-control" placeholder="Nombre del Negocio" aria-describedby="sizing-addon3">
              </div></p>

              <h5 class="titulosalta"> Tipo de Negocio</h5>
 
               <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="tipoNegocio" name="tipoNegocio" class="form-control"></select>
              </div></p>

              <h5 class="titulosalta"> Negocio Destacado</h5>

              <p>
                <label class="radio-inline"><input type="radio" name="destacadoNegocio" id="destacadoNegocio-true" value="true">Si</label>
                <label class="radio-inline"><input type="radio" name="destacadoNegocio" id="destacadoNegocio-false" value="false">No</label>
              </p>

              <h5 class="titulosalta"> Datos de contacto</h5>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                <input id="facebookNegocio" name="facebookNegocio" type="text" class="form-control" placeholder="Facebook del Negocio" aria-describedby="sizing-addon3">
              </div></p>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-instagram" aria-hidden="true"></i></span>
                <input id="instagramNegocio" name="instagramNegocio" type="text" class="form-control" placeholder="Instagram del Negocio" aria-describedby="sizing-addon3">
              </div></p>

             <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                <input id="twitterNegocio" name="twitterNegocio" type="text" class="form-control" placeholder="Twitter del Negocio" aria-describedby="sizing-addon3">
              </div></p>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-tripadvisor" aria-hidden="true"></i></span>
                <input id="tripadvisorNegocio" name="tripadvisorNegocio" type="text" class="form-control" placeholder="Tripadvisor del Negocio" aria-describedby="sizing-addon3">
              </div></p>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="urlIconoNegocio" name="urlIconoNegocio" type="text" class="form-control" placeholder="Url del Icono del Negocio" aria-describedby="sizing-addon3">
              </div></p>
 
               <h5 class="titulosalta"> Descripción</h5>

                        <p>Texto con un máxio de 500 caracteres incluyendo espacios</p>

                            <div class="form-group">
                              <label for="comment">Descripción:</label>
                              <textarea class="form-control" rows="5" id="descripcionNegocio" name="descripcionNegocio"></textarea>
                            </div>

              <h5 class="titulosalta"> Palabras de búsqueda</h5>

                    <p>Cargar palabras claves, separadas por coma (,)</p>

                            <div class="form-group">
                              <label for="comment">Tags:</label>
                              <textarea class="form-control" rows="5" id="tagsNegocio" name="tagsNegocio"></textarea>
                            </div>

              <div class="input-group">
                 <span class="input-group-btn">
                  <button class="btn btn-default" type="button" style="padding: 17px;" onClick="send()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                </span>
              </div>

              <div class="input-group">
                 <span class="input-group-btn">
                  <button class="btn btn-default" type="button" style="padding: 17px;" onClick="mostrarAltaLocal()"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Siguiente</button>
                </span>
              </div>
            </form>
            
            <!-- Formulario de alta de local -->

            <form action="" id="formularioLocal" style="display:none">
              <h2 class="tituloseccion">Alta De Local</h2>
                <input type="text" name="idLocal" id="idLocal" class="hidden">

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
                        Marcar en Google Maps <br>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13401.403859122534!2d-68.8526042!3d-32.8888878!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1504296277826" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
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

              <h5 class="titulosalta"> Descuento</h5>

              


              <div class="input-group">
                 <span class="input-group-btn">
                  <button class="btn btn-default" type="button" style="padding: 17px;" onClick="volverEditarNegocio()"><i class="fa fa-hand-o-left" aria-hidden="true"></i> Atrás</button>
                </span>
              </div>

            </form>

                  <!-- Table -->
                  <div id="cabeceraTablaNegocios">
                   <div class="panel-heading tituloseccion" >Negocios</div>
                    <table class="table">
                        <thead class="titulotabla">
                            <tr> 
                                <th >#</th>
                                    <th >Nombre</th>
                                    <th >Descripción</th>
                                    <th style="text-align: center;">Acción</th>
                                </tr>
                        </thead>
                        <tbody id="listadoNegocios">

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

    <!-- Funcione de Negocio JavaScript -->
    <script src="js/controladores/negocio.controlador.js"></script>

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

</body>

</html>
