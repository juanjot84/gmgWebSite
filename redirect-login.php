<?php

if (!isset($_SESSION)) {
  session_start();
}
$_SESSION['jwt'] = $_POST["jwt"];
$_SESSION['idUsuarioReserva'] = $_POST["idUsuarioReserva"];
$_SESSION['nombreUsuario'] = $_POST["nombreUsuario"];
$_SESSION['apellidoUsuario'] = $_POST["apellidoUsuario"];
?>
