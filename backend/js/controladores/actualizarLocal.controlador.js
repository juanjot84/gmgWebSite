
/*
var locales;

function actualizarParametro(idLocalRecibido, valorAActualizar, campoAAcuatualizar){

	var promise = obtenerLocal(idLocalRecibido);

	promise.then(function (data){
		console.log(data);
		data[campoAAcuatualizar] = valorAActualizar;
		console.log(data)
	})

}

*/

function actualizarLocal(idLocal, valorAActualizar, campoAAcuatualizar){
     
    var objetoActualizado = JSON.stringify({
        "idContacto": valorAActualizar
    });
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
        data: objetoActualizado
    });    
}

/*
function obtenerLocal(idLocalRecibido) {   
    console.log(idLocalRecibido)
    return $.ajax({
            url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/local?id=' + idLocalRecibido,
            type: 'GET',       
            dataType: "json",
            crossDomain: true,
            contentType:"application/json",
            success: function (data) {
               return data;
            } 
    });
}
*/
