<?php
      require 'conn.php';
      
      $id = mysqli_real_escape_string($conn, $_POST['id']);
      
      $sql = "DELETE FROM document WHERE documentID = '$id'";
         
      $result = mysqli_query($conn, $sql);
      
      if($result === true) {

        $response = "Document deleted";

        $date = date('M d, Y  H:i');

        mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

      VALUES ('Document deletion', 'A document was successfully deleted.', '$date')");

      }else{ $response = "Error deleting deleting. Please try again."; }

      echo $response;
      
      mysqli_close($conn);
 ?>