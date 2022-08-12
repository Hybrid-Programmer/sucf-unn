 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
 var midImage = document.getElementById("mid-image");
 var result = document.getElementById("responseHolder");
 var hide;

  function refresh() {
    result.textContent = "";
    inner.style.border = "none";
    mid.style.opacity = 0;
    midImage.src = "";
    left.style.zIndex = -5000;  
    left.style.opacity = 0;
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

  
    $('.delete-button').click(function (e) {

           e.preventDefault();

           var xmlhttp = new XMLHttpRequest();
           var url = "delete-notification.php";
           var form = new FormData(this.form);
          
           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
                var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if(serverResponse == "Notification deleted") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                        refresh();
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
  })