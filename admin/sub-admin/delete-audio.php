<?php
      require 'conn.php';
      
      $id = mysqli_real_escape_string($conn, $_POST['id']);
      
      $sql = "DELETE FROM audio WHERE audioID = '$id'";
         
      $result = mysqli_query($conn, $sql);
      
      if($result === true) {

        $response = "Audio deleted";

        $date = date('M d, Y  H:i');

        mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

      VALUES ('Audio deletion', 'An audio was successfully deleted.', '$date')");

      }else{ $response = "Error deleting audio. Please try again."; }

      echo $response;
      
      mysqli_close($conn);
 ?>