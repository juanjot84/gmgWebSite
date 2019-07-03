
<?php

$fecha = uniqid();
$ext = '.pdf';
$raiz = 'https://guiamendozagourmet.com/cartasLocales/';
$nombreCarta = $fecha.$ext;


$dir_subida = '../../cartasLocales/';
$fichero_subido = $dir_subida . basename($nombreCarta);
$dirCarta = $raiz.$nombreCarta;

if (move_uploaded_file($_FILES['konostech']['tmp_name'], $fichero_subido)) {
       echo $dirCarta;
} else {
    echo "¡Posible ataque de subida de ficheros!\n";
}

?>