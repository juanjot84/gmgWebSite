
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
                      <button class="botonagregarnuevo btn btn-default" type="button" onClick="cargarFormCrear()"><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVA</button>
                      <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
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
          <div id="formPromocion" style="display:none">

            <h2 class="tituloseccion">Alta de Promoción</h2>
 

             <h5 class="titulosalta"> Nombre</h5>
 
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="nombrePromocion" name="nombrePromocion" onclick="quitarAlert('nombrePromocion')" type="text" class="form-control" placeholder="Nombre de la promoción" aria-describedby="sizing-addon3">
              </div></p>

              <h5 class="titulosalta"> Comisión</h5>
              
              <div class="row">
                <div class="col-md-6">

                  <div class="radio">
                    <label class="titulospromocion radio-inline">
                      <input type="radio" id="radioComision" name="radioComision" value="porcentaje" checked="checked" onchange="controlarRadioSeleccionado()">Elegir el <strong class="naranja">porcentaje de comisión</strong>
                    </label>
                  </div>


                  <div class="slidecontainer2">
                    <p class="textocomisionpromo">Comisión: <span id="demo"></span>%</p>
                    <input type="range" min="1" max="20" value="1" class="slider1" id="myRange" onchange="actualizarMargen('myRange')">
                  </div>
                </div>

                <div class="col-md-6"></div>
              </div>

              <div class="row" style="margin-top: 40px; border-top: 1px solid #e2e2e2; padding-top: 20px;">

                <div class="col-md-6">

                  <div class="radio">
                    <label class="titulospromocion radio-inline">
                      <input type="radio" name="radioComision" id="radioComision" value="valorFijo" onchange="controlarRadioSeleccionado()">Elegir un <strong class="naranja">valor fijo por rango</strong>
                    </label>
                  </div>

                  <div class="row">

                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="">Desde:</label>
                        <input id="valorDesde" name="valorDesde" type="number" onclick="quitarAlert('valorDesde')" class="form-control" placeholder="1" min="1" aria-describedby="sizing-addon3">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="">Hasta:</label>
                        <input id="valorHasta" name="valorHasta" type="number" onclick="quitarAlert('valorHasta')" class="form-control" placeholder="300" min="1" aria-describedby="sizing-addon3">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="">$:</label>
                        <input id="valorFijo" name="valorFijo" type="number" onclick="quitarAlert('valorFijo')" class="form-control" placeholder="$"  min="1" aria-describedby="sizing-addon3">
                      </div>
                    </div>

                  </div>

                  <div class="agregarquitar">
                    <button class="botonagregarValor" id="btnAgregarValor" onclick="validarDatosLista()"><i class="fa fa-plus" aria-hidden="true"></i> Agregar a lista</button>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-6" id="tablaRangos" style="display:none">
                  <h5>Listado resumen de comisiones</h5>
                  <table class="table">
                    <thead class="titulotablacomisones">
                      <tr> 
                        <th style="text-align: center;">Comisión</th>
                        <th style="text-align: center;">Desde</th>
                        <th style="text-align: center;">Hasta</th>
                        <th style="text-align: center;">Valor</th>
                        <th style="text-align: center;">Acción</th>
                        
                      </tr>
                    </thead>
                    <tbody id="listaComision">

                    </tbody>
                  </table>
                </div>

              </div>


              <h5 class="titulosalta"> Impacta en reservas</h5>

                <ul class="activaronoreservas">
                  <li>NO </li>
                  <li>
                    <label class="switch">
                      <input type="checkbox" id="impactaReservas" name="impactaReservas" value="true">
                      <span class="slider round"></span>
                    </label>
                  </li>
                  <li> SI</li>
                </ul>


              <h5 class="titulosalta"> Cargar ícono de la promoción</h5>

              <p><div class="input-group input-group-sm">
              <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="padding: 17px;" data-toggle="modal"  data-target="#mdlArchivos"><i class="fa fa-plus-square-o" aria-hidden="true"></i> CARGAR ICONO</button>
                      </span>
              </div>
              <div id="contenedorImagenes">

              </div>
              <input type="text" id="iconoPromocion" style="display:none"/> 
              </div></p>

              <h5 class="titulosalta"> Cargar imagen de la promoción para Web</h5>

              <p><div class="input-group input-group-sm">
              <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="padding: 17px;" data-toggle="modal"  data-target="#mdlImgWeb"><i class="fa fa-plus-square-o" aria-hidden="true"></i> CARGAR IMAGEN WEB</button>
                      </span>
              </div>
              <div id="contenedorImagenWeb">

              </div>
              <input type="text" id="imgPromocionWeb" style="display:none"/> 
              </div></p>

              <h5 class="titulosalta"> Cargar imagen de la promoción para App</h5>

              <p><div class="input-group input-group-sm">
              <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="padding: 17px;" data-toggle="modal"  data-target="#mdlImgApp"><i class="fa fa-plus-square-o" aria-hidden="true"></i> CARGAR IMAGEN APP</button>
                      </span>
              </div>
              <div id="contenedorImagenApp">

              </div>
              <input type="text" id="imgPromocionApp" style="display:none"/> 
              </div></p>

              <h5 class="titulosalta"> Duración de la promoción</h5>

              <div class="row">
                <div class="col-md-12">
                  
                 <input type="text" id="duracionPromocion" name="daterange" value="" />
                  
                </div>
              </div>

              <h5 class="titulosalta">Términos y condiciones</h5>

              <div class="form-group">
                
                <textarea class="form-control" rows="5" id="terminosCondiciones" name="terminosCondiciones"></textarea>
              </div>

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
                    <tbody id="">
                      <tr>
                        <td>
                          <div class="checkbox">
                            <label><input type="checkbox" value=""></label>
                          </div>
                        </td>
                        <td>Todos</td>
                        <td class="text-center">-</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>

              <div class="input-group">
                 <span class="input-group-btn">
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validarDatosPromocio()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                  <button id="botoncancelar" class="btn btn-default" type="button" style="padding: 17px;" onClick="cancelar()"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                </span>
              </div>

          </div>    

    <!-- Tabla Promociones -->
            <div id="tablaPromociones">
              <div class="panel-heading tituloseccion" >PROMOCIONES</div>
              <br>
              <br>
              <table class="table">
                <thead class="titulotabla">
                  <tr> 
                      <th>#</th>
                      <th style="text-align: center;">Nombre</th>
                      <th style="text-align: center;">Porcentaje</th>
                      <th style="text-align: center;">Desde:</th>
                      <th style="text-align: center;">Hasta:</th>
                      <th style="text-align: center;">Valor $</th>
                      <th style="text-align: center;">Acción</th>
                  </tr>
                </thead>
                <tbody id="">
                  <tr class="text-center">
                    <td>1</td>
                    <td>Promoción ALMALBEC</td>
                    <td>15%</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td class="centrarbotaccion">
                      <button onclick="editar('')" title="Editar" class="btn btn-default botaccion" type="button">
                        <i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button title="Eliminar" onclick="mostrarModalEliminar('')" class="btn btn-default botaccion" type="button">
                        <i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="text-center">
                    <td>1</td>
                    <td>Promoción ALMALBEC</td>
                    <td>-</td>
                    <td>1</td>
                    <td>300</td>
                    <td>$15</td>
                    <td class="centrarbotaccion">
                      <button onclick="editar('')" title="Editar" class="btn btn-default botaccion" type="button">
                        <i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button title="Eliminar" onclick="mostrarModalEliminar('')" class="btn btn-default botaccion" type="button">
                        <i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="input-group">
               <span class="input-group-btn">
                <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
              </span>
            </div>

            </div>
          </div>
      </div>
    </div>

    <!-- Modal icono -->
    <div id="mdlArchivos" class="modal fade">
        <div class="modal-dialog" style="width: 65%;">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Subir Icono</h4>
            </div>
            <div class="modal-body">
            <div class="row">
              <div class="col-md-12" id="formDropZone"> </div>
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <!-- Modal imagen web -->
    <div id="mdlImgWeb" class="modal fade">
        <div class="modal-dialog" style="width: 65%;">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Subir Imagen para Web</h4>
            </div>
            <div class="modal-body">
            <div class="row">
              <div class="col-md-12" id="formDropZone1"></div>
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <!-- Modal imagen app -->
    <div id="mdlImgApp" class="modal fade">
        <div class="modal-dialog" style="width: 65%;">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Subir Imagen para App</h4>
            </div>
            <div class="modal-body">
            <div class="row">
              <div class="col-md-12" id="formDropZone2"></div>
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    
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
   <!-- <script src="../js/contact_me.js"></script> -->

    <!-- Theme JavaScript -->
    <script src="../js/agency.min.js"></script>

    <!-- Funciones de Promocion JavaScript -->
    <script src="js/controladores/promocion.controlador.js"></script>

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
