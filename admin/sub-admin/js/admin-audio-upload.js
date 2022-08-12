 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
 var midImage = document.getElementById("mid-image");
 var result = document.getElementById("responseHolder");
 var audioInput = document.getElementById("audio-input");
 var audioForm = document.getElementById('audio-upload-form');
 var hide;

 function refresh() {
    left.style.zIndex = -5000;
    left.style.opacity = 0;
    mid.style.opacity = 0;
    mid.style.border = "none";
    midImage.src = "";
    inner.style.border = "none"; 
    result.textContent = "";
    audioInput.value = "";
    audioForm.style.display = "none";
 }


 //Load audios

var audioContainer = '';

function fetch_Audios() {

    $.ajax({
        url: 'list-audios.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             audioContainer = ` <div class='media-holder'>
                                    <div class='media-container'>
                                        <div class='media-content'><audio class='media-audio' src='../../audio/${data[i].title}' controls></audio></div>
                                        <div class='media-name'>${data[i].title}</div>
                                    </div>

                                    <div class='media-actions'>
                                        <div class='download-actions'>
                                            <div class='downloads-div'>
                                              Likes : 
                                            <div class='downloads'>${data[i].likes}</div>
                                          </div>
                                        </div>

                                        <form class='media-form'>
                                            <div class='posted-date-div'>Posted on: ${data[i].posted}</div>
                                              <input type='hidden' name='id' value='${data[i].audioID}'>
                                            <button type='submit' class='delete-audio'>Delete</button>
                                        </form>
                                    </div>
                               </div>
                                  `;

                 $('#audio-container').append(audioContainer);
             
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



function uploadAudio() {

    //Initialize HTTP request to server
     var xmlhttp = new XMLHttpRequest();
     var url = "admin-audio-upload.php";
     var form = new FormData(document.getElementById('audio-upload-form'));

     // get inputs by their name attribute
     const audio = form.get('audio');

    xmlhttp.open("POST",url,true);
    xmlhttp.send(form);

   xmlhttp.onreadystatechange = function() {

 if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        var serverResponse = xmlhttp.responseText;
        result.textContent = serverResponse;

       if (serverResponse == "Audio uploaded successfully") {
            left.style.zIndex = 5000;
            left.style.opacity = 1;
             mid.style.opacity = 1;
             mid.style.border = "3px solid blue";
             midImage.src = "img/tick.jfif";
            inner.style.border = "3px solid blue";
            hide = setTimeout(function () {
                refresh();
                 $('#audio-container').empty();
                fetch_Audios();
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
            },2000)
         }

      }

   }

}

// get form element from the DOM
var form = document.getElementById('audio-upload-form');
// handle signup on submit
form.addEventListener('submit', function (e) {
    e.preventDefault();
   uploadAudio();
});
