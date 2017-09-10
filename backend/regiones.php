<?php include("includes/head.php"); ?>

<body id="page-top" class="index">


    <?php include("includes/nav.php"); ?>

    

    <div class="container-fluid" style="padding: 1%;background: yellow;margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="BUSCAR..." style="padding: 25.6px;">
                      <span class="input-group-btn">
                        <button class="btn btn-default botonbuscar" style="color: #333; background-color: #fff; border: 1px solid #ccc; padding: 15px; border-radius: 0;" type="button"><i style="font-size: 1.5em;" class="fa fa-search" aria-hidden="true"></i></button>
                    </span>
                </div>
            </div>
            <div class="col-md-6" style="text-align: right;">
                <div class="input-group">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button" style="padding: 17px;" onClick="agregarRegion()"><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVO</button>
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

              <!-- Table -->
              <div class="panel-heading tituloseccion">Regiones</div>
              <table class="table">
                <thead class="titulotabla">
                    <tr> 
                        <th >#</th>
                        <th >Regiones</th>
                        <th style="text-align: center;">Acción</th>
                    </tr>
                </thead>
                <tbody id="listadoRegiones">
                   
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

<form action="" id="formularioAgregar" style="display:none">
  <input type="text" placeholder="nombre de la region" name="nombreRegion" id="nombreRegion">
  <input type="text" placeholder="descripcion de la region" name="descripcionRegion" id="descripcionRegion">
  <button type="button" onClick="send()">Submit</button>
</form>


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
    var regiones;

    function agregarRegion(){
        $('#formularioAgregar').show();
    }


    obtenerListado();

    function obtenerListado() {


        $('#target').html('obteniendo...');
       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/region',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                regiones = data;
              $('#target').html('');
              _.each(data, function(region){
                $('#listadoRegiones').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +region.nombreRegion+ '</td><td class="centrarbotaccion">' +
                    '<button title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + region._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                    '</td> ' +
                    '</tr>');
            })                
              console.log(data);
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    }

    function editar(idRegion){
       var region =  _.find(regiones, { '_id': idRegion});
       console.log(region);
       $('#formularioAgregar').show();
       $("#nombreRegion").val(region.nombreRegion);
       $("#descripcionRegion").val(region.descripcionRegion);
    }



    function send() {
        var region = JSON.stringify({
            "nombreRegion": $("#nombreRegion").val(),
            "descripcionRegion":$("#descripcionRegion").val()
        });

        $('#target').html('sending..');

        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/region',
            type: 'POST',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                $('#target').html(data.msg);
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
          data: region
      });
    }

</script>

</body>

</html>
