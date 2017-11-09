   
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


    var idContacto;
    obtenerListado();

    function obtenerListado() {
        $('#listadoLocal').html('');
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/locales',
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
                    '<button title="Eliminar" onClick="eliminar(\'' + local._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
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

    function eliminar(idLocal){     

      $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/locales?id=' + idLocal,
            type: 'DELETE',            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                  obtenerListado();
             }, 
            error:function(jqXHR,textStatus,errorThrown){
              obtenerListado();
            }
      });    
    }

    function crearLocal(){
      var idNegocio = $("#idNegocio").val();
      var url = "../lacocina/local.php?idNegocio="+idNegocio+"";
      $(location).attr('href',url);    
    }

    function cargarForm(formulario){
      if(formulario == "local"){
       var idLocal = $("#idLocal").val();
       var url = "../lacocina/datos-generales-local.php?idLocal="+ idLocal+"";
       $(location).attr('href',url);
      }
    }

    function editarLocal(idLocal){
       var idNegocio = $("#idNegocio").val();
       var url = "../lacocina/panel-locales.php?idLocal="+idLocal+"&idNegocio="+idNegocio+"";
       $(location).attr('href',url);
    }

    function cargarLocales(){
       var idNegocio = $("#idNegocio").val();
       var url = "../lacocina/locales.php?idNegocio="+idNegocio+"";
       $(location).attr('href',url);
    }

    function volverPanelNegocio(){
      var tipoUsuario = $("#tipoUs").val();
      if(tipoUsuario == 'usuarioNegocio'){
          var url = "../lacocina/perfil/mi-perfil.php";
          $(location).attr('href',url);
      }else if(tipoUsuario == 'superAdmin'){
       var idNegocio = $("#idNegocio").val();
       var url = "../lacocina/panel-negocio.php?idNegocio="+idNegocio+"";
       $(location).attr('href',url);
      }
    }

    function editarContacto(){
      var idLocal = $("#idLocal").val();
      var idContacto

        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/locales?id='+idLocal,
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
                locales = data;
                idContacto = locales.idContacto._id;
                var url = "../lacocina/editar-contacto.php?idLocal="+idLocal+"&idContacto="+idContacto+"";
                $(location).attr('href',url);
          },
          error:function(jqXHR,textStatus,errorThrown)
          {
              $('#target').append("jqXHR: "+jqXHR);
              $('#target').append("textStatus: "+textStatus);
              $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
          },
      });
    }

    function editarDescuentos(){
      var idLocal = $("#idLocal").val();
      var url = "../lacocina/editar-descuentos.php?idLocal="+idLocal+"";
      $(location).attr('href',url);
    }

    function editarCubiertos(){
      var idLocal = $("#idLocal").val();
      var url = "../lacocina/editar-cubiertos.php?idLocal="+idLocal+"";
      $(location).attr('href',url);
    }

    function editarHorarios(){
      var idLocal = $("#idLocal").val();
      var url = "../lacocina/editar-horarios.php?idLocal="+idLocal+"";
      $(location).attr('href',url);
    }

    function nuevoLocal(){
        var negocioCreado = $("#idNegocio").val(); 
        var url = "../lacocina/local.php?idNegocio="+ negocioCreado+"";
        $(location).attr('href',url);
    }
    function cargarImagenes(){
      var idLocal = $("#idLocal").val();
       var url = "../lacocina/subir-imagen.php?idLocal="+idLocal+"";
       $(location).attr('href',url);
    }