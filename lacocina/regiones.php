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

    <div class="container-fluid" style="padding: 1%; background: #fff; margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group">
                      <span class="input-group-btn">
                    </span>
                </div>
            </div>
            <div class="col-md-6" style="text-align: right;">
                <div class="input-group">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button" style="padding: 17px;" onClick="agregarRegion()"><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVO</button>
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

            <form action="" id="formularioAgregar" style="display:none">

              <input type="text" name="id" id="idRegion" class="hidden">
            
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="nombreRegion" name="nombreRegion" type="text" class="form-control" placeholder="Nombre de la Region" aria-describedby="sizing-addon3">
              </div></p>
            
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                <input id="descripcionRegion" name="descripcionRegion" type="text" class="form-control" placeholder="Descripción de la Region" aria-describedby="sizing-addon3">
              </div></p>

              <div class="input-group">
                 <span class="input-group-btn">
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="send()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                  <button id="botoncancelar" class="btn btn-default" type="button" style="padding: 17px;" onClick="cancelar()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Cancelar</button>
                </span>
              </div>
            </form>

              <!-- Table -->
              <div class="panel-heading tituloseccion">Regiones</div>
                  <table class="table">
                    <thead class="titulotabla">
                        <tr> 
                            <th >#</th>
                            <th >Regiones</th>
                            <th style="text-align: center;">Acción</th>
                        </tr>
                    </thead>
                    <tbody id="listadoRegiones">
                       
                    </tbody>
                </table>
                

<div class="modal fade" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h3>No se pudo eliminar la Región</h3>
     </div>
         <div class="modal-body">
            <h5>Esta Región tiene Polos Gastronómicos asociados</h5>

     </div>
         <div class="modal-footer">
        <a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
     </div>
      </div>
   </div>
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

<!-- Funcione de Regiones JavaScript -->
<script src="js/controladores/regiones.controlador.js"></script>

</body>

</html>
