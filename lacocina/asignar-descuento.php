<?php session_start();

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

        <h2 class="tituloseccion">Asignar Descuentos</h2>

            <form action="" id="formularioAgregar">
              
              <input type="text" name="idLocalDescuento" id="idLocalDescuento" class="hidden">
              <input type="text" name="idLocalCreado" id="idLocalCreado" value="<?php echo $idLocal; ?>" class="hidden">

              <h5 class="titulosalta"> Descuento</h5>

                           <p>
                            <div class="row">
                                <div class="col-md-2">
                                    Lunes
                                </div>
                                <div class="col-md-10">
                                   <select id="descuentoLunes" name="descuentoLunes" class="form-control"></select>                                   
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Martes
                                </div>
                                <div class="col-md-10">
                                   <select id="descuentoMartes" name="descuentoMartes" class="form-control"></select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Miércoles
                                </div>
                                <div class="col-md-10">
                                    <select id="descuentoMiercoles" name="descuentoMiercoles" class="form-control"></select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Jueves
                                </div>
                                <div class="col-md-10">
                                    <select id="descuentoJueves" name="descuentoJueves" class="form-control"></select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Viernes
                                </div>
                                <div class="col-md-10">
                                    <select id="descuentoViernes" name="descuentoViernes" class="form-control"></select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Sábados
                                </div>
                                <div class="col-md-10">
                                    <select id="descuentoSabados" name="descuentoSabados" class="form-control"></select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Domingos
                                </div>
                                <div class="col-md-10">
                                    <select id="descuentoDomingos" name="descuentoDomingos" class="form-control"></select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Feriados
                                </div>
                                <div class="col-md-10">
                                    <select id="descuentoFeriados" name="descuentoFeriados" class="form-control"></select>
                                </div>
                            </div>
                        </p> 

              <div class="input-group">
                 <span class="input-group-btn">
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="SendLocalDescuento('crear')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar y Continuar</button>
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

    <!-- Funciones de Actualizar Local JavaScript -->
    <script src="js/controladores/localDescuento.controlador.js"></script>

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