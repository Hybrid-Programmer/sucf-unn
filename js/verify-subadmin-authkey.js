$(document).ready(function () {

//Codes for verifying sub-admin auth key

var codes = document.querySelectorAll('.inputCodes1');
for (var i = 0; i < codes.length; i++) {
   codes[i].disabled = true;
   codes[0].disabled = false;
 }

var code7 = document.getElementById('code7');
var code8 = document.getElementById('code8');
var code9 = document.getElementById('code9');
var code10 = document.getElementById('code10');
var code11 = document.getElementById('code11');
var code12 = document.getElementById('code12');

  $('#code7').on('keyup', function () {
     if (code7.value.length == 1) {
        $('#code8').attr('disabled', false);
        $('#code8').focus();
     }
  })

   $('#code8').on('keyup', function () {
     if (code8.value.length == 1) {
        $('#code9').attr('disabled', false);
        $('#code9').focus();
     }
  })

    $('#code9').on('keyup', function () {
     if (code9.value.length == 1) {
        $('#code10').attr('disabled', false);
        $('#code10').focus();
     }
  })

     $('#code10').on('keyup', function () {
     if (code10.value.length == 1) {
        $('#code11').attr('disabled', false);
        $('#code11').focus();
     }
  })

      $('#code11').on('keyup', function () {
     if (code11.value.length == 1) {
        $('#code12').attr('disabled', false);
        $('#code12').focus();
     }
  })

    $('#code12').on('keyup', function () {
        if (code12.value.length == 1) {
        $('#code12').blur();
     }
  })

  var subAdminInputedAuthkey;
  var subAdminAuthKey;
 var left = document.getElementById("left");
 var inner = document.getElementById("inner");
 var mid = document.getElementById("mid");
  var midImage = document.getElementById("mid-image");
 var result = document.getElementById("responseHolder");

 function refresh() {
     left.style.zIndex = -5000;
    left.style.opacity = 0;
    mid.style.opacity = 0;
     midImage.src = "";  
     inner.style.border = "none";
    result.textContent = "";
    var codes = document.querySelectorAll('.inputCodes1');
    for (var i = 0; i < codes.length; i++) {
       codes[i].value = "";
       $('#code7').focus();
     }
 }


function verifySubAdmin() {

if (code7.value == "" || code8.value == "" || code9.value == "" || code10.value == "" || code11.value == "" || code12.value == "") {
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

let inputedAuth7 = code7.value;
  let inputedAuth8 = code8.value;
     let inputedAuth9 = code9.value;
      let inputedAuth10 = code10.value;
     let inputedAuth11 = code11.value;
  let inputedAuth12 = code12.value;

  subAdminInputedAuthkey = Number(inputedAuth7 + inputedAuth8 + inputedAuth9 + inputedAuth10 + inputedAuth11+ inputedAuth12);

    subAdminAuthKey = 202109;
    

 if (subAdminInputedAuthkey === subAdminAuthKey) {
    //Checking progress
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
                 var registerForm2 = document.getElementById('registerForm2');
                  registerForm2.setAttribute('style', 'opacity: 1;z-index: 1000;');
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

    $('#verify-sub-admin').click(function (e) {

        e.preventDefault();

        verifySubAdmin();

        if (subAdminInputedAuthkey !== subAdminAuthKey) {
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
                    $('#code7').blur();
                },5000)
             $('#verify-sub-admin').attr('disabled', true);
              $('#verify-sub-admin').css({"background":"gray","opacity":'0.5'});
              //Enable all
                setTimeout(function () {
                    $('#code7').attr('disabled', false);
                    $('#code7').focus();
                    $('#verify-sub-admin').attr('disabled', false);
                   $('#verify-sub-admin').css({"background":"darkgreen","opacity":'1'});
                trials = 3;
            },50000)               
         }  
     }  
})


});