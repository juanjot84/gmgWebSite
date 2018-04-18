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
$accion = $_GET['acc'];
?>

<?php
error_reporting(E_ERROR);
include("includes/head.php"); ?>

<!--  jQuery UI Theme CSS -->
<link href="css/jquery-ui.min.css" rel="stylesheet">

<!-- MultiDatesPicker for jQuery UI Theme CSS -->
<link href="css/jquery-ui.multidatespicker.css" rel="stylesheet">

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

<center><div id="loading"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span></div></center>

  <div class="container-fluid" style="padding: 1%; background: #fff; margin-top: -21px;">
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

        

        <div class="panel panel-default datos-cubiertos hidden">

          <div class="row">
            <div class="col-md-6">
              <h2 class="tituloseccion">Configurar reservas</h2>
              <h4 class="titulohorarioatencionbajada">Asignar cubiertos disponibles para reservar</h4>
            </div>

            <div class="col-md-3">
              <ul class="activaronoreservas">
                <li>NO </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" id="aceptaReservaCheck" name="aceptaReservaCheck" value="true" onClick="actualizarAceptaReserva()">
                    <span class="slider round"></span>
                  </label>
                </li>
                <li> SI</li>
              </ul>
              

            </div>
            
            <div class="col-md-3 hidden-sm hidden-xs">
              <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px; float: right;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
            </div>
          </div>
          
          <input type="text" name="idCubierto" id="idCubierto" class="hidden">
          <input type="text" name="idLocalCreado" id="idLocalCreado" value="<?php  error_reporting(E_ERROR); echo $idLocal; ?>" class="hidden">
          <input type="text" name="accion" id="accion" value="<?php  error_reporting(E_ERROR); echo $accion; ?>" class="hidden">

          <!-- NUEVO FORMATO -->

          <!-- <h5 class="titulosalta"> Abierto</h5> -->

          <div class="row cuadroantipacion text-center">
            <div class="col-md-6">
               
              <label class="titulohorarioatencion">Anticipación para <strong class="naranja">hacer</strong> una reserva.</label>
              <span class="valorrecomendado">Valor recomendado: 1</span>
              <div class="slidecontainer">
                <p class="horasanticipacion">Horas: <span id="demo"></span></p>
                <input type="range" min="0" max="48" value="0" class="slider1" id="myRange" onchange="actualizarMargen('myRange')">
              </div>

            </div>
            <div class="col-md-6">


              <label class="titulohorarioatencion">Anticipación para <strong class="naranja">cancelar</strong> una reserva.</label>
              <span class="valorrecomendado">Valor recomendado: 2</span>
              <div class="slidecontainer">
                <p class="horasanticipacion">Horas: <span id="demo2"></span></p>
                <input type="range" min="0" max="48" value="1" class="slider1" id="myRange2" onchange="actualizarMargen('myRange2')">
              </div>

            </div>
          </div>

          <div class="cuadrohorarios">


            <div class="row">

              <div class="col-md-12">
                <div>
                  <span class="tituloreservaatencion">HORARIOS DE RESERVAS</span>
                </div>
              </div>

              <div class="col-md-offset-1 col-md-4 columnahorarios">

                <!-- <div>
                  <span class="tituloreservaatencion">TURNO 1</span>
                </div> -->

                <strong class="titulohorarioatencion"><i class="fa fa-clock-o" aria-hidden="true"></i> Turno 1</strong>
                <div class="row">
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Inicio:</label>
                      <select class="form-control select-horario" id="horaInicioManana">
                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Fin:</label>
                      <select class="form-control select-horario" id="horaFinManana">
                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                </div>

                <strong class="titulohorarioatencion"><i class="fa fa-cutlery" aria-hidden="true"></i> Cubiertos disponibles</strong>
                <div class="row">
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Cantidad de Cubiertos:</label>
                      <input id="cantCubiertosManana" name="" type="number" min="0"  class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3">
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Duración en minutos:</label>
                      <input id="duracionReservaManana" name="" type="number" min="0" step="30" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3">
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                   <span id="errorDuracionManana" style="color: #f8981d;"> La Duración de Reserva no puede ser menor a 30 minutos</span>
                </div>
              </div>

              <div class="col-md-offset-2 col-md-4 columnahorarios">

                <!-- <div>
                  <span class="tituloreservaatencion">TURNO 2</span>
                </div> -->

                <strong class="titulohorarioatencion"><i class="fa fa-clock-o" aria-hidden="true"></i> Turno 2</strong>
                <div class="row">
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Inicio:</label>
                      <select class="form-control select-horario" id="horaInicioTarde">
                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Fin:</label>
                      <select class="form-control select-horario" id="horaFinTarde">
                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                </div>

                <strong class="titulohorarioatencion"><i class="fa fa-cutlery" aria-hidden="true"></i> Cubiertos disponibles</strong>
                <div class="row">
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Cantidad de Cubiertos:</label>
                      <input id="cantCubiertosTarde" name="" type="number" min="0" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3">
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Duración en minutos:</label>
                      <input id="duracionReservaTarde" name="" type="number" min="0" step="30" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3"">
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <span id="errorDuracionTarde" style="color: #f8981d;"> La Duración de Reserva no puede ser menor a 30 minutos</span>
                </div>
              </div>
            </div>

            <span class="titulohorarioatencion"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Días en los que aplica:</span>

            <ul class="selecdiashorario">
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Todos" id="todos">Todos</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Lunes">Lunes</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Martes">Martes</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Miercoles">Miércoles</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Jueves">Jueves</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Viernes">Viernes</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Sabados">Sábado</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Domingos">Domingo</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Feriados">Feriados</label>
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
                   <tr id='errores'>
                    <td>

                    </td>
                    <td style="    color: #f8981d;">
                      <span id="errorDuracionListadoManana" style="color: #f8981d;"> La Duración de Reserva no puede ser menor a 30 minutos</span>
                    </td>
                    <td style="    color: #f8981d;">
                      <span id="errorDuracionListadoTarde" style="color: #f8981d;"> La Duración de Reserva no puede ser menor a 30 minutos</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 class="titulosalta">Dias que no se recibiran reservas</h5>
            <div id="selectorDiasBloqueados"></div>

            <div class="input-group">
              <span class="input-group-btn">
                <button id="botonVolverFondo" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="sendHorarioAtencion()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
              </span>
            </div>

          </div>

          <!-- FIN NUEVO FORMATO -->

          <form action="" id="formularioAgregar">
          </form>

          <!-- Table -->
          <div class="panel-heading tituloseccion" style="display: none">Cubiertos por día</div>

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

  <!-- Funciones de Cubiertos JavaScript -->
  <script src="js/controladores/cubiertosDias.controlador.js"></script>
  <!-- Funciones de Cubiertos JavaScript -->
  <script src="js/controladores/horarioReserva.controlador.js"></script>

  <!-- Funciones de Actualizar Local JavaScript -->
  <script src="js/controladores/actualizarLocal.controlador.js"></script>

  <!-- Theme JavaScript -->
  <script src="../js/agency.min.js"></script>

  <!-- jQuery UI -->
  <script src="js/jquery-ui.min.js"></script>


  <!-- MultiDatesPicker for jQuery UI -->
  <script src="js/jquery-ui.multidatespicker.js"></script>
  
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

  <!-- Slider Range -->

  <script>
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    }
  </script>


  <script>
    var slider2 = document.getElementById("myRange2");
    var output2 = document.getElementById("demo2");
    output2.innerHTML = slider2.value;

    slider2.oninput = function() {
      output2.innerHTML = this.value;
    }
  </script>

  <!-- End Slider Range -->

  <script>
   $('#selectorDiasBloqueados').multiDatesPicker({
       prevText: 'anterior',
       nextText: 'siguiente;',
       monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
               'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
       monthNamesShort: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                                      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
       dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
       dayNamesShort: ['Do', 'Lu', 'Mar', 'Mi', 'Ju', 'Vi', 'Sa'],
       dayNamesMin: ['Do', 'Lu', 'Mar', 'Mi', 'Ju', 'Vi', 'Sa'],
       weekHeader: 'Semana',
       dateFormat: 'dd/mm/yy',
       firstDay: 1,
       changeMonth: true,
       changeYear: true,
       yearRange: "-0:+1",
       isRTL: false,
       showMonthAfterYear: false,
       minDate: 0
    });
  </script>

</body>

</html>
