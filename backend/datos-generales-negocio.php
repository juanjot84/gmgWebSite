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

                <input type="text" name="idNegocioEditar" id="idNegocioEditar" value="<?php echo $idNegocio; ?>" class="hidden">
                 <!-- Table -->

          <!-- Formulario de alta negocio -->
            <form action="" id="formularioEditar">

            <h2 class="tituloseccion">Editar datos Generales del Negocio</h2>
 
              <input type="text" name="idNegocio" id="idNegocio" class="hidden">

             <h5 class="titulosalta"> Nombre del Negocio</h5>
 
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="nombreNegocio" name="nombreNegocio" type="text" class="form-control" placeholder="Nombre del Negocio" aria-describedby="sizing-addon3" onfocus="limpiar('nombreNegocio')" required>
              </div></p>

              <h5 class="titulosalta"> Tipo de Negocio</h5>
 
               <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="tipoNegocio" name="tipoNegocio" class="form-control" onfocus="limpiar('tipoNegocio')" required></select>
              </div></p>

              <h5 class="titulosalta"> Negocio Destacado</h5>

              <p>
                <label class="radio-inline"><input type="radio" name="destacadoNegocio" id="destacadoNegocio-true" value="true">Si</label>
                <label class="radio-inline"><input type="radio" name="destacadoNegocio" id="destacadoNegocio-false" value="false" checked="checked">No</label>
              </p>

              <h5 class="titulosalta"> Datos de contacto de redes sociales</h5>

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

              <h5 class="titulosalta"> Url de imagen principal del negocio</h5>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="urlIconoNegocio" name="urlIconoNegocio" type="text" class="form-control" placeholder="Url del Icono del Negocio" aria-describedby="sizing-addon3" onfocus="limpiar('urlIconoNegocio')" required>
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
                 <button id="botonAtras" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelNegocio()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar('editar')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                </span>
              </div>
            </form>           
                  <!-- Table -->
                  <div id="cabeceraTablaNegocios">
                   

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

    <!-- Funciones de Negocio JavaScript -->
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

    $(function() {
      var idNegocio = $("#idNegocioEditar").val()
      cargarFormEditar(idNegocio);
    });

</script>

</body>

</html>
