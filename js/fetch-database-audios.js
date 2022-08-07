
  //Load audios

  var audioCard = "";

   function fetch_Sermons() {

    $.ajax({
        url: 'php/list-audios.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             audioCard = `<div class='sermon-container'>
                            <div class='audio-header'>
                                Listen and get your spirit edified
                            </div>

                            <div class='audio-container'>
                                <audio src='./audio/${data[i].title}' controls></audio>
                            </div>

                            <div class='sermon-info'>
                                <div class='sermon-data'>
                                    <div class='sermon-title'>${data[i].title}</div>
                                    <div class='sermon-teacher'>SUCF UNN</div> 
                                    <div class='sermon-year'>${data[i].posted}</div>
                                </div>

                                <div class='sermon-download'>
                                    <form class='audio-download-form'> 
                                              <button class='download-button' type='button'>
                                                 <a class='mx-2' href='./audio/${data[i].title}' download>
                                                       <i class='fas fa-download'></i>
                                                 </a>
                                             </button>
                                             
                                             <button class='like-button' type='submit'>Like</button>
                                       <input type='hidden' name='id' value='${data[i].audioID}'>
                                   </form>
                                </div>
                            </div>
                         </div> 
                     `;

                 $('#sermon-main').append(audioCard);
             
          }
       }
   });
}

fetch_Sermons();


 function moveLeft() {
    var sermonMain = document.getElementById('sermon-main');
    sermonMain.scrollLeft -= 200;
}

function moveRight() {
    var sermonMain = document.getElementById('sermon-main');
    sermonMain.scrollLeft += 200;
}


