$(document).ready(function () {

     //Load user section script
   function load_Users_Data() {
      $('#members-container').load('list-all-users.php');
 }
 load_Users_Data();


  //Load admin profile

  var profileCard = "";

   function fetch_Admin_Profiles() {

    $.ajax({
        url: 'list-all-leaders.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             profileCard = `<div class='leaders-parent-div'>
                              <div class='leader-top-row'>
                                  <div class='image-section-div'>
                                      <img src='../../leaders/${data[i].profile}' class='leaders-image' alt='${data[i].profile}'>
                                  </div>
                                  <div class='name-section-div'>
                                      <div class='name-container-div'>${data[i].firstname} ${data[i].middlename} ${data[i].lastname}</div>
                                      <div class='office-container-div'>${data[i].office}</div>
                                  </div>
                              </div>

                              <div class='leader-bottom-column'>
                                  <div class='leader-data-holder'>
                                      <div class='email-intro'>Email :</div>
                                      <div class='email-data'>${data[i].email}</div>
                                  </div>

                                    <div class='leader-data-holder'>
                                      <div class='contact-intro'>Contact :</div>
                                      <div class='contact-data'>${data[i].contact}</div>
                                  </div>

                                   <div class='leader-data-holder'>
                                      <div class='role-intro'>Role :</div>
                                      <div class='role-data'>${data[i].role}</div>
                                  </div>


                                   <div class='type-data-holder'>
                                      <div class='type-intro'>Type: </div>
                                      <div class='type-data'>${data[i].type}</div>
                                  </div>
                              </div>
                        </div>
                     `;

                 $('#leaders-main').append(profileCard);
             
          }
       }
   });
}

fetch_Admin_Profiles();



//Load text post

  var textCard = "";

   function fetch_Textpost() {

    $.ajax({
        url: 'list-all-textposts.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             textCard = `<div class='textDiv'>
                                <div class='text-header'>
                               <div class='text-header-logo-container'><img src='img/logo.png' class='header-logo' alt='Logo'></div>
                               <div class='text-header-row'>
                                   <div class='header-sender'>SUCF UNN</div>
                                    <div class='header-date'>${data[i].posted_on}</div>
                                     <div class='header-action'>
                                       <form class='header-action-form'>
                                              <span class='header-edit'><i class='fa fa-book' aria-hidden='true'></i></span>
                                              <input type='hidden' name='id' class='hidden-input' value='${data[i].postID}'>
                                               <button class='delete-text' type='submit'>
                                                   <span class='header-delete'>
                                                     <i class='fa fa-trash' aria-hidden='true'></i>
                                                  </span>
                                               </button>
                                          </form>
                                     </div>
                               </div>
                           </div>

                           <div class='text-home'>
                               <div class='text-title'>${data[i].title}</div>
                               <div class='text-main'>${data[i].post}</div>
                           </div>

                           <div class='textDiv-bottom'>
                               <div class='comment-main'>
                                   <div class='comment-holder'>Views</div>
                                   <div class='comment-count'>${data[i].views}</div>
                               </div>

                               <div class='like-main'>
                                   <div class='like-holder'>Likes</div>
                                   <div class='like-count'>${data[i].likes}</div>
                               </div>
                           </div>
                       </div>
                         `;

                 $('#post-container').append(textCard);
             
          }
       }
   });
}

fetch_Textpost();


//Load media post

  var mediaCard = "";

   function fetch_Mediapost() {

    $.ajax({
        url: 'list-all-mediaposts.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

           var content = '';

            for (var i in data) {

               if(data[i].extension == 'png' || data[i].extension == 'jpg' || data[i].extension == 'jpeg'){

                      content = `<img src='../../document/${data[i].profile}' width='100%' height='80%' style='border-radius: 6px;' alt='Image-${data[i].postID}'>`;
               }else{
                    content = `<video src='../../document/${data[i].profile}' width='100%' height='80%' style='border-radius: 6px;' controls></video>`;
               }

             mediaCard = `<div class='mediaDiv'>
                             <div class='text-header'>
                              <div class='text-header-logo-container'><img src='img/logo.png' class='header-logo' alt='Logo'></div>
                              <div class='text-header-row'>
                                  <div class='header-sender'>SUCF UNN</div>
                                   <div class='header-date'>${data[i].posted_on}</div>
                                    <div class='header-action'>
                                      <form class='media-action-form'>
                                             <span class='header-edit'><i class='fa fa-book' aria-hidden='true'></i></span>
                                             <input type='hidden' class='hidden-input' name='id' value='${data[i].postID}'>
                                              <button class='delete-text' type='submit'>
                                                  <span class='header-delete'>
                                                    <i class='fa fa-trash' aria-hidden='true'></i>
                                                 </span>
                                              </button>
                                         </form>
                                    </div>
                              </div>
                          </div>

                          <div class='media-home'>
                              <div class='media-top'>
                                   ${content}
                                  <div class='media-title'>${data[i].title}</div>
                              </div>

                              <div class='media-article'>${data[i].article}</div>  
                          </div>

                          <div class='textDiv-bottom'>
                              <div class='comment-main'>
                                  <div class='comment-holder'>Views</div>
                                  <div class='comment-count'>${data[i].views}</div>
                              </div>

                              <div class='like-main'>
                                  <div class='like-holder'>Likes</div>
                                  <div class='like-count'>${data[i].likes}</div>
                              </div>
                          </div>
                     </div>
                    `;

                 $('#post-container').append(mediaCard);
             
          }
       }
   });
}

fetch_Mediapost();


//Load audios

var audioContainer = '';

function fetch_Audios() {

    $.ajax({
        url: 'list-audios.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             audioContainer = ` <div class='media-holder'>
                                    <div class='media-container'>
                                        <div class='media-content'><audio class='media-audio' src='../../audio/${data[i].title}' controls></audio></div>
                                        <div class='media-name'>${data[i].title}</div>
                                    </div>

                                    <div class='media-actions'>
                                        <div class='download-actions'>
                                            <div class='downloads-div'>
                                              Likes : 
                                            <div class='downloads'>${data[i].likes}</div>
                                          </div>
                                        </div>

                                        <form class='media-form'>
                                            <div class='posted-date-div'>Posted on: ${data[i].posted}</div>
                                              <input type='hidden' name='id' value='${data[i].audioID}'>
                                            <button type='submit' class='delete-audio'>Delete</button>
                                        </form>
                                    </div>
                               </div>
                                  `;

                 $('#audio-container').append(audioContainer);
             
          }
       }
   });  
}

fetch_Audios();


//Load videos

var videoContainer = "";

   function fetch_Videos() {

    $.ajax({
        url: 'list-videos.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             videoContainer = `<div class='media-holder'>
                                    <div class='media-container'>
                                     <div class='media-content'>
                                        <video class='media-video' src='../../video/${data[i].title}' controls></video>
                                    </div>
                                        <div class='media-name'>${data[i].title}</div>
                                    </div>

                                    <div class='media-actions'>
                                        <div class='download-actions'>
                                            <div class='downloads-div'>
                                              Downloads : 
                                            <div class='downloads'>${data[i].downloads}</div>
                                          </div>

                                          <div class='views-div'>
                                              Views : 
                                            <div class='views'>${data[i].views}</div>
                                          </div>
                                        </div>

                                        <form class='media-form'>
                                            <div class='posted-date-div'>Posted on: ${data[i].posted}</div>
                                             <input type='hidden' name='id' value='${data[i].videoID}'/>
                                            <button type='submit' class='delete-media'>Delete</button>
                                        </form>
                                    </div>
                                 </div>
                                  `;

                 $('#video-container').append(videoContainer);
             
          }
       }
   });
}

 fetch_Videos();



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

fetch_Documents();


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

 fetch_Notifications();

 //Load countdown timer script
   function load_Timers() {
      $('#event-container').load('view-timer.php');
 }

 setTimeout(load_Timers, 4000);


});


