
var contHombres = 0;
var contMujeres = 0;
var contOtrosSexo = 0;
var rang1824 = 0;
var rang2534 = 0;
var rang3544 = 0;
var rang4554 = 0;
var rang5564 = 0;
var rang65 = 0;
var rang18 = 0;

/*
function setJWT(jwtToken){
       if (_.isNil(jwtToken) || _.isEmpty(jwtToken)) {    
       }  
  }
  */

generarCharts('esteMes');

function generarCharts(accion){
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
  var f = new Date();
  var fechaHoy = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(); 
  if(accion == 'ultimos30'){
    var ult30 = new Date();
    var dayOfMonth = ult30.getDate();
    ult30.setDate(dayOfMonth - 30);
    var ultimos30 = ult30.getDate() + "/" + (ult30.getMonth() +1) + "/" + ult30.getFullYear();
 //   alert(ultimos30);
    graficarCharts(ultimos30, fechaHoy);
  }else if(accion == 'ultimos7'){
    var ult7 = new Date();
    var dayOfMonth = ult7.getDate();
    ult7.setDate(dayOfMonth - 7);
    var ultimos7 = ult7.getDate() + "/" + (ult7.getMonth() +1) + "/" + ult7.getFullYear();
  //  alert(ultimos7);
    graficarCharts(ultimos7, fechaHoy);
  }else if(accion == 'ayer'){
    var ult1 = new Date();
    var dayOfMonth = ult1.getDate();
    ult1.setDate(dayOfMonth - 1);
    var ayer = ult1.getDate() + "/" + (ult1.getMonth() +1) + "/" + ult1.getFullYear();
  //  alert(ayer);
    graficarCharts(ayer, fechaHoy);
  }else if(accion == 'esteMes'){
    var ini = new Date();
    var inicioMes = 01 + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
  //  alert(inicioMes);
    graficarCharts(inicioMes, fechaHoy);
  }else if(accion == 'mesPasado'){
    var ini = new Date();
    ini.setDate(1);
    var dayOfMonth = ini.getDate();
    ini.setDate(dayOfMonth - 1);
    var finMesAnt = ini.getDate() + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
    var inicioMesAnt = 01 + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
 //   alert(inicioMesAnt +'-'+finMesAnt);
    graficarCharts(inicioMesAnt, finMesAnt);
  }
});
}

function graficarCharts(fechaInicio, fechaFin){
  var idLocal = $("#idLocal").val();
  var rango = JSON.stringify({
   "fechaInicio":fechaInicio,
   "fechaFin":fechaFin
  });
$.ajax({
    url: server + '/api/v1/admin/getReservasXFechaLocal?id=' + idLocal,
    type: "POST", 
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      contHombres = 0; contMujeres = 0; contOtrosSexo = 0;
      rang1824 = 0; rang2534 = 0; rang3544 = 0; rang4554 = 0; rang5564 = 0; rang65 = 0; rang18 = 0;
      _.each(data, function(reservas){ 
        _.each(reservas, function(reserva){ 
          if(reserva.sexoReserva == 'male' || reserva.sexoReserva == 'masculino' || reserva.sexoReserva == 'Hombre'){
            contHombres++;
          }else if(reserva.sexoReserva == 'female' || reserva.sexoReserva == 'femenino' || reserva.sexoReserva == 'Mujer'){
            contMujeres++;
          }else if(reserva.sexoReserva != 'male' && reserva.sexoReserva != 'masculino' && reserva.sexoReserva != 'Hombre' && reserva.sexoReserva != 'female' && reserva.sexoReserva != 'femenino' && reserva.sexoReserva != 'Mujer'){
            contOtrosSexo++;
          }

          if(reserva.edadReserva > 17 && reserva.edadReserva < 25){
             rang1824++;
          }else if(reserva.edadReserva > 24 && reserva.edadReserva < 35){
             rang2534++;
          }else if(reserva.edadReserva > 34 && reserva.edadReserva < 45){
             rang3544++;
          }else if(reserva.edadReserva > 44 && reserva.edadReserva < 55){
             rang4554++;
          }else if(reserva.edadReserva > 54 && reserva.edadReserva < 65){
            rang5564++;
          }else if(reserva.edadReserva > 64){
            rang65++;
          }else if(reserva.edadReserva < 18){
            rang18++;
          }
      });
    });    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartSexo);
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawChartEdad);
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
  },
  data: rango
});

}

function drawChartEdad() {
  var titulo = '';
  if(rang1824 == 0 && rang2534 == 0 && rang3544 == 0 && rang4554 == 0 && rang5564 == 0 && rang65 == 0){
    titulo = 'No hay datos para los dias seleccionados'
  }
  var data = google.visualization.arrayToDataTable([
      ['Rango de edades', 'Personas', { role: 'style' }],
      ['18 - 24', rang1824, '#b87333'],
      ['25 - 34', rang2534, 'silver'],          
      ['35 - 44', rang3544, 'gold'],
      ['45 - 54', rang4554, 'color: #e5e4e2' ],
      ['55 - 64', rang5564, '#b87333'],
      ['Mas de 65', rang65, '#b87333'],
      ['Otros', rang18, '#b87333'],
   ]);
   
   var options = {
     width: 600,
     height: 400,
     chart: {
       title: titulo
     },
   };

   var materialChart = new google.charts.Bar(document.getElementById('chartEdad'));
   materialChart.draw(data, options);
 }

function drawChartSexo() {
  var titulo = '';
  if(contHombres == 0 && contMujeres == 0 && contOtrosSexo == 0){
     titulo = 'No hay datos para los dias seleccionados'
  }
  var dataSexo = google.visualization.arrayToDataTable([
    ['Sexo', 'Cantidad'],
    ['Masculino', contHombres],
    ['Femenino', contMujeres],
    ['Otros',contOtrosSexo]
   ]);
  var options = {
    width: 600,
    height: 400,
    title: titulo,
    is3D: true
  };
  var chart = new google.visualization.PieChart(document.getElementById('chartSexo'));
  chart.draw(dataSexo, options);
}