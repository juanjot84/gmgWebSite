<?php 
error_reporting(E_ERROR);
session_start();

$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];
$nombreUsuario = $_SESSION['nombreUsuario'];
$apellidoUsuario = $_SESSION['apellidoUsuario'];
$nombreNegocio = $_SESSION['nombreNegocio'];

if (!$_SESSION) {
       header('Location: ../index.php');
} else {
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
        
    } else {
        header('Location: ../index.php');
    }
}

?>


<?php 
error_reporting(E_ERROR);
include("includes/head-perfil.php"); ?>



<body id="page-top" class="index">

<?php 
error_reporting(E_ERROR);
    if($tipoUsuario == 'usuarioNegocio'){
        include("includes/nav-perfil.php"); 
    }else if($tipoUsuario == 'superAdmin'){
        include("../includes/nav-superior.php"); 
    }
?>


    <div class="container-fluid" style="min-height: 65vh; padding-top: 3%;">
      <div class="row">
        <div class="container">
            <div class="row">
              <div class="col-md-10 text-center" style="padding-bottom: 3%;">
                <h2>Mis calificaciones recibidas</h2>
              </div>
              <div class="col-md-2 text-center">
                <!-- BOTON VOLVER -->
                <div class="input-group" style="text-align: right;">
                  <span class="input-group-btn">
                    <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                  </span>
                </div>
              </div>
            </div>
        </div>


      <!-- INICIO CALIFICACION -->

      <div class="container-fluid">
        <div class="row">
          <div class="container" style="padding-top: 2%; border-bottom: 1px solid #e0e0e0;">
            <div class="row">
              <div class="col-md-2 text-center">
                <img class="fotoperfilcalif" src="imgs/avatar.png">
                <p><strong>Martín Boggio</strong></p>
              </div> 
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-4">
                      <ul>
                          <li>22 de diciembre de 2017</li>
                          <li>22:30 hs.</li>
                      </ul>
                  </div>
                  <div class="col-md-4">
                      <ul>
                          <li>35</li>
                          <li>Masculino</li>
                      </ul>
                  </div>
                  <div class="col-md-4">
                      <ul>
                          <li>mboggio@gmail.com</li>
                          <li>261412154</li>
                      </ul>
                  </div>
                </div>
              </div> 
            </div>
            <div class="row ratingstyle">
              <div class="col-md-2 text-center">
                <p><strong>Ambiente</strong></p>
                <ul class="calificastars">
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div class="col-md-2 text-center">
                <p><strong>Comida</strong></p>
                <ul class="calificastars">
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div class="col-md-2 text-center">
                <p><strong>Atención</strong></p>
                <ul class="calificastars">
                 <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div class="col-md-6">
                <p><strong>Comentario</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                
              </div>
            </div>

            <div class="row">
              <div class="col-md-2 text-center">
                  <h4>Responder</h4>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                    <textarea class="form-control" rows="4" id="comment"></textarea>
                  </div>
              </div>                
              <div class="col-md-4">  
                  <label class="radio-inline"><input type="radio" name="optradio">Público</label>
                  <label class="radio-inline"><input type="radio" name="optradio">Privado</label>
                  <p>
                    <a href="#"  onClick="" class="page-scroll btn btn-xl" style="max-width: 300px; margin: 5% 0;">ENVIAR</a>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <!-- FIN CALIFICACION -->


        <!-- INICIO CALIFICACION LEIDA Y RESPONDIDA --> 

      <div class="container-fluid" style="background: #eee;">
        <div class="container" style="padding-top: 2%; border-bottom: 1px solid #e0e0e0;">
          <div class="row">
            <div class="col-md-2 text-center">
              <img class="fotoperfilcalif" src="imgs/avatar.png">
              <p><strong>Martín Boggio</strong></p>
            </div> 
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-4">
                    <ul>
                        <li>22 de diciembre de 2017</li>
                        <li>22:30 hs.</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul>
                        <li>35</li>
                        <li>Masculino</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul>
                        <li>mboggio@gmail.com</li>
                        <li>261412154</li>
                    </ul>
                </div>
              </div>
            </div> 
          </div>
          <div class="row ratingstyle">
            <div class="col-md-2 text-center">
              <p><strong>Ambiente</strong></p>
              <ul class="calificastars">
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
              </ul>
            </div>
            <div class="col-md-2 text-center">
              <p><strong>Comida</strong></p>
              <ul class="calificastars">
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
              </ul>
            </div>
            <div class="col-md-2 text-center">
              <p><strong>Atención</strong></p>
              <ul class="calificastars">
               <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
              </ul>
            </div>
            <div class="col-md-6">
              <p><strong>Comentario</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2 text-center">
                <h4>RESPUESTA</h4>
            </div>
            <div class="col-md-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>                
            <div class="col-md-4">  
                <label class="radio-inline"><input type="radio" name="optradio" checked="">Público</label>
                <label class="radio-inline"><input type="radio" name="optradio">Privado</label>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- FIN CALIFICACION LEIDA Y RESPONDIDA -->

      <!-- BOTON VOLVER -->
      <div class="container">
        <div class="input-group" style="padding: 3% 0;">
          <span class="input-group-btn">
            <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
          </span>
        </div>
      </div>
    </div>

    
    <?php 
    error_reporting(E_ERROR);
    include("includes/footer-perfil.php"); ?>
    

    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

    <!-- Contact Form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

        <!-- Funciones de Negocio JavaScript -->
    <script src="../js/controladores/perfilNegocio.controlador.js"></script>

    <!-- Theme JavaScript -->
    <script src="js/agency.min.js"></script>

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
