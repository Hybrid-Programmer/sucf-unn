<?php 

require 'conn.php';

 //Select all timer data from the timer table
 $sql= "SELECT * FROM timer ORDER BY timerID DESC";
 $result = mysqli_query($conn, $sql);

 $data = [];
 $encodedData = '';

 if(mysqli_num_rows($result) > 0) {

     while($row = mysqli_fetch_assoc($result)) {

        $data[] = $row;
       
     }

   }else{ $response = "No timer available"; }

 
 $encodedData = json_encode($data, JSON_FORCE_OBJECT);

mysqli_close($conn);

?>


<script  src='js/jQuery.js'></script>
    <script type='text/javascript'>

        //Display the timers

        var timerDiv = "";

       function displayTimer() {

            //Get the data from the database 
           var data = JSON.parse('<?php echo $encodedData ?>');

           //Loop through the data object
           for (var i in data) {

                 timerDiv = `<div class="event-div">
                                <div class="event-image">
                                    <img src="./document/${data[i].profile}" class="event-images">
                                </div>

                                <div class="event-text">
                                    <div class="event-title">${data[i].title}</div>
                                    <div class="event-time">
                                        <div class="times-holder">
                                            <div class="num" id='day${data[i].timerID}'></div>
                                             <div class="first">Days</div>
                                        </div>

                                         <div class="times-holder">
                                            <div class="num"  id='hour${data[i].timerID}'></div>
                                             <div class="mid">Hours</div>
                                        </div>

                                         <div class="times-holder">
                                            <div class="num" id='minute${data[i].timerID}'></div>
                                             <div class="mid">Mins</div>
                                        </div>

                                         <div class="times-holder">
                                            <div class="num" id='second${data[i].timerID}'></div>
                                             <div class="last">Secs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                  `;

                     $('#main-events').append(timerDiv);
                 
              }

       }

       displayTimer();

       //Update the timers

        var days = "";
         var hours = "";
          var minutes = "";
           var seconds = "";

       function updateTimer() {

            //Get the data from the database 
           var data = JSON.parse('<?php echo $encodedData ?>');

           //Loop through the data object
           for (var i in data) {

            //Log all the data from the object to the console
              //console.log(data[i]);  

               //Get and parse all the dates from the data
                var allDates = new Date(data[i].eventDate);

                //For testing purpose
                //console.log(allDates);

                //Get the current client time
                var now = new Date().getTime();

                //Find the difference between the future dates and the current time
                 var distance = allDates - now;

                 //For testing purpose
                  //console.log(distance);

                  // Update the count down every 1 second
                 //var start = setInterval(function() {

                  //Time calculations for days, hours, minutes and seconds
                    days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    seconds = Math.floor((distance % (1000 * 60)) / 1000);

                  if (days < 10) {
                    days = '0' + days;
                  }

                  if (hours < 10) {
                    hours = '0' + hours;
                  }

                  if (minutes < 10) {
                    minutes = '0' + minutes;
                  }

                  if (seconds < 10) {
                    seconds = '0' + seconds;
                  }

                // If the count down is over, write some text or do somethinge else
                if (distance < 0) {
                    //Clear the respective timer
                    clearInterval(start);
                    alert('Event' + ' ' + `${data[i].title}` + ' ' + 'is due');
                }

                $('#day'+`${data[i].timerID}`).text(days);
                $('#hour'+`${data[i].timerID}`).text(hours);
                $('#minute'+`${data[i].timerID}`).text(minutes);
                $('#second'+`${data[i].timerID}`).text(seconds);
                 
           }

       }

       setInterval(updateTimer, 1000);
                 
     </script>


