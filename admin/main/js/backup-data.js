  
 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
 var midImage = document.getElementById("mid-image");  
 var backupDiv = document.getElementById('admin-biodata-div');    
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
    backupDiv.style.display = "none";
 }

   //Load admin profile

  var profileCard = "";

   function fetch_Admin_Profiles() {

    $.ajax({
        url: 'list-all-leaders.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             profileCard = `<div class='leaders-parent-div'>
                              <div class='leader-top-row'>
                                  <div class='image-section-div'>
                                      <img src='../../leaders/${data[i].profile}' class='leaders-image'>
                                  </div>
                                  <div class='name-section-div'>
                                      <div class='name-container-div'>${data[i].firstname} ${data[i].middlename} ${data[i].lastname}</div>
                                      <div class='office-container-div'>${data[i].office}</div>
                                  </div>
                              </div>

                              <div class='leader-bottom-column'>
                                  <div class='leader-data-holder'>
                                      <div class='email-intro'>Email :</div>
                                      <div class='email-data'>${data[i].email}</div>
                                  </div>

                                    <div class='leader-data-holder'>
                                      <div class='contact-intro'>Contact :</div>
                                      <div class='contact-data'>${data[i].contact}</div>
                                  </div>

                                   <div class='leader-data-holder'>
                                      <div class='role-intro'>Role :</div>
                                      <div class='role-data'>${data[i].role}</div>
                                  </div>


                                   <div class='type-data-holder'>
                                      <div class='type-intro'>Type: </div>
                                      <div class='type-data'>${data[i].type}</div>
                                  </div>
                              </div>
                        </div>
                     `;

                 $('#leaders-main').append(profileCard);
             
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
 

  function backupData() {

            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "backup-leaders-data.php";

            xmlhttp.open("POST",url,true);
            xmlhttp.send();

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;        

               if (serverResponse == "Backup successful.") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                       refresh();
                         $("#leaders-main").empty(); //Clear the div first
                         fetch_Admin_Profiles();
                         $('#notification-container').empty();
                         fetch_Notifications();
                    },1500)
               }else{
                    left.style.zIndex = 5000;
                     left.style.opacity = 1;
                    mid.style.opacity = 1;
                    mid.style.border = "3px solid red";
                     midImage.src = "img/exclamation.jfif";
                    inner.style.border = "3px solid red";
                     hide = setTimeout(function () {
                       refresh();
                    },2000);
               }
               
          }
      }
   }


    // get form element from the DOM
    var backupButton = document.getElementById('backup');
    // handle signup on submit
    backupButton.addEventListener('click', function (e) {
        e.preventDefault();
       backupData();
    });
    