<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   empty($_POST['empresa'])   ||
   empty($_POST['ciudad'])    ||
   empty($_POST['provincia']) ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$empresa = strip_tags(htmlspecialchars($_POST['message']));
$ciudad = strip_tags(htmlspecialchars($_POST['message']));
$provincia = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'emmanuel@estudiopronet.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Quiero registrar mi negocio";
$email_body = "Alguien quiere registrar su negocio.\n\n"."Información del contacto:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nEmpresa: $empresa\n\nCiudad: $ciudad\n\nProvincia: $provincia\n\nMessage:\n$message";
$headers = "From: altas@guiamendozagourmet.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>