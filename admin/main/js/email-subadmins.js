 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
 var midImage = document.getElementById("mid-image");
 var messageForm = document.getElementById("message-subadmin-form");
 var messageTextarea = document.getElementById("message-textarea2");
  var result = document.getElementById("responseHolder");
 var start;

 function refresh() {
     left.style.zIndex = -5000;
    left.style.opacity = 0;
    mid.style.opacity = 0;
    mid.style.border = "none";
    midImage.src = "";
    inner.style.border = "none"; 
    messageTextarea.value = "";
    messageForm.style.display = "none";
    result.textContent = "";
 }


  function emailAdmins() {

            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "email-subadmins.php";
             var form = new FormData(document.getElementById('message-subadmin-form'));

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if(serverResponse == "Email has been sent successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                   start = setTimeout(function () {
                      refresh();
                   },2000)
               }else{
                    left.style.zIndex = 5000;
                     left.style.opacity = 1;
                    mid.style.opacity = 1;
                    mid.style.border = "3px solid red";
                     midImage.src = "img/exclamation.jfif";
                    inner.style.border = "3px solid red";
                    start = setTimeout(function () {
                      refresh();
                   },2000)
               }
               
          }
      }
   }


    // get form element from the DOM
    var form = document.getElementById('message-subadmin-form');
    // handle signup on submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();
             emailSubadmins();
    });
    