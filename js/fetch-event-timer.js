$('#main-events').load('php/view-event-timer.php');

    var scrollImages = document.querySelectorAll('.scroll-images');
    for (var i = 0; i < scrollImages.length; i++) {
        scrollImages[i].addEventListener('click', function () {
           window.location = 'gallery.html';
        })
    }