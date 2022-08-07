<?php
      require 'conn.php';
      
      $id = mysqli_real_escape_string($conn, $_POST['postId']);
      
      $sql = "UPDATE mediaPost SET views = views+1, likes = likes+1 WHERE postID = '$id'";
         
      $result = mysqli_query($conn, $sql);
      
      if($result === true) {

        $response = "Thanks for liking.";

      }else{ $response = "Error adding like"; }

      echo $response;
      
      mysqli_close($conn);
 ?>