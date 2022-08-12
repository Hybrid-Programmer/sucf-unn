<?php
      require 'conn.php';
      
      $id = mysqli_real_escape_string($conn, $_POST['id']);
      
      $sql = "DELETE FROM textPost WHERE id = '$id'";
         
      $result = mysqli_query($conn, $sql);
      
      if($result === true) {

        $response = "Post deleted successfully";

        $date = date('d-m-Y h:ia');

        mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

      VALUES ('Notification', 'A text post was successfully deleted.', '$date')");

      }else{ $response = "Error deleting post. Please try again."; }

      echo $response;
      
      mysqli_close($conn);
 ?>