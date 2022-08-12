<?php

  require 'conn.php';
   
  $response = '';

    //Select every leaders from the leaders table
    $sql= "SELECT * FROM leaders";
    $result = mysqli_query($conn, $sql);

     if(mysqli_num_rows($result) > 0) {

         while($row = mysqli_fetch_assoc($result)) {

              $profile= $row['profile'];

              if (file_exists('../../leaders/'.$profile)) {

                rename('../../leaders/'.$profile, '../../pastLeaders/'.$profile); //Move their actual images from the leaders folder to the pastLeaders folder

             }
         }

         if (mysqli_query($conn, "INSERT INTO past_leaders SELECT * FROM leaders") === true) { //Move their information from the leaders table to the past_leaders table

                if (mysqli_query($conn, "DELETE FROM leaders") === true) { //Delete their information from the leaders table

                    $response = "Backup successful.";

                     $date = date('M d, Y  H:i');//Formattting time to AM or PM

                      mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

                    VALUES ('Backup operation', 'Backup operation of leaders information occured.', '$date')");

                }else{ $response = "Backup failed. Please, try again."; }

         }else{ $response = "Error backing up data. Kindly try again"; }

    }else{ $response = "No record found"; }  

 
 echo $response;

 mysqli_close($conn);

?>


