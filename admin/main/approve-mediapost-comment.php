<?php
      require 'conn.php';

       $id = mysqli_real_escape_string($conn, $_POST['commentId']);
          
          $sql = "UPDATE media_comments SET status='approved' WHERE commentID='$id'" ;
             
          $result = mysqli_query($conn, $sql);
          
          if($result === true) {

            $response = "Comment approved";

             $date = date('M d, Y  H:i');

              mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

            VALUES ('Comment approval', 'Comment approved by admin', '$date')");

          }else{ $response = "Failed to approve comment. Please, try again."; }

      echo $response;
      
      mysqli_close($conn);
 ?>