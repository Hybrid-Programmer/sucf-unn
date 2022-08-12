 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
 var midImage = document.getElementById("mid-image");
 var result = document.getElementById("responseHolder");
 var documentInput = document.getElementById("document-input");
 var documentForm = document.getElementById('document-upload-form');
 var hide;

  function refresh() {
    left.style.zIndex = -5000;
    left.style.opacity = 0;
    mid.style.opacity = 0;
    mid.style.border = "none";
    midImage.src = "";
    inner.style.border = "none"; 
    result.textContent = "";
    documentInput.value = "";
    documentForm.style.display = "none";
 }


//Load documents

var documentContainer = '';

function fetch_Documents() {

    $.ajax({
        url: 'list-documents.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

                if(data[i].extension == 'pdf'){

                    documentContainer = `<div class='media-holder'>
                                              <div class='media-container'>
                                                  <div class='media-content'><img class='media-image' src='../../document/pdf.png' alt='${data[i].title}'></div>
                                                  <div class='media-name'>${data[i].title}</div>
                                              </div>

                                              <div class='media-actions'>
                                                  <div class='download-actions'>
                                                        Downloads : 
                                                      <div class='downloads'>${data[i].downloads}</div>
                                                    </div>

                                                      <div class='downloads-div'>
                                                    </div>
                                                  </div>

                                                  <form class='media-form'>
                                                      <div class='posted-date-div'>Posted on: ${data[i].posted}</div>
                                                       <input type='hidden' name='id' value='${data[i].documentID}' />
                                                      <button type='submit' class='delete-document'>Delete</button>
                                                  </form>
                                              </div>
                                         `;
                      
               }
               else  if(data[i].extension == 'docx'){
                    
                    documentContainer = `<div class='media-holder'>
                                              <div class='media-container'>
                                                  <div class='media-content'><img class='media-image' src='../../document/docx.png' alt='${data[i].title}'></div>
                                                  <div class='media-name'>${data[i].title}</div>
                                              </div>

                                              <div class='media-actions'>
                                                  <div class='download-actions'>
                                                      <div class='downloads-div'>
                                                        Downloads : 
                                                      <div class='downloads'>${data[i].downloads}</div>
                                                    </div>

                                                    </div>
                                                  </div>

                                                  <form class='media-form'>
                                                      <div class='posted-date-div'>Posted on: ${data[i].posted}</div>
                                                       <input type='hidden' name='id' value='${data[i].documentID}' />
                                                      <button type='submit' class='delete-document'>Delete</button>
                                                  </form>
                                              </div>
                                        `;
               }
               else if(data[i].extension == 'zip'){

                    documentContainer = `<div class='media-holder'>
                                              <div class='media-container'>
                                                  <div class='media-content'><img class='media-image' src='../../document/zip.png' alt='${data[i].title}'></div>
                                                  <div class='media-name'>${data[i].title}</div>
                                              </div>

                                              <div class='media-actions'>
                                                  <div class='download-actions'>
                                                      <div class='downloads-div'>
                                                        Downloads : 
                                                      <div class='downloads'>${data[i].downloads}</div>
                                                    </div>

                                                    </div>
                                                  </div>

                                                  <form class='media-form'>
                                                      <div class='posted-date-div'>Posted on: ${data[i].posted}</div>
                                                       <input type='hidden' name='id' value='${data[i].documentID}' />
                                                      <button type='submit' class='delete-document'>Delete</button>
                                                  </form>
                                              </div>
                                        `;
               }
               else{
                    documentContainer = `<div class='media-holder'>
                                         <div class='media-container'>
                                             <div class='media-content'><img class='media-image' src='../../document/${data[i].title}' alt='${data[i].title}'></div>
                                             <div class='media-name'>${data[i].title}</div>
                                         </div>

                                         <div class='media-actions'>
                                             <div class='download-actions'>
                                                 <div class='downloads-div'>
                                                   Downloads : 
                                                 <div class='downloads'>${data[i].downloads}</div>
                                               </div>

                                               </div>
                                             </div>

                                             <form class='media-form'>
                                                 <div class='posted-date-div'>Posted on: ${data[i].posted}</div>
                                                  <input type='hidden' name='id' value='${data[i].documentID}' />
                                                 <button type='submit' class='delete-document'>Delete</button>
                                             </form>
                                         </div>
                                        `;
               }

                $('#document-container').append(documentContainer);
             
          }
       }
   });  
}



//Load notifications

var notificationContainer = "";

   function fetch_Notifications() {

    $.ajax({
        url: 'list-all-notifications.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             notificationContainer = `<div class='message-holder'>
                                         <div class='sender'>${data[i].sender}</div>
                                        <div class='message-text'>
                                            ${data[i].alert}
                                        </div>
                                     <div class='message-action'>
                                         <form class='message-form'>
                                             <button class='delete-button' type='submit'>Delete</button>
                                             <div class='date-div'>${data[i].created}</div>
                                              <input type='hidden' name='id' value='${data[i].notificationID}' class='idInput'>
                                         </form>
                                     </div>
                                    </div>
                                  `;

                 $('#notification-container').append(notificationContainer);
             
          }
       }
   });
}


  function uploadDocument() {

            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "admin-document-upload.php";
             var documentForm = new FormData(document.getElementById('document-upload-form'));


             // get inputs by their name attribute
             const video = documentForm.get('document');

            xmlhttp.open("POST",url,true);
            xmlhttp.send(documentForm);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;    

               if (serverResponse == "Document uploaded successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                       refresh();
                       $('#document-container').empty();
                        fetch_Documents();
                         $('#notification-container').empty();
                         fetch_Notifications();
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
    var documentForm = document.getElementById('document-upload-form');
    // handle signup on submit
    documentForm.addEventListener('submit', function (e) {
        e.preventDefault();
       uploadDocument();
    });
    