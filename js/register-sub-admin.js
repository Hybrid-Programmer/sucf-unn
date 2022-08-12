       
var left = document.getElementById("left");
var inner = document.getElementById("inner");
var mid = document.getElementById("mid");
var midImage = document.getElementById("mid-image");
var result = document.getElementById("responseHolder");
var button = document.getElementById('registerSubAdmin');
var adminForm = document.getElementById('registerForm2');
var formInputs = document.querySelectorAll(".contact-input");
var innerDivs = document.querySelectorAll('.inner-div');
 var loginAdmin = document.getElementById('loginAdmin');


  function refresh() {
      result.textContent = "";
       inner.style.border = "none";
       mid.style.opacity = 0;
       midImage.src = "";
       left.style.zIndex = -5000;  
       left.style.opacity = 0;
       button.disabled = false;
       for (var i = 0; i < formInputs.length; i++) {
           formInputs[i].value = "";
       }
       loginAdmin.disabled = false;
  }


  //Load admin profile

  var profileCard = "";

   function fetch_Admin_Profiles() {

    $.ajax({
        url: 'main/list-all-leaders.php',
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
        url: 'main/list-all-notifications.php',
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



       function registerSubAdmin() {

             button.disabled = true;
            
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "register-subadmin.php";
             var form = new FormData(document.getElementById('registerForm2'));

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "You have registered successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    setTimeout(function () {
                       refresh();
                          adminForm.style.opacity = 0;
                          adminForm.style.zIndex = -1000;
                           for (var i = 0; i < innerDivs.length; i++) {
                                 innerDivs[i].style.display = "none";
                                 innerDivs[0].style.display = "block";
                         }
                         $('#leaders-main').empty();
                        $('#notification-container').empty();
                        fetch_Admin_Profiles();
                        fetch_Notifications();
                    },2000);
               }else{
                     left.style.zIndex = 5000;
                     left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid red";
                     midImage.src = "img/exclamation.jfif";
                     inner.style.border = "3px solid red";
                       setTimeout(function () {
                       refresh();
                          adminForm.style.opacity = 1;
                          adminForm.style.zIndex = 1000;
                           for (var i = 0; i < innerDivs.length; i++) {
                              innerDivs[i].style.display = "none";
                              innerDivs[2].style.display = "block";
                        }
                    },2000);
               }
               
          }
      }
   }

    // get form element from the DOM
    var form = document.getElementById('registerForm2');
    // handle signup on submit
    form.addEventListener('submit', (event) => {
       event.preventDefault(); // prevent page refresh
       registerSubAdmin();
    });
    