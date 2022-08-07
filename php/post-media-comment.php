<?php

    require 'conn.php';
 
  $response = '';
  
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $comment = mysqli_real_escape_string($conn, $_POST['comment']);
    $postId = mysqli_real_escape_string($conn, $_POST['postId']);
     
      if(!empty($email) && !empty($comment)){

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){

            $sql = mysqli_query($conn, "SELECT firstname, middlename, lastname FROM members WHERE email = '$email'");

            if(mysqli_num_rows($sql) > 0){

                 //Fetch the person's name from the members table
                $row = mysqli_fetch_assoc($sql);

                    $firstname = $row['firstname'];
                    $middlename = $row['middlename'];
                    $lastname = $row['lastname'];

                //Join all the names into the variable, $name
                $name = $firstname.' '.$middlename.' '.$lastname; 
                //Format the date to something like May 20, 2022 at 02:15pm
                $date = date('M d, Y').' '.'at'.' '.date('H:i');
                
                $insert_query = mysqli_query($conn, "INSERT INTO media_comments (name, comment, postingDate, status, postID) VALUES ('$name', '$comment', '$date', 'unapproved', '$postId')");
                if ($insert_query === true) {
                   $response = 'Comment posted successfully and will be shown here after approval by the admin.';
                }
                else{
                    $response = 'Error posting comment';
                }

            }else{$response = "The email ".$email." is not registered. Kindly register to be able to comment."; }

    }else{$response = 'The email '.$email.' is not valid'; }

}else{$response = 'Some fields are empty !'; }

 echo $response;

 mysqli_close($conn);

?>
