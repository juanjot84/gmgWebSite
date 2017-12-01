
function setJWT(jwtToken){
    $.getScript( "js/controladores/server.js", function( data, textStatus, jqxhr ) {
       if (_.isNil(jwtToken) || _.isEmpty(jwtToken)) {
      
       } 
    });
  }


  $(function() {
    $('input[name="daterange"]').daterangepicker();
});