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


 $('.delete-comment').click(function (e) {

      e.preventDefault();

        if($(this).parent().hasClass("text-buttons-div")) { //Delete a textpost comment

          var xmlhttp = new XMLHttpRequest();
           var url = "delete-textpost-comment.php";
           var id = $(this).parent().find('commentId').val();

           xmlhttp.open("POST",url,true);
           xmlhttp.send(id);

            xmlhttp.onreadystatechange = function() {

         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if(serverResponse == "Comment deleted") {
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
 else if($(this).parent().hasClass("media-buttons-div")){ //Delete a media comment

           var xmlhttp = new XMLHttpRequest();
           var url = "delete-mediapost-comment.php";
           var id = $(this).parent().find('commentId').val();

           xmlhttp.open("POST",url,true);
           xmlhttp.send(id);

           xmlhttp.onreadystatechange = function() {

         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if(serverResponse == "Comment deleted") {
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