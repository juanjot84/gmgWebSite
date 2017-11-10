
<?php
$nombreArchivo = $_POST['nombreArchivo'];

$directorio = '../../../img-locales/';

unlink($directorio.$nombreArchivo);

if (file_exists($directorio.$nombreArchivo)) {
    echo "error";
} else {
    echo "borrado";
}

?>