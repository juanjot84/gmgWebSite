<?php include("includes/head.php"); ?>

<body id="page-top" class="index">


    <?php include("includes/nav.php"); ?>

    

    <div class="container-fluid" style="padding: 1%;background: yellow;margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group">
                      <span class="input-group-btn">
                    </span>
                </div>
            </div>
            <div class="col-md-6" style="text-align: right;">
                <div class="input-group">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button" style="padding: 17px;" onClick="agregarProvincia()"><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVO</button>
                </span>
            </div>
        </div>

    </div>
</div>
</div>

<div class="container" style="padding-top: 2%; padding-bottom: 1%;">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <form action="" id="formularioAgregar" style="display:none">

                  <input type="text" name="idProvincia" id="idProvincia" class="hidden">

                  <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <input id="nombreProvincia" name="nombreProvincia" type="text" class="form-control" placeholder="Nombre de la Provincia" aria-describedby="sizing-addon3">
                </div></p>

                <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <input id="codigoProvincia" name="codigoProvincia" type="text" class="form-control" placeholder="Código de la Provincia" aria-describedby="sizing-addon3">
                </div></p>

                <p><div class="input-group input-group-sm">
                    <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                    <select id="comboPaises" class="form-control"></select>
                </div></p>

                <div class="input-group">
                   <span class="input-group-btn">
                      <button class="btn btn-default" type="button" style="padding: 17px;" onClick="send()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                  </span>
              </div>
          </form>
          <!-- Table -->
          <div class="panel-heading tituloseccion">Provincias</div>
          <table class="table">
            <thead class="titulotabla">
                <tr> 
                    <th >#</th>
                    <th>Provincias</th>
                    <th>Pais</th>
                    <th style="text-align: center;">Acción</th>
                </tr>
            </thead>
            <tbody  id="listadoProvincias">

            </tbody>
            </table>
        </div>
    </div>
</div>
</div>

<div class="container">
    <div class="row">
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
<div class="container" style="padding-top: 2%; padding-bottom: 1%;">   
</div>

<?php include("includes/footer.php"); ?>


<!-- jQuery -->
<script src="../vendor/jquery/jquery.min.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

<!-- Plugin JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

<!-- Contact Form JavaScript -->
<script src="../js/jqBootstrapValidation.js"></script>
<script src="../js/contact_me.js"></script>

<!-- Theme JavaScript -->
<script src="../js/agency.min.js"></script>

<script type="text/javascript">




</script>

<script src="js/controladores/provincia.controlador.js"></script>

</body>

</html>
