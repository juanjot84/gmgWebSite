
<?php 
error_reporting(E_ERROR);
include("includes/head.php"); ?>

<body id="page-top" class="index">


<?php 
error_reporting(E_ERROR);
include("includes/nav.php"); ?>


    <div class="container-fluid" style="padding: 1%;background: yellow;margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                </div>
                <div class="col-md-6" style="text-align: right;">
                    <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="padding: 17px;" onClick=""><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVA</button>
                      </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 2%; padding-bottom: 1%;">

      <div class="input-group" style="text-align: right;">
         <span class="input-group-btn">
          <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
        </span>
      </div>


      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
                 <!-- Table -->

          <!-- Formulario de promociones -->
            <form>

            <h2 class="tituloseccion">Alta de Promoción</h2>
 

             <h5 class="titulosalta"> Nombre</h5>
 
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="nombrePromocion" name="nombrePromocion" type="text" class="form-control" placeholder="Nombre de la promoción" aria-describedby="sizing-addon3" required>
              </div></p>

              <h5 class="titulosalta"> Comisión</h5>
              
              <div class="row">
                <div class="col-md-6">

                  <div class="radio">
                    <label class="titulospromocion radio-inline">
                      <input type="radio" name="optradio">Elegir el <strong class="naranja">porcentaje de comisión</strong>
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
                      <input type="radio" name="optradio">Elegir un <strong class="naranja">valor fijo por rango</strong>
                    </label>
                  </div>

                  <div class="row">

                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="">Desde:</label>
                        <input id="" name="" type="number" class="form-control" placeholder="1" aria-describedby="sizing-addon3">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="">Hasta:</label>
                        <input id="" name="" type="number" class="form-control" placeholder="300" aria-describedby="sizing-addon3">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="">$:</label>
                        <input id="" name="" type="number" class="form-control" placeholder="$" aria-describedby="sizing-addon3">
                      </div>
                    </div>

                  </div>

                  <div class="agregarquitar">
                    <button class="botonagregarhorario"><i class="fa fa-plus" aria-hidden="true"></i> Agregar a lista</button>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
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
                    <tbody id="">
                      <tr class="text-center listacomision">
                        <td>Fijo por Rango</td>
                        <td>1</td>
                        <td class="text-center">300</td>
                        <td class="text-center">$15</td>
                        <td class="centrarbotaccion">
                          <button onclick="editar('')" title="Editar" class="btn btn-default botaccion" type="button">
                            <i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i>
                          </button>
                          <button title="Eliminar" onclick="mostrarModalEliminar('')" class="btn btn-default botaccion" type="button">
                            <i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </td>
                      </tr>
                      <tr class="text-center listacomision">
                        <td>Fijo por Rango</td>
                        <td>301</td>
                        <td class="text-center">500</td>
                        <td class="text-center">$25</td>
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

              </div>


              <h5 class="titulosalta"> Impacta en reservas</h5>

                <ul class="activaronoreservas">
                  <li>NO </li>
                  <li>
                    <label class="switch">
                      <input type="checkbox" id="" name="" value="true" onClick="">
                      <span class="slider round"></span>
                    </label>
                  </li>
                  <li> SI</li>
                </ul>


              <h5 class="titulosalta"> Cargar ícono de la promoción</h5>

              <p><div class="input-group input-group-sm">
                Colocar cargador de img.
              </div></p>

              <h5 class="titulosalta"> Cargar imagen de la promoción para Web</h5>

              <p><div class="input-group input-group-sm">
                Colocar cargador de img.
              </div></p>

              <h5 class="titulosalta"> Cargar imagen de la promoción para App</h5>

              <p><div class="input-group input-group-sm">
                Colocar cargador de img.
              </div></p>

              <h5 class="titulosalta"> Duración de la promoción</h5>
 
              <p>Ver opción para colocar Date Picker</p>

              <div class="row">
                <div class="col-md-12">
                  
                    <!-- Acá debe ir el datepicker -->
                  
                </div>
              </div>

              <h5 class="titulosalta">Términos y condiciones</h5>

              <p>Hay que quitar limitación de 500 caracteres</p>

              <div class="form-group">
                
                <textarea class="form-control" rows="5" id="descripcionNegocio" name="descripcionNegocio" onfocus="limpiar('descripcionNegocio')"></textarea>
              </div>

              <h5 class="titulosalta">Seleccionar Negocio</h5>
              
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
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                  <button id="botoncancelar" class="btn btn-default" type="button" style="padding: 17px;" onClick="cancelar()"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                </span>
              </div>

            </form>    

            <!-- Table -->
            <div id="">
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

    <!-- Theme JavaScript -->
    <script src="../js/agency.min.js"></script>

    <script type="text/javascript">
        
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

</body>

</html>
