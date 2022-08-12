<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load phpmailer
require 'vendor/autoload.php';

require 'conn.php';

$message = mysqli_real_escape_string($conn, $_POST['message']);

$mail = new PHPMailer(true);                             
try {
    //Server settings
    $mail->isSMTP();                                     
    $mail->Host = 'smtp.gmail.com';                      
    $mail->SMTPAuth = true;                               
    $mail->Username = 'okekeebuka928@gmail.com';     
    $mail->Password = 'bestcoderintown';                    
    $mail->SMTPOptions = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
        )
    );                         
    $mail->SMTPSecure = 'ssl';                           
    $mail->Port = 465;                                   

    // Sender and recipient settings
    //Sender
    $mail->setFrom('SUCF Admin');
    
    //Recipients
       //Write the correct code to get all the email addresses from the members table and send the email to them
    $sql = "SELECT email FROM members WHERE role='sub-admin"; //If this does not work, use only members table, then include the general email address so that all leaders will see it
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
          $mail->addAddress($row['email'], 'sucfunn001@gmail.com');
        }
    }
    
    //Reply to the sender's email   
    $mail->addReplyTo('sucfunn001@gmail.com');
   
    //Content
    $mail->isHTML(true);                                  
    $mail->Subject = "New message from <b>SUCF Admin</b>";
    $Message = ucfirst($message);
    $mail->Body = $Message;

    $mail->send();

    $response = 'Message has been sent successfully';
    //header('location: signup.php');

} 
catch (Exception $e) {
    $response = 'Message could not be sent. Mailer Error: '.$mail->ErrorInfo;
    //header('location: signup.php');
}

echo $response;

mysqli_close($conn);

?>

