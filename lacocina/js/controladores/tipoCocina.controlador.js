
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
    var tiposCocina;

    obtenerListado();

    function obtenerListado() {
        $('#listadoTiposCocina').html('');
        $('#loading').html('<img class="img-responsive" src="img/loading.gif">');
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoCocina',
            type: 'GET',
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                tiposCocina = data;
                var cocinaDestacada = ''

              _.each(data, function(tipoCocina, index){

                if(tipoCocina.destacadoTipoCocina == true){
                   cocinaDestacada = 'fa fa-star';
                }else{
                   cocinaDestacada = 'fa fa-star-o';
                }

                $('#listadoTiposCocina').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">' + parseInt(index+1) + '</th>' +
                    '<td>' +tipoCocina.nombreTipoCocina+ '</td>'+
                    '<td class="centrarbotdescado"><button title="Cambiar Destacado" onClick="actualizarDestacado(\'' + tipoCocina._id + '\',\''+tipoCocina.destacadoTipoCocina+'\')" class="btn btn-default botaccion" type="button"><i class="'+cocinaDestacada+'" aria-hidden="true"></i></td></button>'+
                    '<td class="centrarbotaccion">' +
                    '<button onClick="mostrar(\'' + tipoCocina._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + tipoCocina._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + tipoCocina._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                    '</td> ' +
                    '</tr>');
            })
              $('#loading').hide();
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    }

    function editar(idTipoCocina){
       var tipoCocina =  _.find(tiposCocina, { '_id': idTipoCocina});
       console.log(tipoCocina);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idTipoCocina").val(tipoCocina._id);
       $("#nombreTipoCocina").val(tipoCocina.nombreTipoCocina);
       $("#urlImagenTipoCocina").val(tipoCocina.urlImagenTipoCocina);
       $("#descripcionTipoCocina").val(tipoCocina.descripcionTipoCocina);
       $("#destacadoTipoCocina-true").val(true);
       $("#destacadoTipoCocina-false").val(false);
       $("#destacadoTipoCocina-" + tipoCocina.destacadoTipoCocina).prop("checked",true);
       $(location).attr('href',"#formularioAgregar");
    }

    function mostrar(idTipoCocina){
       var tipoCocina =  _.find(tiposCocina, { '_id': idTipoCocina});
       console.log(tipoCocina);
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", true);
       $("#formularioAgregar button").hide();
       $("#nombreTipoCocina").val(tipoCocina.nombreTipoCocina);
       $("#descripcionTipoCocina").val(tipoCocina.descripcionTipoCocina);
       $("#urlImagenTipoCocina").val(tipoCocina.urlImagenTipoCocina);
       $("#idTipoCocina").val(tipoCocina._id);
       $("#destacadoTipoCocina-true").val(true);
       $("#destacadoTipoCocina-false").val(false);
       $("#destacadoTipoCocina-" + tipoCocina.destacadoTipoCocina).prop("checked",true);
       $(location).attr('href',"#formularioLocal");
    }

    function eliminar(idTipoCocina){
       $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoCocina?id=' + idTipoCocina,
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

    function agregarTipoCocina(){
       $('#formularioAgregar').show();
       $("#formularioAgregar :input").attr("disabled", false);
       $("#formularioAgregar button").show();
       $("#idTipoCocina").val('');
    }

    function send() {
        var isNew = $("#idTipoCocina").val() == "";
        var operacion = isNew ? "POST": "PUT";
        var tipoCocina = JSON.stringify({
            "nombreTipoCocina": $("#nombreTipoCocina").val(),
            "descripcionTipoCocina":$("#descripcionTipoCocina").val(),
            "urlImagenTipoCocina":$("#urlImagenTipoCocina").val(),
            "destacadoTipoCocina": $('input[name=destacadoTipoCocina]:checked').val()
        });
        var queryParam = isNew  ? "": "?id=" + $("#idTipoCocina").val();
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoCocina' + queryParam,
            type: operacion,
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                $('#formularioAgregar').hide();
                $("#formularioAgregar :input").val('');
                obtenerListado() ;
            },
            error:function(jqXHR,textStatus,errorThrown)
            {
          },
          data: tipoCocina
      });
    }

  function cancelar(){
      $('#formularioAgregar').hide();
  }
  
  function actualizarDestacado(idTipoCocina, valorActual){
   var valorAActualizar;

    if(valorActual == 'true'){
      valorAActualizar = false;
    }else{
      valorAActualizar = true;
    }

    var campoAAcuatualizar = 'destacadoTipoCocina';
    
    var promise = new Promise(function(resolve, reject) {
    var nuevoCampo = {};
    nuevoCampo[campoAAcuatualizar] = valorAActualizar;

    $.ajax({
      url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/tipoCocina?id=' + idTipoCocina,
      type: 'PUT',

      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        obtenerListado();
        resolve(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(errorThrown);
      },
      data: JSON.stringify(nuevoCampo)
    });

  });

  return promise;  

  }