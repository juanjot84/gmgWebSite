<?php


if (!isset($_SESSION)) {
  session_start();
}

$_SESSION['tipoUsuario'] = $_POST["tipoUsuario"];
$_SESSION['idNegocio'] = $_POST["idNegocio"];

header('Location:mi-perfil.php');

?>