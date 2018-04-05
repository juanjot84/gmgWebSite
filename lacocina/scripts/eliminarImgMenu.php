<?php
$nombreArchivo = $_POST['nombreArchivo'];

$directorio = '../../imgMenPromociones/';

unlink($directorio.$nombreArchivo);

if (file_exists($directorio.$nombreArchivo)) {
    echo "borrado";
} else {
    echo "borrado";
}

?>