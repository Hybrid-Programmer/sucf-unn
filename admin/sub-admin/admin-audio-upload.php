<?php

  require 'conn.php';

  $response = '';

  //$date = mysqli_real_escape_string($conn, $_POST['date']);

if(!empty($_FILES['audio']['name'])){
    
    $targetDir = "../../audio";//The folder in the server that stores all the uploaded audios
    $audioName = trim(str_replace(" ","_", $_FILES['audio']['name'])); //Check this line later and edit it if need be
    $audioTmpPath = $_FILES['audio']['tmp_name'];
    $audioType = $_FILES['audio']['type'];

    $audioExplode = explode('.', $audioName);
    $audioExtension = end($audioExplode);

    $allowedFileExtensions = ["mp3", "wav"];
    $newAudioName = $audioName;
    $date = date('M d, Y').' '.'|'.' '.date('H;i'); 

if(in_array($audioExtension, $allowedFileExtensions) === true){

    if(move_uploaded_file($audioTmpPath, "$targetDir/".$newAudioName)){

    $result = mysqli_query($conn, "INSERT INTO audio (title, likes, posted) VALUES ('$newAudioName', 0, '$date')");
       
        if($result === true){

             $response = 'Audio uploaded successfully';

             $now = date('M d, Y  H:i');

          mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

        VALUES ('Audio upload', 'Audio sucessfully uploaded', '$now')");

        }
        else{$response = 'Something went wrong !.'; }
        
}else{$response = 'Failed to upload audio '; }

}else{$response = 'Audio must have either .mp3 or .wav extension'; }

}else{$response = 'Please upload an audio file !'; }

 echo $response;

 mysqli_close($conn);

?>
