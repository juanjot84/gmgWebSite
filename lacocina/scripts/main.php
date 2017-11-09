
<?php


$dir_subida = '../img-locales/';
$fichero_subido = $dir_subida . basename($_FILES['konostech']['name']);

if (move_uploaded_file($_FILES['konostech']['tmp_name'], $fichero_subido)) {

} else {
    echo "¡Posible ataque de subida de ficheros!\n";
}

print_r($_FILES['konostech']);

?>