<?php 
	//Require the connection file
     require 'php/conn.php';

$postId = mysqli_real_escape_string($conn, $_GET['postId']);

//Fetch the request post from mediaPost table
$sql= "SELECT * FROM textPost WHERE postID ='$postId'";
$result = mysqli_query($conn, $sql);

$response = '';

if(mysqli_num_rows($result) > 0){

     $row = mysqli_fetch_assoc($result);

 	 $id = $row['postID'];
      $title = $row['title'];
      $text = $row['post']; 
      $posted = $row['posted_on'];

  }else{

		$response = "<b style='position: absolute;transform: translate(-50%, -50%);top: 50%;left: 50%;'>No record found</b>";
  }

?>

<?php
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	  <!--Meta tags for preventing browser caching. Feel free to comment it out before deployment-->
        <meta http-equiv="Cache-Control" content="no-cache, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <!--Close meta tag-->
	<link rel="stylesheet" type="text/css" href="css/read-post.css">
	<title>Read post</title>
</head>
<body>

	<div id="parent">
		<header>
			<div id="header-back"><a href="posts.html" class="comment-link"><</a></div>
			<div id="header-text">Posted on | <?php echo $posted; ?></div>
		</header>

		<div id="view-main">

			<div id="post-content-div">
				  <!--<div id="media-resource-div">
				  	Resourecs like images, videos, audios, zip files will all be placed here
				  </div>-->
					
					<div id="media-content-div">

						<div id="media-title-div">
							<?php echo $title; ?>
						</div>

						<div id="media-main-text">
							<p>
								<?php echo $text;?>
						   </p>
						</div>

						<div id="like-div">
							  <form id="like-form">
							  	<input type="hidden" name="postId" value="<?php echo $id; ?>">
							      <button type="submit" id="like-button">Like this post</button>
						      </form>

						      <div id="comment-div">
							     <button id="comment-button"><a href="#comment-section" class="comment-link">Comments</a></button>
						     </div>
						</div>
					</div>


					 <!--Comment section-->
			   <div id="comment-section">

			   	    <div id="comment-header">
			   	    
			   	 	  <div id="all-comments"></div>
			   	   </div>

			   	   <div id="comment-scroll-div">

			   	   	<?php

				   	   //$sql = "SELECT * FROM text_comments WHERE postID = '$postId' AND status = 'approved'";  Use this line at launch !!!
				   	   $sql = "SELECT * FROM text_comments WHERE postID = '$postId'";
			             $query = mysqli_query($conn, $sql);

			              if(mysqli_num_rows($query) > 0){

							  while ($row = mysqli_fetch_assoc($query)) {

							  	$name = $row['name'];
							  	$comment = $row['comment'];
							  	$commentDate = $row['postingDate'];

							  	echo 
							  	     "<div class='comment-container'>
							   	   		<div class='user-div'>
							   	   			<div class='username-div'>$name</div>
							   	   			<div class='user-comment'>
							   	   				$comment
							   	   			</div>
							   	   			<div class='comment-date'>$commentDate</div>
							   	   		</div>
							   	   	</div>
							  	     ";
							    
							   }
							}/*else{
								echo "<b style='position: absolute;transform: translate(-50%, -50%);top: 50%;left: 50%;'>No comment found for this post. Be the first to add comment</b>";
							}*/

		               ?>

				   	   	<!--Comment form-->
				   	   		<form class="comment-form" id="comment-form">
					   	   		<input type="email" name="email" class="name-input" id="nameInput" placeholder="Enter email here.." required>
					   	   		<textarea id="comment-text" name="comment" placeholder="Type a comment.." id="commentText" required></textarea>
					   	   		<input type="hidden" name="postId" value="<?php echo $postId; ?>">
					   	   		<button type="submit" class="post-comment" id="post-comment-button">Comment</button>
				   	   	</form>

			   	   </div>

			   </div>

			   </div>
		  </div>

		   <!--Modal div-->
        <div class="third" id="left">
             <div class="inner" id="inner">
             <div class="mid" id="mid"><img src="" class="mid-image" id="mid-image"></div>
          <div class="info-holder" id="responseHolder"></div>
          </div>
      </div>

		  <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; SUCF Website <?php echo date('Y'); ?></div></footer>

	  </div>

	  <script src="js/like-text-post.js"></script>
	  <script src="js/post-text-comment.js"></script>
	  <script src="js/toggle-comments.js"></script>
	  <script type="text/javascript">
	  	
	  	var commentDiv = document.querySelectorAll('.comment-container').length;
	  	var countDiv = document.getElementById('all-comments');

	  	if (commentDiv < 2) {
	  		countDiv.textContent = commentDiv + ' ' + ' comment';
	  	}else{
	  		countDiv.textContent = commentDiv + ' ' + ' comments';
	  	}


	  </script>
	  

</body>
</html>