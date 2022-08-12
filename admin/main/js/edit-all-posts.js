
//The form
var form = "";
//Text post variables
var postTitle = "";
var postText = "";
var postID = "";
//Media post variables
var mediaTitle = "";
var mediaText = "";
var mediaPicture = "";
//Hide variable
var hide;
//Modal div variables
 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
 var midImage = document.getElementById("mid-image");
  var result = document.getElementById("responseHolder");
  var commentDiv = "";

 function refresh() {
    left.style.zIndex = -5000;
    left.style.opacity = 0;
    mid.style.opacity = 0;
    mid.style.border = "none";
    midImage.src = "";
   inner.style.border = "none"; 
   result.textContent = "";
 }

 
 //Load text post

  var textCard = "";

   function fetch_Textpost() {

    $.ajax({
        url: 'list-all-textposts.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             textCard = `<div class='textDiv'>
                                <div class='text-header'>
                               <div class='text-header-logo-container'><img src='img/logo.png' class='header-logo'></div>
                               <div class='text-header-row'>
                                   <div class='header-sender'>SUCF UNN</div>
                                    <div class='header-date'>${data[i].posted_on}</div>
                                     <div class='header-action'>
                                       <form class='header-action-form'>
                                              <span class='header-edit'><i class='fa fa-book' aria-hidden='true'></i></span>
                                              <input type='hidden' name='id' class='hidden-input' value='${data[i].postID}'>
                                               <button class='delete-text' type='submit'>
                                                   <span class='header-delete'>
                                                     <i class='fa fa-trash' aria-hidden='true'></i>
                                                  </span>
                                               </button>
                                          </form>
                                     </div>
                               </div>
                           </div>

                           <div class='text-home'>
                               <div class='text-title'>${data[i].title}</div>
                               <div class='text-main'>${data[i].post}</div>
                           </div>

                           <div class='textDiv-bottom'>
                               <div class='comment-main'>
                                   <div class='comment-holder'>Views</div>
                                   <div class='comment-count'>${data[i].views}</div>
                               </div>

                               <div class='like-main'>
                                   <div class='like-holder'>Likes</div>
                                   <div class='like-count'>${data[i].likes}</div>
                               </div>
                           </div>
                       </div>
                         `;

                 $('#post-container').append(textCard);
             
          }
       }
   });
}


//Load media post

  var mediaCard = "";

   function fetch_Mediapost() {

    $.ajax({
        url: 'list-all-mediaposts.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

           var content = '';

            for (var i in data) {

               if(data[i].extension == 'png' || data[i].extension == 'jpg' || data[i].extension == 'jpeg'){

                      content = `<img src='../../document/${data[i].profile}' width='100%' height='80%' style='border-radius: 6px;'>`;
               }else{
                    content = `<video src='../../document/${data[i].profile}' width='100%' height='80%' style='border-radius: 6px;' controls></video>`;
               }

             mediaCard = `<div class='mediaDiv'>
                             <div class='text-header'>
                              <div class='text-header-logo-container'><img src='img/logo.png' class='header-logo'></div>
                              <div class='text-header-row'>
                                  <div class='header-sender'>SUCF UNN</div>
                                   <div class='header-date'>${data[i].posted_on}</div>
                                    <div class='header-action'>
                                      <form class='media-action-form'>
                                             <span class='header-edit'><i class='fa fa-book' aria-hidden='true'></i></span>
                                             <input type='hidden' class='hidden-input' name='id' value='${data[i].postID}'>
                                              <button class='delete-text' type='submit'>
                                                  <span class='header-delete'>
                                                    <i class='fa fa-trash' aria-hidden='true'></i>
                                                 </span>
                                              </button>
                                         </form>
                                    </div>
                              </div>
                          </div>

                          <div class='media-home'>
                              <div class='media-top'>
                                   ${content}
                                  <div class='media-title'>${data[i].title}</div>
                              </div>

                              <div class='media-article'>${data[i].article}</div>  
                          </div>

                          <div class='textDiv-bottom'>
                              <div class='comment-main'>
                                  <div class='comment-holder'>Views</div>
                                  <div class='comment-count'>${data[i].views}</div>
                              </div>

                              <div class='like-main'>
                                  <div class='like-holder'>Likes</div>
                                  <div class='like-count'>${data[i].likes}</div>
                              </div>
                          </div>
                     </div>
                    `;

                 $('#post-container').append(mediaCard);
             
          }
       }
   });
}


//Load notifications

var notificationContainer = "";

   function fetch_Notifications() {

    $.ajax({
        url: 'list-all-notifications.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             notificationContainer = `<div class='message-holder'>
                                         <div class='sender'>${data[i].sender}</div>
                                        <div class='message-text'>
                                            ${data[i].alert}
                                        </div>
                                     <div class='message-action'>
                                         <form class='message-form'>
                                             <button class='delete-button' type='submit'>Delete</button>
                                             <div class='date-div'>${data[i].created}</div>
                                              <input type='hidden' name='id' value='${data[i].notificationID}' class='idInput'>
                                         </form>
                                     </div>
                                    </div>
                                  `;

                 $('#notification-container').append(notificationContainer);
             
          }
       }
   });
}


$('.text-title').click(function () {
	postTitle = $(this).text();
	postText = $(this).parent().find('.text-main').text();
	form = $(this).parent().parent().find('.header-action-form');
	postID = form.find('.hidden-input').val();

	$('#text-post-edit-div').css({"width":"100%"});
	$('.text-post-title-textarea').text(postTitle);
	$('.post-textarea').text(postText);
	$('#postIdField').val(postID);


	//Call this function to fetch the comments associated with this post
    $.ajax({
        type:"GET",
        url: "list-textpost-comments.php",
        data: {id: postID},
        dataType: 'json',
        success: function(response){

                 commentDiv =
                                 `   <div class="user-comment-container">
				                        <div class="container-top-row">
				                            <div class="username-container">${response.name}</div>
				                              <div class="text-buttons-div">
				                                 <button type="button" class="approve-comment">Approve</button>
				                                  <button type="button" class="delete-comment">Delete</button>
				                                  <input type="hidden" class="hidden-input" name="commentId" value="${response.commentID}">
				                             </div>
				                        </div>

				                        <div class="user-main-comment">${response.comment}</div>
				                             
				                     <div class="comment-time-div">Posted on <i>${response.postingDate}</i></div>
                 				</div> 
                              `;     
                 }

        });

    $('#comments-container').append(commentDiv);

})


//Get the title, post and form id of a text post by clicking its post
$('.text-main').click(function () {
	postText = $(this).text();
	postTitle = $(this).parent().find('.text-title').text();
	 form = $(this).parent().parent().find('.header-action-form');
	 postID = form.find('.hidden-input').val();

	$('#text-post-edit-div').css({"width":"100%"});
	$('.text-post-title-textarea').text(postTitle);
	$('.post-textarea').text(postText);
	$('#postIdField').val(postID);


	 //Call this function to fetch the comments associated with this post
    $.ajax({
        type:"GET",
        url: "list-textpost-comments.php",
        data: {id: postID},
        dataType: 'json',
        success: function(response){

                 commentDiv =
                                 `   <div class="user-comment-container">
				                        <div class="container-top-row">
				                            <div class="username-container">${response.name}</div>
				                              <div class="text-buttons-div">
				                                 <button type="button" class="approve-comment">Approve</button>
				                                  <button type="button" class="delete-comment">Delete</button>
				                                  <input type="hidden" class="hidden-input" name="commentId" value="${response.commentID}">
				                             </div>
				                        </div>

				                        <div class="user-main-comment">${response.comment}</div>
				                             
				                     <div class="comment-time-div">Posted on <i>${response.postingDate}</i></div>
                 				</div> 
                              `;     
                 }

        });

    $('#comments-container').append(commentDiv);

})


$('#edit-post').click(function () {

	$('.text-post-title-textarea').attr('contenteditable', true);
	$('.post-textarea').attr('contenteditable', true);
	$('#updateTextPost').css({"display":"block"});

})


//Handle updating of text post
	$('#updateTextPost').click(function (e) {

		e.preventDefault();

		var editedTitle = $('.text-post-title-textarea').val();
		var editedPost = $('.post-textarea').val();

		if(postTitle == editedTitle && postText == editedPost) {
			alert("No changes detected !");
			return false;
		}
		else{

			//Set the values of the hidden inputs to both the new title and post
			$('#editedTextTitle').val(editedTitle);
			$('#editedTextPost').val(editedPost);

			//Initialize HTTP request to server
	         var xmlhttp = new XMLHttpRequest();
	         var url = "update-textpost.php";
	         var form = new FormData(document.getElementById('text-edit-form'));

	        xmlhttp.open("POST",url,true);
	        xmlhttp.send(form);

	        xmlhttp.onreadystatechange = function() {

	         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	               
	               var serverResponse = xmlhttp.responseText;
	                result.textContent = serverResponse;
	               
	               if(serverResponse == "Post updated successfully") {
	                    left.style.zIndex = 5000;
	                    left.style.opacity = 1;
	                     mid.style.opacity = 1;
	                     mid.style.border = "3px solid blue";
	                     midImage.src = "img/tick.jfif";
	                    inner.style.border = "3px solid blue";
	                   	hide = setTimeout(function () {
	                        refresh();
						    $('#text-post-edit-div').css({"width":"0%"});
						    $('.text-post-title-textarea').val("");
						    $('.post-textarea').val("");
						    $('#editedTextTitle').val("");
						    $('#editedTextPost').val("");
						    $('#postIdField').val("");
						        $('#post-container').empty();
							     fetch_Textpost();
							     fetch_Mediapost();
							     $('#notification-container').empty();
							     fetch_Notifications();
						 },2000)
	               }else{
	                    left.style.zIndex = 5000;
	                     left.style.opacity = 1;
	                    mid.style.opacity = 1;
	                    mid.style.border = "3px solid red";
	                     midImage.src = "img/exclamation.jfif";
	                    inner.style.border = "3px solid red";
	                     hide = setTimeout(function () {
	                       refresh();
						    $('#text-post-edit-div').css({"width":"100%"});
						 },3000)
	                }     
	         
	           }
	      
	      }
     
     }

 })


//Get the title, post and form id of a media post by clicking its title
$('.media-title').click(function () {
	mediaTitle = $(this).text();
	mediaText = $(this).parent().parent().find('.media-article').text();
	form = $(this).parent().parent().parent().find('.media-action-form');
	postID = form.find('.hidden-input').val();
	mediaPicture = $(this).parent().parent().find('.media-document').attr('src');

	$('#media-post-edit-div').css({"width":"100%"});
	$('.text-post-title-textarea').text(mediaTitle);
	$('.post-textarea').text(mediaText);
	$('.actual-media-image').attr('src', mediaPicture);
	$('#mediaIdField').val(postID);

    //Call this function to fetch the comments associated with this post
     $.ajax({
        type:"GET",
        url: "list-mediapost-comments.php",
        data: {id: postID},
        dataType: 'json',
        success: function(response){

                 commentDiv =
                                 `   <div class="user-comment-container">
				                        <div class="container-top-row">
				                            <div class="username-container">${response.name}</div>
				                              <div class="text-buttons-div">
				                                 <button type="button" class="approve-comment">Approve</button>
				                                  <button type="button" class="delete-comment">Delete</button>
				                                  <input type="hidden" class="hidden-input" name="commentId" value="${response.commentID}">
				                             </div>
				                        </div>

				                        <div class="user-main-comment">${response.comment}</div>
				                             
				                     <div class="comment-time-div">Posted on <i>${response.postingDate}</i></div>
                 				</div> 
                              `;     
                 }

        });

    $('#comments-container').append(commentDiv);

})


//Get the title, post and form id of a media post by clicking its post
$('.media-article').click(function () {
	mediaText = $(this).text();
	mediaTitle = $(this).parent().parent().find('.media-title').text();
	form = $(this).parent().parent().parent().find('.media-action-form');
	postID = form.find('.hidden-input').val();
	mediaPicture = $(this).parent().parent().find('.media-document').attr('src');

	$('#media-post-edit-div').css({"width":"100%"});
	$('.text-post-title-textarea').text(mediaTitle);
	$('.post-textarea').text(mediaText);
	$('.actual-media-image').attr('src', mediaPicture);
	$('#mediaIdField').val(postID);

    //Call this function to fetch the comments associated with this post
	 $.ajax({
        type:"GET",
        url: "list-mediapost-comments.php",
        data: {id: postID},
        dataType: 'json',
        success: function(response){

                 commentDiv =
                                 `   <div class="user-comment-container">
				                        <div class="container-top-row">
				                            <div class="username-container">${response.name}</div>
				                              <div class="text-buttons-div">
				                                 <button type="button" class="approve-comment">Approve</button>
				                                  <button type="button" class="delete-comment">Delete</button>
				                                  <input type="hidden" class="hidden-input" name="commentId" value="${response.commentID}">
				                             </div>
				                        </div>

				                        <div class="user-main-comment">${response.comment}</div>
				                             
				                     <div class="comment-time-div">Posted on <i>${response.postingDate}</i></div>
                 				</div> 
                              `;     
                 }

        });

    $('#comments-container').append(commentDiv);

})


$('#edit-media').click(function () {

	$('.text-post-title-textarea').attr('contenteditable', true);
	$('.post-textarea').attr('contenteditable', true);
	$('#updateMediaPost').css({"display":"block"});
	$('.image-edit-section').css({"display":"flex"});
	$('.image-holder').css({"height":"80%"});

})

//Handle mediapost update
$('#updateMediaPost').click(function (e) {

	e.preventDefault();

	    var editedMediaTitle = $('.text-post-title-textarea').val();
		var editedMediaText = $('.post-textarea').val();

		if(mediaTitle == editedMediaTitle && mediaText == editedMediaText) {
			alert("No changes detected !");
			return false;
		}
		else{

		    //Set the values of the hidden inputs to both the new title and post
			$('#editedMediaTitle').val(editedMediaTitle);
			$('#editedMediaPost').val(editedMediaText);

				//Initialize HTTP request to server
		         var xmlhttp = new XMLHttpRequest();
		         var url = "update-mediapost.php";
		         var form = new FormData(document.getElementById('media-edit-form'));

		        xmlhttp.open("POST",url,true);
		        xmlhttp.send(form);

		        xmlhttp.onreadystatechange = function() {

		         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		               
		               var serverResponse = xmlhttp.responseText;
		                result.textContent = serverResponse;
		               
		               if(serverResponse == "Post updated successfully") {
		                    left.style.zIndex = 5000;
		                    left.style.opacity = 1;
		                     mid.style.opacity = 1;
		                     mid.style.border = "3px solid blue";
		                     midImage.src = "img/tick.jfif";
		                    inner.style.border = "3px solid blue";
		                    hide = setTimeout(function () {	
		                        refresh();
							    $('#media-post-edit-div').css({"width":"0%"});
							    $('.text-post-title-textarea').val("");
							    $('.post-textarea').val("");
							    $('#editedMediaTitle').val("");
							    $('#editedMediaPost').val("");
							    $('#mediaIdField').val("");
							       $('#post-container').empty();
								     fetch_Textpost();
								     fetch_Mediapost();
								     $('#notification-container').empty();
								     fetch_Notifications();
							 },2000)  
		               }else{
		                    left.style.zIndex = 5000;
		                     left.style.opacity = 1;
		                    mid.style.opacity = 1;
		                    mid.style.border = "3px solid red";
		                     midImage.src = "img/exclamation.jfif";
		                    inner.style.border = "3px solid red";
		                     hide = setTimeout(function () {	
		                        refresh();
							    $('#media-post-edit-div').css({"width":"100%"});
							 },2000)  
		               }
		               
		          }
		      }

	      }

    })

