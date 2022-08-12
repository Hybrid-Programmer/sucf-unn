
var left = document.getElementById("left");
var inner = document.getElementById("inner");
var mid = document.getElementById("mid");
var midImage = document.getElementById("mid-image");
var result = document.getElementById("responseHolder");
var hide;

function refresh() {
    left.style.zIndex = -5000;
    left.style.opacity = 0;
    mid.style.opacity = 0;
    mid.style.border = "none";
    midImage.src = "";
   inner.style.border = "none"; 
   result.textContent = "";
 }


 //Load videos

var videoContainer = "";

   function fetch_Videos() {

    $.ajax({
        url: 'list-videos.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             videoContainer = `<div class='media-holder'>
                                    <div class='media-container'>
                                     <div class='media-content'>
                                        <video class='media-video' src='../../video/${data[i].title}' controls></video>
                                    </div>
                                        <div class='media-name'>${data[i].title}</div>
                                    </div>

                                    <div class='media-actions'>
                                        <div class='download-actions'>
                                            <div class='downloads-div'>
                                              Downloads : 
                                            <div class='downloads'>${data[i].downloads}</div>
                                          </div>

                                          <div class='views-div'>
                                              Views : 
                                            <div class='views'>${data[i].views}</div>
                                          </div>
                                        </div>

                                        <form class='media-form'>
                                            <div class='posted-date-div'>Posted on: ${data[i].posted}</div>
                                             <input type='hidden' name='id' value='${data[i].videoID}'/>
                                            <button type='submit' class='delete-media'>Delete</button>
                                        </form>
                                    </div>
                                 </div>
                                  `;

                 $('#video-container').append(videoContainer);
             
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


$('.delete-media').click(function (e) {

       e.preventDefault();

       var xmlhttp = new XMLHttpRequest();
       var url = "delete-media.php";
       var form = new FormData(this.form);
       var id = form.get('id');

       xmlhttp.open("POST",url,true);
       xmlhttp.send(form);

        xmlhttp.onreadystatechange = function() {

     if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          
           var serverResponse = xmlhttp.responseText;
            result.textContent = serverResponse;

           if(serverResponse == "Video deleted") {
                left.style.zIndex = 5000;
                left.style.opacity = 1;
                 mid.style.opacity = 1;
                 mid.style.border = "3px solid blue";
                 midImage.src = "img/tick.jfif";
                inner.style.border = "3px solid blue";
                hide = setTimeout(function () {
                   refresh();
                    $('#video-container').empty();
                   fetch_Videos();
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
})