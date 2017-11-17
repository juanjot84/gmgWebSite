   
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
                var tipoUsuario = $("#tipoUs").val();
$('#cabeceraTablaNegocios').html('');
            if(tipoUsuario=='superAdmin'){
              $('#cabeceraTablaNegocios').append(''+
               '<div class="panel-heading tituloseccion" style="display: none">Negocios</div>'+
                   '<table class="table" >'+
                        '<thead class="titulotabla">'+
                            '<tr>'+ 
                                '<th >#</th>'+
                                    '<th >Nombre Negocio</th>'+
                                    '<th >Dirección</th>'+
                                    '<th style="text-align: center;">Precio</th>'+
                                    '<th style="text-align: center;">Premium</th>'+
                                    '<th style="text-align: center;">Acción</th>'+
                                '</tr>'+
                        '</thead>'+
                        '<tbody id="listadoLocal">'+
               '');
              var premiumLocal;

              _.each(data, function(local){
              if(local.localPremium==true){
                premiumLocal='fa fa-check-circle';
              }else{
                premiumLocal='fa fa-check-circle-o';
              }

             if(local.idNegocio._id == idNegocioRecibido){
                $('#listadoLocal').append(' <tr>' + 
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' +local.idNegocio.nombreNegocio+'</td><td>' + local.calleLocal+' ( '+local.alturaLocal+' )</td></td><td class="centrarbotdescado">$$$</td>'+
                    '<td class="centrarbotdescado"><button title="Cambiar Destacado" onClick="actualizarPremium(\'' + local._id + '\',\''+local.localPremium+'\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="'+premiumLocal+'" aria-hidden="true"></i></button></td><td class="centrarbotaccion">' +
                    '<button onClick="editarLocal(\'' + local._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + local._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                    '</td> ' +
                    '</tr>');
               }            
              });
          $('#cabeceraTablaNegocios').append(''+
                  '</tbody>'+
                '</table>'+
              '<center><div id="loading"></div></center>'+
            '');

            }else{
            _.each(data, function(local){
              var longNivelPrecio = local.idNivelPrecio.label.length;
              var nivelGris = 5 - longNivelPrecio;
              var labelGrises = '';
               for(i = 0; i < nivelGris; i++){
                 labelGrises += '$'
               }
              if(local.localPremium==true){
                premiumLocal='fa fa-check-circle';
              }else{
                premiumLocal='fa fa-check-circle-o';
              }

             if(local.idNegocio._id == idNegocioRecibido){
             $('#estiloUsuarioNegocio').append(''+
              '<div class="row" style="padding-top: 5%;color: #252525; padding-bottom: 2%;">'+
                '<div class="col-md-4">'+
                  '<div class="row">'+
                    '<div class="col-md-12">'+
                     '<img class="img-responsive" src="'+local.fotoPrincipalLocal+'">'+
                      '<p><span style="font-size: 1.5em;"><strong>'+local.nombreLocal+'</strong></p>'+
                      '<p><i class="fa fa-map-marker" aria-hidden="true"></i><span class="polo">'+local.calleLocal+' ( '+local.alturaLocal+' )</span></p>'+      
                      '<p>Nivel de precio <strong style="letter-spacing: 1px;">'+local.idNivelPrecio.label+'</strong><span style="color: #cbcbcb">'+labelGrises+'</span></p>'+
                      '<p>Ficha premium <i class="'+premiumLocal+'" aria-hidden="true"></i></p>'+
                      '<p style="text-align: center;">'+
                       '<button onClick="editarLocal(\'' + local._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button>'+
                      '</p>'+
                    '</div>'+
                  '</div>'+
                '</div>'+ 
              '</div>'+
              '');

             }            
              });
            }

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

    function nombreLocal(){
      var idLocal = $("#idLocal").val();
     
        $('#target').html('obteniendo...');       
        $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/locales?id='+idLocal,
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
              var nombreLocal = data.nombreLocal;
              $("#nombreLocalN").append('Sucursal: '+nombreLocal);
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

  function actualizarPremium(idLocal, valorActual){
    var valorAActualizar;

    if(valorActual == 'true'){
      valorAActualizar = false;
    }else{
      valorAActualizar = true;
    }

    var campoAAcuatualizar = 'localPremium';
    
    var promise = new Promise(function(resolve, reject) {
    var nuevoCampo = {};
    nuevoCampo[campoAAcuatualizar] = valorAActualizar;

    $.ajax({
      url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local?id=' + idLocal,
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