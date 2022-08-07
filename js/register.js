var left = document.getElementById("left");
var inner = document.getElementById("inner");
var mid = document.getElementById("mid");
var midImage = document.getElementById("mid-image");
var result = document.getElementById("responseHolder");
var register = document.getElementById("register");      
var formInputs = document.querySelectorAll(".contact-input");
var hide;


 function refresh() {
    result.textContent = "";
    mid.style.opacity = 0;
    mid.style.opacity = 0;
    mid.style.border = "3px solid blue";
    midImage.src = "";
    inner.style.border = "none";
    left.style.zIndex = -1000;  
    register.disabled = false;
    for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].value = "";
     }
 }


 function registerUser() {

             register.disabled = true;
            
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "php/register.php";
             var form = new FormData(document.getElementById('registerForm'));

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

              var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "You have registered successfully") {
                    left.style.zIndex = 1000;
                    inner.style.border = "3px solid blue";
                    mid.style.opacity = 1;
                    midImage.src = "assets/img/tick.jfif";
                    hide = setTimeout(function () {
                        refresh();
                        //Feel free to change this to any page after a successful registration
                        window.location = "posts.html";
                    },2000);
               }else{
                    left.style.zIndex = 1000;
                     inner.style.border = "3px solid red";
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid red";
                     midImage.src = "assets/img/exclamation.jfif";
                    hide = setTimeout(function () {
                        refresh();
                    },2000);
               }
               
          }
      }
   }


    // get form element from the DOM
    var form = document.getElementById('registerForm');
    // handle signup on submit
    form.addEventListener('submit', (e) => {
       e.preventDefault(); // prevent page refresh
       registerUser();
    });