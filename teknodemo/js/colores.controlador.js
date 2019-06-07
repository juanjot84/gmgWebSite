var indexImgSeleccionada = 1;
var imgSeleccionada = 'img-' + indexImgSeleccionada;
var color = "FFFFFF";
var areaSeleccionada = 1;
var indexAnterior=1;

var mapCodicAreas = {
    1: "p",
    2: "b",
    3: "c",
    4: "d",
    5: "e"
};

var codigoAreaSeleccionado;

function seleccionarImagen(slideIndex){
    codigoAreaSeleccionado = mapCodicAreas[slideIndex];
    $("#" + indexAnterior).mapster('unbind',true);
    $("#container-" + indexAnterior).hide();
    $("#container-" + slideIndex).show();
    indexAnterior = slideIndex;
    indexImgSeleccionada = slideIndex;
    imgSeleccionada = 'img-' + indexImgSeleccionada;
    if (loadingFlags[slideIndex-1]){
        var options ={
            fillOpacity: 0,
            fillColor: color,
            stroke: false,
            singleSelect: true,
            mapKey: 'name',
            listKey: 'name',
            showToolTip: false
        };
        $("#" + imgSeleccionada).mapster('rebind',options);
        $("#" + imgSeleccionada).mapster({
            fillOpacity: 0,
            fillColor: color,
            stroke: false,
            singleSelect: true,
            mapKey: 'name',
            listKey: 'name',
            showToolTip: false
        });
    }

}

function setArea(i){
    areaSeleccionada = i;
}

$(".todo-color").on("click",function(e){
    color = rgb2hex($(this).css('background-color'));

    var image = $("#" + imgSeleccionada);
    image.mapster('set_options', {
        fillOpacity: 0.7,
        fillColor: color,
        singleSelect: false,
        mapKey: 'name',
        listKey: 'name',
        areas:[{
            key: areaSeleccionada,
            fillColor: color
        }]
//    ,
//      onClick: function(data) {
//        //var newOpts = {
//        //  areas: [{
//        //    key: data.key,
//        //    isDeselectable: true
//        //  }],
//        //  fillColor: color
//        //};
//        //image.mapster('set_options',newOpts);
//
////         $('area').mapster('select');
//      }
    });
});

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    //return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function setColorPared(numeroPared) {
    $("#colorPared" + numeroPared).css('background-color', '#'+color);
    $('[name="' + codigoAreaSeleccionado + numeroPared + '"]').mapster('deselect');
    $('[name="' + codigoAreaSeleccionado + numeroPared + '"]').mapster('select');
}

function setEscena(nombreEscena) {
    $('#escena').empty();
    $('#escena').load( nombreEscena + '.html', function( response, status, xhr ) {
        if ( status == "error" ) {
            var msg = "Sorry but there was an error: ";
            setEscena(nombreEscena);
        } else {
            currentDiv(2);
            // currentDiv(4);
            // currentDiv(3);
            // currentDiv(2);
            // currentDiv(1);
        }
    });

}