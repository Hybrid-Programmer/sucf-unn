<?php

    require 'conn.php';

 //Display all published text posts to users
//$sql= "SELECT * FROM textPost WHERE published = true ORDER BY postID DESC";  Use this line during production
$sql= "SELECT * FROM textPost ORDER BY postID DESC";
$result = mysqli_query($conn, $sql);

$data = array();
$encodedData = '';

if(mysqli_num_rows($result) > 0){

      while($row = mysqli_fetch_assoc($result)){

        $data[] = $row;

      }

  }else{
        echo "<p style='position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;'>No text post available .</p>";
  }

  $encodedData = json_encode($data, JSON_FORCE_OBJECT);

  echo $encodedData;
  
  mysqli_close($conn);
   

?>
