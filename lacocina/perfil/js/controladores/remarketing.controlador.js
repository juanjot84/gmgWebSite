
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
  }else if(accion == 'ultimos7'){
    var ult7 = new Date();
    var dayOfMonth = ult7.getDate();
    ult7.setDate(dayOfMonth - 7);
    var ultimos7 = ult7.getDate() + "/" + (ult7.getMonth() +1) + "/" + ult7.getFullYear();
    alert(ultimos7);
  }else if(accion == 'ayer'){
    var ult1 = new Date();
    var dayOfMonth = ult1.getDate();
    ult1.setDate(dayOfMonth - 1);
    var ayer = ult1.getDate() + "/" + (ult1.getMonth() +1) + "/" + ult1.getFullYear();
    alert(ayer);
  }else if(accion == 'esteMes'){
    var ini = new Date();
    var inicioMes = 01 + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
    alert(inicioMes);
  }else if(accion == 'mesPasado'){
    var ini = new Date();
    ini.setDate(1);
    var dayOfMonth = ini.getDate();
    ini.setDate(dayOfMonth - 1);
    var finMesAnt = ini.getDate() + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
    var inicioMesAnt = 01 + "/" + (ini.getMonth() +1) + "/" + ini.getFullYear();
    alert(inicioMesAnt +'-'+finMesAnt);
  }
}

function graficarCharts(fechaInicio, fechaFin){

}