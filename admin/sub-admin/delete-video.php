<?php
      require 'conn.php';
      
      $id = mysqli_real_escape_string($conn, $_POST['id']);
      
      $sql = "DELETE FROM video WHERE videoID = '$id'";
         
      $result = mysqli_query($conn, $sql);
      
      if($result === true) {

        $response = "Video deleted";

        $date = date('M d, Y  H:i');

        mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

      VALUES ('Video deletion', 'A video was successfully deleted.', '$date')");

      }else{ $response = "Error deleting video. Please try again."; }

      echo $response;
      
      mysqli_close($conn);
 ?>