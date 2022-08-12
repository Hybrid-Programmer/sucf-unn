
var innerDivs = document.querySelectorAll('.inner-div');
    for (var i = 0; i < innerDivs.length; i++) {
       innerDivs[i].style.display = "none";
       innerDivs[0].style.display = "block";
    }

 var mainAdmin = document.getElementById('main-admin');
    mainAdmin.addEventListener('click', () => {
       for (var i = 0; i < innerDivs.length; i++) {
       innerDivs[i].style.display = "none";
       innerDivs[1].style.display = "block";
        $('#code1').focus();
      }
  });

 var subAdmin = document.getElementById('sub-admin');
    subAdmin.addEventListener('click', () => {
       for (var i = 0; i < innerDivs.length; i++) {
       innerDivs[i].style.display = "none";
       innerDivs[2].style.display = "block";
        $('#code7').focus();
      }
  });

    var mainBack = document.getElementById('main-back');
     var subBack = document.getElementById('sub-back');
     var closeLogin = document.getElementById('close-login');
     var closeReset = document.getElementById('close-reset');
     var closeChange = document.getElementById('close-change');

     mainBack.addEventListener('click', () => {
          for (var i = 0; i < innerDivs.length; i++) {
          innerDivs[i].style.display = "none";
          innerDivs[0].style.display = "block";
      }
   })

      subBack.addEventListener('click', () => {
          for (var i = 0; i < innerDivs.length; i++) {
          innerDivs[i].style.display = "none";
          innerDivs[0].style.display = "block";
      }
   })

    var register = document.getElementById('register');
     var login = document.getElementById('login');
      var loginForm = document.getElementById('loginForm');
      var resetForm = document.getElementById('resetForm');
       var checkEmail = document.getElementById('checkEmail');
      var changeForm = document.getElementById('changeForm');
       var changeEmail = document.getElementById('changeEmail');
        var changePassword = document.getElementById('changePassword');
          //Fade out the forms initially
          loginForm.style.opacity = 0;
          changeForm.style.opacity = 0;

     register.addEventListener('click', () => {
       register.style.background = "rgb(0 0 0 / 50%)";
       login.style.background = "transparent";
       if (loginForm.style.opacity === 1) {
          loginForm.style.opacity = 0;
          loginForm.style.zIndex = -1000;
       }
    });

    login.addEventListener('click', () => {
       login.style.background = "rgb(0 0 0 / 50%)";
        register.style.background = "transparent";
        var showLogin = setTimeout(function () {
           loginForm.style.opacity = 1;
           loginForm.style.zIndex = 1000;
        },800)
    });

     closeLogin.addEventListener('click', () => {
        register.style.background = "rgb(0 0 0 / 50%)";
        login.style.background = "transparent";
        var contactInputs = document.querySelectorAll('.contact-inputs');
         for (var i = 0; i < contactInputs.length; i++) {
             contactInputs[i].value = "";
          }
        loginForm.setAttribute('style', 'opacity: 0;z-index: -1000;');
    })


      closeReset.addEventListener('click', () => {
        resetForm.setAttribute('style', 'opacity: 0;z-index: -1000;');
        checkEmail.value = "";
    })

       closeChange.addEventListener('click', () => {
        changeForm.setAttribute('style', 'opacity: 0;z-index: -1000;');
        changeEmail.value = "";
        changePassword.value = "";
    })



