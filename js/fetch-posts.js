

  //Load audios

  var mediaCard = "";
  var resources = '';

   function fetch_Mediaposts() {

    $.ajax({
        url: 'php/list-all-mediaposts.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

               if (data[i].extension == 'jpg' || data[i].extension == 'jpeg' || data[i].extension == 'png') {
                   resources = `<img src='./document/${data[i].profile}' width='100%' height='100%' style='border-radius: 6px;'>`
               }else{
                  resources = `<video src='./document/${data[i].profile}' width='100%' height='100%' style='border-radius: 6px;' controls></video>`;
               }

             mediaCard = `<div class='media-modal'>
                            <div class='media-head'>
                                <div class='modal-icon'>
                                    <img src='assets/img/logo.png' class='modal-image'>
                                </div>

                                <div class='modal-right'>
                                    <div class='name-div'>SUCF UNN</div>

                                    <div class='posted-div'>
                                        ${data[i].posted_on}
                                  </div>
                                </div>
                            </div>

                            <div class='mediacontent-div'>
                                <div class='media-accessories'>

                                    <div class='media-content'> ${resources}</div>

                                    <div class='media-title'>
                                        <i> ${data[i].title}</i>
                                    </div>

                                </div>
                                <div class='click-div'><i><a href='view-post.php?postId= ${data[i].postID}'class='read-link' target='self'>View post</a></i></div>
                            </div>
                      </div> 
                     `;

                 $('#main-section').append(mediaCard);
             
          }
       }
   });
}

fetch_Mediaposts();



 var postCard = "";

   function fetch_Textposts() {

    $.ajax({
        url: 'php/list-all-textposts.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             postCard = `<div class='story-modal'>
                             <div class='modal-head'>
                                 <div class='modal-icon'>
                                     <img src='assets/img/logo.png' class='modal-image'>
                                 </div>

                                 <div class='modal-right'>
                                     <div class='name-div'>SUCF UNN</div>

                                     <div class='posted-div'>
                                         ${data[i].posted_on}
                                   </div>
                                 </div>
                             </div>

                             <div class='maintext-div'>
                                 <div class='post-text'>
                                     <div class='post-title'>
                                         <i>${data[i].title}</i>
                                     </div>
                                     <div class='post-content'>
                                          ${data[i].post}
                                     </div>
                                 </div>
                                 <div class='click-div'><i><a href='read-post.php?postId= ${data[i].postID}' class='read-link'>Read post</a></i></div>
                             </div>
                        </div>
                     `;

                 $('#main-section').append(postCard);
             
          }
       }
   });
}

fetch_Textposts();


 


