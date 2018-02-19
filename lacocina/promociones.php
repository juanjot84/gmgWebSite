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
include("includes/head.php"); ?>


<body id="page-top" class="index">


<?php 
error_reporting(E_ERROR);
include("includes/nav.php"); ?>

<center><div id="loading"></div></center>

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
                <div class="col-md-6" style="text-align: right;">
                    <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="padding: 17px;" onClick="agregarNegocio()"><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVA</button>
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

          <!-- Formulario de promociones -->
            <form action="" id="formularioAgregar" style="display:none">

            <h2 class="tituloseccion">Alta de Promoción</h2>
 
              <input type="text" name="idNegocio" id="idNegocio" class="hidden">

             <h5 class="titulosalta"> Nombre</h5>
 
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="nombreNegocio" name="nombreNegocio" type="text" class="form-control" placeholder="Nombre de la promoción" aria-describedby="sizing-addon3" onfocus="limpiar('nombreNegocio')" required>
              </div></p>

              <h5 class="titulosalta"> Comisión</h5>
 
              <label class="titulohorarioatencion">Elegí el <strong class="naranja">porcentaje de comisión</strong></label>
                            <div class="slidecontainer">
                              <p class="horasanticipacion">Comisión: <span id="demo"></span>%</p>
                              <input type="range" min="1" max="20" value="1" class="slider1" id="myRange" onchange="actualizarMargen('myRange')">
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

              <h5 class="titulosalta"> Url de imagen de la promoción para Web</h5>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="urlIconoNegocio" name="urlIconoNegocio" type="text" class="form-control" placeholder="Url de la imagen para web" aria-describedby="sizing-addon3" onfocus="limpiar('urlIconoNegocio')" required>
              </div></p>

              <h5 class="titulosalta"> Url de imagen de la promoción para App</h5>

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="urlIconoNegocio" name="urlIconoNegocio" type="text" class="form-control" placeholder="Url de la imagen para app" aria-describedby="sizing-addon3" onfocus="limpiar('urlIconoNegocio')" required>
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
                        <th style="text-align: center;">Destacado</th>
                        
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
                        <td class="text-center">-</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>

              
              <div class="input-group">
                 <span class="input-group-btn">
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar('crear')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar y Continuar</button>
                  <button id="botoncancelar" class="btn btn-default" type="button" style="padding: 17px;" onClick="cancelar()"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                </span>
              </div>

            </form>    

            <!-- Table -->
            <div id="cabeceraTablaNegocios">
              <div class="panel-heading tituloseccion" >PROMOCIONES</div>
              <table class="table">
                <thead class="titulotabla">
                  <tr> 
                    <th>#</th>
                        <th>Nombre</th>
                        <th style="text-align: center;">Porcentaje</th>
                        <th style="text-align: center;">Acción</th>
                  </tr>
                </thead>
                <tbody id="listadoNegocios">

                </tbody>
              </table>
            </div>

            </div>
          </div>
      </div>
    </div>

  <div class="modal fade" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h3>No se pudo eliminar el Negocio</h3>
     </div>
         <div class="modal-body">
            <h5>Este negocio tiene locales asociados</h5>

     </div>
         <div class="modal-footer">
        <a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
     </div>
      </div>
   </div>
</div>

<div class="modal fade" id="mostrarmodal2" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h3>ATENCIÓN</h3>
     </div>
         <div class="modal-body">
            <h5>Está por eliminar un restaurante y toda la información asociada al mismo</h5>
     </div>
         <div class="modal-footer">
        <a href="#" data-dismiss="modal" class="btn btn-danger">Cancelar</a>
        <a onClick="eliminar()" data-dismiss="modal" class="btn btn-danger">Aceptar</a>
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

    <!-- Funciones de Negocio JavaScript -->
    <script src="js/controladores/negocio.controlador.js"></script>

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
