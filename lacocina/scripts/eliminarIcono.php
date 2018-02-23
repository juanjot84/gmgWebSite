<?php
$nombreArchivo = $_POST['nombreArchivo'];

$directorio = '../../iconosPromociones/';

unlink($directorio.$nombreArchivo);

if (file_exists($directorio.$nombreArchivo)) {
    echo "borrado";
} else {
    echo "borrado";
}

?>