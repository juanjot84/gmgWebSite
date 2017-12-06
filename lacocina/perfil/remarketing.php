<?php 
 
error_reporting(E_ERROR);
session_start();
 
$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];
$jwt = $_SESSION['jwt'];

 
if (!$_SESSION) {
       header('Location: ../index.php');
} else {
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
    } else {
        header('Location: ../index.php');
    }
} 
?>
 
<?php 
error_reporting(E_ERROR); 
include("includes/head-remarketing.php"); 
?>
 
<head>
    <style type="text/css">
        .text-primary, a {
            color: #000000;
        }
    </style>
</head>
  
<body id="page-top" class="index">
 
<?php  
error_reporting(E_ERROR);
    if($tipoUsuario == 'usuarioNegocio'){
        include("includes/nav-perfil.php"); 
    }else if($tipoUsuario == 'superAdmin'){
        include("../includes/nav-superior.php"); 
    }
?>
 
    <div class="container-fluid" style="padding: 1%;background: yellow;margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="BUSCAR..." style="padding: 25.6px;">
                      <span class="input-group-btn"> 
                       <button  class="btn btn-default botonbuscar" style="color: #333; background-color: #fff; border: 1px solid #ccc; padding: 15px; border-radius: 0;" type="button"><i style="font-size: 1.5em;" class="fa fa-search" aria-hidden="true"></i></button>
                      </span>
                    </div>
 
                </div>
 
                <div class="col-md-6" style="text-align: right;">
                    <div class="input-group">
                      <span class="input-group-btn">
                        <a href="reserva.php" class="btn btn-default" type="button" style="padding: 17px;"><i class="fa fa-plus-square-o" aria-hidden="true"></i> CREAR RESERVA</a>
                      </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    <div class="container" style="padding-top: 2%; padding-bottom: 1%;">
    <input type="text" name="idLocal" id="idLocal" value="<?php error_reporting(E_ERROR); echo $_SESSION['idLocal']; ?>" class="hidden">
      <div class="tituloseccion">Remarketing</div>
        <div class="remarketingpestanas">
          <ul class="nav nav-tabs nav-justified" style="margin-bottom: 3%;">
            <li class="active"><a data-toggle="tab" href="#graficos">Gráficos</a></li>
            <li><a data-toggle="tab" href="#listas">Listas</a></li>
            <li><a data-toggle="tab" href="#mailing">Mailing</a></li>
          </ul>
 
          <div class="tab-content">
 
            <div id="graficos" class="tab-pane fade in active">
 
              <div class="row">
                <div class="col-md-8">
                </div>
 
                <div class="col-md-4 text-right">
 
                  <div class="form-group">
                    <label for="sel1">Ordenar por fecha:</label>
                    <select class="form-control" id="sel1" onchange="generarCharts(this.value)">
                      <option value="esteMes">Este mes</option>
                      <option value="mesPasado">El mes pasado</option>
                      <option value="ultimos30">Últimos 30 días</option>
                      <option value="ultimos7">Últimos 7 días</option>
                      <option value="ayer">Ayer</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 text-center" id="mensajeSinReservas">

                </div>
              </div>
 
              <div class="row modulografico">
                <div class="col-md-6">
                <span class="titulosremarketing">Resultados por Sexo</span>
                <div id="chartSexo" class="img-responsive"></div>
                </div>
 
                <div class="col-md-6">
                  <span class="titulosremarketing">Resultados por edad</span>
                  <div id="chartEdad" class="img-responsive"></div>
                </div>
 
              </div>
 

 
              <div class="row modulografico">
                <div class="col-md-12">
                  <span class="titulosremarketing">Resultados por días de la semana</span>
                  <div id="chartDiasSemana" style="width: 100%; height: 500px;"></div>
                </div>
              </div>
 
              <div class="row modulografico">
                <div class="col-md-12">
                  <span class="titulosremarketing">Resultados por días del mes</span>
                  <div id="chartDiasMes" style="width: 100%; height: 500px;"></div>
                </div>
              </div>    

            </div>

            <div id="listas" class="tab-pane fade">
              <div class="row">
                <div class="col-md-12">
                 <div id="tituloLista"></div>
                  <div id="tablaReservas"></div>
                </div>
              </div>



<table id="table" style="display: none;">
    <thead>
    <tr>
        <th title="Field #1">ID</th>
        <th title="Field #2">First name</th>
        <th title="Field #3">Last name</th>
        <th title="Field #4">Email</th>
        <th title="Field #5">Country</th>
        <th title="Field #6">IP-address</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td align="right">1</td>
        <td>Donna</td>
        <td>Moore</td>
        <td>dmoore0@furl.net</td>
        <td>China</td>
        <td>211.56.242.221</td>
    </tr>
    <tr>
        <td align="right">2</td>
        <td>Janice Janice Janice Janice Janice Janice Janice Janice Janice Janice Janice Janice Janice Janice Janice</td>
        <td>Henry</td>
        <td>jhenry1@theatlantic.com</td>
        <td>Ukraine</td>
        <td>38.36.7.199</td>
    </tr>
    <tr>
        <td align="right">3</td>
        <td>Ruth</td>
        <td>Wells</td>
        <td>rwells2@constantcontact.com</td>
        <td>Trinidad</td>
        <td>19.162.133.184</td>
    </tr>
    <tr>
        <td align="right">4</td>
        <td>Jason</td>
        <td>Ray</td>
        <td>jray3@psu.edu</td>
        <td>Brazil</td>
        <td>10.68.11.42</td>
    </tr>
    <tr>
        <td align="right">5</td>
        <td>Jane</td>
        <td>Stephens</td>
        <td>jstephens4@go.com</td>
        <td>United States</td>
        <td>47.32.129.71</td>
    </tr>
    <tr>
        <td align="right">6</td>
        <td>Adam</td>
        <td>Nichols</td>
        <td>anichols5@com.com</td>
        <td>Canada</td>
        <td>18.186.38.37</td>
    </tr>
    </tbody>
</table>

 
            </div>
            <div id="mailing" class="tab-pane fade">
              <div class="row">
                <div class="col-md-12">
                  <h3>Próximamente</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    <?php 
    error_reporting(E_ERROR);
    include("includes/footer-perfil.php"); ?>
 
    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>
 

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
 

 
    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>
 
    <!-- Contact Form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Funcione de Local JavaScript -->
    <script src="js/controladores/remarketing.controlador.js"></script>
 

 <!-- Theme JavaScript -->
    <script src="js/agency.min.js"></script>
    <script type="text/javascript">
 
    $(function() {
 
    $('#login-form-link').click(function(e) {
 
        $("#login-form").delay(100).fadeIn(100);
 
        $("#register-form").fadeOut(100);
 
        $('#register-form-link').removeClass('active');
 
        $(this).addClass('active');
 
        e.preventDefault();
 
    });
 
    $('#register-form-link').click(function(e) {
 
        $("#register-form").delay(100).fadeIn(100);
 
        $("#login-form").fadeOut(100);
 
        $('#login-form-link').removeClass('active');
 
        $(this).addClass('active');
 
        e.preventDefault();
 
    });
 
 
    });
 

 
</script>
 
<script>
  //  setJWT('<?php // echo $jwt; ?>');
 
</script>
 
</body>
 
</html>
 