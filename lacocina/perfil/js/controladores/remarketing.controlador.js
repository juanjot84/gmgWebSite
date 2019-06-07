
var contHombres=0; var contMujeres=0; var contOtrosSexo=0;
var rang1824=0; var rang2534=0; var rang3544=0; var rang4554=0; var rang5564=0; var rang65=0; var rang18=0;
var lunes=0; var martes=0; var miercoles=0; var jueves=0; var viernes=0; var sabado=0; var domingo=0; var feriado=0;
var dm1=0; var dm2=0; var dm3=0; var dm4=0; var dm5=0; var dm6=0; var dm7=0; var dm8=0; var dm9=0; var dm10=0; var dm11=0;
var dm12=0; var dm13=0; var dm14=0; var dm15=0; var dm16=0; var dm17=0; var dm18=0; var dm19=0; var dm20=0; var dm21=0; var dm22=0;
var dm23=0; var dm24=0; var dm25=0; var dm26=0; var dm27=0; var dm28=0; var dm29=0; var dm30=0; var dm31=0;
var lista = [];
var tituloInicio = '';
var tituloFin = '';
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
    tituloInicio = ultimos30;
    tituloFin = fechaHoy;
    graficarCharts(ultimos30, fechaHoy);
  }else if(accion == 'ultimos7'){
    var ult7 = new Date();
    var dayOfMonth = ult7.getDate();
    ult7.setDate(dayOfMonth - 7);
    var ultimos7 = ult7.getDate() + "/" + (ult7.getMonth() +1) + "/" + ult7.getFullYear();
    tituloInicio = ultimos7;
    tituloFin = fechaHoy;
    graficarCharts(ultimos7, fechaHoy);
  }else if(accion == 'ayer'){
    var ult1 = new Date();
    var dayOfMonth = ult1.getDate();
    ult1.setDate(dayOfMonth - 1);
    var ayer = ult1.getDate() + "/" + (ult1.getMonth() +1) + "/" + ult1.getFullYear();
    tituloInicio = ayer;
    tituloFin = fechaHoy;
    graficarCharts(ayer, fechaHoy);
  }else if(accion == 'esteMes'){
    var ini = new Date();
    var inicioMes = 01 + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
    tituloInicio = inicioMes;
    tituloFin = fechaHoy;
    graficarCharts(inicioMes, fechaHoy);
  }else if(accion == 'mesPasado'){
    var ini = new Date();
    ini.setDate(1);
    var dayOfMonth = ini.getDate();
    ini.setDate(dayOfMonth - 1);
    var finMesAnt = ini.getDate() + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
    var inicioMesAnt = 01 + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
    tituloInicio = inicioMesAnt;
    tituloFin = finMesAnt;
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
      lista = [];
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
          
          var estadoReserva = '';
          if(reserva.estadoReserva == 'cumplida' || reserva.estadoReserva == 'Cumplida'){
            estadoReserva = 'Cumplida';
          }else if(reserva.estadoReserva == 'pendiente' || reserva.estadoReserva == 'Pendiente'){
            estadoReserva = 'Pendiente';
          }else if(reserva.estadoReserva == 'cancelada' || reserva.estadoReserva == 'Cancelada'){
            estadoReserva = 'Cancelada';
          }else if(reserva.estadoReserva == 'vencida' || reserva.estadoReserva == 'Vencida'){
            estadoReserva = 'Vencida';
          }else if(reserva.estadoReserva == 'confirmada' || reserva.estadoReserva == 'Confirmada'){
            estadoReserva = 'Confirmada';
          }

          var registro = [estadoReserva, reserva.fechaReserva, reserva.nombreUsuarioReserva, reserva.cubiertosTotales];
          lista.push(registro);
      });
    });
    $("#mensajeSinReservas").html('');
    $("#tituloLista").html('');
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartSexo);
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawChartEdad);
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartDiasSemana);
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartDiasMes);
    $("#tituloLista").append('<p>Listado de reservas entre el: '+tituloInicio+' y el: '+tituloFin+'</p>');
    google.charts.load('current', {'packages':['table']});
    google.charts.setOnLoadCallback(drawTable);

    },
    error:function(jqXHR,textStatus,errorThrown){
      $("#mensajeSinReservas").html('');
      $("#mensajeSinReservas").append(''+
      '<i class="fa fa-exclamation-circle iconoalertarmkt" aria-hidden="true"></i>'+
      '<h4 class="alertagraficos">OOPS! No se encontraron datos <br>para el rango de fechas seleccionado.</h4>'+
      '');
      tituloInicio = '';
      tituloFin = '';
      $("#tituloLista").html('');
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartSexo);
      google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawChartEdad);
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartDiasSemana);
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartDiasMes);
      $("#tituloLista").append('<p>Listado de reservas entre el: '+tituloInicio+' y el: '+tituloFin+'</p>');
      google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);
  },
  data: rango
});

}


function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Estado');
  data.addColumn('string', 'Fecha');
  data.addColumn('string', 'Nombre');
  data.addColumn('number', 'Cantidad de personas');
  
  data.addRows(lista);

  var table = new google.visualization.Table(document.getElementById('tablaReservas'));

  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
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

function crearPDF(){
  var imgData = 'data:image/jpeg;base64,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';
  var columns = ["Estado reserva", "Fecha", "Nombre", "Cantidad de personas"];
  var rows = lista;
  
  var doc = new jsPDF('p', 'pt');
  var totalPagesExp = "{total_pages_count_string}";

  var pageContent = function (data) {
    // HEADER
    doc.setFontSize(14);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.addImage(imgData, 'JPEG',10,10, 180, 60);

    doc.text('Listado de reservas desde el '+tituloInicio+' al ' + tituloFin , data.settings.margin.left + 85, 80);

    // FOOTER
    var str = "Página " + data.pageCount;

    doc.setFontSize(10);
    doc.text(str, data.settings.margin.left, doc.internal.pageSize.height - 10);
};

doc.autoTable(columns, rows, {
  addPageContent: pageContent,
  margin: {top: 91}
 });
doc.save('reservas_'+tituloInicio+'_al_'+tituloFin+'.pdf');
}


function drawChartDiasSemana() {

  var data = google.visualization.arrayToDataTable([
    ['Dias', 'Reservas'],['Lunes',  lunes],['Martes',  martes],['Miércoles',  miercoles],['Jueves',  jueves],['Viernes',  viernes],
    ['Sábado',  sabado],['Domingo',  domingo],['Feriado',  feriado]
  ]);

  var options = {
    title: '',
    hAxis: {title: 'Dias',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chartDiasSemana'));
  chart.draw(data, options);
}

function drawChartEdad() {

  var data = google.visualization.arrayToDataTable([
      ['Rango de edades', 'Personas', { role: 'style' }],['18 - 24', rang1824, '#b87333'],['25 - 34', rang2534, 'silver'],          
      ['35 - 44', rang3544, 'gold'],['45 - 54', rang4554, 'color: #e5e4e2' ],['55 - 64', rang5564, '#b87333'],
      ['Mas de 65', rang65, '#b87333'],['Otros', rang18, '#b87333']
   ]);
   
   var options = {
     width: 600,
     height: 400,
     chart: {
       title: ''
     },
   };

   var materialChart = new google.charts.Bar(document.getElementById('chartEdad'));
   materialChart.draw(data, options);
 }

function drawChartSexo() {

  var dataSexo = google.visualization.arrayToDataTable([
    ['Sexo', 'Cantidad'],['Masculino', contHombres],['Femenino', contMujeres],['Otros',contOtrosSexo]
   ]);
  var options = {
    width: 600,
    height: 400,
    title: '',
    is3D: true
  };
  var chart = new google.visualization.PieChart(document.getElementById('chartSexo'));
  chart.draw(dataSexo, options);
}

function volverPanelLocal(){
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
               var tipoUsuario = $("#tipoUsuario").val();
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