<?php

$fecha = uniqid();
$ext = '.png';
$raiz = 'https://guiamendozagourmet.com/iconosPromociones/';
$nombreIcono = $fecha.$ext;


$dir_subida = '../../iconosPromociones/';
$fichero_subido = $dir_subida . basename($nombreIcono);
$dirIcono = $raiz.$nombreIcono;

if (move_uploaded_file($_FILES['konostech']['tmp_name'], $fichero_subido)) {
       echo $dirIcono;
} else {
    echo "¡Posible ataque de subida de ficheros!\n";
}

?>