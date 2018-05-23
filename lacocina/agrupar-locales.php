<?php 
error_reporting(E_ERROR);

session_start();
$tipoUsuario = $_SESSION['tipoUsuario'];

if (!$_SESSION) {
  header('Location: index.php');
} else {
if ($tipoUsuario == 'superAdmin') {
   
} else {
   header('Location: index.php');
}
}


include("includes/head.php"); ?>

<body id="page-top" class="index">


<?php 
error_reporting(E_ERROR);
include("includes/nav.php"); ?>


    <div class="container-fluid" style="padding: 1%; background: #fff; margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                </div>
                <div class="col-md-6" style="text-align: right;">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button class="botonagregarnuevo btn btn-default" type="button" onClick="cargarFormCrear()"><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVO</button>
                      <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="Volver()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
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
          
          <input type="text" id="idPromocion" style="display:none"/> 

          <!-- Formulario de promociones -->
          <div id="formAgrupador" >

    <div class="container" style="padding-top: 2%; padding-bottom: 1%;">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <!-- Table -->

                  
                    <!-- Table -->
                    <div class="row"  style="margin-bottom: 20px">
                       <div class="col-md-6">
                           <h5 class="titulosalta"> Nombre</h5>
                        <div class="input-group input-group-sm">
                            <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                            <input id="nombre" name="nombre" type="text" class="form-control" placeholder="Nombre" aria-describedby="sizing-addon3">
                        </div>
                    </div>
                      <div class="col-md-6">
                           <h5 class="titulosalta"> Url</h5>
                        <div class="input-group input-group-sm">
                            <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                            <input id="url" name="nombre" type="text" class="form-control" placeholder="Url" aria-describedby="sizing-addon3">
                        </div>
                    </div>
                       </div>
                       
                    <div id="cabeceraTablaNegocios">

                        
                        <h5 class="titulosalta"> Negocios</h5>
                        
                        <table class="table">
                            <thead class="">
                                <tr>
                                    <th>Seleccionar</th>
                                    <th>Listad</th>
                                    <th style="text-align: center;">Sucursal</th>

                                </tr>
                            </thead>
                            <tbody id="listadoLocales">
                                <tr>
                                    <td>
                                        <div class="checkbox"><label><input type="checkbox" id="localCheckTodos" value="true" onclick="seleccionarTodos()"></label></div>
                                    </td>
                                    <td>Todos</td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="checkbox"><label><input type="checkbox" id="localCheck" name="localCheck" value="5a2166c8e5a40efb39098774"></label></div>
                                    </td>
                                    <td>Abrasado</td>
                                    <td class="text-center">Los Toneles</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="checkbox"><label><input type="checkbox" id="localCheck" name="localCheck" value="5ad89cfe5d4c41d819ca5c25"></label></div>
                                    </td>
                                    <td>Almacén de Uco</td>
                                    <td class="text-center">Almacén de Uco</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>

          </div>    

    <!-- Tabla Promociones -->
            <div id="tablaGrupos">
              <div class="panel-heading tituloseccion" >LOCALES AGRUPADOS</div>
              <br>
              <br>
              <table class="table">
                <thead class="titulotabla">
                  <tr> 
                      <th>#</th>
                      <th style="text-align: center;">Nombre</th>
                      <th style="text-align: center;">Parámetro</th>
                      <th style="text-align: center;">Valor</th>
                      <th style="text-align: center;">Activo</th>
                      <th style="text-align: center;">Acción</th>
                  </tr>
                </thead>
                <tbody id="listadoGrupos">

                </tbody>
              </table>
            </div>

            <div class="input-group">
               <span class="input-group-btn">
                <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="Volver()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
              </span>
            </div>

            </div>
          </div>
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

    <!-- Theme JavaScript -->
    <script src="../js/agency.min.js"></script>

    <!-- Funciones de Promocion JavaScript -->
    <script src="js/controladores/agruparLocales.controlador.js"></script>

    <script src="js/dropzone.js"></script>

    <link rel="stylesheet" href="css/dropzone.css"> 

    <script type="text/javascript">
    
    </script>

<!-- Include Required Prerequisites -->
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>

 
<!-- Include Date Range Picker -->
<script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />

<script type="text/javascript">
$(function() {
 $('input[name="daterange"]').daterangepicker(
  {
    locale: {
      format: 'DD/MM/YYYY'
    }
  }
    );
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


<!-- End Slider Range -->

</body>

</html>