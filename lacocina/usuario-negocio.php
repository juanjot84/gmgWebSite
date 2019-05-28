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
   $idNegocio = $_GET['idNegocio'];
?>

<?php 
error_reporting(E_ERROR);
include("includes/head.php"); ?>

<body id="page-top" class="index">


<?php 
error_reporting(E_ERROR);
include("includes/nav.php"); 

?>

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
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 2%; padding-bottom: 1%;">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">

            <form action="" id="formularioAgregar">

              <input type="text" name="idUsuarioNegocio" id="idUsuarioNegocio" class="hidden">

              <input type="text" name="idNegocio" id="idNegocio" value="<?php echo $idNegocio; ?>" class="hidden">
              <input type="text" name="tipoUs" id="tipoUs" value="<?php echo $tipoUsuario; ?>" class="hidden">
            
              <h5 class="titulosalta"> Datos de usuario administrador del negocio</h5>

                    <p><div class="input-group input-group-sm">
                      <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-user" aria-hidden="true"></i></span>
                      <input id="email" name="email" type="email" class="form-control" placeholder="(Email)" aria-describedby="sizing-addon3" onfocus="limpiar('email')" required>
                    </div></p>

                    <p><div class="input-group input-group-sm">
                      <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-user" aria-hidden="true"></i></span>
                      <input id="nombre" name="nombre" type="text" class="form-control" placeholder="Nombre" aria-describedby="sizing-addon3" onfocus="limpiar('nombre')" required>
                    </div></p>

                    <p><div class="input-group input-group-sm">
                      <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-user" aria-hidden="true"></i></span>
                      <input id="apellido" name="apellido" type="text" class="form-control" placeholder="Apellido" aria-describedby="sizing-addon3">
                    </div></p>

                    <p>
                        <div class="form-group">
                          <label for="sel1">Seleccionar sexo:</label>
                          <select class="form-control" id="sexoUsuario">
                            <option></option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                          </select>
                        </div>
                    </p>

                    <p><div class="input-group input-group-sm">
                      <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                      <input id="password" name="password" type="password" class="form-control" placeholder="Contraseña" aria-describedby="sizing-addon3" onfocus="limpiar('password')" required>
                    </div></p> 

              <div class="input-group">
                 <span class="input-group-btn">
                 <button id="botonGuardarS" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar('crearSalir')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar y Salir</button>
                  <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="validar('crear')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar y Continuar</button>
                </span>
              </div>
            </form>
              <!-- Table -->
                  <div class="panel-heading tituloseccion" style="display: none">Usuarios Administradores de Restaurantes</div>

                </div> 
            </div>
        </div>
    </div>

    
    <div class="modal fade" id="mostrarmodal1" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
     <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
         <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h3>El correo ya se encuentra registrado</h3>
          </div>
         <div class="modal-body">

            <h5>Por favor utilice otra cuenta de correo para el usuario</h5>
         </div>
           <div class="modal-footer">
         <a onClick="habilitarBotonGuardar()" data-dismiss="modal" class="btn btn-danger">Aceptar</a>
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

    <!-- Funciones de Usuario Negocio JavaScript -->
    <script src="js/controladores/usuarioNegocio.controlador.js"></script>

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

</script>

</body>

</html>