<?php

  session_start();

  $tipoUsuario = $_SESSION['tipoUsuario'];
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
    $login = '<li><a href="login.php"><i class="fa fa-user" aria-hidden="true"></i> ACCEDER</a></li>';
    $check_login = $login;
    session_destroy();
    
   
  }else{
    $nombreUsuario = $_SESSION['nombreUsuario'];
    $apellidoUsuario = $_SESSION['apellidoUsuario'];
  
    $login = '<li><a href="login.php"><i class="fa fa-user" aria-hidden="true"></i> ACCEDER</a></li>';
    $logout = '<div class="nombreusuarionav"><a class="linkperfil" href="mi-perfil.php"> <i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;'. $nombreUsuario.' '.$apellidoUsuario.'</a> <a class="botonsalirfront" href="cerrar_sesion.php"><i class="fa fa-sign-out" aria-hidden="true"></i> Salir</a></div><li><a href="mis-favoritos.php"><i class="fa fa-heart" style="color: #e02222 !important;" aria-hidden="true"></i> FAVORITOS</a></li><li><a href="mis-reservas.php"><i class="fa fa-check" aria-hidden="true"></i> RESERVAS</a></li>';
  
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




            <!-- Sidebar -->
            <div id="sidebar-wrapper">
                <ul class="sidebar-nav" id="menuLateral">
                	<li>
			          <a href="#page-top"></a>
			        </li>
                			        <?php echo $check_login; ?>
                	</li>
                    <li class="sidebar-brand">
                        Categorías
                    </li>

                </ul>
            </div>
            <!-- /#sidebar-wrapper -->

