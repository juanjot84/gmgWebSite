<?php

if (!isset($_SESSION)) {
  session_start();
}
  $_SESSION['jwt'] = $_POST["jwt"];

?>
