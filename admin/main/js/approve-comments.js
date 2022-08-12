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


 $('.approve-comment').click(function (e) {

      e.preventDefault();

        if ($(this).parent().hasClass("text-buttons-div")) {

          var xmlhttp = new XMLHttpRequest();
           var url = "approve-textpost-comment.php";
           var id = $(this).parent().find('commentId').val();

           xmlhttp.open("POST",url,true);
           xmlhttp.send(id);

            xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "Comment approved") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                        refresh();
                        $(this).text("Approved");
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
 else if($(this).parent().hasClass("media-buttons-div")){ //Delete a media post

         //alert("Hello world");

           var xmlhttp = new XMLHttpRequest();
           var url = "approve-mediapost-comment.php";
           var id = $(this).parent().find('commentId').val();

           xmlhttp.open("POST",url,true);
           xmlhttp.send(id);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "Comment approved") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                     hide = setTimeout(function () {
                        refresh();
                         $(this).text("Approved");
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