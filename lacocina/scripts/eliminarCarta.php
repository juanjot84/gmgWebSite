<?php
$nombreArchivo = $_POST['carta'];

$directorio = '../../cartasLocales/';

unlink($directorio.$nombreArchivo);

if (file_exists($directorio.$nombreArchivo)) {
    echo "borrado";
} else {
    echo "noborrado";
}

?>