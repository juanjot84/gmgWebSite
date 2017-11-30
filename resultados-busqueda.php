<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Guía Mendoza Gourmet</title>

  <link rel="shortcut icon" type="image/png" href="favicon.png"/>

  <!-- Bootstrap Core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

  <!-- Theme CSS -->
  <link href="css/gmgstyle.css" rel="stylesheet">
  <link href="css/agency.min.css" rel="stylesheet">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" integrity="sha384-0s5Pv64cNZJieYFkXYOTId2HMA2Lfb6q2nAcx2n0RTLUnCAoTTsS0nKEO27XyKcY" crossorigin="anonymous"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" integrity="sha384-ZoaMbDF+4LeFxg6WdScQ9nnR1QC2MIRxA1O9KWEXQwns1G8UNyIEZIQidzb0T1fo" crossorigin="anonymous"></script>
  <![endif]-->

</head>

<?php
error_reporting(E_ERROR);
$parametro = '';
$filtro = '';

$parametro = $_POST["parametro"];
$filtro = $_POST['filtro'];

if (empty($parametro)) $parametro = '';
if (empty($filtro)) $filtro = '';
?>


<body id="page-top" class="index">

  <input type="text" name="parametro" id="parametro" value="<?php echo $parametro; ?>" class="hidden">
  <input type="text" name="filtro" id="filtro" value="<?php echo $filtro; ?>" class="hidden">

  <?php
  error_reporting(E_ERROR);
  include("includes/nav.php");
   ?>

  <!-- Header -->
  <header>

  </header>

  <div class="container" style="padding-top: 6%;>
    <div class="row">
      <div class="col-md-12">
        <h3 id="labelRestaurantesBusquedas"></h3>
      </div>
    </div>
  </div>
  <center><div id="loading"><img class="img-responsive" src="img/loading.gif"></div></center>
  <div class="container locales" style="margin-bottom: 5%; min-height: 80vh;">

  </div>


 <?php
 error_reporting(E_ERROR);
 include("includes/footer.php");
  ?>

  <!-- jQuery -->
  <script src="vendor/jquery/jquery.min.js"></script>

  <!-- Bootstrap Core JavaScript -->
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

  <!-- Contact Form JavaScript -->
  <script src="js/jqBootstrapValidation.js"></script>
  <script src="js/contact_me.js"></script>

  <!-- Funciones de Locales JavaScript -->
  <script src="js/controladores/locales.controlador.js"></script>

  <!-- Theme JavaScript -->
  <script src="js/agency.min.js"></script>

  <script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
  crossorigin="anonymous"></script>

  <script>
    buscar('<?php echo $parametro; ?>', '<?php echo $filtro; ?>');

  </script>

</body>

</html>
