    <!-- Navigation -->
  <div class="container-fluid" style="background: #000; min-height: 70px;">
      <div class="container">
        <div class="row">
            <div class="col-md-8" style="text-align: right; padding: 2% 0;">
                <a class="navbar-brand page-scroll" href="#"><img class="logoweb" src="img/logo-lacocina.png"></a>
            </div>
            <div class="col-md-4" style="text-align: right; padding: 2% 0;">

            <?php 
            error_reporting(E_ERROR);
            $path = '';
              if($tipoUsuario == 'superAdmin'){
                  $path = '../'; 
              }
            ?>

                <a class="botsalir" href="scripts/cerrar_sesion.php"><i class="fa fa-user" aria-hidden="true"></i> SALIR</a>
            </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="margin-top:0px; padding: 0;">
        <nav class="navbar navbar-default">
          <div class="container" style="margin-top: -1px;">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Menu</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class="dropdown">
                  <a href="negocios.php" role="button" aria-haspopup="true" aria-expanded="false">Negocios<span class="caret"></span></a>
              <!--    <ul class="dropdown-menu">
                    <li><a href="negocios.php">Listar</a></li>
                    <li><a href="alta-negocio.php">Crear nuevo</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Perfil</a></li>
                  </ul> -->
                </li>
                <li class="dropdown">
                  <a href="tipo-de-negocio.php" role="button" aria-haspopup="true" aria-expanded="false">Tipo de negocio <span class="caret"></span></a>
                </li>
                <li>
                  <a href="regiones.php" role="button" aria-haspopup="true" aria-expanded="false">Regiones <span class="caret"></span></a>
                </li>
                <li>
                  <a href="polos-gastronomicos.php" role="button" aria-haspopup="true" aria-expanded="false">Polos<span class="caret"></span></a>
                </li>
                <li>
                  <a href="tipo-de-cocina.php" role="button" aria-haspopup="true" aria-expanded="false">Cocina<span class="caret"></span></a>
                </li>
                <li>
                  <a href="especialidades.php" role="button" aria-haspopup="true" aria-expanded="false">Especialidades<span class="caret"></span></a>
                </li>
                <li>
                  <a href="ocasiones.php" role="button" aria-haspopup="true" aria-expanded="false">Ocasiones<span class="caret"></span></a>
                </li>
                <li>
                  <a href="servicios.php" role="button" aria-haspopup="true" aria-expanded="false">Servicios<span class="caret"></span></a>
                </li>
                <li>
                  <a href="medio-de-pago.php" role="button" aria-haspopup="true" aria-expanded="false">Formas de pago <span class="caret"></span></a>
                </li>
                <li>
                  <a href="nivel-de-precio.php" role="button" aria-haspopup="true" aria-expanded="false">Precio <span class="caret"></span></a>
                </li>
                <li>
                  <a href="descuentos.php" role="button" aria-haspopup="true" aria-expanded="false">Descuentos <span class="caret"></span></a>
                </li>
           <!--     <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Restaurants<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="restaurants.php">Listar</a></li>
                    <li><a href="alta-restaurant.php">Crear nuevo</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Otra acción</a></li>
                  </ul>
                </li> -->
              </ul>
             
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
    </div>
