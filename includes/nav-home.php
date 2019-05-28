<?php

  session_start();
  //session_destroy(); // comment this out if it gives you trouble

  // Comment this out to test and using your own method of user check.
  // $idLocal = $_GET["id"];

      // $jwt = $_SESSION['jwt'];

 $tipoUsuario = $_SESSION['tipoUsuario'];
 if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
  $login = '<li><a href="login.php"><i class="fa fa-user" aria-hidden="true"></i> ACCEDER</a></li>';
  $check_login = $login;
  session_destroy();
 }else{
  $nombreUsuario = $_SESSION['nombreUsuario'];
  $apellidoUsuario = $_SESSION['apellidoUsuario'];
  $login = '<li class="acceder-mobile"><a href="login.php"><i class="fa fa-user" aria-hidden="true"></i> ACCEDER</a></li>';
  $logout = '<div class="nombreusuarionav acceder-mobile"><a class="linkperfil" href="mi-perfil.php"> <i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;'. $nombreUsuario.' '.$apellidoUsuario.'</a> <a class="botonsalirfront" href="cerrar_sesion.php"><i class="fa fa-sign-out" aria-hidden="true"></i> Salir</a></div><li><a href="mis-favoritos.php"><i class="fa fa-heart" style="color: #e02222 !important;" aria-hidden="true"></i> FAVORITOS</a></li><li><a href="mis-reservas.php"><i class="fa fa-check" aria-hidden="true"></i> MIS RESERVAS</a></li>';
  $check_login = isset($_SESSION['jwt']) ? $logout : $login; 
}



  // ** Logout the current user. **
  $logoutAction = $_SERVER['PHP_SELF']."?doLogout=true";
  if ((isset($_SERVER['QUERY_STRING'])) && ($_SERVER['QUERY_STRING'] != "")){
    $logoutAction .="&". htmlentities($_SERVER['QUERY_STRING']);
  }

  if ((isset($_GET['doLogout'])) &&($_GET['doLogout']=="true")){
    //to fully log out a visitor we need to clear the session varialbles
    $_SESSION['MM_Username'] = NULL;
    $_SESSION['MM_UserGroup'] = NULL;
    $_SESSION['PrevUrl'] = NULL;
    unset($_SESSION['MM_Username']);
    unset($_SESSION['MM_UserGroup']);
    unset($_SESSION['PrevUrl']);

    $logoutGoTo = "login.php";
    if ($logoutGoTo) {
      header("Location: $logoutGoTo");
      exit;
    }
  }
?>


    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
          <a class="navbar-brand page-scroll" href="index.php"><img class="logoweb" src="img/logo-gmg.png"></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right acceder-pc">
            <li class="hidden">
              <a href="#page-top"></a>
            </li>
            <?php echo $check_login; ?>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
