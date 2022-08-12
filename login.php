<?php 

require 'conn.php';

$response = '';

$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

if(!empty($email) && !empty($password)){

    $sql = mysqli_query($conn, "SELECT email, password, role FROM leaders WHERE email = '$email'");

    if(mysqli_num_rows($sql) > 0){

        $row = mysqli_fetch_assoc($sql);
        
        $user_email = $row['email'];
        $user_role = $row['role'];
        $user_pass = md5($password);
        $enc_pass = $row['password'];
        
        //Redirect admins based on their role on the database
        if($user_pass === $enc_pass && $email === $user_email && $user_role === 'admin'){

               $response = "Admin is verified and can log in";

               $date = date('M d, Y  H:i');

             mysqli_query($conn, "INSERT INTO notification (sender, alert, created)  VALUES ('Admin login', 'Sucessful admin login', '$date')");
                                  
        }else if($user_pass === $enc_pass && $email === $user_email && $user_role === 'sub-admin'){
            
                 $response = "Sub-admin is verified and can log in";

                 mysqli_query($conn, "INSERT INTO notification (sender, alert, created) VALUES ('Sub-admin login', 'Sucessful sub-admin login.', '$date')");
                                    
        }
    }
    else{ $response = "No record found !"; }
         
}else{  $response = "All inputs must be filled out !"; }
        
echo $response;

mysqli_close($conn);
    
?>