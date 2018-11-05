

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Last-Modified" content="0">
    <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
    <meta http-equiv="Pragma" content="no-cache">

    <title>Panel de administración GMG</title>

    <link rel="shortcut icon" type="image/png" href="favicon.png" />

    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Theme CSS -->
    <link href="../css/gmgbackstyle.css" rel="stylesheet">
    <link href="../css/agency.min.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js" crossorigin="anonymous"></script>


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" integrity="sha384-0s5Pv64cNZJieYFkXYOTId2HMA2Lfb6q2nAcx2n0RTLUnCAoTTsS0nKEO27XyKcY" crossorigin="anonymous"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" integrity="sha384-ZoaMbDF+4LeFxg6WdScQ9nnR1QC2MIRxA1O9KWEXQwns1G8UNyIEZIQidzb0T1fo" crossorigin="anonymous"></script>
    <![endif]-->

    <!-- ANALYTICS -->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111410422-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-111410422-1');

    </script>

    <!-- SMARTLOOK -->

    <script type="text/javascript">
        window.smartlook || (function(d) {
            var o = smartlook = function() {
                    o.api.push(arguments)
                },
                h = d.getElementsByTagName('head')[0];
            var c = d.createElement('script');
            o.api = new Array();
            c.async = true;
            c.type = 'text/javascript';
            c.charset = 'utf-8';
            c.src = 'https://rec.smartlook.com/recorder.js';
            h.appendChild(c);
        })(document);
        smartlook('init', '0f96f4e577145df7b76f73ea418d1f88a242f08b');

    </script>

    <!-- FIN SMARTLOOK -->

    <!--Tabs-->
   <script src="js/tabs.js"></script>
   

</head>

<!--  jQuery UI Theme CSS -->
<link href="css/jquery-ui.min.css" rel="stylesheet">

<!-- MultiDatesPicker for jQuery UI Theme CSS -->
<link href="css/jquery-ui.multidatespicker.css" rel="stylesheet">

<body id="page-top" class="index">


      <!-- Navigation -->
  <div class="container-fluid" style="background: #000; min-height: 70px;">
      <div class="container">
        <div class="row">
            <div class="col-md-8" style="text-align: right; padding: 2% 0;">
                <a class="navbar-brand page-scroll" href="#"><img class="logoweb" src="img/logo-lacocina.png"></a>
            </div>
            <div class="col-md-4" style="text-align: right; padding: 2% 0;">

            
                <a class="botsalir" href="scripts/cerrar_sesion.php"><i class="fa fa-user" aria-hidden="true"></i> SALIR</a>
            </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="margin-top:0px; padding: 0;">
        <nav class="navbar navbar-default">
          <div class="container" style="margin-top: -1px;">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Menu</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class="dropdown">
                  <a href="negocios.php" role="button" aria-haspopup="true" aria-expanded="false">Negocios<span class="caret"></span></a>
              <!--    <ul class="dropdown-menu">
                    <li><a href="negocios.php">Listar</a></li>
                    <li><a href="alta-negocio.php">Crear nuevo</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Perfil</a></li>
                  </ul> -->
                </li>
                <li class="dropdown">
                  <a href="tipo-de-negocio.php" role="button" aria-haspopup="true" aria-expanded="false">Tipo de negocio<span class="caret"></span></a>
                </li>
                <li>
                  <a href="regiones.php" role="button" aria-haspopup="true" aria-expanded="false">Regiones<span class="caret"></span></a>
                </li>
                <li>
                  <a href="polos-gastronomicos.php" role="button" aria-haspopup="true" aria-expanded="false">Polos<span class="caret"></span></a>
                </li>
                <li>
                  <a href="tipo-de-cocina.php" role="button" aria-haspopup="true" aria-expanded="false">Cocina<span class="caret"></span></a>
                </li>
                <li>
                  <a href="especialidades.php" role="button" aria-haspopup="true" aria-expanded="false">Especialidades<span class="caret"></span></a>
                </li>
                <li>
                  <a href="ocasiones.php" role="button" aria-haspopup="true" aria-expanded="false">Ocasiones<span class="caret"></span></a>
                </li>
                <li>
                  <a href="servicios.php" role="button" aria-haspopup="true" aria-expanded="false">Servicios<span class="caret"></span></a>
                </li>
                <li>
                  <a href="medio-de-pago.php" role="button" aria-haspopup="true" aria-expanded="false">Formas de pago<span class="caret"></span></a>
                </li>
                <li>
                  <a href="nivel-de-precio.php" role="button" aria-haspopup="true" aria-expanded="false">Precio<span class="caret"></span></a>
                </li>
                <li>
                  <a href="descuentos.php" role="button" aria-haspopup="true" aria-expanded="false">Descuentos<span class="caret"></span></a>
                </li>
                <li>
                  <a href="promociones.php" role="button" aria-haspopup="true" aria-expanded="false">Promociones<span class="caret"></span></a>
                </li>
                <li>
                  <a href="agrupar-locales.php" role="button" aria-haspopup="true" aria-expanded="false">Agrupador Locales<span class="caret"></span></a>
                </li>
           <!--     <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Restaurants<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="restaurants.php">Listar</a></li>
                    <li><a href="alta-restaurant.php">Crear nuevo</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Otra acción</a></li>
                  </ul>
                </li> -->
              </ul>
             
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
    </div>

<center><div id="loading"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><span style="font-size: 12px;">Cargando...</span><span class="sr-only">Cargando...</span></div></center>

  <div class="container-fluid" style="padding: 1%; background: #fff; margin-top: -21px;">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-btn">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="padding-top: 2%; padding-bottom: 1%;">
    
    <div class="row">
      <div class="col-md-12">

        

        <div class="panel panel-default datos-cubiertos hidden">

          <div class="row">
            <div class="col-md-6">
              <h2 class="tituloseccion">Configurar reservas</h2>
              <h4 class="titulohorarioatencionbajada">Asignar cubiertos disponibles para reservar</h4>
            </div>

            <div class="col-md-3">
              <ul class="activaronoreservas">
                <li>NO </li>
                <li>
                  <label class="switch">
                    <input type="checkbox" id="aceptaReservaCheck" name="aceptaReservaCheck" value="true" onClick="actualizarAceptaReserva()">
                    <span class="slider round"></span>
                  </label>
                </li>
                <li> SI</li>
              </ul>
              

            </div>
            
            <div class="col-md-3 hidden-sm hidden-xs">
              <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px; float: right;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
            </div>
          </div>
          
          <input type="text" name="idCubierto" id="idCubierto" class="hidden">
          <input type="text" name="idLocalCreado" id="idLocalCreado" value="5a2166c8e5a40efb39098774" class="hidden">
          <input type="text" name="accion" id="accion" value="" class="hidden">
          <input type="text" name="tipoUsuario" id="tipoUsuario" value="superAdmin" class="hidden">

          <!-- NUEVO FORMATO -->

          <!-- <h5 class="titulosalta"> Abierto</h5> -->

               <div class="row cuadroantipacion text-center">
                        <div class="col-md-6">
                            <h5 class="titulosalta">ANTICIPACION</h5>
                            <label class="titulohorarioatencion">Para <strong class="naranja">hacer</strong> una reserva.</label>
                            <div class="row">
                                <div class="col-md-4">
                                    <p class="horasanticipacion">Horas: <span id="demo"></span></p>
                                    <span class="valorrecomendado">Valor recomendado: 1</span>
                                </div>
                                <div class="col-md-8">
                                    <input type="range" min="0" max="48" value="0" class="slider1" id="myRange" onchange="actualizarMargen('myRange')">
                                </div>
                            </div>
                            <label class="titulohorarioatencion">Para <strong class="naranja">cancelar</strong> una reserva.</label>
                            <div class="row">
                                <div class="col-md-4">
                                    <p class="horasanticipacion">Horas: <span id="demo2"></span></p>
                                    <span class="valorrecomendado">Valor recomendado: 1</span>
                                </div>
                                <div class="col-md-8">
                                    <input type="range" min="0" max="48" value="0" class="slider1" id="myRange2" onchange="actualizarMargen('myRange2')">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h5 class="titulosalta">COMENSALES POR RESERVA</h5>
                            <label class="titulohorarioatencion"><strong class="naranja">Adultos</strong> por reserva.</label>
                            <div class="row comensales">
                                <div class="col-md-4">Aca deberia ir range VAlues</div>
                                <div class="col-md-8">
                                    <div class="range-slider">
                                        <span class="rangeValues"></span><span class="rangeValues"></span>
                                        <input value="1" min="1" max="10" step="1" type="range">
                                        <input value="2" min="1" max="10" step="1" type="range" class="sliderInferior">
                                    </div>
                                    
                                   
                                    
                                    
                                    
                                </div>
                                
                            </div>
                            
                            <label class="titulohorarioatencion" style="margin: 50px 0 0 0"><strong class="naranja">Niños</strong> por reserva.</label>
                            <div class="row comensales" >
                                <div class="col-md-4"> Aca deberia ir range VAlues </div>
                                <div class="col-md-8">
                                    <div class="range-slider">
                                        <span class="rangeValues"></span>
                                        <input value="0" min="0" max="10" step="1" type="range">
                                        <input value="2" min="0" max="10" step="1" type="range" class="sliderInferior">
                                    </div>
                                    <div class="checkbox-inline" style="margin: 30px 0 0 0">
                                    <label><input type="checkbox" value="NoNinios">No se Aceptan Niños</label>
                                </div>
                                   
                                    
                                    
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>

          <div class="cuadrohorarios">


            <div class="row">

              <div class="col-md-12">
                <div>
                  <span class="tituloreservaatencion">HORARIOS DE RESERVAS</span>
                </div>
              </div>

              <div class="col-md-offset-1 col-md-4 columnahorarios">

                <!-- <div>
                  <span class="tituloreservaatencion">TURNO 1</span>
                </div> -->

                <strong class="titulohorarioatencion"><i class="fa fa-clock-o" aria-hidden="true"></i> Turno 1</strong>
                <div class="row">
                  <div class="col-md-6">
                    <!--- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Inicio:</label>
                      <select class="form-control select-horario" id="horaInicioManana">
                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Fin:</label>
                      <select class="form-control select-horario" id="horaFinManana">
                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                </div>

                <strong class="titulohorarioatencion"><i class="fa fa-cutlery" aria-hidden="true"></i> Cubiertos disponibles</strong>
                <div class="row">
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Cantidad de Cubiertos:</label>
                      <input id="cantCubiertosManana" name="" type="number" min="0"  class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3">
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Duración en minutos:</label>
                      <input id="duracionReservaManana" name="" type="number" min="0" step="30" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3">
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                   <span id="errorDuracionManana" style="color: #f8981d;"> La Duración de Reserva no puede ser menor a 30 minutos</span>
                </div>
              </div>

              <div class="col-md-offset-2 col-md-4 columnahorarios">

                <!-- <div>
                  <span class="tituloreservaatencion">TURNO 2</span>
                </div> -->

                <strong class="titulohorarioatencion"><i class="fa fa-clock-o" aria-hidden="true"></i> Turno 2</strong>
                <div class="row">
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Inicio:</label>
                      <select class="form-control select-horario" id="horaInicioTarde">
                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Fin:</label>
                      <select class="form-control select-horario" id="horaFinTarde">
                      </select>
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                </div>

                <strong class="titulohorarioatencion"><i class="fa fa-cutlery" aria-hidden="true"></i> Cubiertos disponibles</strong>
                <div class="row">
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Cantidad de Cubiertos:</label>
                      <input id="cantCubiertosTarde" name="" type="number" min="0" class="form-control" placeholder="Cantidad de cubiertos" aria-describedby="sizing-addon3">
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <div class="col-md-6">
                    <!-- Elegir horario -->
                    <div class="form-group">
                      <label for="sel1">Duración en minutos:</label>
                      <input id="duracionReservaTarde" name="" type="number" min="0" step="30" class="form-control" placeholder="Duración de Reserva" aria-describedby="sizing-addon3">
                    </div>
                    <!-- Fin Elegir horario -->
                  </div>
                  <span id="errorDuracionTarde" style="color: #f8981d;"> La Duración de Reserva no puede ser menor a 30 minutos</span>
                </div>
              </div>
            </div>

            <span class="titulohorarioatencion"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Días en los que aplica:</span>

            <ul class="selecdiashorario">
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Todos" id="todos">Todos</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Lunes">Lunes</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Martes">Martes</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Miercoles">Miércoles</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Jueves">Jueves</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Viernes">Viernes</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Sabados">Sábado</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Domingos">Domingo</label>
                </div>
              </li>
              <li>
                <div class="checkbox-inline diashorario">
                  <label><input type="checkbox" value="Feriados">Feriados</label>
                </div>
              </li>
            </ul>
          </div>
          <div class="agregarquitar">
            <button class="botonagregarhorario"><i class="fa fa-plus" aria-hidden="true"></i> Agregar a lista</button>
            <!-- <button class="botonremoverhorario"><i class="fa fa-times" aria-hidden="true"></i> Remover</button> -->
          </div>

          <h5 class="titulosalta">Lista de horarios</h5>

          <div class="cuadrohorariosresumen">
            <div class="table-responsive">
              <table class="table text-center">
                <thead>
                  <tr>
                    <th class="titulostablahorarios"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Días</th>
                    <th class="titulostablahorarios"><i class="fa fa-clock-o" aria-hidden="true"></i> Turno 1...</th>
                    <th class="titulostablahorarios"><i class="fa fa-clock-o" aria-hidden="true"></i> Turno 2...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id='Lunes'>
                    <td>
                      <span class="diassemanaresumen"   >Lunes</span>
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                  </tr>
                  <tr id='Martes'>
                    <td>
                      <span class="diassemanaresumen">Martes</span>
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                  </tr>
                  <tr id='Miercoles'>
                    <td>
                      <span class="diassemanaresumen">Miércoles</span>
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                  </tr>
                  <tr id='Jueves'>
                    <td>
                      <span class="diassemanaresumen">Jueves</span>
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                  </tr>
                  <tr id='Viernes'>
                    <td>
                      <span class="diassemanaresumen">Viernes</span>
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                  </tr>
                  <tr id='Sabados'>
                    <td>
                      <span class="diassemanaresumen">Sábado</span>
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                  </tr>
                  <tr id='Domingos'>
                    <td>
                      <span class="diassemanaresumen">Domingo</span>
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                  </tr>
                  <tr id='Feriados'>
                    <td>
                      <span class="diassemanaresumen">Feriados</span>
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                    <td style="    color: #f8981d;">
                      Sin datos de reserva
                    </td>
                  </tr>
                   <tr id='errores'>
                    <td>

                    </td>
                    <td style="    color: #f8981d;">
                      <span id="errorDuracionListadoManana" style="color: #f8981d;"> La Duración de Reserva no puede ser menor a 30 minutos</span>
                    </td>
                    <td style="    color: #f8981d;">
                      <span id="errorDuracionListadoTarde" style="color: #f8981d;"> La Duración de Reserva no puede ser menor a 30 minutos</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 class="titulosalta">Dias que no se recibiran reservas</h5>
            <center style="margin: 15px 0;"><div id="selectorDiasBloqueados"></div></center>

            <div class="input-group">
              <span class="input-group-btn">
                <button id="botonVolverFondo" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                <button id="botonGuardar" class="btn btn-default" type="button" style="padding: 17px;" onClick="sendHorarioAtencion()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
              </span>
            </div>

          </div>

          <!-- FIN NUEVO FORMATO -->

          <form action="" id="formularioAgregar">
          </form>

          <!-- Table -->
          <div class="panel-heading tituloseccion" style="display: none">Cubiertos por día</div>

        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <nav aria-label="Page navigation">

      </nav>
    </div>
  </div>


  <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 menufooter">
                    <img src="img/mancha-gmg.png">
                </div>
                <div class="col-md-4 menufooter">
                    <span class="titulosoporte">SOPORTE</span>
                    <p><i class="fa fa-envelope" aria-hidden="true"></i> soporte@guiamendozagourmet.com</p>
                    <p><i class="fa fa-phone" aria-hidden="true"></i> 0800 333 0988</p>
                    <p><i class="fa fa-clock-o" aria-hidden="true"></i> Lunes a viernes de 9 a 18 hs.</p>
                </div>
                <div class="col-md-4">

                    <ul class="list-inline social-buttons">
                        <li><a target="_blank" href="https://twitter.com/guiamendozagour"><i class="fa fa-twitter" style="padding-top: 10px;"></i></a>
                        </li>
                        <li><a target="_blank" href="https://www.facebook.com/guiamendozagourmet"><i class="fa fa-facebook" style="padding-top: 10px;"></i></a>
                        </li>
                        <li><a target="_blank" href="https://www.instagram.com/guiamendozagourmet/"><i class="fa fa-instagram" style="padding-top: 10px;"></i></a>
                        </li>
                    </ul>

                    <ul class="list-inline quicklinks">
                        <li>
                            <span class="copyright">Copyright &copy; GMG 2018</span>
                        </li>
                        <li>
                            Desarrollado por <a style="text-decoration: none;" href="#">Estudio Pronet</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

  <!-- jQuery -->
  <script src="../vendor/jquery/jquery.min.js"></script>

  <!-- Bootstrap Core JavaScript -->
  <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

  <!-- Contact Form JavaScript -->
  <script src="../js/jqBootstrapValidation.js"></script>
  <script src="../js/contact_me.js"></script>

  <!-- Funciones de Cubiertos JavaScript -->
  <script src="js/controladores/cubiertosDias.controlador.js"></script>
  <!-- Funciones de Cubiertos JavaScript -->
  <script src="js/controladores/horarioReserva.controlador.js"></script>

  <!-- Funciones de Actualizar Local JavaScript -->
  <script src="js/controladores/actualizarLocal.controlador.js"></script>

  <!-- Theme JavaScript -->
  <script src="../js/agency.min.js"></script>

  <!-- jQuery UI -->
  <script src="js/jquery-ui.min.js"></script>


  <!-- MultiDatesPicker for jQuery UI -->
  <script src="js/jquery-ui.multidatespicker.js"></script>
  
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

    $(function() {
      var accion = 'editar';
      iniciar(accion);
    });

  </script>

  <!-- Slider Range -->

  <script>
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    }
  </script>


  <script>
    var slider2 = document.getElementById("myRange2");
    var output2 = document.getElementById("demo2");
    output2.innerHTML = slider2.value;

    slider2.oninput = function() {
      output2.innerHTML = this.value;
    }
  </script>

  <!-- End Slider Range -->

  <script>
   var today = new Date();
   var y = today.getFullYear();selectorDiasBloqueados
   $('#selectorDiasBloqueados').multiDatesPicker({
       prevText: 'anterior',
       nextText: 'siguiente;',
       monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
               'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
       monthNamesShort: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                                      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
       dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
       dayNamesShort: ['Do', 'Lu', 'Mar', 'Mi', 'Ju', 'Vi', 'Sa'],
       dayNamesMin: ['Do', 'Lu', 'Mar', 'Mi', 'Ju', 'Vi', 'Sa'],
       weekHeader: 'Semana',
       dateFormat: 'dd/mm/yy',
       firstDay: 1,
       changeMonth: false,
       changeYear: false,
       yearRange: "-0:+1",
       isRTL: false,
       showMonthAfterYear: false,
       minDate: 0,
       numberOfMonths: [1,4],
       defaultDate: '1/1/'+y
    });
  </script>

</body>

</html>