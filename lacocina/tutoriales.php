<?php 
error_reporting(E_ERROR);
session_start();

$idNegocio = $_SESSION['idNegocio'];
$tipoUsuario = $_SESSION['tipoUsuario'];


if (!$_SESSION) {
       header('Location: index.php');
} else {
    if ($tipoUsuario == 'usuarioNegocio'  or $tipoUsuario == 'superAdmin') {
        
    } else {
        header('Location: index.php');
    }
}

?>
<?php
error_reporting(E_ERROR);
   $idLocal = $_GET['idLocal'];
?>

    <?php 
error_reporting(E_ERROR);
include("includes/head.php"); ?>

    <body id="page-top" class="index" style="background-color: #e3e3e3;">


        <?php
error_reporting(E_ERROR);
     if($tipoUsuario == 'usuarioNegocio'){
        $nav = 'perfil/'; 
        include("perfil/includes/nav-perfil-superior.php");   
    }else if($tipoUsuario == 'superAdmin'){
        include("includes/nav.php"); 
    }
?>

            <section class="tutoriales">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <p class="frase1">Tutoriales de La Cocina</p>
                            <p class="bajada1">Aprendé a utilizar nuestra plataforma de reservas online.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ventajasbkg">
                <!--div class="container">
                    <div class="row">
                        <div class="col-md-4 ">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/BU5TUU0LBwQ?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                            <h3>Funcionamiento general</h3>
                        </div>
                        <div class="col-md-4">
                            <div class="ventajas">
                                <ul class="listadoventajas">
                                    <li><i class="fa fa-users" aria-hidden="true"></i> <span class="textoventajas"> Menor RRHH dedicados a tomar reservas</span></li>
                                    <li><i class="fa fa-pie-chart" aria-hidden="true"></i> <span class="textoventajas"> Mayor rendimiento de cupos de reservas</span></li>
                                    <li><i class="fa fa-magic" aria-hidden="true"></i> <span class="textoventajas"> Administración simple de todas las reservas</span></li>
                                    <li><i class="fa fa-calendar" aria-hidden="true"></i> <span class="textoventajas"> Sistema automático 24/7</span></li>
                                    <li><i class="fa fa-cutlery" aria-hidden="true"></i> <span class="textoventajas"> Automatización de cubiertos disponibles</span></li>
                                    <li><i class="fa fa-area-chart" aria-hidden="true"></i> <span class="textoventajas"> Reporte mensual de estadísticas</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="class-md-4">
                            Prueba
                        </div>
                    </div>
                    <div class="input-group">
                        <span class="input-group-btn">
          <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
        </span>
                    </div>
                </div-->

                <!--Prueba de Tabs-->

                
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 bhoechie-tab-container">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 bhoechie-tab-menu">
                            <div class="list-group">
                                <a href="#" class="list-group-item active text-center stop-video play-video">
                                    <h4 class="glyphicon glyphicon-asterisk"></h4><br/>Funcionamiento General
                                </a>
                                <a href="#" class="list-group-item text-center stop-video play-video2">
                                    <h4 class="glyphicon glyphicon-gift"></h4><br/>Crear Promociones
                                </a>
                                <a href="#" class="list-group-item text-center stop-video play-video3">
                                    <h4 class="glyphicon glyphicon-ok"></h4><br/>Ver Reservas Realizadas
                                </a>
                                <a href="#" class="list-group-item text-center stop-video play-video4">
                                    <h4 class="glyphicon glyphicon-cutlery"></h4><br/>Cargar Reservas Manual
                                </a>
                                <a href="#" class="list-group-item text-center stop-video play-video5">
                                    <h4 class="glyphicon glyphicon-cutlery"></h4><br/>Configurar Reservas
                                </a>

                            </div>

                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 bhoechie-tab">
                            <!-- flight section -->
                            <div class="bhoechie-tab-content active">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="youtube-video"  src="https://www.youtube.com/embed/BU5TUU0LBwQ?enablejsapi=1&version=3&playerapiid=ytplayer&showinfo=0" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <!-- train section -->
                            <div class="bhoechie-tab-content">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="youtube-video2"  src="https://www.youtube.com/embed/62ImyJ9WmVQ?enablejsapi=1&version=3&playerapiid=ytplayer&showinfo=0" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>

                            <!-- hotel search -->
                            <div class="bhoechie-tab-content">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="youtube-video3"  src="https://www.youtube.com/embed/jdtwyHrEUS8?enablejsapi=1&version=3&playerapiid=ytplayer&showinfo=0" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="bhoechie-tab-content">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="youtube-video4"  src="https://www.youtube.com/embed/ISlm9OCbB10?enablejsapi=1&version=3&playerapiid=ytplayer&showinfo=0" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="bhoechie-tab-content">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="youtube-video5"  src="https://www.youtube.com/embed/lhpKzrDdm6M?enablejsapi=1&version=3&playerapiid=ytplayer&showinfo=0" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>



                </div>
                <!--Fin de prueba de TABS-->
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <div class="input-group" style="margin:10px 0 0 0">
                            <span class="input-group-btn">
                              <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
                            </span>
                        </div>

                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                </div>


            </section>


            <?php 
 error_reporting(E_ERROR);
 include("includes/footer.php"); 
 ?>

            <!-- jQuery -->
            <script src="../vendor/jquery/jquery.min.js"></script>
            <!-- Bootstrap Core JavaScript -->
            <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
            <!-- Plugin JavaScript -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

            <!-- Theme JavaScript -->
            <script src="../js/agency.min.js"></script>

            <script src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js" crossorigin="anonymous"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>


          






            <script>
              
  $('a.stop-video').click(function() {
                    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                    $('.youtube-video2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                    $('.youtube-video3')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                    $('.youtube-video4')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                    $('.youtube-video5')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                });

                $('a.pause-video').click(function() {
                    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                });
                
                 $('a.play-video').click(function() {
                    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                });
                $('a.play-video2').click(function() {
                    $('.youtube-video2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                });

                 $('a.play-video3').click(function() {
                    $('.youtube-video3')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                });

                 $('a.play-video4').click(function() {
                    $('.youtube-video4')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                });

                 $('a.play-video5').click(function() {
                    $('.youtube-video5')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                });


           

            </script>

    </body>

    </html>
