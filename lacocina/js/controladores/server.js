var server;
if(window.location.href.indexOf("localhost") || window.location.href.indexOf("demofj") ) 
{server = "https://aqueous-woodland-46461.herokuapp.com" ;
$("#mainNav").css('background-color', '#00ff4c');
}else {server = "https://gmg-server.tk";}