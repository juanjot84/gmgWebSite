
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
    var idLocalCreado = $("#idLocalCreado").val();
    var localDescuentoCreados = [];

    mostrarAltaLocal();

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

    // Funcion para armar lista desplegable Descuento para alta de local
    function popularDropdownDescLunesAlta(){
      $('#descuentoLunes').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoLunes');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoLunes')
      })
    }

    function popularDropdownDescMartesAlta(){
      $('#descuentoMartes').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoMartes');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoMartes')
      })
    }

    function popularDropdownDescMiercolesAlta(){
      $('#descuentoMiercoles').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoMiercoles');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoMiercoles')
      })
    }

    function popularDropdownDescJuevesAlta(){
      $('#descuentoJueves').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoJueves');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoJueves')
      })
    }

    function popularDropdownDescViernesAlta(){
      $('#descuentoViernes').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoViernes');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoViernes')
      })
    }

    function popularDropdownDescSabadoAlta(){
      $('#descuentoSabados').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoSabados');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoSabados')
      })
    }

    function popularDropdownDescDomingoAlta(){
      $('#descuentoDomingos').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoDomingos');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoDomingos')
      })
    }

    function popularDropdownDescFeriadoAlta(){
      $('#descuentoFeriados').html('');
      $('<option>').attr('disabled','disabled').attr('selected','selected').attr('value', 'value').text('').appendTo('#descuentoFeriados');
      _.each(descuentos, function (descuento){
        $('<option>').val(descuento._id).text(descuento.porcentajeDescuento + '  |  ' + descuento.descripcionDescuento).appendTo('#descuentoFeriados')
      })
    }

  // Mostrar form de asignar descuentos

    function mostrarAltaLocal(){

       $("#idLocal").val('');
            obtenerListadoDescuento().done(function(data){
            descuentos = data
            popularDropdownDescLunesAlta();
            popularDropdownDescMartesAlta();
            popularDropdownDescMiercolesAlta();
            popularDropdownDescJuevesAlta();
            popularDropdownDescViernesAlta();
            popularDropdownDescSabadoAlta();
            popularDropdownDescDomingoAlta();
            popularDropdownDescFeriadoAlta();
            });
    }




  function SendLocalDescuento(){

  var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo","Feriados"];
  var idDescuentos = [$("#descuentoLunes").val(), $("#descuentoMartes").val(), $("#descuentoMiercoles").val(), $("#descuentoJueves").val(), $("#descuentoViernes").val(), $("#descuentoSabados").val(), $("#descuentoDomingos").val(), $("#descuentoFeriados").val() ];



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
            "idLocal": idLocalCreado,
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




    