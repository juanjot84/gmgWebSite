
var jwt;




function obtenerListado() {
    var idNegocio = $('#idNegocio').val();
    $('.container.negocios').html('');
    $('#loading').html('<img class="img-responsive" src="/imgs/loading.gif">');
    $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/reservasPendienteNegocio?id='+ idNegocio +"",
        type: 'GET',
        dataType: "json",
        crossDomain: true,
        contentType:"application/json",
        success: function (data) {
             renderReservas(data);
             
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

      $('.container.locales').append(''+
          '<div class="panel panel-default">'+
              '<div class="panel-heading">'+
                  '<p class="panel-title">'+
                    '<a data-toggle="collapse" data-parent="#accordion" href="#'+index+'">'+
                      '<table class="table" style="margin-bottom: 0;">'+
                        '<tbody>'+
                          '<tr>'+
                            '<td>'+
                            '  Local calle  ' + local[0].calleLocal + ' ('+ local[0].alturaLocal + ')'+
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
          var botonEditar = '';
          var nombreBoton = '';
          var tituloModal = '';
          var cancelar = 'cancelar';
          var editar = 'editar';

          if (reserva.medioReserva == 'gmg'){
            medioDeReserva = 'fa fa-cutlery';
         //   botonEditar = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
          }else{
              medioDeReserva = 'fa fa-globe';
          //    botonEditar = '<button title="Editar" onClick="mostrarModal(\''+ collapseReserva +'\',\''+editar+'\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';

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
                            '<td><img src="imgs/adultos.png">'+reserva.cubiertosAdultos+'</td>'+
                            '<td><img src="imgs/ninos.png">'+reserva.cubiertosMenores+'</td>'+
                            '<td>'+reserva.horaSola+' hs</td>'+
                            '<td><i class="'+medioDeReserva+'" aria-hidden="true"></i></td>'+
                            '<td class="centrarbotaccion">'+
                            '<a data-toggle="collapse" data-parent="#accordion" href="#'+collapseReserva+'">'+
                              '<button title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button></a>'+
                              botonEditar +
                              '<button title="Eliminar" class="btn btn-default botaccion" type="button" data-toggle="modal" onClick="mostrarModal(\''+ collapseReserva +'\',\''+cancelar+'\')"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button>'+
                            '</td>'+
                          '</tr>'+
                        '</tbody>'+
                      '</table>'+
                    '</p>'+
                '</div>'+
                '<div id="'+collapseReserva+'" class="panel-collapse collapse">'+
                    '<div class="panel-body">'+
                      '<p><i class="fa fa-mobile" aria-hidden="true"></i>'+reserva.telefonoUsuarioReserva +'</p>'+
                      '<p><i class="fa fa-envelope-o" aria-hidden="true"></i>'+reserva.email+'</p>'+
                      '<p>Observaciones:</p>'+
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
                        '<p> '+reserva.nombreUsuarioReserva+' | <i class="'+medioDeReserva+'" aria-hidden="true"></i> </p>'+
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

function setJWT(jwtToken){
  if (_.isNil(jwtToken)) {
    //redireccionar al loguin
  } else {
    
    jwt = jwtToken;
    obtenerListado(); 
    } 
};


function cancelarReserva(idReserva, idModal){
    $('.container.negocios').html('');
    $('#loading').html('<img class="img-responsive" src="/imgs/loading.gif">');
        var parametros = JSON.stringify({
            "comentarioLocal" : $("#comment"+idModal).val()
        });
    $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/reservaCancelar?id='+ idReserva +"",
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
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/updateReservaEventual?id='+ idReserva +"",
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
