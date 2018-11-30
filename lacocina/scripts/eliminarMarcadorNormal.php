<?php
$nombreArchivo = $_POST['nombreArchivo'];

$directorio = '../../mapMarcadores/';

unlink($directorio.$nombreArchivo);

if (file_exists($directorio.$nombreArchivo)) {
    echo "borrado";
} else {
    echo "borrado";
}

?>