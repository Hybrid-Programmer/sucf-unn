<?php
      require 'conn.php';
      
      $id = mysqli_real_escape_string($conn, $_POST['id']);

      $title = mysqli_real_escape_string($conn, $_POST['title']);

      $post = mysqli_real_escape_string($conn, $_POST['post']);

      if (!empty($title) && !empty($post)) {

                if(isset($_FILES['newMedia']['name'])){

                    $targetDir = "../../document";
                    $img_name = $_FILES['newMedia']['name'];
                    $img_type = $_FILES['newMedia']['type'];
                    $tmp_name = $_FILES['newMedia']['tmp_name'];
                    
                    $img_explode = explode('.',$img_name);
                    $img_ext = end($img_explode);
    
                    $extensions = ["jpeg", "png", "jpg"];
                    if(in_array($img_ext, $extensions) === true){

                            if(move_uploaded_file($tmp_name, "$targetDir/".$img_name)){

                              $sql= "SELECT * FROM mediaPost WHERE postID = '$id'";
                              $result = mysqli_query($conn, $sql);

                              $row = mysqli_fetch_assoc($result)

                                  $profile= $row['profile'];

                                  if (file_exists('../../document/'.$profile)) {
                                    unlink('../../document/'.$profile); //Delete the current media profile image from the document folder
                                 }

                                 $newName = time().$img_name;

                                  $sql = "UPDATE mediaPost SET profile='$newName', title='$title', article='$post' WHERE postID = '$id'" ;
             
                                  $insert_query = mysqli_query($conn, $sql);
                             
                                if($insert_query === true){

                                     $response = "Post updated successfully";

                                     $date = date('M d, Y  H:i');

                                      mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

                                    VALUES ('Post updation', 'Media post updated successfully', '$date')");

                                }else{$response = 'Something went wrong !.'; }
                                
                        }else{$response = 'Failed to upload image '; }

                }else{$response = 'Image must have either .jpeg, .png or .jpg extension'; }

            }
            else{
                 $sql = "UPDATE mediaPost SET title='$title', article='$post' WHERE postID='$id'" ;
                  $insert_query = mysqli_query($conn, $sql);
                             
                if($insert_query === true){

                     $response = "Post updated successfully";

                     $date = date('M d, Y  H:i');

                 mysqli_query($conn, "INSERT INTO notification (sender, alert, created) VALUES ('Post updation', 'Media post updated successfully', '$date')");
                      
            }else{$response = 'Something went wrong !.'; }

        }

    }else{ $response = 'Some fields are empty. Please, ensure that all fields are filled then try again.'}
          
          
      echo $response;
      
      mysqli_close($conn);
 ?>