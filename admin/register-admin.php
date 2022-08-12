<?php

  require 'conn.php';
 
  $response = '';
 
   //Create a separate table for leaders. Then, when they create other users, those users will be in the members table. 

    $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
    $middlename = mysqli_real_escape_string($conn, $_POST['middlename']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
    $contact = mysqli_real_escape_string($conn, $_POST['contact']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
     $office = mysqli_real_escape_string($conn, $_POST['office']);
      $quote = mysqli_real_escape_string($conn, $_POST['quote']);
       $scripture = mysqli_real_escape_string($conn, $_POST['scripture']);
        $tenure = mysqli_real_escape_string($conn, $_POST['tenure']);
     
      if(!empty($firstname) && !empty($middlename) && !empty($lastname) && !empty($contact) && !empty($email) && !empty($password) && !empty($office) && !empty($quote) && !empty($scripture) && !empty($tenure)){

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){

            $sql = mysqli_query($conn, "SELECT email FROM leaders WHERE email = '$email'");
            
            if(mysqli_num_rows($sql) > 0){
                 $response = 'Email'.' '.'<b>'.$email.'</b>'.' '.'already exists !';
            }
            else{
                if(isset($_FILES['photo']['name'])){
                    $targetDir = ".././leaders/";//The folder in the server that stores all the uploaded images
                    $img_name = $_FILES['photo']['name'];
                    $tmp_name = $_FILES['photo']['tmp_name'];
                    
                    $img_type = $_FILES['photo']['type'];
                    $img_explode = explode('.',$img_name);
                    $img_ext = end($img_explode);
    
                    $extensions = ["jpeg", "png", "jpg"];

                    if(in_array($img_ext, $extensions) === true){
                            $time = time();
                            $newName = $time.$img_name;
                            $type = 'leader';
                            $role = "admin";
                            $hashPassword = md5($password); //Encrypt the password
                            //Capitalize the first letters of the names
                             $firstname =  ucfirst($firstname);
                             $middlename = ucfirst($middlename);
                             $lastname = ucfirst($lastname);
                            if(move_uploaded_file($tmp_name, "$targetDir".$newName)){ //Move the uploaded image to this permanent folder on the server

                                $insert_query = mysqli_query($conn, "INSERT INTO leaders (profile, firstname, middlename, lastname, contact, email, password, office, quote, scripture, tenure, type, role)

                                 VALUES ('$newName', '$firstname', '$middlename', '$lastname', '$contact', '$email', '$hashPassword', '$office', '$quote', '$scripture', '$tenure', '$type', '$role')");

                                if($insert_query === true){

                                     $response = "You have registered successfully";

                                     $date = date('M d, Y  H:i');

                                      mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

                                    VALUES ('Admin registration', 'Main admin was created.', '$date')");

                                }else{$response = 'Something went wrong !.'; }
                                
                        }else{$response = 'Failed to upload image '; }

                }else{$response = 'Image must have either .jpeg, .png or .jpg extension'; }

            }else{$response = 'Please upload a valid image !'; }
        }
    }else{$response = 'Email '.'<b>'.$email.'</b>'.' is not valid !'; }

}else{$response = 'All fields must be filled up !'; }

 echo $response;

 mysqli_close($conn);

?>
