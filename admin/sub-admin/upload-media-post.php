<?php

  require 'conn.php';
 
  $response = '';
  
    $category = mysqli_real_escape_string($conn, $_POST['category']);
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $article = mysqli_real_escape_string($conn, $_POST['post']);
     
    if(!empty($category) && !empty($title) && !empty($article)){
        if(isset($_FILES['media']['name'])){
            $targetDir = "../../document";//The folder in the server that stores all the uploaded images
            $img_name = $_FILES['media']['name'];
            $img_type = $_FILES['media']['type'];
            $tmp_name = $_FILES['media']['tmp_name'];
            
            $img_explode = explode('.',$img_name);
            $img_ext = end($img_explode);

            $extensions = ["jpeg", "png", "jpg", "mp4", "avi"];
            if(in_array($img_ext, $extensions) === true){
                    $time = time();
                    $newName = $time.$img_name;

                    if(move_uploaded_file($tmp_name, "$targetDir/".$newName)){ //Move the uploaded image to this permanent folder on the server

                        $posted = date('M d, Y');

                        $insert_query = mysqli_query($conn, "INSERT INTO mediaPost (profile, extension, category, title, article, views, likes, posted_on, published)

                         VALUES ('$newName', '$img_ext', '$category', '$title', '$article', 0, 0, '$posted', false)");
                        
                        if($insert_query === true){

                             $response = "Post uploaded successfully";

                             $date = date('M d, Y  H:i');

                              mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

                            VALUES ('Mediapost upload', 'Media post successfully uploaded.', '$date')");

                        }else{$response = 'Something went wrong !.'; }
                        
                }else{$response = 'Failed to upload media '; }

        }else{$response = 'Media must have either .jpeg, .png, .jpg, .pdf, .docx or .zip extension'; }

    }else{$response = 'Please upload a valid media !'; }
      
}else{$response = 'All fields must be filled up !'; }

 echo $response;

 mysqli_close($conn);

?>
