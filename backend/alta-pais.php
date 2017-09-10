<head>

<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script  src=" https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
  crossorigin="anonymous"></script>


</head>

<body>
  

<h5 class="titulosalta"> Pais</h5>

<label id="nombreR"></label>

<form action="" method="POST">
  <input type="text" placeholder="nombre de la region" name="nombreRegion" id="nombreRegion">
  <input type="text" placeholder="descripcion de la region" name="descripcionRegion" id="descripcionRegion">
  <button type="button" onClick="send()">Submit</button>
</form>

<div id="target"></div>


<script type="text/javascript">

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
              $('#target').html('');
              _.each(data, function(region){
                
                 $('#target').append('nombre Region: <label id="nombreR">'  +region.nombreRegion+ '</label> descripcionRegion: <label id="descripcionR">'  + region.descripcionRegion +'</label> </br>');
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
 