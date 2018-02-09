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

        <h2 class="tituloseccion">Elegir Promoción</h2>

            <form action="" id="formularioAgregar">
              
              <input type="text" name="idLocalDescuento" id="idLocalDescuento" class="hidden">
              <input type="text" name="idLocalCreado" id="idLocalCreado" value="<?php  error_reporting(E_ERROR); echo $idLocal; ?>" class="hidden">

              <h5 class="titulosalta"> Agregar Promoción</h5>
              
               <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="" name="" class="form-control" onfocus="limpiar('')" required></select>
              </div></p>

              <h5 class="titulosalta"> Cantidad de cubiertos</h5>
              
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="nombreNegocio" name="nombreNegocio" type="text" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3" onfocus="limpiar('nombreNegocio')" required>
              </div></p>

              <h5 class="titulosalta"> Días y horarios</h5>

              <p>Las promociones responden a los días y horarios especificados en la configuración general de las Reservas. Para modificar esta información, haga click <a style="color: #f8981d;" href="#">aquí</a></p> <!-- Va configuración de Reservas del panel principal -->

              
              <div class="separadortransp"></div>

              <h6 class="titulosalta text-center">Lista de horarios de reservas</h6>

              <div class="cuadrohorariosresumen">
                <div class="table-responsive">
                  <table class="table text-center">
                    <thead>
                      <tr>
                        <th class="titulostablahorarios"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Días</th>
                        <th class="titulostablahorarios"><i class="fa fa-clock-o" aria-hidden="true"></i> Turno 1...</th>
                        <th class="titulostablahorarios"><i class="fa fa-clock-o" aria-hidden="true"></i> Turno 2...</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id='Lunes'>
                        <td>
                          <span class="diassemanaresumen"   >Lunes</span>
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                      </tr>
                      <tr id='Martes'>
                        <td>
                          <span class="diassemanaresumen">Martes</span>
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                      </tr>
                      <tr id='Miercoles'>
                        <td>
                          <span class="diassemanaresumen">Miércoles</span>
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                      </tr>
                      <tr id='Jueves'>
                        <td>
                          <span class="diassemanaresumen">Jueves</span>
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                      </tr>
                      <tr id='Viernes'>
                        <td>
                          <span class="diassemanaresumen">Viernes</span>
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                      </tr>
                      <tr id='Sabados'>
                        <td>
                          <span class="diassemanaresumen">Sábado</span>
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                      </tr>
                      <tr id='Domingos'>
                        <td>
                          <span class="diassemanaresumen">Domingo</span>
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                      </tr>
                      <tr id='Feriados'>
                        <td>
                          <span class="diassemanaresumen">Feriados</span>
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                        <td style="    color: #f8981d;">
                          Sin datos de reserva
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>



                <div class="cuadrocargamenupromo">

                    <h5 class="titulosalta"> Cargar menú</h5>

                    <div class="separadortransp"></div>

                    <h4 class="titulocargamenu"> Nombre del menú</h4>
                    
                    <p><div class="input-group input-group-sm">
                      <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                      <input id="nombreNegocio" name="nombreNegocio" type="text" class="form-control" placeholder="Nombre" aria-describedby="sizing-addon3" onfocus="limpiar('nombreNegocio')" required>
                    </div></p>

                    <div class="separadortransp"></div>

                    <h4 class="titulocargamenu"> Descripción</h4>

                    <!-- Hay que quitar limitación de 500 caracteres -->

                    <div class="form-group">
                      <textarea class="form-control" rows="5" id="" name="" onfocus="limpiar('')"></textarea>
                    </div>

                    <div class="separadortransp"></div>

                    <h4 class="titulocargamenu"> Precio</h4>
                    
                    <p><div class="input-group input-group-sm">
                      <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                      <input id="nombreNegocio" name="nombreNegocio" type="text" class="form-control" placeholder="Precio $" aria-describedby="sizing-addon3" onfocus="limpiar('nombreNegocio')" required>
                    </div></p>

                    <div class="separadortransp"></div>

                    <h4 class="titulocargamenu"> Foto de Menú</h4>

                    <!-- Colocar cargador de imagen para foto de menú -->

                    <!-- Colocar botón para agregar a listado de promociones elegidas -->

                </div>

                
                <table class="table">
                    <thead class="titulotabla">
                        <tr> 
                            <th >#</th>
                            <th >Promoción</th>
                            <th style="text-align: center;">Nombre de Menú</th>
                            <th style="text-align: center;">Acción</th>
                        </tr>
                    </thead>
                    <tbody id="">
                        <tr class="text-center">
                            <td>
                                1
                            </td>
                            <td>
                                Al Malbec
                            </td>
                            <td>
                                2 empanadadas + 2 copas de Malbec
                            </td>
                        </tr>

                        <tr class="text-center">
                            <td>
                                2
                            </td>
                            <td>
                                Otra promo
                            </td>
                            <td>
                                2 empanadadas + 2 copas de Malbec
                            </td>
                        </tr>

                    </tbody>
                </table>
            

               <div class="separadortransp"></div>


              <div class="input-group">
                 <span class="input-group-btn">
                 <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="SendLocalDescuento('editar')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                </span>
              </div>
            </form>

                  <!-- Table -->
                  <div class="panel-heading tituloseccion" style="display: none">Descuentos</div>

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

    $(function() {
        var accion = 'editar';
        iniciar(accion);
    });

</script>

</body>

</html>