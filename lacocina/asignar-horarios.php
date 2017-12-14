<?php 
error_reporting(E_ERROR);
session_start();

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
error_reporting(E_ERROR);
$idLocal = $_GET['idLocal'];
?>

<?php 

error_reporting(E_ERROR);include("includes/head.php"); ?>

<body id="page-top" class="index">


  <?php 
  error_reporting(E_ERROR);
  include("includes/nav.php"); ?>

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

          <h2 class="tituloseccion">Asignar Horarios de Atención</h2>
          <input type="text" name="idHorario" id="idHorario" class="hidden">
          <input type="text" name="idLocalCreado" id="idLocalCreado" value="<?php echo $idLocal; ?>" class="hidden">

                    <!-- NUEVO FORMATO -->

          <!-- <h5 class="titulosalta"> Abierto</h5> -->

          <div class="cuadrohorarios">
            <div class="row">
              <div class="col-md-6 columnahorarios">
                <strong class="titulohorarioatencion"><i class="fa fa-clock-o" aria-hidden="true"></i> Turno 1</strong>
                <div class="row">
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Inicio:</label>
                      <select class="form-control" id="sel1">
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>19:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>

                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Fin:</label>
                      <select class="form-control" id="sel1">
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>19:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>

                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                </div>
              </div>

              <div class="col-md-6 columnahorarios">
                <strong class="titulohorarioatencion"><i class="fa fa-clock-o" aria-hidden="true"></i> Turno 2</strong>
                <div class="row">
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Inicio:</label>
                      <select class="form-control" id="sel1">
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>19:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>

                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Fin:</label>
                      <select class="form-control" id="sel1">
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>19:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>

                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                </div>
              </div>

            </div>

            <span class="titulohorarioatencion"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Días en los que aplica:</span>

            <ul class="selecdiashorario">
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="">Todos</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="">Lunes</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="">Martes</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="">Miércoles</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="">Jueves</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="">Viernes</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="">Sábado</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="">Domingo</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="">Feriados</label>
                </div>
              </li>
            </ul>
          </div>
          <div class="agregarquitar">
            <button class="botonagregarhorario"><i class="fa fa-plus" aria-hidden="true"></i> Agregar a lista</button> 
            <!-- <button class="botonremoverhorario"><i class="fa fa-times" aria-hidden="true"></i> Remover</button> -->
          </div>

          <h5 class="titulosalta">Lista de horarios</h5>

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
                  <tr>
                    <td>
                      <span class="diassemanaresumen">Lunes</span>
                    </td>
                    <td>
                      11:30 - 15:30
                    </td>
                    <td>
                      19:00 - 23:00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="diassemanaresumen">Martes</span>
                    </td>
                    <td>
                      11:30 - 15:30
                    </td>
                    <td>
                      19:00 - 23:00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="diassemanaresumen">Miércoles</span>
                    </td>
                    <td>
                      11:30 - 15:30
                    </td>
                    <td>
                      19:00 - 23:00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="diassemanaresumen">Jueves</span>
                    </td>
                    <td>
                      11:30 - 15:30
                    </td>
                    <td>
                      19:00 - 23:00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="diassemanaresumen">Viernes</span>
                    </td>
                    <td>
                      11:30 - 15:30
                    </td>
                    <td>
                      19:00 - 23:00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="diassemanaresumen">Sábado</span>
                    </td>
                    <td>
                      11:30 - 15:30
                    </td>
                    <td>
                      19:00 - 23:00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="diassemanaresumen">Domingo</span>
                    </td>
                    <td>
                      11:30 - 15:30
                    </td>
                    <td>
                      19:00 - 23:00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="diassemanaresumen">Feriados</span>
                    </td>
                    <td>
                      11:30 - 15:30
                    </td>
                    <td>
                      19:00 - 23:00
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>

              <div class="input-group">
                <span class="input-group-btn">
                 <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                 <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                </span> 
              </div>
          </div>  

          <!-- FIN NUEVO FORMATO -->

          <form action="" id="formularioAgregar">


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

  $(function() {
    var accion = 'crear';
    iniciar(accion);
  });

  </script>

</body>

</html>
