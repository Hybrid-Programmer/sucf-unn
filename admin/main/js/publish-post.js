
 //Hanle the deletion of a text post
var hide;
var left = document.getElementById("left");
var inner = document.getElementById("inner");
var mid = document.getElementById("mid");
var midImage = document.getElementById("mid-image");
var result = document.getElementById("responseHolder");

function refresh() {
    left.style.zIndex = -5000;
    left.style.opacity = 0;
    mid.style.opacity = 0;
    mid.style.border = "none";
    midImage.src = "";
    inner.style.border = "none"; 
    result.textContent = "";
}
    
    //Replace this icon with the whatsapp forward icon
     $('.fa-book').click(function (e) { //Get the correct icon for forward 

      e.preventDefault();
      
         //Publish a text post
        if ($(this).parent().parent().hasClass("header-action-form")) {

          var xmlhttp = new XMLHttpRequest();
           var url = "publish-textpost.php";
           var form = new FormData(document.querySelector('.header-action-form'));
        
           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if(serverResponse == "Post is successfully published and visible to everyone") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                        refresh();
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
                     },3000)
               }
               
          }
      }

 }
  //Publish a media post
 else if($(this).parent().parent().hasClass("media-action-form")){

           var xmlhttp = new XMLHttpRequest();
           var url = "publish-mediapost.php";
           var form = new FormData(document.querySelector('.media-action-form'));

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if(serverResponse == "Post is successfully published and visible to everyone") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                     hide = setTimeout(function () {
                        refresh();
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
                     },3000)
               }
               
          }
      } 
 }

});

