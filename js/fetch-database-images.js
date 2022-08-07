//Load database images

  var imageFile = "";

   function fetch_Images() {

    $.ajax({
        url: 'php/list-all-images.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

              console.log(data);

             imageFile = `<img src='./document/${data[i].title}' class='slide' alt='SUCF Images' />
                          `;

                 $('#image-view').append(imageFile);
             
          }
       }
   });
}

setTimeout(function () {
  fetch_Images();
},5000)



