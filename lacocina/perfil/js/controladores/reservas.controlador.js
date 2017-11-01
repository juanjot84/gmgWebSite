
obtenerListado();


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
          if (reserva.medioReserva == 'gmg'){
            medioDeReserva = 'fa fa-cutlery';
            botonEditar = '';
          }else{
              botonEditar = '<button title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
          }

          $('.container.'+conteinReservas).append(''+
              '<div class="panel panel-default">'+
                  '<div class="panel-heading">'+
                    '<p class="panel-title">'+
                      '<a data-toggle="collapse" data-parent="#accordion" href="#'+collapseReserva+'">'+
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
                              '<button title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>'+
                              botonEditar +
                              '<button title="Eliminar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button>'+
                            '</td>'+
                          '</tr>'+
                        '</tbody>'+
                      '</table></a>'+
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

                  '<div class="modal fade" id="myModal" role="dialog">'+
                    '<div class="modal-dialog">'+
                      '<div class="modal-content">'+
                          '<div class="modal-header">'+
                           '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                           '<h4 class="modal-title">Editar Reserva</h4>'+
                          '</div>'+
                      '<div class="modal-body">'+
                        '<p>Juan Carlos Hernandez | <i class="fa fa-cutlery" aria-hidden="true"></i> </p>'+
                        '<p><span style="font-size: 1.5em;"><strong>Bardot</strong> | Comer &amp; Beber</span></p>'+
                        '<p>Reserva para'+
                        '<input type="text" class="form-control" placeholder="3" aria-describedby="sizing-addon3"> personas</p>'+
                        '<p>El día'+
                        '<input type="text" class="form-control" placeholder="3 de octubre" aria-describedby="sizing-addon3"></p>'+
                        '<p>A las <input type="text" class="form-control" placeholder="21:00 hs" aria-describedby="sizing-addon3"></p>'+
                        '<p>Observaciones:</p>'+
                        '<p> <textarea class="form-control" rows="3" id="comment"></textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
                      '</div>'+
                    '<div class="modal-footer">'+
                      '<button id="botonGuardar" type="button" class="btn btn-default" data-dismiss="modal">Guardar cambios</button>'+
                      '<button id="botoncancelar" type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>'+
                    '</div>'+
                    '</div>'+  
                  '</div>'+
                '</div>'+
          '');


            collapseReserva++;
            fecha = reserva.fechaReserva;
        });



        contLocales++;
    } );

    $('#loading').hide();
}
