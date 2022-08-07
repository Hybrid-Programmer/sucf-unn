<?php

  require 'conn.php';

 $reponse = '';
 $email = mysqli_real_escape_string($conn, $_POST['email']);

if(!empty($email)){
      if(filter_var($email, FILTER_VALIDATE_EMAIL)){
          $sql = mysqli_query($conn, "SELECT email FROM members WHERE email = '$email'");
          if(mysqli_num_rows($sql) > 0){
             $reponse = 'This email address has been registered and can receive notifications from us';
           }
        else{
            $reponse = 'This email address has not been registered. Kindly register to be able to get notifications from us.';
      }
   }
else{
     $reponse = 'The email '.$email.' '.'is not valid';
}
}else{
     $reponse = 'Email field is empty !';
}
echo $reponse;

 mysqli_close($conn);

?>