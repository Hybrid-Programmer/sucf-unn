<?php

/*
    Sending messages using our API
    Requirements - PHP, file_get_contents (enabled) function
*/

require 'conn.php';

$response = '';

$firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
$lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
//$email = mysqli_real_escape_string($conn, $_POST['email']);
$message = mysqli_real_escape_string($conn, $_POST['message']);

// Initialize variables ( set your variables here )

$username = 'chukwuebuka';

$password = 'austin.com.ng.2001.A';

$sender   = $firstname.''.$lastname;

$message  = $message;

// Separate multiple numbers by comma

$mobiles  = '2349026928911';

// Set your domain's API URL

$api_url  = 'https://messagebird-sms-gateway.p.rapidapi.com/sms';


//Create the message data

$data = array('username'=>$username, 'password'=>$password, 'sender'=>$sender, 'message'=>$message, 'mobiles'=>$mobiles);

//URL encode the message data

$data = http_build_query($data);

//Send the message


$request = $api_url.'?'.$data;

$result  = file_get_contents($request);

$result  = json_decode($result);


if(isset($result->status) && strtoupper($result->status) == 'OK')
{
    // Message sent successfully, do anything here

     $response = 'Message has been sent successfully';

     //$response = 'Message sent at N'.$result->price;

}
else if(isset($result->error))
{
     // Message failed, check reason.

   $response = 'Message failed - error: '.$result->error;
}
else
{
    // Could not determine the message response.

    $response = 'Unable to process request';
}

echo $response;

mysqli_close($conn);

?>




