<?php 

require 'conn.php';

$id = mysqli_real_escape_string($conn, $_POST['id']);

$sql = mysqli_query($conn, "DELETE FROM timer WHERE id = '$id");

if ($sql === true) {
	
	$date = date('d-m-Y h:ia');

        mysqli_query($conn, "INSERT INTO notification (sender, alert, created)

      VALUES ('Notification', 'A timer was successfully deleted.', '$date')");
}

mysqli_close($conn);

?>