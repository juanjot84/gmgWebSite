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
          
          <input type="text" id="idGrupo" style="display:none"/> 

          <!-- Formulario de promociones -->
         
    <div id="formAgrupador" class="container" style="padding-top: 2%; padding-bottom: 1%; display:none">
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
                            <input id="nombreGrupo" name="nombreGrupo" onclick="quitarAlert('nombreGrupo')" type="text" class="form-control" aria-describedby="sizing-addon3">
                        </div>
                    </div>
                      <div class="col-md-6">
                           <h5 class="titulosalta"> Descripción</h5>
                        <div class="input-group input-group-sm">
                            <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                            <input id="descripcionGrupo" name="descripcionGrupo" type="text" class="form-control" aria-describedby="sizing-addon3">
                        </div>
                    </div>
                    </div>

                    <div class="row"  style="margin-bottom: 20px">
                       <div class="col-md-6">
                           <h5 class="titulosalta"> Parámetro</h5>
                        <div class="input-group input-group-sm">
                            <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                            <input id="parametro" name="parametro" onclick="quitarAlert('parametro')" type="text" class="form-control" aria-describedby="sizing-addon3">
                        </div>
                    </div>
                      <div class="col-md-6">
                           <h5 class="titulosalta"> Valor</h5>
                        <div class="input-group input-group-sm">
                            <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                            <input id="valor" name="valor" onclick="quitarAlert('valor')" type="text" class="form-control" aria-describedby="sizing-addon3">
                        </div>
                    </div>
                    </div>
                       
                    <div id="cabeceraTablaNegocios">

                        
                        <h5 class="titulosalta">Seleccionar Locales</h5>
              
              <!-- Table -->
              <div id=" " class="text-center">
                <table class="table">
                  <thead class="">
                    <tr> 
                      <th>Seleccionar</th>
                      <th>Negocio</th>
                      <th style="text-align: center;">Sucursal</th>
                      
                    </tr>
                  </thead>
                  <tbody id="listadoLocales">

                  </tbody>
                </table>
              </div>

                            <div class="input-group">
                 <span class="input-group-btn">
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validarDatosGrupo()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                  <button id="botoncancelar" class="btn btn-default" type="button" style="padding: 17px;" onClick="cancelar()"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                </span>
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

            </div>
          </div>
      </div>
    </div>

    <!-- Modal eliminar grupo -->

    <div class="modal fade" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                 <h3>¿Está seguro que quiere eliminar el Grupo?</h3>
               </div>
               <div class="modal-body">
                  <h5></h5>
               </div>
               <div class="modal-footer" id="botonesModal">
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

    <!-- Funciones de Grupos JavaScript -->
    <script src="js/controladores/agruparLocales.controlador.js"></script>

    <script src="js/dropzone.js"></script>

    <link rel="stylesheet" href="css/dropzone.css"> 

    <script type="text/javascript">
    
    </script>

</body>

</html>