$(document).ready(function () {
   
var codes = document.querySelectorAll('.inputCodes');
for (var i = 0; i < codes.length; i++) {
   codes[i].disabled = true;
   codes[0].disabled = false;
 }

//Codes for verifying main-admin auth key

var code1 = document.getElementById('code1');
var code2 = document.getElementById('code2');
var code3 = document.getElementById('code3');
var code4 = document.getElementById('code4');
var code5 = document.getElementById('code5');
var code6 = document.getElementById('code6');

  $('#code1').on('keyup', function () {
     if (code1.value.length == 1) {
        $('#code2').attr('disabled', false);
        $('#code2').focus();
     }
  })

   $('#code2').on('keyup', function () {
     if (code2.value.length == 1) {
        $('#code3').attr('disabled', false);
        $('#code3').focus();
     }
  })

    $('#code3').on('keyup', function () {
     if (code3.value.length == 1) {
        $('#code4').attr('disabled', false);
        $('#code4').focus();
     }
  })

     $('#code4').on('keyup', function () {
     if (code4.value.length == 1) {
        $('#code5').attr('disabled', false);
        $('#code5').focus();
     }
  })

      $('#code5').on('keyup', function () {
     if (code5.value.length == 1) {
        $('#code6').attr('disabled', false);
        $('#code6').focus();
     }
  })

    $('#code6').on('keyup', function () {
        if (code6.value.length == 1) {
        $('#code6').blur();
     }
  })

  var adminInputedAuthkey;
  var adminAuthKey;
 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
 var result = document.getElementById("responseHolder");
var midImage = document.getElementById("mid-image");

function refresh() {
    left.style.zIndex = -5000;
    left.style.opacity = 0;
    mid.style.opacity = 0;
    midImage.src = "";
    inner.style.border = "none";
    result.textContent = "";
    var codes = document.querySelectorAll('.inputCodes');
    for (var i = 0; i < codes.length; i++) {
       codes[i].value = "";
       $('#code1').focus();
     }
}


function verifyAdmin() {

if (code1.value == "" || code2.value == "" || code3.value == "" || code4.value == "" || code5.value == "" || code6.value == "") {
    left.style.zIndex = 5000;
    left.style.opacity = 1;
    mid.style.opacity = 1;
    mid.style.border = "3px solid red";
    midImage.src = "img/exclamation.jfif";
    inner.style.border = "3px solid red";
    result.textContent = "Please provide all 6-digit pin !";
    setTimeout(function () {
        refresh();
    },2000)
}
else{

let inputedAuth1 = code1.value;
  let inputedAuth2 = code2.value;
     let inputedAuth3 = code3.value;
      let inputedAuth4 = code4.value;
     let inputedAuth5 = code5.value;
  let inputedAuth6 = code6.value;

  adminInputedAuthkey = Number(inputedAuth1 + inputedAuth2 + inputedAuth3 + inputedAuth4 + inputedAuth5 + inputedAuth6);

    adminAuthKey = 202208;
    

 if (adminInputedAuthkey === adminAuthKey) {
    //Showing checking progress
    setTimeout(function () {
        $('.codes').attr('disabled', true);
        left.style.zIndex = 5000;
        left.style.opacity = 1;
        mid.style.opacity = 0;
        result.textContent = "Checking auth key...";
    },200)

        //On authorize
       setTimeout(function () {
            left.style.zIndex = 5000;
            left.style.opacity = 1;
            mid.style.opacity = 1;
            mid.style.border = "3px solid blue";
            midImage.src = "img/tick.jfif";
            inner.style.border = "3px solid blue";
            result.textContent = "Auth key verified.";
         },2900)

       //Hide modal
        setTimeout(function () {
                  refresh();
                  var registerForm = document.getElementById('registerForm');
                      registerForm.setAttribute('style', 'opacity: 1;z-index: 1000;');
            },4000)
        }
        else{
                result.textContent = "Checking auth key...";
                 left.style.zIndex = 5000;
                 left.style.opacity = 1;

                 //On failure
               setTimeout(function () {
                 mid.style.opacity = 1;
                  mid.style.border = "3px solid red";
                  midImage.src = "img/exclamation.jfif";
                 inner.style.border = "3px solid red";
                 result.textContent = "Auth key incorrect !";
                  },2000)

               //Hide modal
                setTimeout(function () {
                        refresh();
                 },3000)
             
             }
    
         }
  
   }

 var trials = 3;

    $('#verify-Main-admin').click(function (e) {

        e.preventDefault();

        verifyAdmin();

        if (adminInputedAuthkey !== adminAuthKey) {
            trials--;
            if (trials === 0) {
                //Show modal
                 setTimeout(function () { 
              $('.codes').attr('disabled', true);
                    left.style.zIndex = 5000;
                     left.style.opacity = 1;
                     mid.style.opacity = 1;
                       midImage.src = "img/exclamation.jfif";
                    inner.style.border = "3px solid red";
                     mid.style.border = "3px solid red";
                    $('.codes').attr('disabled', true);
                    result.textContent = "You have entered incorrect auth key 3 times. Try again after 5 minutes.";
                },3000)
                //Hide modal
                 setTimeout(function () {
                    refresh();
                    $('#code1').blur();
                },5000)
             $('#verify-Main-admin').attr('disabled', true);
              $('#verify-Main-admin').css({"background":"gray","opacity":'0.5'});
              //Enable all
                 setTimeout(function () {
                    $('#code1').attr('disabled', false);
                    $('#code1').focus();
                    $('#verify-Main-admin').attr('disabled', false);
                   $('#verify-Main-admin').css({"background":"darkgreen","opacity":'1'});
                trials = 3;
            },50000)               
         }  
     }  
})


})