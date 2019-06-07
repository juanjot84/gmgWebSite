var espacio = ' ';
var coma = ', ';
var local = '';
var jwt;
var horaSeleccionada;
var idLocal;

function setJWT(jwtToken, local){
  $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    idLocal = local;
    if (_.isNil(jwtToken) || _.isEmpty(jwtToken)) {
      mostrarModalLogin();
    } else {
      jwt = jwtToken;
      getMisFavoritos();
    }
  });

}

function mostrarModalLogin(){
  $("#botonLogin").attr("href", 'login.php?redirect=' + encodeURIComponent(window.location.href));
  $("#mostrarmodal").modal("show");
}

function isLoggedIn(){
  if (_.isNil(jwt)) {
    return false;
  } else {
    return true;
  }
}

function buscarFavoritos() {
  if (_.isUndefined(server)) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    });
  }
  $('.horas').hide();
  $('#noHorario').hide();
  var data = {
    'idLocal': idLocal,
    'fechaReserva': $('#selectDia').val(),
    'cubiertosAdultosReservados': $('#selectAdulto').val(),
    'cubiertosMenoresReservados': $('#selectNino').val()
  };
  $.ajax({
    url: server + '/api/v1/admin/favoritosUsuario',
    type: 'POST',
    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      if (!data.length){
        $('#noHorario').show();
      } else {
        mostrarHoras(data);
      }
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
      $('#target').append("jqXHR: "+jqXHR);
      $('#target').append("textStatus: "+textStatus);
      $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
    },
    data: JSON.stringify(data)
  });
}

function getMisFavoritos(){
   $.ajax({
      url: server + '/api/v1/admin/favoritosUsuario',
      type: 'GET',
      dataType: "json",
      crossDomain: true,
      contentType:"application/json",
      success: function (data) {
        renderMisFavoritos(data);
      },
      error:function(jqXHR,textStatus,errorThrown)
      {
          $('#target').append("jqXHR: "+jqXHR);
          $('#target').append("textStatus: "+textStatus);
          $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
      },
      headers: {
          Authorization: 'JWT ' + jwt
      }
  });
}

function renderMisFavoritos(favoritos){
  $('.container.mis-favoritos').html('');
  $('.container.mis-favoritos').append('<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Mis favoritos</h2></div></div>');

  _.each(favoritos, function(favorito){
    var longNivelPrecio = favorito.idLocal.idNivelPrecio.label.length;
    var nivelGris = 5 - longNivelPrecio;
    var labelGrises = '';
    for(i = 0; i < nivelGris; i++){
      labelGrises += '$'
    }


    $('.container.mis-favoritos').append(  '' +
    '<a href="ficha.php?id=' + favorito.idLocal._id + '">'+
      '  <div class="row" style="padding-top: 5%;color: #252525;border-bottom: 1px solid #e3e3e3;padding-bottom: 2%;">' +
      '    <div class="col-md-3">    <img class="img-responsive" src="' + favorito.idLocal.fotoPrincipalLocal + '">' +
      '    </div></a>' +
      '    <a href="ficha.php?id=' + favorito.idLocal._id + '" style="color: #252525;"><div class="col-md-6">' +
      '      <p><span style="font-size: 1.5em;"><strong>' + favorito.idLocal.idNegocio.nombreNegocio + '</strong> | ' + favorito.idLocal.idNegocio.bajadaNegocio + '</span></p>  <i class="fa fa-map-marker" aria-hidden="true"></i>' +
      '      <span class="polo"> ' + favorito.idLocal.calleLocal + '</span> |  <i class="fa fa-cutlery" aria-hidden="true"></i>' +
      '      <span class="tiponegocio">' + favorito.idLocal.idTipoCocinaPrincipal.nombreTipoCocina + '</span><br>' +
      '      <p style="letter-spacing: 1px;"><strong>'+ favorito.idLocal.idNivelPrecio.label +'</strong><span style="color: #cbcbcb">'+ labelGrises +'</span></p>'+
      '      <p><span class="descripcion">' + favorito.idLocal.idNegocio.descripcionNegocio.substr(0, 147) + '...</span></p>  ' +
      '    </div></a>' +
      '    <div class="col-md-3">' +
      '      <i onClick="eliminarFavorito(\'' + favorito._id + '\')" class="fa fa-heart" style="color: #e02222 !important; font-size: 3em; cursor:pointer;" aria-hidden="true"></i>' +
      '    </div>' +
      '  </div>'
    )
  });
}

function eliminarFavorito(idFavorito){
  jwt = $("#jwtU").val();
  $.ajax({
     url: server + '/api/v1/admin/favoritosUsuario?id='+idFavorito+'',
     type: 'DELETE',
     dataType: "json",
     crossDomain: true,
     contentType:"application/json",
     success: function (data) {
      $(".container.mis-favoritos").html('');
      getMisFavoritos();
     },
     error:function(jqXHR,textStatus,errorThrown)
     {
         $('#target').append("jqXHR: "+jqXHR);
         $('#target').append("textStatus: "+textStatus);
         $('#target').append("You can not send Cross Domain AJAX requests: "+errorThrown);
     },
     headers: {
         Authorization: 'JWT ' + jwt
     }
 });
}