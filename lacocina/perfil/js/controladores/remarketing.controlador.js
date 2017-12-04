
function setJWT(jwtToken){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
       if (_.isNil(jwtToken) || _.isEmpty(jwtToken)) {    
       } 
    });
  }

function generarCharts(accion){
  var f = new Date();
  var fechaHoy = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
  
  if(accion == 'ultimos30'){
    var ult30 = new Date();
    var dayOfMonth = ult30.getDate();
    ult30.setDate(dayOfMonth - 30);
    var ultimos30 = ult30.getDate() + "/" + (ult30.getMonth() +1) + "/" + ult30.getFullYear();
    alert(ultimos30);
    graficarCharts(ultimos30, fechaHoy);
  }else if(accion == 'ultimos7'){
    var ult7 = new Date();
    var dayOfMonth = ult7.getDate();
    ult7.setDate(dayOfMonth - 7);
    var ultimos7 = ult7.getDate() + "/" + (ult7.getMonth() +1) + "/" + ult7.getFullYear();
    alert(ultimos7);
    graficarCharts(ultimos7, fechaHoy);
  }else if(accion == 'ayer'){
    var ult1 = new Date();
    var dayOfMonth = ult1.getDate();
    ult1.setDate(dayOfMonth - 1);
    var ayer = ult1.getDate() + "/" + (ult1.getMonth() +1) + "/" + ult1.getFullYear();
    alert(ayer);
    graficarCharts(ayer, fechaHoy);
  }else if(accion == 'esteMes'){
    var ini = new Date();
    var inicioMes = 01 + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
    alert(inicioMes);
    graficarCharts(inicioMes, fechaHoy);
  }else if(accion == 'mesPasado'){
    var ini = new Date();
    ini.setDate(1);
    var dayOfMonth = ini.getDate();
    ini.setDate(dayOfMonth - 1);
    var finMesAnt = ini.getDate() + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
    var inicioMesAnt = 01 + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
    alert(inicioMesAnt +'-'+finMesAnt);
    graficarCharts(inicioMesAnt, finMesAnt);
  }
}

function graficarCharts(fechaInicio, fechaFin){

  var idLocal = $("#idLocal").val();
  var rango = JSON.stringify({
   "fechaInicio":"01/01/2010",
   "fechaFin":"31/12/2018"
  });
$.ajax({
    url: server + '/api/v1/admin/getReservasXFechaLocal?id=' + idLocal,
    type: "POST", 
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      var contHombres = 0;
      var contMujeres = 0;
      var contOtrosSexo = 0;
      _.each(data, function(reservas){ 
        _.each(reservas, function(reserva){ 
          if(reserva.sexoReserva == 'male' || reserva.sexoReserva == 'masculino' || reserva.sexoReserva == 'Hombre'){
            contHombres++;
          }else if(reserva.sexoReserva == 'female' || reserva.sexoReserva == 'femenino' || reserva.sexoReserva == 'Mujer'){
            contMujeres++;
          }else if(reserva.sexoReserva != 'male' && reserva.sexoReserva != 'masculino' && reserva.sexoReserva != 'Hombre' && reserva.sexoReserva != 'female' && reserva.sexoReserva != 'femenino' && reserva.sexoReserva != 'Mujer'){
            contOtrosSexo++;
          }
      });
    });
      
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartSexo);

    function drawChartSexo() {
      var dataSexo = google.visualization.arrayToDataTable([
        ['Sexo', 'Cantidad'],
        ['Masculino', contHombres],
        ['Femenino', contMujeres],
        ['Otros',contOtrosSexo]
       ]);

      var options = {
        title: ''
      };

      var chart = new google.visualization.PieChart(document.getElementById('chartSexo'));

      chart.draw(dataSexo, options);
    }
   //  alert('hombres: '+contHombres +' Mujeres: '+ contMujeres+' Otros: '+contOtrosSexo);

    },
    error:function(jqXHR,textStatus,errorThrown)
    {
  },
  data: rango
});

}