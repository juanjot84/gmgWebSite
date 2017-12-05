
var contHombres=0; var contMujeres=0; var contOtrosSexo=0;
var rang1824=0; var rang2534=0; var rang3544=0; var rang4554=0; var rang5564=0; var rang65=0; var rang18=0;
var lunes=0; var martes=0; var miercoles=0; var jueves=0; var viernes=0; var sabado=0; var domingo=0; var feriado=0;
var dm1=0; var dm2=0; var dm3=0; var dm4=0; var dm5=0; var dm6=0; var dm7=0; var dm8=0; var dm9=0; var dm10=0; var dm11=0;
var dm12=0; var dm13=0; var dm14=0; var dm15=0; var dm16=0; var dm17=0; var dm18=0; var dm19=0; var dm20=0; var dm21=0; var dm22=0;
var dm23=0; var dm24=0; var dm25=0; var dm26=0; var dm27=0; var dm28=0; var dm29=0; var dm30=0; var dm31=0;
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
      lunes = 0; martes = 0; miercoles = 0; jueves = 0; viernes = 0; sabado = 0; domingo = 0; feriado = 0;
      dm1=0; dm2=0; dm3=0; dm4=0; dm5=0; dm6=0; dm7=0; dm8=0; dm9=0; dm10=0; dm11=0;
      dm12=0; dm13=0; dm14=0; dm15=0; dm16=0; dm17=0; dm18=0; dm19=0; dm20=0; dm21=0; dm22=0;
      dm23=0; dm24=0; dm25=0; dm26=0; dm27=0; dm28=0; dm29=0; dm30=0; dm31=0;
      _.each(data, function(reservas){ 
        _.each(reservas, function(reserva){ 
          if(reserva.sexoReserva == 'male' || reserva.sexoReserva == 'masculino' || reserva.sexoReserva == 'Hombre'){contHombres++;}
          else if(reserva.sexoReserva == 'female' || reserva.sexoReserva == 'femenino' || reserva.sexoReserva == 'Mujer'){contMujeres++;}
          else if(reserva.sexoReserva != 'male' && reserva.sexoReserva != 'masculino' && reserva.sexoReserva != 'Hombre' && reserva.sexoReserva != 'female' 
          && reserva.sexoReserva != 'femenino' && reserva.sexoReserva != 'Mujer'){contOtrosSexo++;}

          if(reserva.edadReserva > 17 && reserva.edadReserva < 25){rang1824++;}else if(reserva.edadReserva > 24 && reserva.edadReserva < 35){rang2534++;}
          else if(reserva.edadReserva > 34 && reserva.edadReserva < 45){rang3544++;}else if(reserva.edadReserva > 44 && reserva.edadReserva < 55){rang4554++;}
          else if(reserva.edadReserva > 54 && reserva.edadReserva < 65){rang5564++;}else if(reserva.edadReserva > 64){rang65++;}else if(reserva.edadReserva < 18)
          {rang18++;}

          if(reserva.diaReserva == 'Lunes'){lunes++;}else if(reserva.diaReserva == 'Martes'){martes++;}else if(reserva.diaReserva == 'Miercoles'){miercoles++;}
          else if(reserva.diaReserva == 'Jueves'){jueves++;}else if(reserva.diaReserva == 'Viernes'){viernes++;}else if(reserva.diaReserva == 'Sabado'){sabado++;}
          else if(reserva.diaReserva == 'Domingo'){domingo++;}else if(reserva.diaReserva == 'Feriado'){feriado++;}

          var dia = reserva.fechaReserva.substr(0,2);
          if(dia=='01'){dm1++;}else if(dia=='02'){dm2++;}else if(dia=='03'){dm3++;}else if(dia=='04'){dm4++;}else if(dia=='05'){dm5++;}else if(dia=='06'){dm6++;}
          else if(dia=='07'){dm7++;}else if(dia=='08'){dm8++;}else if(dia=='09'){dm9++;}else if(dia=='10'){dm10++;}else if(dia=='11'){dm11++;}else if(dia=='12'){dm12++;}
          else if(dia=='13'){dm13++;}else if(dia=='14'){dm14++;}else if(dia=='15'){dm15++;}else if(dia=='16'){dm16++;}else if(dia=='17'){dm17++;}else if(dia=='18'){dm18++;}
          else if(dia=='19'){dm19++;}else if(dia=='20'){dm20++;}else if(dia=='21'){dm21++;}else if(dia=='22'){dm22++;}else if(dia=='23'){dm23++;}else if(dia=='24'){dm24++;}
          else if(dia=='25'){dm25++;}else if(dia=='26'){dm26++;}else if(dia=='27'){dm27++;}else if(dia=='28'){dm28++;}else if(dia=='29'){dm29++;}else if(dia=='30'){dm30++;}
          else if(dia=='31'){dm31++;}
      });
    });    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartSexo);
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawChartEdad);
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartDiasSemana);
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartDiasMes);
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
  },
  data: rango
});

}

function drawChartDiasMes() {
  var data = google.visualization.arrayToDataTable([
    ['Día',  'Reservas'],['Día 1',dm1],['Día 2',dm2],['Día 3',dm3],['Día 4',dm4],['Día 5',dm5],['Día 6',dm6],['Día 7',dm7],['Día 8',dm8],['Día 9',dm9],['Día 10',dm10],
    ['Día 11',dm11],['Día 12',dm12],['Día 13',dm13],['Día 14',dm14],['Día 15',dm15],['Día 16',dm16],['Día 17',dm17],['Día 18',dm18],['Día 19',dm19],['Día 20',dm20],
    ['Día 21',dm21],['Día 22',dm22],['Día 23',dm23],['Día 24',dm24],['Día 25',dm25],['Día 26',dm26],['Día 27',dm27],['Día 28',dm28],['Día 29',dm29],['Día 30',dm30],
    ['Día 31',dm31]
  ]);

  var options = {
    title: '',
    hAxis: {title: 'Dias del mes',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chartDiasMes'));
  chart.draw(data, options);
}


function drawChartDiasSemana() {
var titulo = '';
if(lunes == 0 && martes == 0 && miercoles == 0 && jueves == 0 && viernes == 0 && sabado == 0 && domingo == 0 && feriado == 0){
  titulo = 'No hay datos para los dias seleccionados';
}
  var data = google.visualization.arrayToDataTable([
    ['Dias', 'Personas'],
    ['Lunes',  lunes],
    ['Martes',  martes],
    ['Miércoles',  miercoles],
    ['Jueves',  jueves],
    ['Viernes',  viernes],
    ['Sábado',  sabado],
    ['Domingo',  domingo],
    ['Feriado',  feriado]
  ]);

  var options = {
    title: titulo,
    hAxis: {title: 'Dias',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chartDiasSemana'));
  chart.draw(data, options);
}

function drawChartEdad() {
  var titulo = '';
  if(rang1824 == 0 && rang2534 == 0 && rang3544 == 0 && rang4554 == 0 && rang5564 == 0 && rang65 == 0){
    titulo = 'No hay datos para los dias seleccionados';
  }
  var data = google.visualization.arrayToDataTable([
      ['Rango de edades', 'Personas', { role: 'style' }],
      ['18 - 24', rang1824, '#b87333'],
      ['25 - 34', rang2534, 'silver'],          
      ['35 - 44', rang3544, 'gold'],
      ['45 - 54', rang4554, 'color: #e5e4e2' ],
      ['55 - 64', rang5564, '#b87333'],
      ['Mas de 65', rang65, '#b87333'],
      ['Otros', rang18, '#b87333']
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