<?php

    require 'conn.php';
 
    $response = '';

    $title = mysqli_real_escape_string($conn, $_POST['eventTitle']);
    $local_date = mysqli_real_escape_string($conn, $_POST['eventDate']);
    $hour = mysqli_real_escape_string($conn, $_POST['eventHour']);
    $minute = mysqli_real_escape_string($conn, $_POST['eventMinute']);
    $second = mysqli_real_escape_string($conn, $_POST['eventSecond']);
     
      if(!empty($title) && !empty($local_date) && !empty($hour) && !empty($minute) && !empty($second)){
    
                if(isset($_FILES['eventImage']['name'])){
                    
                    $targetDir = "../../document/";//The folder in the server that stores all the uploaded images
                    $img_name = $_FILES['eventImage']['name'];
                    $img_type = $_FILES['eventImage']['type'];
                    $tmp_name = $_FILES['eventImage']['tmp_name'];
                    
                    $img_explode = explode('.',$img_name);
                    $img_ext = end($img_explode);
    
                    $extensions = ["jpeg", "png", "jpg"];

                    if(in_array($img_ext, $extensions) === true){

                            if(move_uploaded_file($tmp_name, "$targetDir".$img_name)){ //Move the uploaded image to this permanent folder on the server

                                $dateTime = $local_date.' '.$hour.':'.$minute.':'.$second;

                                $insert_query = mysqli_query($conn, "INSERT INTO timer (profile, title, eventDate)

                                 VALUES ('$img_name', '$title', '$dateTime')");

                                   if($insert_query === true){

                                     $response = "Timer has been created successfully";

                                      $date = date('d-m-Y h:ia');

                                      mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

                                    VALUES ('Notification', 'Countdown timer was created successfully.', '$date')");

                                }else{$response = 'Something went wrong !.'; }
                                
                        }else{$response = 'Failed to upload image '; }

                }else{$response = 'Image must have either .jpeg, .png or .jpg extension'; }

            }else{$response = 'Please upload a valid image !'; }

}else{$response = 'All fields must be filled up !'; }

 echo $response;

 mysqli_close($conn);

?>
