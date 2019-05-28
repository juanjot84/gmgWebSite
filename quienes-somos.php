<!DOCTYPE html>
<html lang="es">

<head>



  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Guía Mendoza Gourmet - Quiénes somos</title>

  <link rel="shortcut icon" type="image/png" href="favicon.png"/>

  <!-- Bootstrap Core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">


  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'

  <!-- Theme CSS -->
  <link href="css/gmgstyle.css" rel="stylesheet">
  <link href="css/agency.min.css" rel="stylesheet">


  <!-- ANALYTICS -->
     <?php include("includes/analytics.php"); ?>
  <!-- SMARTLOOK -->
     <?php include("includes/smartlook.php"); ?>
  <!-- FIN SMARTLOOK -->

  <!-- Facebook Pixel Code -->
     <?php include("includes/pixelFace.php"); ?>
  <!-- End Facebook Pixel Code -->

  <?php include("includes/soportezen.php"); ?>

  <style type="text/css">
    strong  {
      color: #000;
    }
  </style>

</head>

<body id="page-top" class="index">

  <?php 

  error_reporting(E_ERROR);

  include("includes/nav.php"); 

  ?>


<section class="bg-light-gray" style="margin-top: 5%;">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading">Mendoza</h2>
        <h3 class="section-subheading text-muted">El destino enogastronómico más importante de Argentina.</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <img class="img-responsive" src="img/quienes-somos-gmg-larga.jpg" style="margin: 0 auto 5%;">
      </div>
      <div class="col-md-6">

        <p>La  oferta enogastronómica de Mendoza ha crecido mucho en los últimos años, en calidad y cantidad. La gente sale cada vez más, pero muchas veces no sabe a dónde <strong>encontrar información clara y certera</strong> para armar un programa, y finalmente termina visitando siempre los mismos lugares.</p>

        <p>Debido a mi trabajo como periodista gastronómica recibo cada vez más consultas de mis conocidos y lectores. La pregunta más frecuente es <strong>“¿a dónde salgo a comer?”</strong>. También desde el sector turístico percibí esta necesidad. Agencias de turismo, conserjes de hoteles y empresas de otros servicios del rubro me expresaron la necesidad de contar con una herramienta  para poder guiar mejor a sus pasajeros. Esta situación, sumado a que soy una foodie apasionada, una emprendedora empedernida y siento un gran amor por mi provincia, dieron como resultado la nueva <strong>Guía Mendoza Gourmet</strong>.</p>

        <p>Esta herramienta ha sido desarrollada en varios formatos: pocket maps en papel de distribución gratuita, el sitio web y la app para reservas, y videos con reseñas de diferentes locales y circuitos  dirigidos a público local y turista. A Mendoza le hacía falta una guía gastronómica, y con Guía Mendoza Gourmet se cubre la necesidad de información sobre diferentes productos y servicios de la industria, y además cuenta con un <strong>práctico sistema de reservas</strong>. El público puede encontrar no solo el lugar más adecuado según su gusto personal, sino también  tiendas de productos gourmet, chef a domicilio, cursos de cocina, o los lugares a dónde paran los food trucks.</p>

        <p>De esta manera la Guía Mendoza Gourmet realiza un fuerte aporte a la industria enogastronómica local, posicionando a Mendoza a la altura de los más importantes destinos turísticos del mundo, donde los sistemas de reserva online son de uso corriente. Los mendocinos ya pueden realizar sus reservas con este tipo de tecnología muy fácil de usar.</p>
        

      </div>

    <div class="row">
      <div class="col-md-12">
        <div style="text-align: right;">
            <p>Te invito a descubrir Mendoza, probando nuevos lugares, platos y vinos.</p>
            <h4 style="text-transform: none;">¡Animate a conocer más sabores!</h4>
          </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">

        <div style="float: right;">
          <a target="_blank" href="http://aliciasistero.com/"><img style="float: right; width: 200px; margin-bottom: 7%; margin-top: 3%;" src="img/firmaalicia.svg"></a>
          <h3 style="text-align: right;" class="section-subheading text-muted">Directora de Guía Mendoza Gourmet</h3>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>

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

  <!-- Funciones de Home JavaScript -->

  <script src="js/controladores/home.controlador.js"></script>

  <!-- Theme JavaScript -->

  <script src="js/agency.min.js"></script>

  <script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"

  crossorigin="anonymous"></script>

  <script>

    obtenerListadoCocinas();

  </script>

</body>

</html>
