<?php
      require 'conn.php';

       $id = mysqli_real_escape_string($conn, $_POST['commentId']);
          
          $sql = "DELETE FROM text_comments WHERE commentID='$id'" ;
             
          $result = mysqli_query($conn, $sql);
          
          if($result === true) {

            $response = "Comment deleted";

             $date = date('M d, Y  H:i');

              mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

            VALUES ('Comment deletion', 'Comment deleted by admin', '$date')");

          }else{ $response = "Failed to delete comment. Please, try again."; }

      echo $response;
      
      mysqli_close($conn);
 ?>