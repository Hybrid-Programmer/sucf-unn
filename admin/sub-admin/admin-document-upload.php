<?php

  require 'conn.php';
 
  $response = '';

if(!empty($_FILES['document']['name']) && !empty($_FILES['document']['name'])){

$targetDir = "../../document";//The folder in the server that stores all the uploaded images
$documentName = $_FILES['document']['name'];
$documentTmpPath = $_FILES['document']['tmp_name'];
$documentType = $_FILES['document']['type'];

$documentNameCmps = explode(".", $documentName);

$documentExtension = end($documentNameCmps);

$allowedFileExtensions = array("docx", "pdf", "zip", "jpg", "jpeg", "png");

$newDocumentName = $documentName;

if(in_array($documentExtension, $allowedFileExtensions) === true){

    if(move_uploaded_file($documentTmpPath, "$targetDir/".$newDocumentName)){ //Move the uploaded image to this permanent folder on the server

        $date = date('M d, Y').' '.'|'.' '.date('H:i'); 

        $insert_query = mysqli_query($conn, "INSERT INTO document (title, downloads, extension, posted)  VALUES ('$newDocumentName', 0, '$documentExtension', '$date')");
       
        if($insert_query === true){

             $response = "Document uploaded successfully";

             $now = date('M d, Y  H:i');

          mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

        VALUES ('Document upload', 'Document successfully uploaded', '$now')");


        }else{$response = 'Something went wrong !.'; }
        
}else{$response = 'Failed to upload document '; }

}else{$response = 'Document must have either .docx, .pdf, .zip, .jpg, .jpeg or .png extension'; }

}else{$response = 'Please upload a document !'; }

 echo $response;

 mysqli_close($conn);

?>
