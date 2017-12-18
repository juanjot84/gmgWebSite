<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['negocio'])   ||
   empty($_POST['tiponegocio'])   ||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$negocio = strip_tags(htmlspecialchars($_POST['negocio']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Create the email and send the message
$to = 'altas@guiamendozagourmet.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Quiero registrar mi negocio";
$email_body = "Recibió un nuevo mensaje de su formulario de contacto del sitio web.\n\n"."Datos del contacto:\n\nNombre: $name\n\nNegocio: $negocio\n\nTipo de Negocio: $tiponegocio\n\nEmail: $email_address\n\nTel: $phone\n\nMensaje:\n$message";
$headers = "From: noreply@guiamendozagourmet.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
