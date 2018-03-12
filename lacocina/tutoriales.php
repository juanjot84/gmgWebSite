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

<body id="page-top" class="index" style="background-color: #e3e3e3;">


<?php
error_reporting(E_ERROR);
     if($tipoUsuario == 'usuarioNegocio'){
        $nav = 'perfil/'; 
        include("perfil/includes/nav-perfil-superior.php");   
    }else if($tipoUsuario == 'superAdmin'){
        include("includes/nav.php"); 
    }
?>

  <section class="tutoriales">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <p class="frase1">Tutoriales de La Cocina</p>
          <p class="bajada1">Aprendé a utilizar nuestra plataforma de reservas online.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="ventajasbkg">
    <div class="container">
      <div class="row">
          <div class="col-md-6"> 
            <h3 style="margin-bottom: 25px;">Funcionamiento general</h3>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/BU5TUU0LBwQ?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
          </div>
          <div class="col-md-6">
            <div class="ventajas">
              <ul class="listadoventajas">
                <li><i class="fa fa-users" aria-hidden="true"></i> <span class="textoventajas"> Menor RRHH dedicados a tomar reservas</span></li>
                <li><i class="fa fa-pie-chart" aria-hidden="true"></i> <span class="textoventajas"> Mayor rendimiento de cupos de reservas</span></li>
                <li><i class="fa fa-magic" aria-hidden="true"></i> <span class="textoventajas"> Administración simple de todas las reservas</span></li>
                <li><i class="fa fa-calendar" aria-hidden="true"></i> <span class="textoventajas"> Sistema automático 24/7</span></li>
                <li><i class="fa fa-cutlery" aria-hidden="true"></i> <span class="textoventajas"> Automatización de cubiertos disponibles</span></li>
                <li><i class="fa fa-area-chart" aria-hidden="true"></i> <span class="textoventajas"> Reporte mensual de estadísticas</span></li>
              </ul>
            </div>
          </div>
      </div>
      <div class="input-group">
        <span class="input-group-btn">
          <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
        </span>
      </div>
    </div>
  </section>


 <?php 
 error_reporting(E_ERROR);
 include("includes/footer.php"); 
 ?>

  <!-- jQuery -->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <!-- Bootstrap Core JavaScript -->
  <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
  <!-- Plugin JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

  <!-- Theme JavaScript -->
  <script src="../js/agency.min.js"></script>

  <script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
  crossorigin="anonymous"></script>


</body>

</html>

