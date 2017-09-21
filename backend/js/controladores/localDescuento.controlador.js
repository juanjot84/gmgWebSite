
$(function() {

  $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

});

var descuentos;

var localDescuentoCreados = [];

var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabados","Domingos","Feriados"];

mostrarAltaLocalDescuento();

function agregarContacto(){

  $('#formularioAgregar').show();
  $("#formularioAgregar :input").attr("disabled", false);
  $("#formularioAgregar button").show();
  $("#idContacto").val('');
}
// Traer Descuentos para lista desplegable
function obtenerListadoDescuento(){
  return $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/descuento',
    type: 'GET',
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      return data;
    }
  });
}

function popularDropdownDescAlta(dia){
  $('#descuento' +  dia).html('');
  $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuento' +  dia);
  _.each(descuentos, function (descuento){
    $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuento' +  dia)
  })
}

// Mostrar form de asignar descuentos

function mostrarAltaLocalDescuento(){

  $("#idLocal").val('');
  obtenerListadoDescuento().done(function(data){
    descuentos = data;
    _.each(dias, function(dia){
      popularDropdownDescAlta(dia);
    });

  });
}




function SendLocalDescuento(){

  var idDescuentos = [];

  _.each(dias, function(dia){
    idDescuentos.push($("#descuento" + dia).val())
  });

  var idLocalCreado = $("#idLocalCreado").val();

  for (var i = 0; i < dias.length; i+=1) {
    console.log(dias[i],idDescuentos[i]);
    sendLocalDescuento(dias[i],idDescuentos[i]);
  }


  var campoAAcuatualizar = "idLocalDescuento";
  actualizarLocal(idLocalCreado, localDescuentoCreados, campoAAcuatualizar);
  console.log(localDescuentoCreados);
}

function sendLocalDescuento(diaDescuento,idDescuento) {
  var isNew = $("#idLocalDescuento").val() == "";
  var operacion = isNew ? "POST": "PUT";
  var localDescuento = JSON.stringify({
    "diaDescuento": diaDescuento,
    "idLocal": $("#idLocalCreado").val(),
    "idDescuento": idDescuento
  });

  $('#target').html('sending..');
  var queryParam = isNew  ? "": "?id=" + $("#idLocalDescuento").val();
  $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/localDescuento' + queryParam,
    type: operacion,

    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      var resultado = data;
      localDescuentoCreados.push(resultado._id);
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
    },
    data: localDescuento
  });
}




    