<?php
      require 'conn.php';
      
      $email = mysqli_real_escape_string($conn, $_POST['email']);
      
      $id = mysqli_real_escape_string($conn, $_POST['id']);
      
      $sql = "UPDATE members SET role='sub-admin' WHERE userID='$id'" ;
         
      $result = mysqli_query($conn, $sql);
      
      if($result === true) {

        $response = "Admin has been changed to sub-admin successfully";

         $date = date('M d, Y  H:i');

          mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

        VALUES ('User role change', 'Admin was changed to a sub-admin.', '$date')");

      }else{ $response = "An error occured ! Please, try again"; }

      echo $response;
      
      mysqli_close($conn);
 ?>