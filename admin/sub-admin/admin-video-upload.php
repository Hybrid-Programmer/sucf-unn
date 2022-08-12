<?php

  require 'conn.php';
   
  $response = '';

if(isset($_FILES['video']['name']) && !empty($_FILES['video']['name'])){
    
    $targetDir = "../../video";//The folder in the server that stores all the uploaded images
    $videoName = $_FILES['video']['name'];
    $videoTmpPath = $_FILES['video']['tmp_name'];
    $videoType = $_FILES['video']['type'];

    $videoExplode = explode(".", $videoName);
    $videoExtension = end($videoExplode);

    $allowedFileExtensions = ["mp4", "avi", "mkv"];
    $newVideoName = $videoName;

if(in_array($videoExtension, $allowedFileExtensions) === true){

    if(move_uploaded_file($videoTmpPath, "$targetDir/".$newVideoName)){ //Move the uploaded image to this permanent folder on the server

       $date = date('M d, Y').' '.'|'.' '.date('H:i'); 

        $insert = mysqli_query($conn, "INSERT INTO video (title, downloads, views, posted)  VALUES ('$newVideoName', 0, 0, '$date')");
       
        if($insert === true){

             $response = 'Video uploaded successfully';

             $now = date('M d, Y  H:i');

          mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

        VALUES ('Video upload', 'Video successfully uploaded.', '$now')");

        }
        else{$response = 'Something went wrong !.'; }
        
}else{$response = 'Failed to upload video '; }

}else{$response = 'Video must have either .mp4, .avi or .mkv extension'; }

}else{$response = 'Please upload a video file !'; }

 echo $response;

 mysqli_close($conn);

?>
