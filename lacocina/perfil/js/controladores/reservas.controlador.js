
var jwt;

function setJWT(jwtToken){
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
  if (_.isNil(jwtToken)) {
    //redireccionar al loguin
  } else {
    
    jwt = jwtToken;
    var tipoUsuario = $("#tipoUsuario").val();
    $("#botones").html('');
    if(tipoUsuario == 'usuarioNegocio'){
      $("#botones").append('<button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>'+
      '<a href="reserva.php" class="botonagregarnuevo btn btn-default" type="button" style="padding: 17px;"><i class="fa fa-plus-square-o" aria-hidden="true"></i> CREAR RESERVA</a>');
    }else if(tipoUsuario == 'superAdmin'){
      $("#botones").append('<button id="botonVolver" class="btn btn-default" type="button" style="padding: 17px;" onClick="volverPanelLocal()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Volver</button>');
    }
    obtenerListado(); 
    } 
  });
};

function obtenerListado() {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
    var idNegocio = $('#idNegocio').val();
    $('.container.negocios').html('');
    $('#loading').html('<img class="img-responsive" src="imgs/loading.gif">');
    $.ajax({
        url: server + '/api/v1/admin/ReservasHoyNegocio?id='+ idNegocio +"",
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
             renderReservas(data);
             listadoProximas();
             listadoHistorico();      
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
        $('#loading').hide();
        $('.container.locales').append('<br>No se encuentran reservas para el día de hoy por el momento');
        listadoProximas();
        listadoHistorico();
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      }
  });
}

function listadoProximas(){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
    var idNegocio = $('#idNegocio').val();
    $('.container.negocios').html('');
    $('#loading').html('<img class="img-responsive" src="imgs/loading.gif">');
    $.ajax({
        url: server + '/api/v1/admin/reservasPendienteNegocio?id='+ idNegocio +"",
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
             renderReservasProximas(data);          
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      }
  });
}

function listadoHistorico(){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
    var idNegocio = $('#idNegocio').val();
    $('.container.negocios').html('');
    $('#loading').html('<img class="img-responsive" src="imgs/loading.gif">');
    $.ajax({
        url: server + '/api/v1/admin/reservasPasadasNegocio?id='+ idNegocio +"",
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
             renderReservasHistorico(data);          
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      }
  });
}

function renderReservas(reservasLocal){
   $('.container.locales').html('');
   var cantLocales = _.size(reservasLocal);
   var contLocales = 1;
   var collapseReserva = 99999;
   var conteinReservas = 999;

    _.each(reservasLocal, function(local,index){
      
      var calle;
      var altura;
      if(typeof(local[0].calleLocal) == "undefined"){
        calle = '';
      }else {
        calle = local[0].calleLocal;
      }

      if(typeof(local[0].alturaLocal) == "undefined"){
        altura = '';
      }else {
        altura = local[0].alturaLocal;
      }
      $('.container.locales').append(''+
          '<div class="panel panel-default">'+
              '<div class="panel-heading">'+
                  '<p class="panel-title">'+
                    '<a data-toggle="collapse" data-parent="#accordion" href="#'+index+'">'+
                      '<table class="table" style="margin-bottom: 0;">'+
                        '<tbody>'+
                          '<tr>'+
                            '<td>'+
                            ''+
                            '</td>'+
                          '</tr>'+
                        '</tbody>'+
                      '</table></a>'+
                  '</p>'+
              '</div>'+
              '<div id="'+index+'" class="panel-collapse collapse in">'+
                '<div class="panel-body">'+
                    '<div class="row">'+
                            '<div class="col-md-12">'+
                               '<div class="container '+contLocales+'"></div>'+
                            '</div>'+
                    '</div>'+
                '</div>'+
              '</div>'+
          '</div>'+
      '');

         var fecha = '';


        _.each(local, function(reserva){

          if(fecha != reserva.fechaReserva){
            fecha = reserva.fechaReserva;
            conteinReservas++;
            $('.container.'+contLocales).append(''+
                '<h3 >'+fecha+'</h3>'+
                '<div class="container '+conteinReservas+'"></div>'+
            '');

          }

          var medioDeReserva = '';
          var ocultarEliminar = '';
          var botonEditar = '';
          var nombreBoton = '';
          var tituloModal = '';
          var cancelar = 'cancelar';
          var editar = 'editar';
          var clasificar = '<td class="columsietepchon"></td>';

          if (reserva.medioReserva == 'gmg'){
            medioDeReserva = '<img title="Medio de reserva" src="imgs/guia.png" aria-hidden="true">';
            ocultarEliminar = 'style="display:none"';
          }else if(reserva.medioReserva == 'facebook'){
            medioDeReserva = '<i title="Medio de reserva" class="fa fa-facebook" aria-hidden="true"></i>';
          }else if(reserva.medioReserva == 'instagram'){
            medioDeReserva = '<i title="Medio de reserva" class="fa fa-instagram" aria-hidden="true"></i>';
          }else if(reserva.medioReserva == 'phone'){
            medioDeReserva = '<i title="Medio de reserva" class="fa fa-phone" aria-hidden="true"></i>';
          }else if(reserva.medioReserva == 'whatsapp'){
            medioDeReserva = '<i title="Medio de reserva" class="fa fa-whatsapp" aria-hidden="true"></i>';
          }else if(reserva.medioReserva == 'mail'){
            medioDeReserva = '<i title="Medio de reserva" class="fa fa-envelope-o" aria-hidden="true"></i>'; 
          }else{
              medioDeReserva = '<i title="Medio de reserva" class="fa fa-globe" aria-hidden="true"></i>';
          }

          if(reserva.estadoReserva =="pendiente"){
            clasificar = '<td class="columsietepchon"><ul style="list-style: none; display: inline-flex;"><li><button title="Marcar como NO vino" class="btn btn-default botaccion" onclick="informarAsistencia(\'' + reserva.idReserva + '\', false)"><i class="fa fa-times" style=" font-size: 1.4em; color: #d20000;" aria-hidden="true"></i></button></li><li><button title="Marcar como SI vino" class="btn btn-default botaccion" onclick="informarAsistencia(\'' + reserva.idReserva + '\', true)"><i class="fa fa-check" style=" font-size: 1.4em; color: #0c9424;" aria-hidden="true"></i></button></li></ul></td>';
          }else if(reserva.estadoReserva =="cumplida"){
            clasificar = '<td class="columsietepchon"><ul style="list-style: none; display: inline-flex;"><li><button title="Marcar como NO vino" class="btn btn-default botaccion" onclick="informarAsistencia(\'' + reserva.idReserva + '\', false)"><i class="fa fa-times" style=" font-size: 1.4em; color: #d20000;" aria-hidden="true"></i></button></li><li><button title="Marcar como SI vino" class="btn btn-default botaccion" onclick="informarAsistencia(\'' + reserva.idReserva + '\', true)"><i class="fa fa-check" style=" font-size: 1.4em; color: #0c9424;" aria-hidden="true"></i></button></li></ul></td>';
          }else if(reserva.estadoReserva =="vencida"){
            clasificar = '<td class="columsietepchon"><i title="No Vino" class="fa fa-times" style=" font-size: 1.4em; color: #d20000;" aria-hidden="true"></i></td>';
          }else if(reserva.estadoReserva =="confirmada"){
            clasificar = '<td class="columsietepchon"><i title="Vino" class="fa fa-check" style=" font-size: 1.4em; color: #0c9424;" aria-hidden="true"></i></td>';
          }else if(reserva.estadoReserva =="Cancelada"){
            clasificar = '<td class="columsietepchon"><i title="Cancelada" class="fa fa-ban" style=" font-size: 1.4em; color: #d20000;" aria-hidden="true"></i></td>';
            ocultarEliminar = 'style="display:none"';
          }else if(reserva.estadoReserva =="Calificada"){
            clasificar = '<td class="columsietepchon"><i title="Vino y Calificó" class="fa fa-check-square-o" style=" font-size: 1.4em; color: #0c9424;" aria-hidden="true"></i></td>';
          }

          var observacion = '';
          if(typeof(reserva.comentarioUsuarioReserva) == "undefined"){
            observacion = '';
          }else if(reserva.comentarioUsuarioReserva == null){
            observacion = '';
          }else{
            observacion = reserva.comentarioUsuarioReserva;
          }

          var promocionReserva = "";
          if(typeof(reserva.idLocalPromocion) == "undefined"){
            promocionReserva ='<td class="centrarbotaccion"><i class="fa fa-exclamation-triangle alertareservas hidden"></i></td>';
          }else {
            promocionReserva = '<td class="centrarbotaccion"><i class="fa fa-exclamation-triangle alertareservas"></i></td>';
          }
          var opcionesMenu = "";
          if(reserva.opcionReservada != []){
            opcionesMenu = reserva.opcionReservada;
          }
          var nombrePromocion = "";
          if(typeof(reserva.nombrePromocion) != "undefined"){
            nombrePromocion = '<h4 class="elegiopcionreserva">'+reserva.nombrePromocion+'</h4>';
          }
  
          var iconoPromocion = "";
          if( typeof(reserva.iconoPromocion) != "undefined"){
            iconoPromocion = '<a href="#"><img class="etiquetapromo" src="'+reserva.iconoPromocion+'"></a>';
          }

          $('.container.'+conteinReservas).append(''+
              '<div class="panel panel-default">'+
                  '<div class="panel-heading">'+
                    '<p class="panel-title">'+
                      ''+
                      '<table class="table" style="margin-bottom: 0;">'+
                        '<tbody>'+
                          '<tr>'+
                            '<td style="width: 230px;">'+
                              reserva.nombreUsuarioReserva+
                            '</td>'+
                            '<td class="centrarbotaccion"><img title="Cantidad de adultos" src="imgs/adultos.png">'+reserva.cubiertosAdultos+'</td>'+
                            '<td class="centrarbotaccion"><img title="Cantidad de niños" src="imgs/ninos.png">'+reserva.cubiertosMenores+'</td>'+
                            '<td class="centrarbotaccion" style="min-width: 97px;">'+reserva.horaSola+' hs</td>'+
                            promocionReserva +
                            '<td class="centrarbotaccion">'+medioDeReserva+'</td>'+
                            '<td class="centrarbotaccion">'+
                            '<a data-toggle="collapse" data-parent="#accordion" href="#'+collapseReserva+'">'+
                              '<button title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button></a>'+
                              botonEditar +
                              '<button title="Eliminar" '+ ocultarEliminar +' class="btn btn-default botaccion" type="button" data-toggle="modal" onClick="mostrarModal(\''+ collapseReserva +'\',\''+cancelar+'\')"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button>'+
                            '</td>'+

                            clasificar+
                            

                          '</tr>'+
                        '</tbody>'+
                      '</table>'+
                    '</p>'+
                '</div>'+
                '<div id="'+collapseReserva+'" class="panel-collapse collapse">'+
                '<div class="panel-body">'+
                  '<div class="container detallereservas">'+
                   '<div class="row">'+
                      '<div class="col-md-4">'+
                          '<p><i class="fa fa-mobile naranjabold" aria-hidden="true"></i>'+reserva.telefonoUsuarioReserva +'</p>'+
                          '<p><i class="fa fa-envelope-o naranjabold" aria-hidden="true"></i>'+reserva.email+'</p>'+
                          '<p class="naranjabold">Observaciones: '+observacion+'</p>'+
                       '</div>'+
                       '<div class="col-md-4">'+
                         nombrePromocion+
                         iconoPromocion+
                       '</div>'+
                       '<div class="col-md-4" id="contMenu'+collapseReserva+'">'+
                       '</div>'+
                   '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+

                  '<div class="modal fade" id="modal'+collapseReserva+'" role="dialog">'+
                  '<input type="text" name="id'+collapseReserva+'" id="id'+collapseReserva+'" value="" class="hidden">'+
                    '<div class="modal-dialog">'+
                      '<div class="modal-content">'+
                          '<div class="modal-header">'+
                           '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                           '<h4 class="modal-title" id="titulo'+collapseReserva+'"></h4>'+
                          '</div>'+
                      '<div class="modal-body">'+
                        '<p> '+reserva.nombreUsuarioReserva+' | '+medioDeReserva+'</p>'+
                        '<p>Reserva para'+
                        '<input type="text" class="form-control" id="cantAdultos'+collapseReserva+'" value="'+reserva.cubiertosAdultos+'" aria-describedby="sizing-addon3"> adultos</p>'+
                        '<input type="text" class="form-control" id="cantMenores'+collapseReserva+'" value="'+reserva.cubiertosMenores+'" aria-describedby="sizing-addon3"> menores</p>'+
                        '<p>El día'+
                        '<input type="text" class="form-control" id="fechaRe'+collapseReserva+'"  value="'+reserva.fechaReserva+'" aria-describedby="sizing-addon3"></p>'+
                        '<p>A las <input type="text" class="form-control" id="horaRe'+collapseReserva+'" value="'+reserva.horaSola+' hs" aria-describedby="sizing-addon3"></p>'+
                        '<p>Observaciones:</p>'+
                        '<p> <textarea class="form-control" rows="3" id="comment'+collapseReserva+'"></textarea></p>'+
                      '</div>'+
                    '<div class="modal-footer">'+
                      '<button id="botonGuardar'+collapseReserva+'" onClick="accion(\''+ collapseReserva +'\',\''+cancelar+'\')" type="button" class="btn btn-default" data-dismiss="modal"></button>'+
                      '<button id="botoncancelar" type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>'+
                    '</div>'+
                    '</div>'+  
                  '</div>'+
                '</div>'+
          '');

          _.each(opcionesMenu, function(opcion){
            if(opcion.cantidad == null){

            }else{
              $("#contMenu"+collapseReserva).append(''+
           
              '<div class="row separamenues">'+
                '<div class="col-md-6">'+
                  '<h5 class="opcionmenureserva">'+opcion.nombreOpcion+'</h5>'+
                '</div> '+
                '<div class="col-md-6">'+
                  '<p>Cantidad: <span class="naranjabold">'+opcion.cantidad+'</span></p>'+
                '</div>'+
              '</div>'+
             '');
            }
          });

            $("#id"+collapseReserva).val(reserva.idReserva);
            collapseReserva++;
            fecha = reserva.fechaReserva;
        });

        contLocales++;
    } );

    $('#loading').hide();
}

function renderReservasProximas(reservasLocal){
  $('.container.proximas').html('');
  var cantLocales = _.size(reservasLocal);
  var contLocales = 1;
  var collapseReserva = 9999998;
  var conteinReservas = 99998;
  var ad = 357;
   _.each(reservasLocal, function(local,index){

     $('.container.proximas').append(''+
         '<div class="panel panel-default">'+
             '<div class="panel-heading">'+
                 '<p class="panel-title">'+
                   '<a data-toggle="collapse" data-parent="#accordion" href="#'+index+ad+'">'+
                     '<table class="table" style="margin-bottom: 0;">'+
                       '<tbody>'+
                         '<tr>'+
                           '<td>'+
                           ''+
                           '</td>'+
                         '</tr>'+
                       '</tbody>'+
                     '</table></a>'+
                 '</p>'+
             '</div>'+
             '<div id="'+index+ad+'" class="panel-collapse collapse in">'+
               '<div class="panel-body">'+
                   '<div class="row">'+
                           '<div class="col-md-12">'+
                              '<div class="container '+contLocales+ad+'"></div>'+
                           '</div>'+
                   '</div>'+
               '</div>'+
             '</div>'+
         '</div>'+
     '');

        var fecha = '';

       _.each(local, function(reserva){

         if(fecha != reserva.fechaReserva){
           fecha = reserva.fechaReserva;
           conteinReservas++;
           $('.container.'+contLocales+ad).append(''+
               '<h3 >'+fecha+'</h3>'+
               '<div class="container '+conteinReservas+'"></div>'+
           '');
         }

         var medioDeReserva = '';
         var ocultarEliminar = '';
         var botonEditar = '';
         var nombreBoton = '';
         var tituloModal = '';
         var cancelar = 'cancelar';
         var editar = 'editar';

         if (reserva.medioReserva == 'gmg'){
          medioDeReserva = '<img title="Medio de reserva" src="imgs/guia.png" aria-hidden="true">';
          ocultarEliminar = 'style="display:none"';
        }else if(reserva.medioReserva == 'facebook'){
          medioDeReserva = '<i title="Medio de reserva" class="fa fa-facebook" aria-hidden="true"></i>';
        }else if(reserva.medioReserva == 'instagram'){
          medioDeReserva = '<i title="Medio de reserva" class="fa fa-instagram" aria-hidden="true"></i>';
        }else if(reserva.medioReserva == 'phone'){
          medioDeReserva = '<i title="Medio de reserva" class="fa fa-phone" aria-hidden="true"></i>';
        }else if(reserva.medioReserva == 'whatsapp'){
          medioDeReserva = '<i title="Medio de reserva" class="fa fa-whatsapp" aria-hidden="true"></i>';
        }else if(reserva.medioReserva == 'mail'){
          medioDeReserva = '<i title="Medio de reserva" class="fa fa-envelope-o" aria-hidden="true"></i>'; 
        }else{
            medioDeReserva = '<i title="Medio de reserva" class="fa fa-globe" aria-hidden="true"></i>';
        }

        var observacion = '';
        if(typeof(reserva.comentarioUsuarioReserva) == "undefined"){
          observacion = '';
        }else if(reserva.comentarioUsuarioReserva == null){
          observacion = '';
        }else{
          observacion = reserva.comentarioUsuarioReserva;
        }
        
        var promocionReserva = "";
        if(typeof(reserva.idLocalPromocion) == "undefined"){
          promocionReserva ='<td class="centrarbotaccion"><i class="fa fa-exclamation-triangle alertareservas hidden"></i></td>';
        }else {
          promocionReserva = '<td class="centrarbotaccion"><i class="fa fa-exclamation-triangle alertareservas"></i></td>';
        }
        var opcionesMenu = "";
        if(reserva.opcionReservada != []){
          opcionesMenu = reserva.opcionReservada;
        }
        var nombrePromocion = "";
        if(typeof(reserva.nombrePromocion) != "undefined"){
          nombrePromocion = '<h4 class="elegiopcionreserva">'+reserva.nombrePromocion+'</h4>';
        }

        var iconoPromocion = "";
        if( typeof(reserva.iconoPromocion) != "undefined"){
          iconoPromocion = '<a href="#"><img class="etiquetapromo" src="'+reserva.iconoPromocion+'"></a>';
        }

         $('.container.'+conteinReservas).append(''+
             '<div class="panel panel-default">'+
                 '<div class="panel-heading">'+
                   '<p class="panel-title">'+
                     ''+
                     '<table class="table" style="margin-bottom: 0;">'+
                       '<tbody>'+
                         '<tr>'+
                           '<td style="width: 230px;">'+
                             reserva.nombreUsuarioReserva+
                           '</td>'+
                           '<td class="centrarbotaccion"><img title="Cantidad de adultos" src="imgs/adultos.png">'+reserva.cubiertosAdultos+'</td>'+
                           '<td class="centrarbotaccion"><img title="Cantidad de niños" src="imgs/ninos.png">'+reserva.cubiertosMenores+'</td>'+
                           '<td class="centrarbotaccion" style="min-width: 97px;">'+reserva.horaSola+' hs</td>'+
                            promocionReserva +
                           '<td class="centrarbotaccion">'+medioDeReserva+'</td>'+
                           '<td class="centrarbotaccion">'+
                           '<a data-toggle="collapse" data-parent="#accordion" href="#'+collapseReserva+'">'+
                             '<button title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button></a>'+
                             botonEditar +
                             '<button title="Eliminar" '+ ocultarEliminar +' class="btn btn-default botaccion" type="button" data-toggle="modal" onClick="mostrarModal(\''+ collapseReserva +'\',\''+cancelar+'\')"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button>'+
                           '</td>'+
                           
                         '</tr>'+
                       '</tbody>'+
                     '</table>'+
                   '</p>'+
               '</div>'+
               '<div id="'+collapseReserva+'" class="panel-collapse collapse">'+
                   '<div class="panel-body">'+
                     '<div class="container detallereservas">'+
                      '<div class="row">'+
                         '<div class="col-md-4">'+
                             '<p><i class="fa fa-mobile naranjabold" aria-hidden="true"></i>'+reserva.telefonoUsuarioReserva +'</p>'+
                             '<p><i class="fa fa-envelope-o naranjabold" aria-hidden="true"></i>'+reserva.email+'</p>'+
                             '<p class="naranjabold">Observaciones: '+observacion+'</p>'+
                          '</div>'+
                          '<div class="col-md-4">'+
                            nombrePromocion+
                            iconoPromocion+
                          '</div>'+
                          '<div class="col-md-4" id="contMenu'+collapseReserva+'">'+
                          '</div>'+
                      '</div>'+
                     '</div>'+
                   '</div>'+
                 '</div>'+
               '</div>'+

                 '<div class="modal fade" id="modal'+collapseReserva+'" role="dialog">'+
                 '<input type="text" name="id'+collapseReserva+'" id="id'+collapseReserva+'" value="" class="hidden">'+
                   '<div class="modal-dialog">'+
                     '<div class="modal-content">'+
                         '<div class="modal-header">'+
                          '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                          '<h4 class="modal-title" id="titulo'+collapseReserva+'"></h4>'+
                         '</div>'+
                     '<div class="modal-body">'+
                       '<p> '+reserva.nombreUsuarioReserva+' | '+medioDeReserva+'</p>'+
                       '<p>Reserva para'+
                       '<input type="text" class="form-control" id="cantAdultos'+collapseReserva+'" value="'+reserva.cubiertosAdultos+'" aria-describedby="sizing-addon3"> adultos</p>'+
                       '<input type="text" class="form-control" id="cantMenores'+collapseReserva+'" value="'+reserva.cubiertosMenores+'" aria-describedby="sizing-addon3"> menores</p>'+
                       '<p>El día'+
                       '<input type="text" class="form-control" id="fechaRe'+collapseReserva+'"  value="'+reserva.fechaReserva+'" aria-describedby="sizing-addon3"></p>'+
                       '<p>A las <input type="text" class="form-control" id="horaRe'+collapseReserva+'" value="'+reserva.horaSola+' hs" aria-describedby="sizing-addon3"></p>'+
                       '<p>Observaciones:</p>'+
                       '<p> <textarea class="form-control" rows="3" id="comment'+collapseReserva+'"></textarea></p>'+
                     '</div>'+
                   '<div class="modal-footer">'+
                     '<button id="botonGuardar'+collapseReserva+'" onClick="accion(\''+ collapseReserva +'\',\''+cancelar+'\')" type="button" class="btn btn-default" data-dismiss="modal"></button>'+
                     '<button id="botoncancelar" type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>'+
                   '</div>'+
                   '</div>'+  
                 '</div>'+
               '</div>'+
         '');

         _.each(opcionesMenu, function(opcion){
          if(opcion.cantidad == null){

          }else{
            $("#contMenu"+collapseReserva).append(''+
         
            '<div class="row separamenues">'+
              '<div class="col-md-6">'+
                '<h5 class="opcionmenureserva">'+opcion.nombreOpcion+'</h5>'+
              '</div> '+
              '<div class="col-md-6">'+
                '<p>Cantidad: <span class="naranjabold">'+opcion.cantidad+'</span></p>'+
              '</div>'+
            '</div>'+
           '');
          }
        });

           $("#id"+collapseReserva).val(reserva.idReserva);
           collapseReserva++;
           fecha = reserva.fechaReserva;
       });



       contLocales++;
   } );

   $('#loading').hide();
}

function informarAsistencia(idReserva, asistencia){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  var idNegocio = $('#idNegocio').val();
  var data = {};
  data.asistencia = asistencia;
  $('#loading').html('<img class="img-responsive" src="imgs/loading.gif">');
  $.ajax({
    url: server + '/api/v1/admin/reservaAsistencia?id='+ idReserva +"",
    type: 'POST',
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      $('#loading').hide();
      obtenerListado()
      listadoProximas();
      listadoHistorico();
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
      $('#target').append("jqXHR: "+jqXHR);
      $('#target').append("textStatus: "+textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
    },
    headers: {
      Authorization: 'JWT ' + jwt
    },
    data: JSON.stringify(data)
  });
}

function renderReservasHistorico(reservasLocal){
  $('.container.historial').html('');
  var cantLocales = _.size(reservasLocal);
  var contLocales = 1;
  var collapseReserva = 9799998;
  var conteinReservas = 97998;
  var ad = 951;
   _.each(reservasLocal, function(local,index){

     $('.container.historial').append(''+
         '<div class="panel panel-default">'+
             '<div class="panel-heading">'+
                 '<p class="panel-title">'+
                   '<a data-toggle="collapse" data-parent="#accordion" href="#'+index+ad+'">'+
                     '<table class="table" style="margin-bottom: 0;">'+
                       '<tbody>'+
                         '<tr>'+
                           '<td>'+
                           ''+
                           '</td>'+
                         '</tr>'+
                       '</tbody>'+
                     '</table></a>'+
                 '</p>'+
             '</div>'+
             '<div id="'+index+ad+'" class="panel-collapse collapse in">'+
               '<div class="panel-body">'+
                   '<div class="row">'+
                           '<div class="col-md-12">'+
                              '<div class="container '+contLocales+ad+'"></div>'+
                           '</div>'+
                   '</div>'+
               '</div>'+
             '</div>'+
         '</div>'+
     '');

        var fecha = '';

       _.each(local, function(reserva){

         if(fecha != reserva.fechaReserva){
           fecha = reserva.fechaReserva;
           conteinReservas++;
           $('.container.'+contLocales+ad).append(''+
               '<h3 >'+fecha+'</h3>'+
               '<div class="container '+conteinReservas+'"></div>'+
           '');
         }

         var medioDeReserva = '';
         var ocultarEliminar = '';
         var botonEditar = '';
         var nombreBoton = '';
         var tituloModal = '';
         var cancelar = 'cancelar';
         var editar = 'editar';
         var clasificar = '<td class="columsietepchon"></td>';

         if (reserva.medioReserva == 'gmg'){
          medioDeReserva = '<img title="Medio de reserva" src="imgs/guia.png" aria-hidden="true">';
          ocultarEliminar = 'style="display:none"';
        }else if(reserva.medioReserva == 'facebook'){
          medioDeReserva = '<i title="Medio de reserva" class="fa fa-facebook" aria-hidden="true"></i>';
          ocultarEliminar = 'style="display:none"';
        }else if(reserva.medioReserva == 'instagram'){
          medioDeReserva = '<i title="Medio de reserva" class="fa fa-instagram" aria-hidden="true"></i>'; 
          ocultarEliminar = 'style="display:none"';
        }else if(reserva.medioReserva == 'phone'){
          medioDeReserva = '<i title="Medio de reserva" class="fa fa-phone" aria-hidden="true"></i>'; 
          ocultarEliminar = 'style="display:none"';
        }else if(reserva.medioReserva == 'whatsapp'){
          medioDeReserva = '<i title="Medio de reserva" class="fa fa-whatsapp" aria-hidden="true"></i>'; 
          ocultarEliminar = 'style="display:none"';
        }else if(reserva.medioReserva == 'mail'){
          medioDeReserva = '<i title="Medio de reserva" class="fa fa-envelope-o" aria-hidden="true"></i>'; 
          ocultarEliminar = 'style="display:none"';
        }else{
            medioDeReserva = '<i title="Medio de reserva" class="fa fa-globe" aria-hidden="true"></i>'; 
            ocultarEliminar = 'style="display:none"';
        }



        if(reserva.estadoReserva =="cumplida"){
          clasificar = '<td class="columsietepchon"><ul style="list-style: none; display: inline-flex;"><li><button title="Marcar como NO vino" class="btn btn-default botaccion" onclick="informarAsistencia(\'' + reserva.idReserva + '\', false)"><i class="fa fa-times" style=" font-size: 1.4em; color: #d20000;" aria-hidden="true"></i></button></li><li><button title="Marcar como SI vino" class="btn btn-default botaccion" onclick="informarAsistencia(\'' + reserva.idReserva + '\', true)"><i class="fa fa-check" style=" font-size: 1.4em; color: #0c9424;" aria-hidden="true"></i></button></li></ul></td>';
        }else if(reserva.estadoReserva =="vencida"){
          clasificar = '<td class="columsietepchon"><i title="No Vino" class="fa fa-times" style=" font-size: 1.4em; color: #d20000;" aria-hidden="true"></i></td>';
        }else if(reserva.estadoReserva =="confirmada"){
          clasificar = '<td class="columsietepchon"><i title="Vino" class="fa fa-check" style=" font-size: 1.4em; color: #0c9424;" aria-hidden="true"></i></td>';
        }else if(reserva.estadoReserva =="Cancelada"){
          clasificar = '<td class="columsietepchon"><i title="Cancelada" class="fa fa-ban" style=" font-size: 1.4em; color: #d20000;" aria-hidden="true"></i></td>';
          ocultarEliminar = 'style="display:none"';
        }else if(reserva.estadoReserva =="Calificada"){
          clasificar = '<td class="columsietepchon"><i title="Vino y Calificó" class="fa fa-check-square-o" style=" font-size: 1.4em; color: #0c9424;" aria-hidden="true"></i></td>';
        }else if(reserva.estadoReserva =="pendiente"){
          clasificar = '<td class="columsietepchon"><ul style="list-style: none; display: inline-flex;"><li><button title="Marcar como NO vino" class="btn btn-default botaccion" onclick="informarAsistencia(\'' + reserva.idReserva + '\', false)"><i class="fa fa-times" style=" font-size: 1.4em; color: #d20000;" aria-hidden="true"></i></button></li><li><button title="Marcar como SI vino" class="btn btn-default botaccion" onclick="informarAsistencia(\'' + reserva.idReserva + '\', true)"><i class="fa fa-check" style=" font-size: 1.4em; color: #0c9424;" aria-hidden="true"></i></button></li></ul></td>';
        }

        var observacion = '';
        if(typeof(reserva.comentarioUsuarioReserva) == "undefined"){
          observacion = '';
        }else if(reserva.comentarioUsuarioReserva == null){
          observacion = '';
        }else{
          observacion = reserva.comentarioUsuarioReserva;
        }

        var promocionReserva = "";
        if(typeof(reserva.idLocalPromocion) == "undefined"){
          promocionReserva ='<td class="centrarbotaccion"><i class="fa fa-exclamation-triangle alertareservas hidden"></i></td>';
        }else {
          promocionReserva = '<td class="centrarbotaccion"><i class="fa fa-exclamation-triangle alertareservas"></i></td>';
        }
        var opcionesMenu = "";
        if(reserva.opcionReservada != []){
          opcionesMenu = reserva.opcionReservada;
        }
        var nombrePromocion = "";
        if(typeof(reserva.nombrePromocion) != "undefined"){
          nombrePromocion = '<h4 class="elegiopcionreserva">'+reserva.nombrePromocion+'</h4>';
        }

        var iconoPromocion = "";
        if( typeof(reserva.iconoPromocion) != "undefined"){
          iconoPromocion = '<a href="#"><img class="etiquetapromo" src="'+reserva.iconoPromocion+'"></a>';
        }

         $('.container.'+conteinReservas).append(''+
             '<div class="panel panel-default">'+
                 '<div class="panel-heading">'+
                   '<p class="panel-title">'+
                     ''+
                     '<table class="table" style="margin-bottom: 0;">'+
                       '<tbody>'+
                         '<tr>'+
                           '<td style="width: 230px;">'+
                             reserva.nombreUsuarioReserva+
                           '</td>'+
                           '<td class="centrarbotaccion"><img title="Cantidad de adultos" src="imgs/adultos.png">'+reserva.cubiertosAdultos+'</td>'+
                           '<td class="centrarbotaccion"><img title="Cantidad de niños" src="imgs/ninos.png">'+reserva.cubiertosMenores+'</td>'+
                           '<td class="centrarbotaccion" style="min-width: 97px;">'+reserva.horaSola+' hs</td>'+
                           '<td class="centrarbotaccion"><i title="Medio de reserva" class="" aria-hidden="true"></i></td>'+
                           promocionReserva +
                           '<td class="centrarbotaccion">'+medioDeReserva+'</td>'+
                           '<td class="centrarbotaccion">'+
                           '<a data-toggle="collapse" data-parent="#accordion" href="#'+collapseReserva+'">'+
                             '<button title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button></a>'+
                             botonEditar +
                             '<button title="Eliminar" '+ ocultarEliminar +' class="btn btn-default botaccion" type="button" data-toggle="modal" onClick="mostrarModal(\''+ collapseReserva +'\',\''+cancelar+'\')"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button>'+
                           '</td>'+
                           clasificar+
                         '</tr>'+
                       '</tbody>'+
                     '</table>'+
                   '</p>'+
               '</div>'+
               '<div id="'+collapseReserva+'" class="panel-collapse collapse">'+
               '<div class="panel-body">'+
                 '<div class="container detallereservas">'+
                  '<div class="row">'+
                     '<div class="col-md-4">'+
                         '<p><i class="fa fa-mobile naranjabold" aria-hidden="true"></i>'+reserva.telefonoUsuarioReserva +'</p>'+
                         '<p><i class="fa fa-envelope-o naranjabold" aria-hidden="true"></i>'+reserva.email+'</p>'+
                         '<p class="naranjabold">Observaciones: '+observacion+'</p>'+
                      '</div>'+
                      '<div class="col-md-4">'+
                        nombrePromocion+
                        iconoPromocion+
                      '</div>'+
                      '<div class="col-md-4" id="contMenu'+collapseReserva+'">'+
                      '</div>'+
                  '</div>'+
                 '</div>'+
               '</div>'+
             '</div>'+
           '</div>'+

                 '<div class="modal fade" id="modal'+collapseReserva+'" role="dialog">'+
                 '<input type="text" name="id'+collapseReserva+'" id="id'+collapseReserva+'" value="" class="hidden">'+
                   '<div class="modal-dialog">'+
                     '<div class="modal-content">'+
                         '<div class="modal-header">'+
                          '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                          '<h4 class="modal-title" id="titulo'+collapseReserva+'"></h4>'+
                         '</div>'+
                     '<div class="modal-body">'+
                       '<p> '+reserva.nombreUsuarioReserva+' | '+medioDeReserva+'</p>'+
                       '<p>Reserva para'+
                       '<input type="text" class="form-control" id="cantAdultos'+collapseReserva+'" value="'+reserva.cubiertosAdultos+'" aria-describedby="sizing-addon3"> adultos</p>'+
                       '<input type="text" class="form-control" id="cantMenores'+collapseReserva+'" value="'+reserva.cubiertosMenores+'" aria-describedby="sizing-addon3"> menores</p>'+
                       '<p>El día'+
                       '<input type="text" class="form-control" id="fechaRe'+collapseReserva+'"  value="'+reserva.fechaReserva+'" aria-describedby="sizing-addon3"></p>'+
                       '<p>A las <input type="text" class="form-control" id="horaRe'+collapseReserva+'" value="'+reserva.horaSola+' hs" aria-describedby="sizing-addon3"></p>'+
                       '<p>Observaciones:</p>'+
                       '<p> <textarea class="form-control" rows="3" id="comment'+collapseReserva+'"></textarea></p>'+
                     '</div>'+
                   '<div class="modal-footer">'+
                     '<button id="botonGuardar'+collapseReserva+'" onClick="accion(\''+ collapseReserva +'\',\''+cancelar+'\')" type="button" class="btn btn-default" data-dismiss="modal"></button>'+
                     '<button id="botoncancelar" type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>'+
                   '</div>'+
                   '</div>'+  
                 '</div>'+
               '</div>'+
         '');

         _.each(opcionesMenu, function(opcion){
          if(opcion.cantidad == null){

          }else{
            $("#contMenu"+collapseReserva).append(''+
         
            '<div class="row separamenues">'+
              '<div class="col-md-6">'+
                '<h5 class="opcionmenureserva">'+opcion.nombreOpcion+'</h5>'+
              '</div> '+
              '<div class="col-md-6">'+
                '<p>Cantidad: <span class="naranjabold">'+opcion.cantidad+'</span></p>'+
              '</div>'+
            '</div>'+
           '');
          }
        });

           $("#id"+collapseReserva).val(reserva.idReserva);
           collapseReserva++;
           fecha = reserva.fechaReserva;
       });

       contLocales++;
   } );

   $('#loading').hide();
}

function mostrarModal(idModal,accion){
  if(accion == 'cancelar'){
     cancelar = 'cancelar';
     $('#titulo'+idModal).append('Cancelar Reserva');
     $('#botonGuardar'+idModal).html('');
     $('#botonGuardar'+idModal).append('Cancelar reserva');
     $( "#cantAdultos"+idModal).prop( "disabled", true );
     $( "#cantMenores"+idModal).prop( "disabled", true );
     $( "#fechaRe"+idModal).prop( "disabled", true );
     $( "#horaRe"+idModal).prop( "disabled", true );
     $("#modal"+idModal).modal("show");
  }else if(accion == 'editar'){
     cancelar = 'editar';
     $('#botonGuardar'+idModal).html('');
     $('#botonGuardar'+idModal).val(cancelar);
     $('#titulo'+idModal).append('Editar Reserva');
     $('#botonGuardar'+idModal).append('Editar reserva');
     $( "#cantAdultos"+idModal).prop( "enabled", true );
     $( "#cantMenores"+idModal).prop( "enabled", true );
     $( "#fechaRe"+idModal).prop( "enabled", true );
     $( "#horaRe"+idModal).prop( "enabled", true );
     $("#modal"+idModal).modal("show");
  }
}

function accion(idModal,accion){
    if(accion == 'cancelar'){
       var idReserva = $("#id"+idModal).val();
       cancelarReserva(idReserva, idModal);
    }else if(accion == 'editar'){
       var idReserva = $("#id"+idModal).val();
       editarReserva(idReserva, idModal);
    }
}

function cancelarReserva(idReserva, idModal){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
    $('.container.negocios').html('');
    $('#loading').html('<img class="img-responsive" src="/imgs/loading.gif">');
        var parametros = JSON.stringify({
            "comentarioLocal" : $("#comment"+idModal).val()
        });
    $.ajax({
        url: server + '/api/v1/admin/reservaCancelar?id='+ idReserva +"",
        type: 'POST',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {       
             obtenerListado();
    },

      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      },
      headers: {
        Authorization: 'JWT ' + jwt
      },
      data: parametros
  });
}

function editarReserva(idReserva, idModal){
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
        var cubiertosTotales = $("#cantAdultos"+idModal).val() + $("#cantMenores"+idModal).val() ;

    $('#loading').html('<img class="img-responsive" src="/imgs/loading.gif">');
        var parametros = JSON.stringify({
            "comentarioLocal" : $("#comment"+idModal).val(),
            "horaSola" : $("#horaRe"+idModal).val(),
            "cubiertosAdultos" : $("#cantAdultos"+idModal).val(),
            "cubiertosMenores" : $("#cantMenores"+idModal).val(),
            "fechaReserva" : $("#fechaRe"+idModal).val(),
            "cubiertosTotales" : cubiertosTotales
        });
    $.ajax({
        url: server + '/api/v1/admin/updateReservaEventual?id='+ idReserva +"",
        type: 'POST',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {       
             obtenerListado();
    },

      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      },
      headers: {
        Authorization: 'JWT ' + jwt
      },
      data: parametros
  });

}

function ocultarPestaña(pest,pest1, pest2){
  $('#'+pest1).hide();
  $('#'+pest2).hide();
  $('#'+pest).show();
}

function volverPanelLocal(){
   
  var tipoUsuario = $("#tipoUsuario").val();

  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
    var localEditado = $("#idLocal").val();
    var idNegocio = $("#idNegocio").val();

    $.ajax({
            url: server + '/api/v1/admin/local?id='+localEditado+"",
            type: 'GET',
            
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {

              if (tipoUsuario == 'superAdmin') {
                var idNegocio = data.idNegocio._id;
                var url = "../panel-locales.php?idLocal="+ localEditado+"&idNegocio="+ idNegocio +"";
                $(location).attr('href',url);
              } else if (tipoUsuario == 'usuarioNegocio') {
                var url = "../dashboard.php";
                $(location).attr('href',url);
              }
            } 
    });
}