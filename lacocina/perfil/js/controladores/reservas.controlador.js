
obtenerListado();


function obtenerListado() {
    var idNegocio = $('#idNegocio').val();
    $('.container.negocios').html('');
    $('#target').html('obteniendo...');
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
          
          if(fecha != reserva.fechaSola){
            fecha = reserva.fechaSola;
            conteinReservas++;
            $('.container.'+contLocales).append(''+
                '<h3 >'+fecha+'</h3>'+
                '<div class="container '+conteinReservas+'"></div>'+
            '');
            
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
                            '<td><i class="fa fa-cutlery" aria-hidden="true"></i></td>'+
                            '<td class="centrarbotaccion">'+
                              '<button title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>'+
                              '<button title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button>'+
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
          '');
          

            collapseReserva++;
            fecha = reserva.fechaSola;
        });



        contLocales++; 
    } );


}


