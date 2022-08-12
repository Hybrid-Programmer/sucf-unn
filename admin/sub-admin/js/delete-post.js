
 //Hanle the deletion of a text post
 var hide;
 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
 var midImage = document.getElementById("mid-image");
 var result = document.getElementById("responseHolder");


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


     $('.fa-trash').click(function (e) {

      e.preventDefault();

        if ($(this).parent().parent().parent().hasClass("header-action-form")) {

         //alert("Yes");

          var xmlhttp = new XMLHttpRequest();
           var url = "delete-textpost.php";
           var form = new FormData(document.querySelector('.header-action-form'));
           var id = form.get('id');

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if(serverResponse == "Post deleted successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                        refresh();
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
                     },3000)
               }
               
          }
      }

 }
 else if($(this).parent().parent().parent().hasClass("media-action-form")){ //Delete a media post

         //alert("Hello world");

           var xmlhttp = new XMLHttpRequest();
           var url = "delete-mediapost.php";
           var form = new FormData(document.querySelector('.media-action-form'));
           var id = form.get('id');

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if(serverResponse == "Post deleted successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                     hide = setTimeout(function () {
                        refresh();
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
                     },3000)
               }
               
          }
      } 
 }

});

