var server;
if(window.location.href.indexOf("localhost") != -1){
    $("#mainNav").attr('style', 'background-color: #00ff4c !important');
    $(".navbar-default").attr('style', 'background-color: #00ff4c !important');
    server = "https://aqueous-woodland-46461.herokuapp.com"; 
}else if (window.location.href.indexOf("demofj") != -1){
    $("#mainNav").attr('style', 'background-color: #00ff4c !important');
    $(".navbar-default").attr('style', 'background-color: #00ff4c !important');
    server = "https://aqueous-woodland-46461.herokuapp.com"; 
}else{
    server = "https://gmg-server.tk";
}