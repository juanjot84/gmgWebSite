


function volverPanelNegocio() {
    var tipoUsuario = $("#tipoUs").val();
    if (tipoUsuario == 'usuarioNegocio') {
      var url = "dashboard.php";
      $(location).attr('href', url);
    } else if (tipoUsuario == 'superAdmin') {
      var negocioCreado = $("#idNegocio").val();
      var url = "../lacocina/panel-negocio.php?idNegocio=" + negocioCreado + "";
      $(location).attr('href', url);
    }
  }