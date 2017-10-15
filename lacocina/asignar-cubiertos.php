<?php session_start();

$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];


if (!$_SESSION) {
       header('Location: login-un.php');
} else {
    if ($tipoUsuario == 'superAdmin') {
        
    } else {
        header('Location: login-un.php');
    }
}

?>
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
                      <span class="input-group-btn">
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

        <h2 class="tituloseccion">Asignar Cubiertos por día</h2>

            <form action="" id="formularioAgregar">
              
              <input type="text" name="idCubierto" id="idCubierto" class="hidden">
              <input type="text" name="idLocalCreado" id="idLocalCreado" value="<?php echo $idLocal; ?>" class="hidden">

                    <h5 class="titulosalta"> Abierto</h5>

                    <p>
                        <strong>Lunes </strong>
                        <div class="row">    
                            <div class="col-md-6">
                            <label for="comment">Cantidad de Cubiertos</label>
                               <input id="CubiertosLunes" name="CubiertosLunes" type="number" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionLunes','CubiertosLunes')">
                            </div>
                            <div class="col-md-6">
                            <label for="comment">Duración de la Reserva</label>
                               <input id="DuracionLunes" name="DuracionLunes" type="number" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionLunes','DuracionLunes')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Martes </strong>
                        <div class="row">    
                            <div class="col-md-6">
                            <label for="comment">Cantidad de Cubiertos</label>
                               <input id="CubiertosMartes" name="CubiertosMartes" type="number" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionMartes','CubiertosMartes')">
                            </div>
                            <div class="col-md-6">
                            <label for="comment">Duración de la Reserva</label>
                               <input id="DuracionMartes" name="DuracionMartes" type="number" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionMartes','DuracionMartes')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Miércoles </strong>
                        <div class="row">    
                            <div class="col-md-6">
                            <label for="comment">Cantidad de Cubiertos</label>
                               <input id="CubiertosMiercoles" name="CubiertosMiercoles" type="number" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionMiercoles','CubiertosMiercoles')">
                            </div>
                            <div class="col-md-6">
                            <label for="comment">Duración de la Reserva</label>
                               <input id="DuracionMiercoles" name="DuracionMiercoles" type="number" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionMiercoles','DuracionMiercoles')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Jueves </strong>
                        <div class="row">    
                            <div class="col-md-6">
                            <label for="comment">Cantidad de Cubiertos</label>
                               <input id="CubiertosJueves" name="CubiertosJueves" type="number" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionJueves','CubiertosJueves')">
                            </div>
                            <div class="col-md-6">
                            <label for="comment">Duración de la Reserva</label>
                               <input id="DuracionJueves" name="DuracionJueves" type="number" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionJueves','DuracionJueves')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Viernes </strong>
                        <div class="row">    
                            <div class="col-md-6">
                            <label for="comment">Cantidad de Cubiertos</label>
                               <input id="CubiertosViernes" name="CubiertosViernes" type="number" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionViernes','CubiertosViernes')">
                            </div>
                            <div class="col-md-6">
                            <label for="comment">Duración de la Reserva</label>
                               <input id="DuracionViernes" name="DuracionViernes" type="number" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionViernes','DuracionViernes')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Sábados </strong>
                        <div class="row">    
                            <div class="col-md-6">
                            <label for="comment">Cantidad de Cubiertos</label>
                               <input id="CubiertosSabados" name="CubiertosSabados" type="number" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionSabados','CubiertosSabados')">
                            </div>
                            <div class="col-md-6">
                            <label for="comment">Duración de la Reserva</label>
                               <input id="DuracionSabados" name="DuracionSabados" type="number" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionSabados','DuracionSabados')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Domingos</strong>
                        <div class="row">    
                            <div class="col-md-6">
                            <label for="comment">Cantidad de Cubiertos</label>
                               <input id="CubiertosDomingos" name="CubiertosDomingos" type="number" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionDomingos','CubiertosDomingos')">
                            </div>
                            <div class="col-md-6">
                            <label for="comment">Duración de la Reserva</label>
                               <input id="DuracionDomingos" name="DuracionDomingos" type="number" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionDomingos','DuracionDomingos')">
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Feriados </strong>
                        <div class="row">    
                            <div class="col-md-6">
                            <label for="comment">Cantidad de Cubiertos</label>
                               <input id="CubiertosFeriados" name="CubiertosFeriados" type="number" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionFeriados','CubiertosFeriados')">
                            </div>
                            <div class="col-md-6">
                            <label for="comment">Duración de la Reserva</label>
                               <input id="DuracionFeriados" name="DuracionFeriados" type="number" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3" onfocus="limpiar('DuracionFeriados','DuracionFeriados')">
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
                  <div class="panel-heading tituloseccion" style="display: none">Cubiertos por día</div>
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

    <!-- Funciones de Cubiertos JavaScript -->
    <script src="js/controladores/cubiertosDias.controlador.js"></script>

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