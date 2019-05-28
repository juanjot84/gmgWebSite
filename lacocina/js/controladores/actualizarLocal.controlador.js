

function actualizarLocal(idLocal, valorAActualizar, campoAAcuatualizar){
  var promise = new Promise(function(resolve, reject) {
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
    var nuevoCampo = {};
    nuevoCampo[campoAAcuatualizar] = valorAActualizar;

    $.ajax({
      url: server + '/api/v1/admin/local?id=' + idLocal,
      type: 'PUT',

      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        resolve(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(errorThrown);
      },
      data: JSON.stringify(nuevoCampo)
    });
   });
  });

  return promise;

}
