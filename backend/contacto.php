<?php
   $idLocal = $_GET['idLocal'];
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


            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 2%; padding-bottom: 1%;">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">

        <h2 class="tituloseccion">Contacto Administrativo</h2>

            <form action="" id="formularioAgregar">

              <input type="text" name="idContacto" id="idContacto" class="hidden">
              <input type="text" name="idLocal" id="idLocal" value="<?php echo $idLocal; ?>">

          <h5 class="titulosalta"> Nombre</h5>
            
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-user" aria-hidden="true"></i></span>
                <input id="nombreContacto" name="nombreContacto" type="text" class="form-control" placeholder="Nombre del Contacto" aria-describedby="sizing-addon3">
              </div></p>

          <h5 class="titulosalta"> Mail</h5>    
            
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                <input id="mailContacto" name="mailContacto" type="text" class="form-control" placeholder="Mail del Contacto" aria-describedby="sizing-addon3">
              </div></p>

          <h5 class="titulosalta"> Teléfono fijo</h5> 

             <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                <input id="telefonoContacto" name="telefonoContacto" type="text" class="form-control" placeholder="Numero de telefono del Contacto" aria-describedby="sizing-addon3">
              </div></p>

          <h5 class="titulosalta"> Celular</h5>     

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                <input id="celContacto" name="celContacto" type="text" class="form-control" placeholder="Número de celular del Contacto" aria-describedby="sizing-addon3">
              </div></p> 

              <div class="input-group">
                 <span class="input-group-btn">
                  <button class="btn btn-default" type="button" style="padding: 17px;" onClick="send()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar y Continuar</button>
                </span>
              </div>
            </form>

                  <!-- Table -->
                  <div class="panel-heading tituloseccion" style="display: none">Descuentos</div>
                   <!-- <table class="table">
                        <thead class="titulotabla">
                            <tr> 
                                <th >#</th>
                                    <th >Nombre</th>
                                    <th >Mail</th>
                                    <th style="text-align: center;">Acción</th>
                                </tr>
                        </thead>
                        <tbody id="listadoContactos">

                        </tbody>
                    </table> -->
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <nav aria-label="Page navigation">
         <!--     <ul class="pagination">
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
              </ul> -->
            </nav>
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

    <!-- Funciones de Contacto JavaScript -->
    <script src="js/controladores/contacto.controlador.js"></script>

    <!-- Funciones de Actualizar Local JavaScript -->
    <script src="js/controladores/actualizarLocal.controlador.js"></script>

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
