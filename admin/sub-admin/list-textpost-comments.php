	<?php 

		require 'conn.php';

		  $postId = mysqli_real_escape_string($conn, $_GET['postID']);
		
   	   	  $sql = "SELECT * FROM text_comments WHERE postID = '$postId'";

		  $query = mysqli_query($conn, $sql);

		  $resultArray = array();

		 if(mysqli_num_rows($query) > 0){

		  while ($row = mysqli_fetch_assoc($query)) {

		     $resultArray[] = $row;
		   }
		}
		
		echo json_encode($resultArray);

		mysqli_close($conn); 
				
	  ?>