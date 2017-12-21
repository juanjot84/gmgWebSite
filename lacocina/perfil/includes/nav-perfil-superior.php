<?php
$nombreUsuario = $_SESSION['nombreUsuario'];
$apellidoUsuario = $_SESSION['apellidoUsuario'];
$nombreNegocio = $_SESSION['nombreNegocio'];

?>
<div class="container-fluid" style="background: #000; min-height: 95px;">
      <div class="container">
        <div class="row">
            <div class="col-md-8" style="text-align: right;">
                <a class="navbar-brand page-scroll" href="http://guiamendozagourmet.com/lacocina/perfil/mi-perfil.php"><img class="logowebperfil" src="img/logo-lacocina.png"></a>
                 <span class="nombrenegocio hidden-sm hidden-xs"><?php echo $nombreNegocio; ?></span>
            </div>
            <div class="col-md-4" style="text-align: right; padding: 1% 0;">
                <p style="color: #fff"><?php echo $nombreUsuario; ?> <?php echo $apellidoUsuario; ?></p><a class="botsalir" style="color: #FFFF00" href="scripts/cerrar_sesion.php"><i class="fa fa-user" aria-hidden="true"></i> SALIR</a>
            </div>
        </div>
      </div>
    </div>

    <!-- <div class="container-fluid" style="margin-top: 0px; padding: 0;">
        <nav class="navbar navbar-default">
          <div class="container" style="margin-top: -1px;">
            
            <div class="navbar-header">
              <p class="nombrenegocioresponsive hidden-md hidden-lg"><?php echo $nombreNegocio; ?></p>
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Menu</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li>
                  <a href="perfil/reservas.php" role="button" aria-haspopup="true" aria-expanded="false">Reservas <span class="caret"></span></a>
                </li>
                <li class="dropdown">
                  <a href="perfil/mi-perfil.php" role="button" aria-haspopup="true" aria-expanded="false">Mi perfil <span class="caret"></span></a>
                </li>
                <li>
                  <a href="perfil/remarketing.php" role="button" aria-haspopup="true" aria-expanded="false">Remarketing<span class="caret"></span></a>
                </li>
                <li>
                  <a href="#" role="button" aria-haspopup="true" aria-expanded="false">Ver mi negocio<span class="caret"></span></a>
                </li>
              </ul>
             
            </div>
          </div>
        </nav>
    </div> -->