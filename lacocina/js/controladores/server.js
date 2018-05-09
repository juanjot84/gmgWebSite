var server;
if(window.location.href.indexOf("localhost")){
    server = "https://aqueous-woodland-46461.herokuapp.com"; 
}else if (window.location.href.indexOf("demofj")){
    server = "https://aqueous-woodland-46461.herokuapp.com"; 
}else{
    server = "https://gmg-server.tk";
}