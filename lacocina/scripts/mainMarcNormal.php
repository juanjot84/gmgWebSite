<?php

$fecha = uniqid();
$ext = '.jpg';
$raiz = 'https://guiamendozagourmet.com/mapMarcadores/';
$nombreMarcador = $fecha.$ext;


$dir_subida = '../../mapMarcadores/';
$fichero_subido = $dir_subida . basename($nombreMarcador);
$dirIcono = $raiz.$nombreMarcador;

if (move_uploaded_file($_FILES['konostech3']['tmp_name'], $fichero_subido)) {
       echo $dirIcono;
} else {
    echo "¡Posible ataque de subida de ficheros!\n";
}

?>