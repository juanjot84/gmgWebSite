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
   $idContacto = $_GET['idContacto'];
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

    <div class="container-fluid" style="padding: 1%; background: #fff; margin-top: -21px;">
        <div class="container">
            <div class="row">
              <div class="col-md-6">
              </div>
              <div class="col-md-6" style="text-align: right;">
                <div class="input-group">
                  <span class="input-group-btn">
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

        <h2 class="tituloseccion">Contacto Administrativo Referente del Local</h2>

            <form action="" id="formularioAgregar">

              <input type="text" name="idContactoRecibido" id="idContactoRecibido" value="<?php  error_reporting(E_ERROR); echo $idContacto; ?>" class="hidden">
              <input type="text" name="idLocalRecibido" id="idLocalRecibido" value="<?php  error_reporting(E_ERROR); echo $idLocal; ?>" class="hidden">
              <input type="text" name="idContacto" id="idContacto" class="hidden">
              <input type="text" name="idNegocioCreado" id="idNegocioCreado" value="<?php echo $idNegocio; ?>" class="hidden">

          <h5 class="titulosalta"> Nombre</h5>
            
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-user" aria-hidden="true"></i></span>
                <input id="nombreContacto" name="nombreContacto" type="text" class="form-control" placeholder="Nombre del Contacto" aria-describedby="sizing-addon3" onfocus="limpiar('nombreContacto')" required>
              </div></p>

          <h5 class="titulosalta"> Mail de contacto</h5>
            
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                <input id="mailContacto" name="mailContacto" type="text" class="form-control" placeholder="Mail del Contacto" aria-describedby="sizing-addon3" onfocus="limpiar('mailContacto')" required>
              </div></p>

         <h5 class="titulosalta"> Mail de notificaciones de reservas</h5>
            
              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                <input id="mailReserva" name="mailReserva" type="text" class="form-control" placeholder="Mail de reservas" aria-describedby="sizing-addon3" onfocus="limpiar('mailReserva')" required>
              </div></p>

          <h5 class="titulosalta"> Teléfono fijo</h5>
          <p>Ingresá el número sin espacios ni guiones.</p> 

             <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                <input id="telefonoContacto" name="telefonoContacto" type="text" class="form-control" placeholder="Numero de telefono del Contacto" aria-describedby="sizing-addon3" onfocus="limpiar('telefonoContacto')" required>
              </div></p>

          <h5 class="titulosalta"> Celular</h5>
          <p>Ingresá el número sin espacios ni guiones.</p>     

              <p><div class="input-group input-group-sm">
                <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                <input id="celContacto" name="celContacto" type="text" class="form-control" placeholder="Número de celular del Contacto" aria-describedby="sizing-addon3" onfocus="limpiar('celContacto')" required>
              </div></p> 

              <div class="input-group">
                 <span class="input-group-btn">
                 <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar('editar')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                </span>
              </div>
            </form>

                  <div class="panel-heading tituloseccion" style="display: none">Contactos</div>
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

    <!-- Funciones de Contacto JavaScript -->
    <script src="js/controladores/contacto.controlador.js"></script>

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
