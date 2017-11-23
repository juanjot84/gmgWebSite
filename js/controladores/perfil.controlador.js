var jwt;

function setJWT(jwtToken){
  if (_.isNil(jwtToken) || _.isEmpty(jwtToken) ) {
    mostrarModalLogin();
  } else {
    jwt = jwtToken;
    getOpcionesUsuario();
  }
};

function mostrarModalLogin(){
  $("#botonLogin").attr("href", 'login.php?redirect=' + encodeURIComponent(window.location.href));
  $("#mostrarmodal").modal("show");
}


function getOpcionesUsuario() {
  var decoded = jwt_decode(jwt);
  _.each(decoded, function(opcion, key){
    $('#' + key).val(opcion);
  })
  console.log(decoded);
}

function actualizarPerfil(){
 if ($('#aceptoTerminos').is(':checked')) {
   var inputs = $('input')
   var data = {};
   _.each(inputs, function(campo){
     if (campo.id !== 'email')
     data[campo.id] = campo.value;
   })
   $.ajax({
     url: 'http://aqueous-woodland-46461.herokuapp.com/api/v1/admin/actualizarUsuario',
     type: 'PUT',
     dataType: "json",
     crossDomain: true,
     contentType:"application/json",
     success: function (data) {
       crearSesion(data);
       setJWT(data.token);
       $("#datosActualizados").modal("show");
     },
     error:function(jqXHR,textStatus,errorThrown)
     {
       $('#target').append("jqXHR: "+jqXHR);
       $('#target').append("textStatus: "+textStatus);
       $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
     },
     headers: {
         Authorization: 'JWT ' + jwt
     },
     data: JSON.stringify(data)
   });
 } else {
   $("#aceptarCondiciones").modal("show");
 }


}

function crearSesion(jwt){
  var parametros =  {
    "jwt" : jwt.token
  };
  $.ajax({
    data:  parametros,
    url:   'redirect-login.php',
    type:  "POST",
    error: function(){
    },
    success:  function(response) {
      setJWT(jwt);
    }
  });
}

var redirect = function(url, method, idCocina) {
  var form = $('<form>', {
    method: method,
    action: url
  });
  $(document.body).append(form);

  $('<input />').attr('type', 'hidden')
    .attr('name', "parametro")
    .attr('value', idCocina)
    .appendTo(form);

  $('<input />').attr('type', 'hidden')
    .attr('name', "filtro")
    .attr('value', 'tipoCocina')
    .appendTo(form);

  form.submit();
};
