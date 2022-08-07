 var toggleButton = document.getElementById('toggleButton');
     var myUl = document.querySelector('.collapsible');
     var navLinks = document.querySelectorAll('.nav-link');

     toggleButton.addEventListener('click', function () {
         myUl.setAttribute('style', 'width: 50% !important;');
     })

     for (var i = 0; i < navLinks.length; i++) {
         navLinks[i].addEventListener('click', function () {
         myUl.setAttribute('style', 'width: 0%;');
     })
 }
