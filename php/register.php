<?php

    require 'conn.php';
 
  $response = '';
   $role = '';

    $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
    $middlename = mysqli_real_escape_string($conn, $_POST['middlename']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
    $contact = mysqli_real_escape_string($conn, $_POST['contact']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
     
      if(!empty($firstname) && !empty($middlename) && !empty($lastname) && !empty($contact) && !empty($email)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $sql = mysqli_query($conn, "SELECT * FROM members WHERE email = '$email'");
            if(mysqli_num_rows($sql) > 0){
                 $response = 'Email '.$email.' already exists !';
            }
            else{
                if(isset($_FILES['photo']['name'])){
                    $targetDir = "../uploads";//The folder in the server that stores all the uploaded images
                    $img_name = $_FILES['photo']['name'];
                    $img_type = $_FILES['photo']['type'];
                    $tmp_name = $_FILES['photo']['tmp_name'];
                    
                    $img_explode = explode('.',$img_name);
                    $img_ext = end($img_explode);
    
                    $extensions = ["jpeg", "png", "jpg"];
                    if(in_array($img_ext, $extensions) === true){
                            $time = time();
                            $new_img_name = $time.$img_name;
                            $role = "user";
                             $password = "null";
                             //Capitalize the first letters of the names
                             $firstname =  ucfirst($firstname);
                             $middlename = ucfirst($middlename);
                             $lastname = ucfirst($lastname);
                            if(move_uploaded_file($tmp_name, "$targetDir/".$new_img_name)){ //Move the uploaded image to this permanent folder on the server
                                
                                $insert_query = mysqli_query($conn, "INSERT INTO members (profile, firstname, middlename, lastname, contact, email, password, role)

                                 VALUES ('$new_img_name', '$firstname', '$middlename', '$lastname', '$contact', '$email', '$password', '$role')");

                                if($insert_query === true){

                                     $response = "You have registered successfully";

                                      $date = date('M d, Y  H:i');

                                      mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

                                    VALUES ('User registration', 'New user registered on the website.', '$date')");

                                }else{$response = 'Something went wrong !.'; }
                                
                        }else{$response = 'Failed to upload image '; }

                }else{$response = 'Image must have either .jpeg, .png or .jpg extension'; }

            }else{$response = 'Please upload a valid image !'; }
        }
    }else{$response = 'Email '.$email. ' is not valid !'; }

}else{$response = 'All fields must be filled up !'; }

 echo $response;

 mysqli_close($conn);

?>
