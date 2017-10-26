
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
            reservas = data;
          _.each(data, function(reservasLocal){
              renderReservas(reservasLocal);
          });
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
    
    var cantLocales = reservasLocal.length;
    
    for(i = 0; i < cantLocales; i++){
      $('.container.locales').append(''+
          ' <div class="panel panel-default">'+
            '<div class="panel-heading">'+
                      '<p class="panel-title">'+
                        '<a data-toggle="collapse" data-parent="#accordion" href="#'+i+'">'+
                        '<table class="table" style="margin-bottom: 0;">'+                        
                            '<tbody>'+
                                '<tr>'+
                                    '<td>'+
                                      '  Local calle  ' + reservasLocal[i][i].idLocal.calleLocal + ' ('+ reservasLocal[i][i].idLocal.alturaLocal + ')'+
                                   ' </td>'+
                               ' </tr>'+
                            '</tbody>'+
                       ' </table></a>'+
                    '  </p>'+
                    '</div>'+
                   ' <div id="'+i+'" class="panel-collapse collapse in">'+
                      '<div class="panel-body">'+
                        '<div class="row">'+
                           ' <div class="col-md-12">'+
                           '<div class="container dias"> </div>'+
                          '  </div>'+
                        '</div>'+
                      '</div>'+
                   ' </div>'+
               ' </div>');
      var cantReservasLocal = reservasLocal[i].length;

      for(z = 0; z < cantReservasLocal; z++){

       // var anio = reservasLocal[i][z].fechaReserva.substr(6,9);
        var mes = reservasLocal[i][z].fechaReserva.substr(3,3);
        alert(mes);
        $('.container.dias').append('');

      }


    }




    var cantReservasLocal = reservasLocal[0].length;
    


       
    

 // $('.container.locales').append('');
}