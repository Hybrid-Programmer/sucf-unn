 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
 var midImage = document.getElementById("mid-image");
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
 }


//Send the comment to the server to be recorded
    function likePost() {
            
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "php/like-text-post.php";
             var form = new FormData(document.getElementById('like-form'));

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
                var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "Thanks for liking.") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "assets/img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                         refresh();
                    },2000)
               }else{
                    left.style.zIndex = 5000;
                     left.style.opacity = 1;
                    mid.style.opacity = 1;
                    mid.style.border = "3px solid red";
                     midImage.src = "assets/img/exclamation.jfif";
                    inner.style.border = "3px solid red";
                      hide = setTimeout(function () {
                        refresh();
                    },2000)
               }
               
          }
      }
   }

    // get form element from the DOM
    var form = document.getElementById('like-form');
    // handle signup on submit
    form.addEventListener('submit', (event) => {
       event.preventDefault(); // prevent page refresh
          likePost();
    });