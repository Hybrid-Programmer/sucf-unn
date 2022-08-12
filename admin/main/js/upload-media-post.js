 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
 var midImage = document.getElementById("mid-image");
 var mediaDiv = document.getElementById("multimedia-div");
 var postCategory = document.getElementById('media-category');
 var postTitle = document.getElementById('media-title');
 var postMessage = document.getElementById('media-textPost');
 var postFile = document.getElementById('media-file');
 var result = document.getElementById("responseHolder");
 var button = document.getElementById('mediaSubmit');
 var hide;

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


  function refresh() {
    postCategory.value = "";
     postTitle.value = "";
     postFile.value = "";
     postMessage.value = "";
     postDiv.style.width = 0 + '%';
     left.style.zIndex = -5000;
     left.style.opacity = 0;
     mid.style.opacity = 0;
     mid.style.border = "none";
     midImage.src = "";
     inner.style.border = "none";
     result.textContent = "";
 }


  function uploadMediapost() {

             button.disabled = true;
            
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "upload-media-post.php";
             var form = new FormData(document.getElementById('media-post-form'));

             // get inputs by their name attribute
             const category = form.get('category');
             const title = form.get('title');
             const post = form.get('post');
             const media = form.get('media');

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
                var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "Post uploaded successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                      refresh();
                      mediaDiv.style.width = 0 + '%';
                         $('#post-container').empty(); //Clear the post container first
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
                          mediaDiv.style.width = 100 + '%';
                        },2000)
               }
               
          }
      }
   }

    // get form element from the DOM
    var form = document.getElementById('media-post-form');
    // handle signup on submit
    form.addEventListener('submit', (event) => {
       event.preventDefault(); // prevent page refresh
       uploadMediapost();
    });
    