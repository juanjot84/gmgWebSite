function eliminarEntidad(entidadEliminar, idEntidad) {
    if (_.isUndefined(server)) {
      $.getScript("js/controladores/server.js", function (data, textStatus, jqxhr) {
      });
    }
    $.ajax({
      url: server + '/api/v1/admin/'+entidadEliminar+'?id=' + idEntidad,
      type: 'DELETE',
      dataType: "json",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        return true;
      },
      error: function (jqXHR, textStatus, errorThrown) {
        return false;
      }
    });
  }