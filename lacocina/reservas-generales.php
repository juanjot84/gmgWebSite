<?php 
error_reporting(E_ERROR);

session_start();
$tipoUsuario = $_SESSION['tipoUsuario'];

if (!$_SESSION) {
  header('Location: index.php');
} else {
if ($tipoUsuario == 'superAdmin') {
   
} else {
   header('Location: index.php');
}
}


include("includes/head.php"); ?>

<body id="page-top" class="index">

	<?php 
	error_reporting(E_ERROR);
	include("includes/nav.php"); ?>

	<div class="container-fluid" style="padding: 1%; background: #fff; margin-top: -21px;">
	    <div class="container">
	        <div class="row">
	            <div class="col-md-6">
	            </div>
	            <div class="col-md-6" style="text-align: right;">
	              <div class="input-group">
	                <span class="input-group-btn">
	                  <button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="Volver()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>
	                </span>
	              </div>
	            </div>
	        </div>
	    </div>
	</div>

		<div class="container">
			<div class="panel-heading tituloseccion">RESERVAS GENERALES</div>
		</div>

	<div class="container-fluid" style="padding-top: 2%; padding-bottom: 1%; min-height: 60vh;">

		<table class="table">
			<thead class="titulotabla">
			  <tr class="text-center"> 
			      <th style="text-align: center;">Fecha</th>
			      <th style="text-align: center;">Negocio</th>
			      <th style="text-align: center;">Local</th>
			      <th style="text-align: center;">Reservas</th>
			      <th style="text-align: center;">Cubiertos</th>
			      <th style="text-align: center;">Alertas</th>
			      <th style="text-align: center;"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></th>
			  </tr>
			</thead>
		</table>

		<div class="panel-group" id="accordion">
		  <div class="panel">

            <table class="table">
                
                <tbody>
                	<tr class="text-center">
                		<td class="anchoceldaresergrales">15-03-2018</td>
                		<td class="anchoceldaresergrales">Bardot</td>
                		<td class="anchoceldaresergrales">Calle Belgrano</td>
                		<td class="anchoceldaresergrales">1</td>
                		<td class="anchoceldaresergrales">14</td>
                		<td class="anchoceldaresergrales"><i title="Reserva con +4 personas" class="fa fa-users alertacantpersonas"></i> <i title="Reserva con promoción o descuento" class="fa fa-exclamation-triangle alertareservas"></i></td>
                		<td class="anchoceldaresergrales"><button data-toggle="collapse" data-parent="#accordion" href="#collapse1" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button></td>
    				</tr>
    			</tbody>
    		</table>

		    <div id="collapse1" class="panel-collapse collapse">
		      <div class="panel-body">

      			<table class="table">
      	            <thead class="titulotabladetallereserva">
      	              <tr class="text-center"> 
      	              	<th style="text-align: center;">-</th>
      	                <th style="text-align: center;">Hora</th>
      	                <th style="text-align: center;">Nombre</th>
      	                <th style="text-align: center;">Adultos</th>
      	                <th style="text-align: center;">Niños</th>
      	                <th style="text-align: center;">Teléfono</th>
      	                <th style="text-align: center;">Mail</th>
      	                <th style="text-align: center;">Comentarios</th>
      	                <th style="text-align: center;">Descuento y promociones</th>
      	                <th style="text-align: center;">Alertas</th>
      	              </tr>
      	            </thead>
      	            <tbody>
      	            	<tr class="text-center fuentesmall">
      	            		<td class="anchoceldaresergrales2"><i class="fa fa-circle estadouser-v"></i></td>
      	            		<td class="anchoceldaresergrales2">21:30 hs.</td>
      	            		<td class="anchoceldaresergrales2">Juan Carlos Hernandez</td>
      	            		<td class="anchoceldaresergrales2" class="centrarbotaccion"><img title="Cantidad de adultos" src="img/adultos.png">14</td>
      	            		<td class="anchoceldaresergrales2" class="centrarbotaccion"><img title="Cantidad de niños" src="img/ninos.png">0</td>
      	            		<td class="anchoceldaresergrales2">+54 9 261 123 1234</td>
      	            		<td class="anchoceldaresergrales2">maildelusuario@mailparacontacto.com</td>
      	            		<td class="anchoceldaresergrales2" class="comentariosreservasgrales">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
      	            		<td>
      	            			<div class="row">
      	            				<div class="col-md-6" style="padding-top: 11%;">
      	            					<a href="#"><img class="etiquetapromo" src="../img/promos/promodemo.png"></a>
      	            				</div>
      	            				<div class="col-md-6">
      	            					<div class="row separamenues">
      	            						<div class="col-md-10"><h5 class="opcionmenureserva">Nombre de menú A</h5></div>
      	            						<div class="col-md-2"><p><span class="naranjabold">14</span></p></div>
      	            					</div>
      	            					<div class="row separamenues">
      	            						<div class="col-md-10"><h5 class="opcionmenureserva">Nombre de menú B</h5></div>
      	            						<div class="col-md-2"><p><span class="naranjabold">1</span></p></div>
      	            					</div>
      	            					<div class="row separamenues">
      	            						<div class="col-md-10"><h5 class="opcionmenureserva">Nombre de menú C</h5></div>
      	            						<div class="col-md-2"><p><span class="naranjabold">2</span></p></div>
      	            					</div>
      	            				</div>
      	            			</div>
      	            		</td>
      	            		<td class="anchoceldaresergrales2"><i title="Reserva con +4 personas" class="fa fa-users alertacantpersonas"></i> <i title="Reserva con promoción o descuento" class="fa fa-exclamation-triangle alertareservas"></i></td>
      					</tr>
      				</tbody>
      			</table>

		      </div>
		    </div>
		  </div>

  		  <div class="panel">

              <table class="table">

                  <tbody>
                  	<tr class="text-center">
                  		<td class="anchoceldaresergrales">18-03-2018</td>
                  		<td class="anchoceldaresergrales">Francesco</td>
                  		<td class="anchoceldaresergrales">Ciudad</td>
                  		<td class="anchoceldaresergrales">3</td>
                  		<td class="anchoceldaresergrales">20</td>
                  		<td class="anchoceldaresergrales"><i title="Reserva con +4 personas" class="fa fa-users alertacantpersonas"></i> <i title="Reserva con promoción o descuento" class="fa fa-exclamation-triangle alertareservas"></i></td>
                  		<td class="anchoceldaresergrales"><button data-toggle="collapse" data-parent="#accordion" href="#collapse2" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button></td>
      				</tr>
      			</tbody>
      		</table>

  		    <div id="collapse2" class="panel-collapse collapse">
  		      <div class="panel-body">

        			<table class="table">
        	            <thead class="titulotabladetallereserva">
        	              <tr class="text-center"> 
        	              	<th style="text-align: center;">-</th>
        	                <th style="text-align: center;">Hora</th>
        	                <th style="text-align: center;">Nombre</th>
        	                <th style="text-align: center;">Adultos</th>
        	                <th style="text-align: center;">Niños</th>
        	                <th style="text-align: center;">Teléfono</th>
        	                <th style="text-align: center;">Mail</th>
        	                <th style="text-align: center;">Comentarios</th>
        	                <th style="text-align: center;">Alertas</th>
        	              </tr>
        	            </thead>
        	            <tbody>
        	            	<tr class="text-center fuentesmall">
        	            		<td class="anchoceldaresergrales2"><i class="fa fa-circle estadouser-v"></i></td>
        	            		<td class="anchoceldaresergrales2">21:30 hs.</td>
        	            		<td class="anchoceldaresergrales2">Pedro González</td>
        	            		<td class="anchoceldaresergrales2" class="centrarbotaccion"><img title="Cantidad de adultos" src="img/adultos.png">11</td>
        	            		<td class="anchoceldaresergrales2" class="centrarbotaccion"><img title="Cantidad de niños" src="img/ninos.png">3</td>
        	            		<td class="anchoceldaresergrales2">+54 9 261 123 4321</td>
        	            		<td class="anchoceldaresergrales2">maillusuario@contactame.com.ar</td>
        	            		<td class="anchoceldaresergrales2" class="comentariosreservasgrales">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.</td>
        	            		<td class="anchoceldaresergrales2"><i title="Reserva con +4 personas" class="fa fa-users alertacantpersonas"></i> <i title="Reserva con promoción o descuento" class="fa fa-exclamation-triangle alertareservas"></i></td>
        					</tr>

			            	<tr class="text-center fuentesmall">
			            		<td class="anchoceldaresergrales2"><i class="fa fa-circle estadouser-a"></i></td>
			            		<td class="anchoceldaresergrales2">22:00 hs.</td>
			            		<td class="anchoceldaresergrales2">Roberto Pérez </td>
			            		<td class="anchoceldaresergrales2" class="centrarbotaccion"><img title="Cantidad de adultos" src="img/adultos.png">2</td>
			            		<td class="anchoceldaresergrales2" class="centrarbotaccion"><img title="Cantidad de niños" src="img/ninos.png">0</td>
			            		<td class="anchoceldaresergrales2">+54 9 261 123 4321</td>
			            		<td class="anchoceldaresergrales2">maillusuario@contactame.com.ar</td>
			            		<td class="anchoceldaresergrales2" class="comentariosreservasgrales">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.</td>
			            		<td class="anchoceldaresergrales2"><i title="Reserva con promoción o descuento" class="fa fa-exclamation-triangle alertareservas"></i></td>
							</tr>

			            	<tr class="text-center fuentesmall">
			            		<td class="anchoceldaresergrales2"><i class="fa fa-circle estadouser-r"></i></td>
			            		<td class="anchoceldaresergrales2">22:30 hs.</td>
			            		<td class="anchoceldaresergrales2">Juan Dominguez</td>
			            		<td class="anchoceldaresergrales2" class="centrarbotaccion"><img title="Cantidad de adultos" src="img/adultos.png">2</td>
			            		<td class="anchoceldaresergrales2" class="centrarbotaccion"><img title="Cantidad de niños" src="img/ninos.png">2</td>
			            		<td class="anchoceldaresergrales2">+54 9 261 123 4321</td>
			            		<td class="anchoceldaresergrales2">maillusuario@contactame.com.ar</td>
			            		<td class="anchoceldaresergrales2" class="comentariosreservasgrales"></td>
			            		<td class="anchoceldaresergrales2">-</td>
							</tr>

        				</tbody>
        			</table>

  		      </div>
  		    </div>

  		  </div>


  		  <div class="panel">

              <table class="table">

                  <tbody>
                  	<tr class="text-center">
                  		<td class="anchoceldaresergrales">18-03-2018</td>
                  		<td class="anchoceldaresergrales">Dantesco</td>
                  		<td class="anchoceldaresergrales">Chacras</td>
                  		<td class="anchoceldaresergrales">1</td>
                  		<td class="anchoceldaresergrales">20</td>
                  		<td class="anchoceldaresergrales"><i title="Reserva con promoción o descuento" class="fa fa-exclamation-triangle alertareservas"></i></td>
                  		<td class="anchoceldaresergrales"><button data-toggle="collapse" data-parent="#accordion" href="#collapse3" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button></td>
      				</tr>
      			</tbody>
      		</table>

  		    <div id="collapse3" class="panel-collapse collapse">
  		      <div class="panel-body">

        			<table class="table">
        	            <thead class="titulotabladetallereserva">
        	              <tr class="text-center"> 
        	              	<th style="text-align: center;">-</th>
        	                <th style="text-align: center;">Hora</th>
        	                <th style="text-align: center;">Nombre</th>
        	                <th style="text-align: center;">Adultos</th>
        	                <th style="text-align: center;">Niños</th>
        	                <th style="text-align: center;">Teléfono</th>
        	                <th style="text-align: center;">Mail</th>
        	                <th style="text-align: center;">Comentarios</th>
        	                <th style="text-align: center;">Alertas</th>
        	              </tr>
        	            </thead>
        	            <tbody>
        	            	<tr class="text-center fuentesmall">
        	            		<td class="anchoceldaresergrales2"><i class="fa fa-circle estadouser-v"></i></td>
        	            		<td class="anchoceldaresergrales2">23:00 hs.</td>
        	            		<td class="anchoceldaresergrales2">Matías Peralta</td>
        	            		<td class="anchoceldaresergrales2" class="centrarbotaccion"><img title="Cantidad de adultos" src="img/adultos.png">4</td>
        	            		<td class="anchoceldaresergrales2" class="centrarbotaccion"><img title="Cantidad de niños" src="img/ninos.png">0</td>
        	            		<td class="anchoceldaresergrales2">+54 9 261 123 4321</td>
        	            		<td class="anchoceldaresergrales2">maillusuario@contactame.com.ar</td>
        	            		<td class="anchoceldaresergrales2" class="comentariosreservasgrales">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.</td>
        	            		<td class="anchoceldaresergrales2"><i title="Reserva con promoción o descuento" class="fa fa-exclamation-triangle alertareservas"></i></td>
        					</tr>
        				</tbody>
        			</table>

  		      </div>
  		    </div>
  		    
  		  </div>

		</div>


	</div>

	<?php 
	error_reporting(E_ERROR);
	include("includes/footer.php"); ?>

	<!-- jQuery -->
	<script src="../vendor/jquery/jquery.min.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

	<!-- Plugin JavaScript -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>


	<!-- Include Required Prerequisites -->
	<script type="text/javascript" src="//cdn.jsdelivr.net/jquery/1/jquery.min.js"></script>
	<script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>

</body>

</html>
