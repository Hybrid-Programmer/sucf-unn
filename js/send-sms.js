
//Get current time in 24 hour format
const current = new Date();
const time = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});


//Get sender name
var sender = $('#firstname').val() + '' + $('#lastname').val();

//Get the message
var message = $('#textarea').val();


//Send SMS
/*function send_SMS() {
   const encodedParams = new URLSearchParams();
   encodedParams.append("sender", sender);
   encodedParams.append("body", message);
   encodedParams.append("destination", "09026928911");
   encodedParams.append("reference", "268431687");
   encodedParams.append("timestamp", time);
   encodedParams.append("replacechars", "checked");
   encodedParams.append("type", "normal");
   encodedParams.append("dlr_url", "http://www.example.com/dlr-messagebird.php");

   const options = {
      method: 'POST',
      headers: {
         'content-type': 'application/x-www-form-urlencoded',
         'X-RapidAPI-Key': 'befc8192cemsh0f430001ff1fe68p13b809jsnc8ec6f735114',
         'X-RapidAPI-Host': 'messagebird-sms-gateway.p.rapidapi.com'
      },
      body: encodedParams
   };

   fetch('https://messagebird-sms-gateway.p.rapidapi.com/sms?username=chukwuebuka&password=austin.com.ng.2001.A', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}*/


//function send_Message() {
    async function send_Message() {
    //event.preventDefault();
    const to = '09026928911';
    const msg = $('#textarea').val();
    const result = await fetch("https://quick-easy-sms.p.rapidapi.com/send", {
      "method": "POST",
      "headers": {
        "x-rapidapi-host": "quick-easy-sms.p.rapidapi.com",
        "x-rapidapi-key": YOUR_RAPID_API_KEY_GOES_HERE,
        "content-type": "application/json"
      },
      "body": JSON.stringify({
        "message": msg,
        "toNumber": to,
      })
    });
    const body = await result.json();
    console.log(body);
    alert(body.StatusCode === 0
      ? 'Code sent!'
      : 'Something went wrong. Check dev console.');
  }
//}

/*function send_SMS() {
     const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://messagebird-sms-gateway.p.rapidapi.com/sms?username=chukwuebuka&password=austin.com.ng.2001.A",
      "method": "POST",
      "headers": {
         "content-type": "application/x-www-form-urlencoded",
         "X-RapidAPI-Key": "befc8192cemsh0f430001ff1fe68p13b809jsnc8ec6f735114",
         "X-RapidAPI-Host": "messagebird-sms-gateway.p.rapidapi.com"
      },
      "data": {
         "sender": sender,
         "body": message,
         "destination": "09026928911",
         "reference": "268431687",
         "timestamp": new Date(),
         "replacechars": "checked",
         "type": "normal",
         "dlr_url": "http://www.example.com/dlr-messagebird.php"
      }
   };

   $.ajax(settings).done(function (response) {
      alert(response);
   });
}*/


 // get form element from the DOM
 var form = document.getElementById('messageForm');
 form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page refresh
    send_Message();
 });
