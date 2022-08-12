
  var tabContainer = document.querySelectorAll('.tab-container');
    for (var i = 0; i < tabContainer.length; i++) {
         tabContainer[i].style.display = "none";
         tabContainer[0].style.display = "block"; //Change this to 0 later
    }

 var mainLink = document.querySelectorAll('.main-link');
    for (var i = 0; i < mainLink.length; i++) {
        mainLink[i].style.opacity = 0.4;
         mainLink[0].style.opacity = 1;
         mainLink[0].style.borderBottom = "5px solid red";
    }


     var typeDivs = document.querySelectorAll('.type-divs');
    for (var i = 0; i < typeDivs.length; i++) {
        typeDivs[i].style.opacity = 0.4;
         typeDivs[0].style.opacity = 1;
         typeDivs[0].style.borderBottom = "3px solid white";
    }


     var typeDivs1 = document.querySelectorAll('.type-divs1');
    for (var i = 0; i < typeDivs1.length; i++) {
        typeDivs1[i].style.opacity = 0.4;
         typeDivs1[0].style.opacity = 1;
         typeDivs1[0].style.borderBottom = "3px solid white";
    }

       var audioCreate = document.getElementById('audio-create');
        var audioUploadForm = document.getElementById('audio-upload-form');
         var videoCreate = document.getElementById('video-create');
          var videoUploadForm = document.getElementById('video-upload-form');
          var imageCreate = document.getElementById('image-create');
           var documentUploadForm = document.getElementById('document-upload-form');

                audioUploadForm.style.display = "flex";
                 videoUploadForm.style.display = "flex";
                   documentUploadForm.style.display = "flex";

                   $('#audio-create').click(function () {
                       if ($('#audio-upload-form').css({"display":"flex"})) {
                            $('#audio-upload-form').css({"display":"none"})
                       } else {
                          $('#audio-upload-form').css({"display":"flex"})
                       }
                   })

            
        audioCreate.addEventListener('click', function () {
            alert("Clicked");
            if (audioUploadForm.style.display == "none") {
                   audioUploadForm.style.display = "flex";
               } else {
                 audioUploadForm.style.display = "none";
            }
        })


             
          videoCreate.addEventListener('click', function () {
                if (videoUploadForm.style.display == "none") {
                       videoUploadForm.style.display = "flex";
                  } else {
                     videoUploadForm.style.display = "none";
               }
          })


     
         
          imageCreate.addEventListener('click', function () {
                if (documentUploadForm.style.display == "none") {
                       documentUploadForm.style.display = "flex";
                  } else {
                    documentUploadForm.style.display = "none";
                }
         
          })


    var mediaDiv = document.querySelectorAll('.media-div');
        for (var i = 0; i < mediaDiv.length; i++) {
            mediaDiv[i].style.display = "none";
             mediaDiv[0].style.display = "block"; //Change the to 0 later
        }

    var audio = document.getElementById('audio-tab');
    var videos = document.getElementById('video-tab');
    var images = document.getElementById('document-tab');

    audio.addEventListener('click', function () {
         audio.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
          videos.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           images.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           var mediaDiv = document.querySelectorAll('.media-div');
            for (var i = 0; i < mediaDiv.length; i++) {
                mediaDiv[i].style.display = "none";
                 mediaDiv[0].style.display = "block";
             }
       })

        videos.addEventListener('click', function () {
         audio.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          videos.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
           images.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             var mediaDiv = document.querySelectorAll('.media-div');
            for (var i = 0; i < mediaDiv.length; i++) {
                mediaDiv[i].style.display = "none";
                 mediaDiv[1].style.display = "block";
             }
       })

     images.addEventListener('click', function () {
         audio.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          videos.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           images.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
            var mediaDiv = document.querySelectorAll('.media-div');
            for (var i = 0; i < mediaDiv.length; i++) {
                mediaDiv[i].style.display = "none";
                 mediaDiv[2].style.display = "block";
             }
       })

    var members = document.getElementById('members');
    var leaders = document.getElementById('leaders');
     var messages = document.getElementById('messages');
      var posts = document.getElementById('posts');
       var media = document.getElementById('media');
        var action = document.getElementById('events');
        var notifications = document.getElementById('notifications');
         var settings = document.getElementById('settings');
         // var addMember = document.getElementById('add-member');
          //var mainSection = document.getElementById('main-section');
          var all = document.getElementById('all');
          var admins = document.getElementById('admins');
          var subAdmins = document.getElementById('sub-admins');
          var messageDiv = document.querySelectorAll('.message-div');
          var allCreate = document.getElementById('all-create');
          var adminCreate = document.getElementById('admin-create');
          var subadminCreate = document.getElementById('sub-admin-create');
          var messageAllForm = document.getElementById('message-all-form');
          var messageAdminForm = document.getElementById('message-admin-form');
          var messageSubadminForm = document.getElementById('message-subadmin-form');

           for (var i = 0; i < messageDiv.length; i++) {
                messageDiv[i].style.display = "none";
                 messageDiv[0].style.display = "block";
             }


       all.addEventListener('click', function () {
         all.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
          admins.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           subAdmins.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            for (var i = 0; i < messageDiv.length; i++) {
                messageDiv[i].style.display = "none";
                 messageDiv[0].style.display = "block";
             }
       })

        admins.addEventListener('click', function () {
         all.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          admins.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
           subAdmins.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            for (var i = 0; i < messageDiv.length; i++) {
                messageDiv[i].style.display = "none";
                 messageDiv[1].style.display = "block";
             }
       })

         subAdmins.addEventListener('click', function () {
         all.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          admins.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           subAdmins.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
            for (var i = 0; i < messageDiv.length; i++) {
                messageDiv[i].style.display = "none";
                 messageDiv[2].style.display = "block";
             }
       })

          messageAllForm.style.display = "none";
          messageAdminForm.style.display = "none";
          messageSubadminForm.style.display = "none";

          allCreate.addEventListener('click', function () {
            if (messageAllForm.style.display == "none") {
                messageAllForm.style.display = "flex";
            } else {
                messageAllForm.style.display = "none";
            }

          })

          adminCreate.addEventListener('click', function () {
            if (messageAdminForm.style.display == "none") {
                messageAdminForm.style.display = "flex";
            } else {
                messageAdminForm.style.display = "none";
            }
         
          })

          subadminCreate.addEventListener('click', function () {
            if (messageSubadminForm.style.display == "none") {
                messageSubadminForm.style.display = "flex";
            } else {
                messageSubadminForm.style.display = "none";
            }
         
          })



       members.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
         leaders.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          messages.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            media.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             action.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            notifications.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             //addMember.setAttribute('style', 'background: green;');
             // mainSection.style.marginTop = 0 + '%';
            for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[0].style.display = "block";
            }

       })

       leaders.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
         leaders.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
         messages.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          messages.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            media.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             action.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            notifications.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             //mainSection.style.marginTop = -18 + '%';
            for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[1].style.display = "block";
            }

       })


        messages.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          leaders.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          messages.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
           posts.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            media.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             action.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            notifications.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             //addMember.setAttribute('style', 'background: #0f392bfc;');
             //mainSection.style.marginTop = -18 + '%';
             for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[2].style.display = "block";
            }
       })


        posts.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          leaders.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          messages.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
           media.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            action.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            notifications.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             //mainSection.style.marginTop = -18 + '%';
             for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[3].style.display = "block";
            }
       })

         media.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
         leaders.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          messages.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           media.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
            action.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            notifications.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            //addMember.setAttribute('style', 'background: gray;');
             //mainSection.style.marginTop = -18 + '%';
             for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[4].style.display = "block";
            }
       })

         action.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
         leaders.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          messages.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           media.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           action.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
            notifications.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            //addMember.setAttribute('style', 'background: gray;');
             //mainSection.style.marginTop = -18 + '%';
             for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[5].style.display = "block";
            }
       })


        notifications.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
         leaders.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          messages.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            media.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             action.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            notifications.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
             // mainSection.style.marginTop = -18 + '%';
             for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[6].style.display = "block";
            }
       })


          var mainAdmin = document.getElementById('main-admin');
            var subAdmin = document.getElementById('sub-admin');
                   var memberForm = document.getElementById('create-member');
                    var formTitle = document.getElementById('user-title');
                  var backButton = document.getElementById('back');
              var create = document.getElementById('create');
              var chooseBack = document.getElementById('choose-back');
             var creationDiv = document.getElementById('creation-div');
                var left = document.getElementById("left");
                 var inner = document.getElementById("inner");
                var mid = document.getElementById("mid");
                 var midImage = document.getElementById("mid-image");
                  var result = document.getElementById("responseHolder");
                   var mediaFooter = document.querySelector("media-footer-form");

          mainAdmin.addEventListener('click', function () {
              memberForm.style.width = 100 + '%';
              formTitle.textContent = "Create Main Admin";
              create.value = "Create Main Admin";
           })

          subAdmin.addEventListener('click', function () {
              memberForm.style.width = 100 + '%';
              formTitle.textContent = "Create Sub Admin";
              create.value = "Create Sub Admin";
           })


           backButton.addEventListener('click', function () {
              memberForm.style.width = 0 + '%';
              formTitle.textContent = "";
           })

             chooseBack.addEventListener('click', function () {
              creationDiv.style.width = 0 + '%';
           })


          /*addMember.addEventListener('click', function () {
             creationDiv.style.width = 100 + '%';
          })*/

          var createPost = document.getElementById('create-post');
          var postTypeDiv = document.getElementById('post-type-div');
            postTypeDiv.style.display = "none";

            createPost.addEventListener('click', function () {
             if (postTypeDiv.style.display == "none") {
                 postTypeDiv.style.display = "flex";
             } else {
                 postTypeDiv.style.display = "none";
             }
           })

           var multiMediaDiv = document.getElementById('multimedia-div');
           var textOnlyDiv = document.getElementById('text-only-div');
           var chooseText = document.getElementById('choose-text');
           var chooseMultimedia = document.getElementById('choose-multimedia');
           var textBackButton = document.getElementById('text-post-backButton');
           var multiMediaBackbutton = document.getElementById('multimedia-backButton');

            chooseText.addEventListener('click', function () {
              textOnlyDiv.style.width = 100 + '%';
           })

            textBackButton.addEventListener('click', function () {
              textOnlyDiv.style.width = 0 + '%';
           })

             chooseMultimedia.addEventListener('click', function () {
              multiMediaDiv.style.width = 100 + '%';
           })

              multiMediaBackbutton.addEventListener('click', function () {
              multiMediaDiv.style.width = 0 + '%';
           })


          var createAdminBiodata = document.getElementById('create-admin-leader');
          var adminBiodataDiv = document.getElementById('admin-biodata-div');
          var cancel = document.getElementById('cancel');
          var leaderBack = document.getElementById('leaderBack');

          adminBiodataDiv.style.display = 'none';

          createAdminBiodata.addEventListener('click', function () {
             if (adminBiodataDiv.style.display == "none") {
                 adminBiodataDiv.style.display = "flex";
             } else {
                 adminBiodataDiv.style.display = "none";
             }
           })

             cancel.addEventListener('click', function () {
                 adminBiodataDiv.style.display = "none";
           })

              var postEditDiv = document.getElementById('text-post-edit-div');
              var postEditBack = document.getElementById('post-edit-back');
              var editPost = document.getElementById('edit-post');
              var textPostTitleTextarea = document.querySelector('.text-post-title-textarea');
              var titleHolder = document.querySelectorAll('.title-holder');
              var postTextarea = document.querySelector('.post-textarea');
              var updateTextButton = document.querySelector('.update-text-button');
              
               postEditBack.addEventListener('click', function () {
                    postEditDiv.style.width = 0 + '%';
                    textPostTitleTextarea.textContent = "";
                    titleHolder.textContent = "";
                    postTextarea.textContent = "";
              })

               editPost.addEventListener('click', function () {
                    textPostTitleTextarea.setAttribute('contenteditable', true);
                    postTextarea.setAttribute('contenteditable', true);
                    updateTextButton.style.display = 'block';
              })

              var mediaEditDiv = document.getElementById('media-post-edit-div');
              var mediaEditBack = document.getElementById('media-edit-back');
              var mediaImage = document.querySelector('.actual-media-image');

              mediaEditBack.addEventListener('click', function () {
                    mediaEditDiv.style.width = 0 + '%';
                    textPostTitleTextarea.textContent = "";
                    titleHolder.textContent = "";
                    postTextarea.textContent = "";
                    mediaImage.src = "";
                     mediaImage.style.height = 100 + '%';
              })

               var eventClose = document.getElementById('event-close');
              var eventCreate = document.getElementById('event-create');
              var eventCreationDiv = document.querySelector('.event-creation-div');
              var eventFile = document.querySelector('.event-file');
             var eventInput = document.querySelectorAll('.event-input');
             var eventNumbers = document.querySelectorAll('.event-numbers');

             eventClose.addEventListener('click', function () {
                eventFile.value = "";
                for (var i = 0; i < eventInput.length; i++) {
                    eventInput[i].value = "";
                }
                 for (var i = 0; i < eventNumbers.length; i++) {
                    eventNumbers[i].value = "";
                }
                eventCreationDiv.style.zIndex = -3000;
             })

              eventCreate.addEventListener('click', function () {
                 eventCreationDiv.style.zIndex = 3000;
             })




