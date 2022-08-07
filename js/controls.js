         var eventImages = document.querySelectorAll('.event-images');
            for (var i = 0; i < eventImages.length; i++) {
                eventImages[i].addEventListener('click', function () {
                   window.location = 'events.html';
                })
            }

            var scrollImages = document.querySelectorAll('.scroll-images');
            for (var i = 0; i < scrollImages.length; i++) {
                scrollImages[i].addEventListener('click', function () {
                   window.location = 'gallery.html';
                })
            }


            var mainEvents = document.getElementById('main-events');
              
              function scrollDiv() {
                  var move = setTimeout(function () {
                     mainEvents.scrollLeft -=800;
                },3000)

                  var next = setTimeout(function () {
                      mainEvents.scrollLeft +=800;
                },6000)

            }
            var begin = setInterval(function () {
                 scrollDiv();
            },8000)
              