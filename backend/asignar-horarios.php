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

        <h2 class="tituloseccion">Asignar Horarios de Atención</h2>

            <form action="" id="formularioAgregar">
              
              <input type="text" name="idHorario" id="idHorario" class="hidden">
              <input type="text" name="idLocalCreado" id="idLocalCreado" value="<?php echo $idLocal; ?>" class="hidden">

                    <h5 class="titulosalta"> Abierto</h5>

                    <p>
                        <strong>Lunes </strong>
                        <div class="row">    
                            <div class="col-md-6">
                               <input id="HdesdeLunes" name="HdesdeLunes" type="text" class="form-control" placeholder="Hora desde HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaLunes','HdesdeLunes')">
                            </div>
                            <div class="col-md-6">
                               <input id="HhastaLunes" name="HhastaLunes" type="text" class="form-control" placeholder="Hora hasta HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaLunes','HhastaLunes')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Martes </strong>
                        <div class="row">    
                            <div class="col-md-6">
                               <input id="HdesdeMartes" name="HdesdeMartes" type="text" class="form-control" placeholder="Hora desde HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaMartes','HdesdeMartes')">
                            </div>
                            <div class="col-md-6">
                               <input id="HhastaMartes" name="HhastaMartes" type="text" class="form-control" placeholder="Hora hasta HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaMartes','HhastaMartes')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Miércoles </strong>
                        <div class="row">    
                            <div class="col-md-6">
                               <input id="HdesdeMiercoles" name="HdesdeMiercoles" type="text" class="form-control" placeholder="Hora desde HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaMiercoles','HdesdeMiercoles')">
                            </div>
                            <div class="col-md-6">
                               <input id="HhastaMiercoles" name="HhastaMiercoles" type="text" class="form-control" placeholder="Hora hasta HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaMiercoles','HhastaMiercoles')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Jueves </strong>
                        <div class="row">    
                            <div class="col-md-6">
                               <input id="HdesdeJueves" name="HdesdeJueves" type="text" class="form-control" placeholder="Hora desde HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaJueves','HdesdeJueves')">
                            </div>
                            <div class="col-md-6">
                               <input id="HhastaJueves" name="HhastaJueves" type="text" class="form-control" placeholder="Hora hasta HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaJueves','HhastaJueves')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Viernes </strong>
                        <div class="row">    
                            <div class="col-md-6">
                               <input id="HdesdeViernes" name="HdesdeViernes" type="text" class="form-control" placeholder="Hora desde HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaViernes','HdesdeViernes')">
                            </div>
                            <div class="col-md-6">
                               <input id="HhastaViernes" name="HhastaViernes" type="text" class="form-control" placeholder="Hora hasta HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaViernes','HhastaViernes')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Sábados </strong>
                        <div class="row">    
                            <div class="col-md-6">
                               <input id="HdesdeSabados" name="HdesdeSabados" type="text" class="form-control" placeholder="Hora desde HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaSabados','HdesdeSabados')">
                            </div>
                            <div class="col-md-6">
                               <input id="HhastaSabados" name="HhastaSabados" type="text" class="form-control" placeholder="Hora hasta HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaSabados','HhastaSabados')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Domingos</strong>
                        <div class="row">    
                            <div class="col-md-6">
                               <input id="HdesdeDomingos" name="HdesdeDomingos" type="text" class="form-control" placeholder="Hora desde HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaDomingos','HdesdeDomingos')">
                            </div>
                            <div class="col-md-6">
                               <input id="HhastaDomingos" name="HhastaDomingos" type="text" class="form-control" placeholder="Hora hasta HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaDomingos','HhastaDomingos')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Feriados </strong>
                        <div class="row">    
                            <div class="col-md-6">
                               <input id="HdesdeFeriados" name="HdesdeFeriados" type="text" class="form-control" placeholder="Hora desde HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaFeriados','HdesdeFeriados')">
                            </div>
                            <div class="col-md-6">
                               <input id="HhastaFeriados" name="HhastaFeriados" type="text" class="form-control" placeholder="Hora hasta HH:MM" aria-describedby="sizing-addon3" onfocus="limpiar('HhastaFeriados','HhastaFeriados')">
                            </div>
                        </div>
                    </p>

              <div class="input-group">
                 <span class="input-group-btn">
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar('crear')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar y Continuar</button>
                </span>
              </div>
            </form>

                  <!-- Table -->
                  <div class="panel-heading tituloseccion" style="display: none">Horarios de Atencion</div>

                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <nav aria-label="Page navigation">

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

    <!-- Funciones de Horario Atencion JavaScript -->
    <script src="js/controladores/horarioAtencion.controlador.js"></script>

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