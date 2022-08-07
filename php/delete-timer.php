<?php 

require 'conn.php';

$id = mysqli_real_escape_string($conn, $_POST['id']);

$sql = mysqli_query($conn, "DELETE FROM timer WHERE id = '$id");

mysqli_close($conn);

?>