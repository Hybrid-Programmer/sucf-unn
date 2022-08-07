     var result = document.getElementById("responseHolder");
     var left = document.getElementById("left");
     var mid = document.getElementById("mid");
     var midImage = document.getElementById("mid-image");
     var hide;

     function refresh() { 
        result.textContent = "";
        inner.style.border = "none";
        mid.style.opacity = 0;
        mid.style.border = "3px solid blue";
        midImage.src = "";
        left.style.zIndex = -5000;  
     }

    $('.like-button').click(function (e) {

           e.preventDefault();

           var xmlhttp = new XMLHttpRequest();
           var url = "php/like-audio.php";
           var form = new FormData(this.form);
         
           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "Thanks for liking") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "assets/img/tick.jfif";
                    inner.style.border = "3px solid blue";
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
                   },2000);
               }
               
          }
      }  
  })