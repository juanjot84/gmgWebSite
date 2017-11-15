
$(function () {

    $('#login-form-link').click(function (e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function (e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});
var ocasiones;

obtenerListado();

function obtenerListado() {
    $('#listadoOcasiones').html('');
    $('#loading').html('<img class="img-responsive" src="img/loading.gif">');
    $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/ocasion',
        type: 'GET',

        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
            ocasiones = data;
            _.each(data, function (ocasion) {
                $('#listadoOcasiones').append(' <tr>' +
                    '<th scope="row" style="font-size: 1.5em;">1</th>' +
                    '<td>' + ocasion.nombreOcasion + '</td><td class="centrarbotaccion">' +
                    '<button onClick="mostrar(\'' + ocasion._id + '\')" title="Ver" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-eye" aria-hidden="true"></i></button>' +
                    '<button onClick="editar(\'' + ocasion._id + '\')" title="Editar" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-pencil-square-o" aria-hidden="true"></i></button> ' +
                    '<button title="Eliminar" onClick="eliminar(\'' + ocasion._id + '\')" class="btn btn-default botaccion" type="button"><i style="font-size: 1.5em;" class="fa fa-trash" aria-hidden="true"></i> </button> ' +
                    '</td> ' +
                    '</tr>');
            })
            $('#loading').hide();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#target').append("jqXHR: " + jqXHR);
            $('#target').append("textStatus: " + textStatus);
            $('#target').append("You can not send Cross Domain AJAX requests: " + errorThrown);
        },
    });
}

function editar(idOcasion) {
    var ocasion = _.find(ocasiones, { '_id': idOcasion });
    console.log(ocasion);
    $('#formularioAgregar').show();
    $("#formularioAgregar :input").attr("disabled", false);
    $("#formularioAgregar button").show();
    $("#idOcasion").val(ocasion._id);
    $("#nombreOcasion").val(ocasion.nombreOcasion);
    $("#descripcionOcasion").val(ocasion.descripcionOcasion);
    $("#urlImagenOcasion").val(ocasion.urlImagenOcasion);
    $("input[name=destacadoOcasion][value=" + ocasion.destacadoOcasion + "]").prop("checked",true);
}

function mostrar(idOcasion) {
    var ocasion = _.find(ocasiones, { '_id': idOcasion });
    console.log(ocasion);
    $('#formularioAgregar').show();
    $("#formularioAgregar :input").attr("disabled", true);
    $("#formularioAgregar button").hide();
    $("#nombreOcasion").val(ocasion.nombreOcasion);
    $("#descripcionOcasion").val(ocasion.descripcionOcasion);
    $("#urlImagenOcasion").val(ocasion.urlImagenOcasion);
    $("input[name=destacadoOcasion][value=" + ocasion.destacadoOcasion + "]").prop("checked",true);
    $("#idOcasion").val(ocasion._id);
}

function eliminar(idOcasion) {
    $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/ocasion?id=' + idOcasion,
        type: 'DELETE',

        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
            if (data != 'Borrado') {
                $("#mostrarmodal").modal("show");
            } else if (data == 'Borrado') {
                obtenerListado();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            obtenerListado();
        }
    });
}

function agregarOcasion() {
    $('#formularioAgregar').show();
    $("#formularioAgregar :input").attr("disabled", false);
    $("#formularioAgregar button").show();
    $("#idOcasion").val('');
}

function send() {
    
    var ocasion = JSON.stringify({
        "nombreOcasion": $("#nombreOcasion").val(),
        "descripcionOcasion": $("#descripcionOcasion").val(),
        "urlImagenOcasion": $("#urlImagenOcasion").val(),
        "destacadoOcasion": $('input[name=destacadoOcasion]:checked', '#formularioAgregar').val()
    });

    $('#target').html('sending..');
    $.ajax({
        url: 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/ocasion',
        type: "POST",

        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
            $('#formularioAgregar').hide();
            $("#formularioAgregar :input").val('');
            obtenerListado();
        },
        error: function (jqXHR, textStatus, errorThrown) {
        },
        data: ocasion
    });
}

function cancelar() {
    $('#formularioAgregar').hide();
}