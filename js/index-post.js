     var result = document.getElementById("responseHolder");
     var left = document.getElementById("left");
    var button = document.getElementById("subscribe-button");      
    var formInput = document.querySelector(".form-control");
    var inner = document.getElementById("inner");
    var mid = document.getElementById("mid");
    var midImage = document.getElementById("mid-image");
    var button = document.getElementById('subscribe-button');
     var hide;

       button.style.opacity = 0;

    var emailnput = document.getElementById('emailAddress');
      emailnput.addEventListener('keyup', function () {
        if (emailnput.value.length < 10) {
             button.style.opacity = 0;
        } else {
             button.style.opacity = 1;
         }
      })

       function refresh() {
            result.textContent = "";
            inner.style.border = "none";
            mid.style.opacity = 0;
            mid.style.border = "3px solid blue";
             midImage.src = "";
            left.style.zIndex = -5000;  
             left.style.opacity = 0;
            button.disabled = false;
            formInput.value = "";  
      }

    function checkSubscribe() {

         button.disabled = true;
        
        //Initialize HTTP request to server
         var xmlhttp = new XMLHttpRequest();
         var url = "php/subscribe.php";
         var form = new FormData(document.getElementById('contactForm'));


         // get inputs by their name attribute
         const email = form.get('email');

        xmlhttp.open("POST",url,true);
        xmlhttp.send(form);

       xmlhttp.onreadystatechange = function() {

     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          
            var serverResponse = xmlhttp.responseText;
            result.textContent = serverResponse;

           if (serverResponse == "This email address has been registered and can receive notifications from us") {
                left.style.zIndex = 5000;
                left.style.opacity = 1;
                mid.style.opacity = 1;
                inner.style.border = "3px solid blue";
                midImage.src = "assets/img/tick.jfif";
                hide = setTimeout(function () {
                   refresh();
                },2000);
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
const form = document.getElementById('contactForm');

// handle signup on submit
form.addEventListener('submit', (event) => {
   event.preventDefault(); // prevent page refresh
   checkSubscribe();
});

