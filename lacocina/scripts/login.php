<?php


if (!isset($_SESSION)) {
  session_start();
}

$_SESSION['tipoUsuario'] = $_POST["tipoUsuario"];
$_SESSION['idNegocio'] = $_POST["idNegocio"];
$_SESSION['jwt'] = $_POST["jwt"];
$_SESSION['nombreUsuario'] = $_POST["nombreUsuario"];
$_SESSION['apellidoUsuario'] = $_POST["apellidoUsuario"];
$_SESSION['nombreNegocio'] = $_POST["nombreNegocio"];

?>