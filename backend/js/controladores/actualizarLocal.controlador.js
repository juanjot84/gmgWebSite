

function actualizarLocal(idLocal, valorAActualizar, campoAAcuatualizar){
   
    /*    var contacto = JSON.stringify({
            campoAAcuatualizar : valorAActualizar
        });   */

    var  contacto[campoAAcuatualizar]= valorAActualizar;




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

        },
        data: contacto
    });  
}
