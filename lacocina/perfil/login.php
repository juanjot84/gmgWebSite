<?php 


if (!isset($_SESSION)) {
  session_start();
}

$tipoUsuario= $_POST["tipoUsuario"];
$idNegocio= $_POST["idNegocio"];


$_SESSION['tipoUsuario'] = $tipoUsuario;
$_SESSION['idNegocio'] = $idNegocio; 


?>