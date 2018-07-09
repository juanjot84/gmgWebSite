$(document).ready(function () {
   
    
   $('.collapse').collapse("hide")
    
});

/*************Sliders Selectores*/
    

/********************Configurar Horarios*/
/*Lunes*/
 var sliderLunest1 = new rSlider({
                    target: '#horaLunest1',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: ["09:30", "13:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });


 var sliderLunest2 = new rSlider({
                    target: '#horaLunest2',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: [21, "01:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });
  
/*MArtes*/
 var sliderMartest1 = new rSlider({
                    target: '#horaMartest1',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: ["09:30", "13:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });


 var sliderMartest2 = new rSlider({
                    target: '#horaMartest2',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: [21, "01:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });
  
/*Miercoles*/
 var sliderMiercolest1 = new rSlider({
                    target: '#horaMiercolest1',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: ["09:30", "13:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });


 var sliderMiercolest2 = new rSlider({
                    target: '#horaMiercolest2',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                   set: [21, "01:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });

/*Jueves*/
 var sliderJuevest1 = new rSlider({
                    target: '#horaJuevest1',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: ["09:30", "13:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });


 var sliderJuevest2 = new rSlider({
                    target: '#horaJuevest2',
                 values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: [21, "01:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });

/*Viernes*/
 var sliderViernest1 = new rSlider({
                    target: '#horaViernest1',
                  values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                   set: ["09:30", "13:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });


 var sliderViernest2 = new rSlider({
                    target: '#horaViernest2',
                   values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: [21, "01:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });

/*Sabados*/
 var sliderSabadot1 = new rSlider({
                    target: '#horaSabadot1',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: ["09:30", "13:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });


 var sliderSabadot2 = new rSlider({
                    target: '#horaSabadot2',
                   values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: [21, "01:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });
  /*Domingos*/
 var sliderDomingot1 = new rSlider({
                    target: '#horaDomingot1',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: [11, 15],
                    scale: true,
                    labels: false,
                    disabled: true, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });


 var sliderDomingot2 = new rSlider({
                    target: '#horaDomingot2',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",24 , "24:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                   set: [21, "01:30"],
                    scale: true,
                    labels: false,
                    disabled: false, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });
  
  
  /*Feriados*/
 var sliderFeriadot1 = new rSlider({
                    target: '#horaFeriadot1',
                   values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",00 , "00:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: [11, 15],
                    scale: true,
                    labels: false,
                    disabled: true, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });


 var sliderFeriadot2 = new rSlider({
                    target: '#horaFeriadot2',
                    values: [06, "06:30", 07,"07:30", 08,"08:30",09,"09:30", 10,"10:30", 11, "11:30",12, "12:30",13,"13:30", 14,"14:30", 15,"15:30",16,"16:30", 17, "17:30",18, "18:30",19, "19:30",20,"20:30", 21, "21:30",22,"22:30", 23, "23:30",00 , "00:30", 01, "01:30", 02,"02:30"  ,03,"03:30" , 04,"04:30" , 5, "05:30"],
                    step: 1,
                    range: true,
                    set: [20, 1],
                    scale: true,
                    labels: false,
                    disabled: true, // is disabled?

                    onChange: function (vals) {
                        console.log(vals);
                    }
                });

/*Anticipacion*/

var anticipacionReserva = new rSlider({
                    target: '#anticipacion',
                 
                    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24],
                   
                    set: [1],
                    tooltip: true,
                    scale: true,
                    range:false,
                    disabled: false, // is disabled?
labels: false,
                    onChange: function (vals) {
                        console.log(vals);
                    }
                  
                });

var cancelarReserva = new rSlider({
                    target: '#cancelacion',
                 
                    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24],
                   
                    set: [2],
                    tooltip: true,
                    scale: true,
                    range:false,
                    disabled: false, // is disabled?
                    labels: false,
                    onChange: function (vals) {
                        console.log(vals);
                    }
                  
                });

/*Slider Porcentaje*/


var porcentajeComision = new rSlider({
                    target: '#porcentajeComision',
                 
                    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20],
                   
                    set: [2],
                    tooltip: true,
                    scale: true,
                    range:false,
                    disabled: false, // is disabled?
                    labels: false,
                    onChange: function (vals) {
                        console.log(vals);
                    }
                  
                });


/***********************************Carga de imagenes*/
/*Icono*/


         function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#icono')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

/*Imagen para web*/


         function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#imagenWeb')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

/*Imagen para App*/


         function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#imagenApp')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }


/*************************Seleccion de Fechas*/

$('#fechas').daterangepicker({
    "showDropdowns": true,
    
    "locale": {
        "format": "DD/MM/YYYY",
        "separator": " - ",
        "applyLabel": "Aplicar",
        "cancelLabel": "Cancelar",
        "fromLabel": "Desde",
        "toLabel": "Hasta",
        "customRangeLabel": "Custom",
        "weekLabel": "S",
        "daysOfWeek": [
            "Dom",
            "Lun",
            "Mar",
            "Mie",
            "Jue",
            "Vie",
            "Sab"
        ],
        "monthNames": [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Deciembre"
        ],
        "firstDay": 1
    },
    "startDate": "21/06/2018",
    "endDate": "27/06/2018",
    "drops": "up"
}, function(start, end, label) {
  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    
    
});


/******************************Seleccion de restaurantes*/

  // run pre selected options
        $('#pre-selected-options').multiSelect({
  selectableHeader: "<div class='custom-header'>Seleccionar Local</div>",
  selectionHeader: "<div class='custom-header'>Locales seleccionados</div>",
  
});
        
        $('#select-all').click(function(){
        $('#pre-selected-options').multiSelect('select_all');
        return false;
});
$('#deselect-all').click(function(){
  $('#pre-selected-options').multiSelect('deselect_all');
  return false;
});

