
<?php

$fecha = uniqid();
$idLocal = trim($_POST['idLocal']);
$ext = '.jpg';
$raiz = 'https://guiamendozagourmet.com/img-locales/';
$nombreImagen = $idLocal.$fecha.$ext;


$dir_subida = '../../img-locales/';
$fichero_subido = $dir_subida . basename($nombreImagen);
$dirImagen = $raiz.$nombreImagen;

if (move_uploaded_file($_FILES['konostech']['tmp_name'], $fichero_subido)) {
       echo $dirImagen;
} else {
    echo "¡Posible ataque de subida de ficheros!\n";
}

?>