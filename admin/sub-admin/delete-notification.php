<?php
      require 'conn.php';
      
      $id = mysqli_real_escape_string($conn, $_POST['id']);
      
      $sql = "DELETE FROM notification WHERE notificationID = '$id'";
         
      $result = mysqli_query($conn, $sql);
      
      if($result === true) {

        $response = "Notification deleted";

      }else{ $response = "Error deleting notification. Please try again."; }

      echo $response;
      
      mysqli_close($conn);
 ?>