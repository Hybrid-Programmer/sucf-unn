<?php

 require 'conn.php';
 
  $response = '';

 $email = mysqli_real_escape_string($conn, $_POST['email']);
 
 $password = mysqli_real_escape_string($conn, $_POST['password']);

  if(!empty($email) && !empty($password){

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){

            $sql = mysqli_query($conn, "SELECT email, password FROM leaders WHERE email = '$email'");

            if(mysqli_num_rows($sql) > 0){

                $sql = mysqli_query($conn, "UPDATE leaders SET password ='$password' WHERE email = '$email'");

                if ($sql === true) {

                   $response = "Password has been changed successfully";

                    $date = date('M d, Y  H:i');

                    mysqli_query($conn, "INSERT INTO notification (sender, alert, created) VALUES ('Password reset', 'Password successfully changed.', '$date')");
                                    
                }else{ $response = "Could not change your password. Please try again"; }
                
            }else{ $response = "Email ".$email." does not exist !"}

        }else { $response = "Email ".$email." is not valid !"}
        
    }else{ $response = "Email or password field is empty !"}
    
    echo $response;

    mysqli_close($conn);

?>