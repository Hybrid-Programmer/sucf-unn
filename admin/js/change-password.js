
    var resetLink = document.getElementById('resetLink');
    var loginForm = document.getElementById('loginForm');
    var checkButton = document.getElementById('checkButton');
    var changeButton = document.getElementById('changeButton');
    var checkEmail = document.getElementById('checkEmail');
    var changeEmail = document.getElementById('changeEmail');
     var changePassword = document.getElementById('changePassword');

     resetLink.addEventListener('click', function () {
        resetForm.setAttribute("style", "opacity: 1;z-index: 1000;height: 55%;");
        loginForm.setAttribute("style", "opacity: 0;z-index: -1000;");
     })

   var result = document.getElementById("responseHolder");
   var left = document.getElementById("left");
    var inner = document.getElementById("inner");
    var mid = document.getElementById("mid");
    var midImage = document.getElementById("mid-image");

     function refresh() {
         result.textContent = "";
          inner.style.border = "none";
          mid.style.opacity = 0;
          midImage.src = "";
          left.style.zIndex = -5000;  
          left.style.opacity = 0;
     }

//Submit the form and await response from the server
 var resetForm = document.getElementById('resetForm');
 var changeForm = document.getElementById('changeForm');

  checkButton.addEventListener('click', function (e) {
       e.preventDefault();

     if (checkEmail.value == "") {
           result.textContent = "Email field is empty !";
            left.style.zIndex = 5000;
             left.style.opacity = 1;
             mid.style.opacity = 1;
             mid.style.border = "3px solid red";
             midImage.src = "img/exclamation.jfif";
             inner.style.border = "3px solid red";
             checkButton.disabled = true;
             //Hide
               setTimeout(function () {
                  refresh();
                  checkButton.disabled = false;
             },1500);
         }
          else{
              //Initialize HTTP request to server
               var xmlhttp = new XMLHttpRequest();
               var url = "check-email-availability.php";

               var form = new FormData(document.getElementById('resetForm'));
               var email = form.get('email');

               xmlhttp.open("POST",url,true);
               xmlhttp.send(form);

               xmlhttp.onreadystatechange = function() {

       if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

             if (serverResponse == "Email is available") {
              //Then, show the changeForm and hide the resetForm
               resetForm.setAttribute('style', 'opacity: 0;z-index: -1000;');
               changeForm.setAttribute('style', 'opacity: 1;z-index: 1000;');
             }else {
                   left.style.zIndex = 5000;
                   left.style.opacity = 1;
                   mid.style.opacity = 1;
                   mid.style.border = "3px solid red";
                   midImage.src = "img/exclamation.jfif";
                   inner.style.border = "3px solid red";
                   //Hide
                   setTimeout(function () {
                       refresh();
                          resetForm.setAttribute('style', 'opacity: 1;z-index: 1000;');
                          changeForm.setAttribute('style', 'opacity: 0;z-index: -1000;');
                    },3000);

                 }

            }
        }
     }
});



//Set a new password and submit the form
 changeButton.addEventListener('click', function (e) {

       e.preventDefault();

            changeButton.disabled = true;

        if (changeEmail.value == "" || changePassword.value == "") {
                   result.textContent = "Email or password field is empty !";
                    left.style.zIndex = 5000;
                     left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid red";
                     midImage.src = "img/exclamation.jfif";
                     inner.style.border = "3px solid red";
                     //Hide
                    setTimeout(function () {
                           refresh();
                           changeButton.disabled = false;
                    },2000);
             }
             else{ 
                  //Initialize HTTP request to server
                   var xmlhttp = new XMLHttpRequest();
                   var url = "reset-password.php";

                   var form = new FormData(document.getElementById('changeForm'));

                   xmlhttp.open("POST",url,true);
                   xmlhttp.send(form);

                   xmlhttp.onreadystatechange = function() {

               if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                   var serverResponse = xmlhttp.responseText;
                     result.textContent = serverResponse;

                     if (serverResponse == "Password has been changed successfully") {
                          left.style.zIndex = 5000;
                          left.style.opacity = 1;
                           mid.style.opacity = 1;
                           mid.style.border = "3px solid blue";
                           midImage.src = "img/tick.jfif";
                          inner.style.border = "3px solid blue";
                          //Hide
                          setTimeout(function () {
                               refresh();
                               changeForm.setAttribute('style', 'opacity: 0;z-index: -1000;');
                         },1000);
                     }else{
                          left.style.zIndex = 5000;
                           left.style.opacity = 1;
                           mid.style.opacity = 1;
                           mid.style.border = "3px solid red";
                           midImage.src = "img/exclamation.jfif";
                           inner.style.border = "3px solid red";
                           //Hide
                           setTimeout(function () {
                               refresh();
                               changeForm.setAttribute('style', 'opacity: 1;z-index: 1000;');
                            },1000);
                            
                         }

                    }
                }

            }

      });

