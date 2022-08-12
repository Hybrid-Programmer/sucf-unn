<?php

    require 'conn.php';
 
    $response = '';

    $category = mysqli_real_escape_string($conn, $_POST['category']);

    $title = mysqli_real_escape_string($conn, $_POST['title']);
    
    $text = mysqli_real_escape_string($conn, $_POST['text']);

    if(!empty($category) && !empty($title)  && !empty($text)){

         $posted = date('M d, Y'); 

         $insert_query = mysqli_query($conn, "INSERT INTO textPost (category, title, post, views, likes, posted_on, published) VALUES ('$category', '$title', '$text', 0, 0, '$posted', false)");
           
            if($insert_query === true){

               $response = "Post uploaded successfully";

               $date = date('M d, Y  H:i');

               mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

             VALUES ('Textpost upload', 'Text post successfully uploaded.', '$date')");

            }else{$response = 'Something went wrong !.'; }

       }else{ $response = "All fields must be filled out !";} 

       echo $response;

       mysqli_close($conn);
   
?>