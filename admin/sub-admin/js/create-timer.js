var left = document.getElementById("left");
var inner = document.getElementById("inner");
var mid = document.getElementById("mid");
var midImage = document.getElementById("mid-image");
var eventCreationDiv = document.querySelector('.event-creation-div');
var timerForm = document.getElementById("event-creation-form");
var eventFile = document.querySelector('.event-file');
var eventInput = document.querySelectorAll('.event-input');
var eventNumbers = document.querySelectorAll('.event-numbers');
var button = document.getElementById('createTimer');
var result = document.getElementById("responseHolder");
var hide;

//Refresh the div after any successful action
 function refresh() {
    result.textContent = "";
    inner.style.border = "none";
    mid.style.opacity = 0;
    midImage.src = "";
    left.style.zIndex = -5000;  
    left.style.opacity = 0;
    button.disabled = false;
    eventFile.value = "";
    for (var i = 0; i < eventInput.length; i++) {
        eventInput[i].value = "";
    }
     for (var i = 0; i < eventNumbers.length; i++) {
        eventNumbers[i].value = "";
    }
     eventCreationDiv.style.zIndex = -3000;
 }


function displayTimers() {
     $('#event-container').load('view-timer.php');
}
 
//Send the timer to the server to be created
    function createTimer() {

             button.disabled = true;
            
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "create-timer.php";
             var form = new FormData(document.getElementById('event-creation-form'));

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
                var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "Timer has been created successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                       refresh();
                        $('#event-container').empty();
                       displayTimers();
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
    var form = document.getElementById('event-creation-form');
    // handle signup on submit
    form.addEventListener('submit', (e) => {
       e.preventDefault(); // prevent page refresh
          createTimer();
    });



   
    