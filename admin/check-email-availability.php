 <?php

 require 'conn.php';
 
  $response = '';

 $email = mysqli_real_escape_string($conn, $_POST['email']);

  if(!empty($email)){

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){

            $sql = mysqli_query($conn, "SELECT email FROM leaders WHERE email = '$email'");

            if(mysqli_num_rows($sql) > 0){

                 $response = "Email is available";

            }else{ $response = "Email does not exist !"; }

        }else { $response = "Email ".$email." is not valid !"; }
        
    }else{ $response = "Email field is empty !"; }
    

    echo $response;

    mysqli_close($conn);

?>