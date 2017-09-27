   
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

    obtenerListado();

    function obtenerListado() {
        $('#listadoLocal').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local',
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                locales = data;
                var idNegocioRecibido = $('#idNegocio').val();        
              _.each(data, function(local){

             if(local.idNegocio._id == idNegocioRecibido){

                $('#listadoLocal').append(' <tr>' + 
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +local.idNegocio.nombreNegocio+'</td><td>' + local.calleLocal+' ( '+local.alturaLocal+' )</td><td class="centrarbotaccion">' +
                    '<button onClick="editarLocal(\'' + local._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="#" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                    '</td> ' +
                    '</tr>');
               }
              
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


    function cargarForm(formulario){
      if(formulario == "local"){
       var idLocal = $("#idLocal").val();
       var url = "../backend/datos-generales-local.php?idLocal="+ idLocal+"";
       $(location).attr('href',url);
      }
    }

    function editarLocal(idLocal){
       var url = "../backend/panel-locales.php?idLocal="+idLocal+"";
       $(location).attr('href',url);
    }

    function cargarLocales(){
       var idNegocio = $("#idNegocio").val();
       var url = "../backend/locales.php?idNegocio="+idNegocio+"";
       $(location).attr('href',url);
    }