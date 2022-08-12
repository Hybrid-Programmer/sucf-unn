<?php
      require 'conn.php';
      
      $id = mysqli_real_escape_string($conn, $_POST['id']);
      
      $sql = "UPDATE textPost SET published = true WHERE postID = '$id'";
         
      $result = mysqli_query($conn, $sql);
      
      if($result === true) {

        $response = "Post is successfully published and now visible to everyone";

        $date = date('M d, Y  H:i');

        mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

      VALUES ('Post publishing', 'Admin published a text post.', '$date')");

      }else{ $response = "Error publishing post. Please try again."; }

      echo $response;
      
      mysqli_close($conn);
 ?>