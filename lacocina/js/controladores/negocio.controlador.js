
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

    var negocios;
    var tipoNegocios;

    obtenerListado();

    function obtenerListado() {
        $('#listadoNegocios').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/negocio',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                negocios = data;
                var cont = 1;          
              _.each(data, function(negocio){
                $('#listadoNegocios').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">'+cont+++'</th>' +
                    '<td>' +negocio.nombreNegocio+ '</td><td>' + negocio.descripcionNegocio+ '</td><td class="centrarbotaccion">' +
                    '<button onClick="editar(\'' + negocio._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + negocio._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                    '</td> ' +
                    '</tr>');
               
              });
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    }

    function editar(idNegocio){    
       var url = "../lacocina/panel-negocio.php?idNegocio="+ idNegocio+"";
       $(location).attr('href',url);
    }
  
    function cargarForm(formulario){
      if(formulario == "negocio"){
       var negocioEditar = $("#idNegocio").val();
       var url = "../lacocina/datos-generales-negocio.php?idNegocio="+ negocioEditar+"";
       $(location).attr('href',url);
      }else if(formulario == "contacto"){
       var negocioEditar = $("#idNegocio").val();
       var url = "../lacocina/editar-usuario-negocio.php?idNegocio="+ negocioEditar+"";
       $(location).attr('href',url);
      }else if(formulario == "local"){
       var negocioEditar = $("#idNegocio").val();
       var url = "../lacocina/locales.php?idNegocio="+ negocioEditar+"";
       $(location).attr('href',url);
      }

    }

  function cargarFormEditar(idNegocio){
     
     var listadoNegocios;
          $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/negocio',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               listadoNegocios = data;

       var negocio =  _.find(listadoNegocios, { '_id': idNegocio});
       console.log(negocio);
             obtenerListadoTipoNegocios().done(function(data){
            tipoNegocios = data
              
      popularDropdown(negocio.idTipoNegocio);
         $('#formularioEditar').show();
         $("#formularioEditar :input").attr("disabled", false);
         $("#formularioEditar button").show();
         $("#nombreNegocio").val(negocio.nombreNegocio);
         $("#descripcionNegocio").val(negocio.descripcionNegocio);
         $("input[name=destacadoNegocio][value=" + negocio.destacadoNegocio + "]").prop("checked",true);
         $("#bajadaNegocio").val(negocio.bajadaNegocio);
         $("#urlIconoNegocio").val(negocio.urlIconoNegocio);
         $("#tagsNegocio").val(negocio.tagsNegocio);
         $("#tripadvisorNegocio").val(negocio.tripadvisorNegocio);
         $("#twitterNegocio").val(negocio.twitterNegocio);
         $("#instagramNegocio").val(negocio.instagramNegocio);
         $("#facebookNegocio").val(negocio.facebookNegocio);
         $("#idNegocio").val(negocio._id);
       })
      } 
    });
  }

  function actualizarNegocio(){
         var idNegocio = $("#idNegocio").val();
         var negocio = JSON.stringify({
            "nombreNegocio": $("#nombreNegocio").val(),
            "descripcionNegocio": $("#descripcionNegocio").val(),
            "destacadoNegocio": $('input[name=destacadoNegocio]:checked', '#formularioEditar').val(),
            "urlIconoNegocio": $("#urlIconoNegocio").val(),
            "idTipoNegocio": $("#tipoNegocio").val(),
            "bajadaNegocio": $("#bajadaNegocio").val(),
            "tagsNegocio":$("#tagsNegocio").val(),
            "tripadvisorNegocio":$("#tripadvisorNegocio").val(),
            "twitterNegocio":$("#twitterNegocio").val(),
            "instagramNegocio":$("#instagramNegocio").val(),
            "facebookNegocio":$("#facebookNegocio").val()
        });
        $('#target').html('sending..');
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/negocio?id=' + idNegocio,
            type: "PUT",            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {

              var resultado = data;
              var negocioCreado =  resultado._id;

              var url = "../lacocina/panel-negocio.php?idNegocio="+ negocioCreado+"";
              $(location).attr('href',url);

                $("#formularioAgregar :input").val('');          
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: negocio
      });
  }

    function mostrar(idNegocio){
       var negocio =  _.find(negocios, { '_id': idNegocio});
       console.log(negocio);
             obtenerListadoTipoNegocios().done(function(data){
            tipoNegocios= data
              
      popularDropdown(negocio.idTipoNegocio);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#nombreNegocio").val(negocio.nombreNegocio);
       $("#descripcionNegocio").val(negocio.descripcionNegocio);
       $("input[name=destacadoNegocio][value=" + negocio.destacadoNegocio + "]").prop("checked",true);
       $("#urlIconoNegocio").val(negocio.urlIconoNegocio);
       $("#bajadaNegocio").val(negocio.bajadaNegocio);
       $("#tagsNegocio").val(negocio.tagsNegocio);
       $("#tripadvisorNegocio").val(negocio.tripadvisorNegocio);
       $("#twitterNegocio").val(negocio.twitterNegocio);
       $("#instagramNegocio").val(negocio.instagramNegocio);
       $("#facebookNegocio").val(negocio.facebookNegocio);
       $("#idNegocio").val(negocio._id);
     })
    }

    function eliminar(idNegocio){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/negocio?id=' + idNegocio,
            type: 'DELETE',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
              if(data != 'Borrado'){  
                $("#mostrarmodal").modal("show");
              }else if(data == 'Borrado'){
                 obtenerListado();
              }             
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
              obtenerListado();
          }
      });    
    }

    function volverPanelNegocio(){
      var negocioCreado = $("#idNegocio").val(); 
      var url = "../lacocina/panel-negocio.php?idNegocio="+ negocioCreado+"";
      $(location).attr('href',url);
    }

  // Traer tipos de negocio para lista desplegable
    function obtenerListadoTipoNegocios() {   
        return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoNegocio',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
      });
    }
  // Funcion para armar lista desplegable Tipos de Negocio para alta de negocio
    function popularDropdownSolo(){
      $('#tipoNegocio').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#tipoNegocio');
      _.each(tipoNegocios, function (tipoNegocio){
        $('<option>').val(tipoNegocio._id).text(tipoNegocio.nombreTipoNegocio).appendTo('#tipoNegocio')
      })
    }
  // Funcion para armar lista desplegable Tipos de Negocio para modificar o ver de negocio
    function popularDropdown(idTipoNegocio){
      $('#tipoNegocio').html('');
      _.each(tipoNegocios, function (tipoNegocio){;
        var option = $('<option>').val(tipoNegocio._id).text(tipoNegocio.nombreTipoNegocio);
        if (idTipoNegocio==tipoNegocio._id)
        option.attr('selected', 'selected');
        option.appendTo('#tipoNegocio');
      });
    }

    function agregarNegocio(){
       $('#cabeceraTablaNegocios').hide();
       $('#listadoNegocios').hide();
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idNegocio").val('');
            obtenerListadoTipoNegocios().done(function(data){
                tipoNegocios= data
            popularDropdownSolo();
            });
    }


    function cancelar(){
      $('#formularioAgregar').hide();
      $('#cabeceraTablaNegocios').show();
      $('#listadoNegocios').show();
    }

    function send() {
        var isNew = $("#idNegocio").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var negocio = JSON.stringify({
            "nombreNegocio": $("#nombreNegocio").val(),
            "descripcionNegocio": $("#descripcionNegocio").val(),
            "destacadoNegocio": $('input[name=destacadoNegocio]:checked', '#formularioAgregar').val(),
            "urlIconoNegocio": $("#urlIconoNegocio").val(),
            "idTipoNegocio": $("#tipoNegocio").val(),
            "bajadaNegocio": $("#bajadaNegocio").val(),
            "tagsNegocio":$("#tagsNegocio").val(),
            "tripadvisorNegocio":$("#tripadvisorNegocio").val(),
            "twitterNegocio":$("#twitterNegocio").val(),
            "instagramNegocio":$("#instagramNegocio").val(),
            "facebookNegocio":$("#facebookNegocio").val()
        });

        $('#target').html('sending..');
        var queryParam = isNew  ? "": "?id=" + $("#idNegocio").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/negocio' + queryParam,
            type: operacion,            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {

              var resultado = data;
              var negocioCreado =  resultado._id;

              var url = "../lacocina/usuario-negocio.php?idNegocio="+ negocioCreado+"";
              $(location).attr('href',url);

                $("#formularioAgregar :input").val('');          
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: negocio
      }); 
    }

function validar(accion){
  $("#botonGuardar").addClass('disabled');
  var nombreNegocio = $("#nombreNegocio").val();
  var tipoNegocio = $("#tipoNegocio").val();
  var urlImagenNegocio = $("#urlIconoNegocio").val();
  var descripcionNegocio = $("#descripcionNegocio").val();
  var hayError = false;

    if(nombreNegocio.length < 2){
      $("#nombreNegocio").parent().after('<span id="nombreNegocioAlert" style="color:red"> Debe ingresar un nombre para el negocio</span>');
      $("#nombreNegocio").addClass('alert-danger');
      hayError = true;
    }
   if(tipoNegocio == null){
      $("#tipoNegocio").parent().after('<span id="tipoNegocioAlert" style="color:red"> Debe seleccionar un tipo de Negocio</span>');
      $("#tipoNegocio").addClass('alert-danger');
      hayError = true;
   }
   if(urlImagenNegocio.length < 2){
      $("#urlIconoNegocio").parent().after('<span id="urlIconoNegocioAlert" style="color:red"> Debe ingresar la url de la imagen del Negocio</span>');
      $("#urlIconoNegocio").addClass('alert-danger');
      hayError = true;
   }
   if(descripcionNegocio.length < 2){
      $("#descripcionNegocio").parent().after('<span id="descripcionNegocioAlert" style="color:red"> Debe ingresar una descripción para el Negocio</span>');
      $("#descripcionNegocio").addClass('alert-danger');
      hayError = true;
   } 
  if(hayError==false){
     
      if(accion == "crear"){
        send();
      } else if(accion == "editar"){
        actualizarNegocio();
      }   

  }else{
    $(location).attr('href',"#formularioAgregar");
  }

}

function limpiar(campo){
   $("#"+campo+"Alert").hide();
   $("#"+campo).removeClass('alert-danger');
   $("#botonGuardar").removeClass('disabled');
}

