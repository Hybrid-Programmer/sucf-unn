<?php
      require 'conn.php';

       $id = mysqli_real_escape_string($conn, $_POST['id']);

      $title = mysqli_real_escape_string($conn, $_POST['title']);
      
      $post = mysqli_real_escape_string($conn, $_POST['post']);

      if (!empty($title) && !empty($post)) {
          
          $sql = "UPDATE textPost SET title='$title', post='$post' WHERE postID='$id'" ;
             
          $result = mysqli_query($conn, $sql);
          
          if($result === true) {

            $response = "Post updated successfully";

             $date = date('M d, Y  H:i');

              mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

            VALUES ('Post updation', 'Text post was updated successfully', '$date')");

          }else{ $response = "Failed to update post. Please, try again."; }

        }else{ $response = "Some fields are empty !"; }

      echo $response;
      
      mysqli_close($conn);
 ?>