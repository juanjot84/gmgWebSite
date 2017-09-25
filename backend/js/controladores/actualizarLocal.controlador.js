

function actualizarLocal(idLocal, valorAActualizar, campoAAcuatualizar){
  var  nuevoCampo= {};
  nuevoCampo[campoAAcuatualizar]= valorAActualizar;

  $.ajax({
    url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local?id=' + idLocal,
    type: 'PUT',

    dataType: "json",
    crossDomain: true,
    contentType:"application/json",
    success: function (data) {
      
    },
    error:function(jqXHR,textStatus,errorThrown)
    {
      console.log('Error al actualizar local')
    },
    data: JSON.stringify(nuevoCampo)
  });
}
