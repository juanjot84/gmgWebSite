<?php 
session_start();

if($_SESSION){}
   session_destroy();

   echo'<script language = javascript> 
      self.location = "../login-un.php"
   </script>';
?>