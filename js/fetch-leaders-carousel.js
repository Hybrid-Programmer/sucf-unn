
  //Load admin profile

  var profileCard = "";

   function fetch_Admin_Profiles() {

    $.ajax({
        url: 'php/leaders-carousel.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             profileCard = `<div class='leader-container'>
                          <div class='inner-div'>
                              <img src='./leaders/${data[i].profile}' class='leader-image'>
                              <div class='leader-name'>
                                  <div class='leader-title'>${data[i].firstname} ${data[i].middlename} ${data[i].lastname}</div>
                                  <div class='leader-office'><b>${data[i].office}</b> | ${data[i].tenure}</div>
                              </div>
                              <div class='leader-description'>
                                <p>Best quote: <i>${data[i].quote}</i></p>
                                  <br><br>
                                  Best Scripture: <i>${data[i].scripture}</i></p>
                              </div>
                          </div>
                     </div>
                     `;

                 $('#leaders-carousel').append(profileCard);
             
          }
       }
   });
}

fetch_Admin_Profiles();
