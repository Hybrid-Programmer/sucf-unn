<?php

// Import PHPMailer classes into the global namespace 
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 
use PHPMailer\PHPMailer\Exception; 

//Load phpmailer
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

require 'conn.php';

$firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
$lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$message = mysqli_real_escape_string($conn, $_POST['message']);

$mail = new PHPMailer(true);                             
try {
    //Server settings
    $mail->isSMTP();                                     
    $mail->Host = 'smtp.gmail.com';                      
    $mail->SMTPAuth = true;                               
    $mail->Username = '***Email address***';     
    $mail->Password = '***Password***';                    
    $mail->SMTPOptions = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
        )
    );                         
    $mail->SMTPSecure = 'ssl';                           
    $mail->Port = 465; //Change to 465 if issues arise later                                

    // Sender and recipient settings

    //Sender
    $fullname = ucfirst($firstname).' '.ucfirst($lastname);
    $mail->setFrom($email, $fullname);
    
    //Recipients  -Change this email to the websites's admin email later
    $mail->addAddress('okekeebuka928@gmail.com', 'sucfunn001@gmail.com');
    
    //Reply to the sender's email   
    $mail->addReplyTo($email);
   
    //Content
    $mail->isHTML(true);                                  
    $mail->Subject = "New message from <b>$email</b>";
    $Message = ucfirst($message);
    $mail->Body = $Message;

    //Send the email
    if($mail->send() === true){
       $response = 'Message has been sent successfully';
    }else{
        $response = 'Message could not be sent';
    }
} 
catch (Exception $e) {
    $response = 'Message could not be sent. Mailer Error: '.$mail->ErrorInfo;
}

echo $response;

mysqli_close($conn);

?>

