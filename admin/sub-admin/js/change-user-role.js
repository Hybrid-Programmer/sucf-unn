 $('.make-admin').click( function () {
      var form = this.form; //Get the form that contains the currentlu clicked button
      var password = form.password; //Access any of its elements by putting its name first
      var email = form.email.value;
      var role = form.role.value;
      var id = form.id.value;

      if(role == "user"){
          password.style.display = "inline-block";
      } 
  })

  $('.make-subadmin').click( function () {
      var form = this.form;
      var password = form.password;
      var email = form.email.value;
      var role = form.role.value;
      var id = form.id.value;

      if(role == "user"){
          password.style.display = "inline-block";
      }    
  })


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

  function updateMembersTab() {
         $('#members-container').load('list-all-users.php');
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


  $('.saveButton').click(function (e) {

       e.preventDefault();

      var parentForm = this.form;
      var role = parentForm.role.value;
      //For Sub-admin
      var radioButton = $("input:radio[name=make-admin-or-user]:checked").val();
      //For Admin
      var changeButton = $("input:radio[name=make-subadmin-or-user]:checked").val();
      //For User
      var userButton = $("input:radio[name=make-admin-or-subadmin]:checked").val();

     //Handle making a sub-admin an admin or user
      if (radioButton == "Admin" && role == "sub-admin") {

           var xmlhttp = new XMLHttpRequest();
           var url = "make-subadmin-an-admin.php";
           var form = new FormData(this.form);

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
              var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "Sub-admin has been changed to admin successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                        refresh();
                          $('#members-container').empty(); //First clear everything within the div
                        updateMembersTab();
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
  else if(radioButton == "User" && role == "sub-admin"){

      var xmlhttp = new XMLHttpRequest();
      var url = "make-subadmin-a-user.php";
      var form = new FormData(this.form);

      xmlhttp.open("POST",url,true);
      xmlhttp.send(form);

       xmlhttp.onreadystatechange = function() {

     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
         
           var serverResponse = xmlhttp.responseText;
           result.textContent = serverResponse;

          if (serverResponse == "Sub-admin has been changed to user successfully") {
               left.style.zIndex = 5000;
               left.style.opacity = 1;
                mid.style.opacity = 1;
                mid.style.border = "3px solid blue";
                midImage.src = "img/tick.jfif";
               inner.style.border = "3px solid blue";
               hide = setTimeout(function () {
                        refresh();
                          $('#members-container').empty(); //First clear everything within the div
                        updateMembersTab();
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


 //Handle making an admin a sub-admin or user

 if(changeButton == "Sub-admin" && role == "admin"){

      var xmlhttp = new XMLHttpRequest();
           var url = "make-admin-a-subadmin.php";
           var form = new FormData(this.form);

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
                var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "Admin has been changed to sub-admin successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                   hide = setTimeout(function () {
                        refresh();
                          $('#members-container').empty(); //First clear everything within the div
                       updateMembersTab();
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
 else if(changeButton == "User" && role == "admin"){ 

     var xmlhttp = new XMLHttpRequest();
           var url = "make-admin-a-user.php";
           var form = new FormData(this.form);

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              
                var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "Admin has been changed to a user successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                   hide = setTimeout(function () {
                        refresh();
                          $('#members-container').empty(); //First clear everything within the div
                        updateMembersTab();
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

//Handle making a user an admin or sub-admin
 if(userButton == "Admin" && role == "user"){

 var xmlhttp = new XMLHttpRequest();
 var url = "make-user-an-admin.php";
 var form = new FormData(this.form);

 xmlhttp.open("POST",url,true);
 xmlhttp.send(form);

 xmlhttp.onreadystatechange = function() {

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
           
          var serverResponse = xmlhttp.responseText;
           result.textContent = serverResponse;

          if (serverResponse == "User has been changed to admin successfully") {
               left.style.zIndex = 5000;
               left.style.opacity = 1;
                mid.style.opacity = 1;
                mid.style.border = "3px solid blue";
                midImage.src = "img/tick.jfif";
               inner.style.border = "3px solid blue";
               hide = setTimeout(function () {
                        refresh();
                          $('#members-container').empty(); //First clear everything within the div
                        updateMembersTab();
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
 else if(userButton == "Sub-admin" && role == "user"){ //if(radioButton.value == "Sub-admin" && role == "user")

 var xmlhttp = new XMLHttpRequest();
 var url = "make-user-a-subadmin.php";
 var form = new FormData(this.form);

 xmlhttp.open("POST",url,true);
 xmlhttp.send(form);

  xmlhttp.onreadystatechange = function() {

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
           
           var serverResponse = xmlhttp.responseText;
           result.textContent = serverResponse;

          if (serverResponse == "User has been changed to sub-admin successfully") {
               left.style.zIndex = 5000;
               left.style.opacity = 1;
                mid.style.opacity = 1;
                mid.style.border = "3px solid blue";
                midImage.src = "img/tick.jfif";
               inner.style.border = "3px solid blue";
               hide = setTimeout(function () {
                        refresh();
                          $('#members-container').empty(); //First clear everything within the div
                        updateMembersTab();
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


  });