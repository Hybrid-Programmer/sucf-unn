var result = document.getElementById("responseHolder");
var left = document.getElementById("left");
var button = document.getElementById("send-message");      
var formInputs = document.querySelectorAll(".contact-input");
var inner = document.getElementById("inner");
var textarea = document.getElementById("textarea");
var mid = document.getElementById("mid");
var midImage = document.getElementById("mid-image");
var start;

function refresh() {
     result.textContent = "";
     inner.style.border = "none";
     mid.style.opacity = 0;
     mid.style.border = "3px solid blue";
     midImage.src = "";
     left.style.zIndex = -5000;  
     button.disabled = false;
     textarea.value = "";
      for (var i = 0; i < formInputs.length; i++) {
         formInputs[i].value = "";
      } 
}


  function sendEmail() {

             button.disabled = true;
            
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "php/send-email.php";
             var form = new FormData(document.getElementById('messageForm'));

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "Message has been sent successfully") {
                    left.style.zIndex = 5000;
                    mid.style.opacity = 1;
                    inner.style.border = "3px solid blue";
                    midImage.src = "assets/img/tick.jfif";
                    start = setTimeout(function () {
                       refresh();
                    },2000)

               }else{
                    left.style.zIndex = 5000;
                    mid.style.opacity = 1;
                    inner.style.border = "3px solid red";
                    mid.style.border = "3px solid red";
                    midImage.src = "assets/img/exclamation.jfif";
                    start = setTimeout(function () {
                       refresh();
                    },12000)
               }
               
          }
      }
   }


    // get form element from the DOM
    var form = document.getElementById('messageForm');
    // handle signup on submit
    form.addEventListener('submit', (event) => {
       event.preventDefault(); // prevent page refresh
       sendEmail();
    });
