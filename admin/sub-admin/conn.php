<?php

  //session_start();
   $hostname = "localhost";
   $username = "root";
   $password = "";
   $dbname = "sucf";

   $conn = mysqli_connect($hostname, $username, $password, $dbname);
  if(!$conn){
    echo "Database connection error".mysqli_connect_error();
  }

?>