<?php

$fecha = uniqid();
$ext = '.jpg';
$raiz = 'https://guiamendozagourmet.com/imgWebPromociones/';
$nombreIcono = $fecha.$ext;


$dir_subida = '../../imgWebPromociones/';
$fichero_subido = $dir_subida . basename($nombreIcono);
$dirIcono = $raiz.$nombreIcono;

if (move_uploaded_file($_FILES['konostech1']['tmp_name'], $fichero_subido)) {
       echo $dirIcono;
} else {
    echo "¡Posible ataque de subida de ficheros!\n";
}

?>