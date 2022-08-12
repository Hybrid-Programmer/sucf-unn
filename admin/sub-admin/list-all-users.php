<?php

    require 'conn.php';

  //Display all admins
$sql= "SELECT * FROM members WHERE role='admin'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){

    while($row = mysqli_fetch_assoc($result)) {
    $targerDir = "../../uploads";
    $id = $row['userID'];
    $profile= $row['profile'];
    $firstname= $row['firstname']; 
    $middlename= $row['middlename']; 
    $lastname= $row['lastname']; 
    $contact= $row['contact'];
    $email= $row['email'];
    $role= $row['role'];


     echo "<div class='people-holder'>
               <div class='people-info'>
                    <div class='profile-section'>
                        <div class='profile-div'><img src='$targerDir/$profile' class='profile'></div>
                     </div>
                        <div class='name-section'>
                           <div class='username-div'>$firstname $middlename $lastname</div>
                            <div class='time-div'>
                              <div class='reg'>Role on database:</div>
                            <div class='role'>admin</div>
                            </div>
                         </div>
                         </div>
                        <div class='details-div'>
                            <div class='info-div'>
                                <div class='title'>Email:</div>
                                 <div class='data'>$email</div>
                            </div>
                           <div class='info-div'>
                                <div class='title'>Contact:</div>
                               <div class='data'>$contact</div>
                            </div>
                           <div class='action-div'>
                              <!-- <div class='title'>Action:</div>-->
                      <div class='inner-div'>
                        <form class='edit-form'>
                            <label for='Sub-admin'>Make sub-admin
                               <input type='radio' class='make-subadmin' name='make-subadmin-or-user' value='Sub-admin'>
                          </label>
                             <label for='User'>Make user
                               <input type='radio' class='make-user' name='make-subadmin-or-user' value='User'>
                            </label>
                            <input type='password' class='panel-password' name='password' placeholder='Set password..'>
                            <input type='hidden' name='role' value='$role' class='user-id-holder'>
                           <input type='hidden' name='id' value='$id' class='user-id-holder'>
                           <input type='hidden' name='email' value='$email' class='user-id-holder'>
                           <input type='submit' class='saveButton' value='Save'>
                      </form>
                    </div>
                </div>
             </div>
         </div>
       ";
  
  }
}


//Display all sub-admins
$sql= "SELECT * FROM members WHERE role='sub-admin'";
$result = mysqli_query($conn, $sql);


if(mysqli_num_rows($result) > 0){

    while($row = mysqli_fetch_assoc($result)) {

    $id = $row['userID'];
    $targerDir = "../../uploads";
    $profile= $row['profile'];
    $firstname= $row['firstname']; 
    $middlename= $row['middlename']; 
    $lastname= $row['lastname']; 
    $contact= $row['contact'];
    $email= $row['email'];
    $role= $row['role'];

echo "<div class='people-holder'>
               <div class='people-info'>
                    <div class='profile-section'>
                        <div class='profile-div'><img src='$targerDir/$profile' class='profile'></div>
                     </div>
                        <div class='name-section'>
                           <div class='username-div'>$firstname $middlename $lastname</div>
                            <div class='time-div'>
                              <div class='reg'>Role on database:</div>
                                <div class='role'>sub-admin</div>
                            </div>
                         </div>
                         </div>
                        <div class='details-div'>
                            <div class='info-div'>
                                <div class='title'>Email:</div>
                                 <div class='data'>$email</div>
                            </div>
                           <div class='info-div'>
                                <div class='title'>Contact:</div>
                               <div class='data'>$contact</div>
                            </div>
                           <div class='action-div'>
                              <!-- <div class='title'>Action:</div>-->
                      <div class='inner-div'>
                        <form class='edit-form'>
                            <label for='Admin'>Make admin
                               <input type='radio' class='make-admin' name='make-admin-or-user' value='Admin' >
                          </label>
                             <label for='User'>Make user
                               <input type='radio' class='make-user' name='make-admin-or-user' value='User'>
                            </label>
                            <input type='password' class='panel-password' name='password' id='role-password$id' placeholder='Set password..'>
                            <input type='hidden' name='role' value='$role' class='user-id-holder'>
                            <input type='hidden' name='id' value='$id' class='user-id-holder'>
                             <input type='hidden' name='email' value='$email' class='user-id-holder'>
                           <input type='submit' class='saveButton' value='Save'>
                      </form>
                    </div>
                </div>
             </div>
          </div>
        ";
  
  }
}


//Display all users
$sql= "SELECT * FROM members WHERE role='user'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){

    while($row = mysqli_fetch_assoc($result)) {

    $id = $row['userID'];
    $targerDir = "../../uploads";
    $profile= $row['profile'];
    $firstname= $row['firstname']; 
    $middlename= $row['middlename']; 
    $lastname= $row['lastname']; 
    $contact= $row['contact'];
    $email= $row['email'];
    $role= $row['role'];

    echo "<div class='people-holder'>
               <div class='people-info'>
                    <div class='profile-section'>
                        <div class='profile-div'><img src='$targerDir/$profile' class='profile'></div>
                     </div>
                        <div class='name-section'>
                           <div class='username-div'>$firstname $middlename $lastname</div>
                            <div class='time-div'>
                              <div class='reg'>Role on database:</div>
                                <div class='role'>user</div>
                            </div>
                         </div>
                         </div>
                        <div class='details-div'>
                            <div class='info-div'>
                                <div class='title'>Email:</div>
                                 <div class='data'>$email</div>
                            </div>
                           <div class='info-div'>
                                <div class='title'>Contact:</div>
                               <div class='data'>$contact</div>
                            </div>
                           <div class='action-div'>
                              <!-- <div class='title'>Action:</div>-->
                      <div class='inner-div'>
                        <form class='edit-form'>
                            <label for='Admin'>Make admin
                               <input type='radio' class='make-admin' name='make-admin-or-subadmin' value='Admin'>
                          </label>
                             <label for='Sub-admin'>Make sub-admin
                               <input type='radio' class='make-subadmin' name='make-admin-or-subadmin' value='Sub-admin'>
                            </label>
                            <input type='password' name='password' id='role-password$id' class='panel-password' placeholder='Set password..'>
                            <input type='hidden' name='role' value='$role' class='user-id-holder'>
                           <input type='hidden' name='id' value='$id' class='user-id-holder'>
                            <input type='hidden' name='email' value='$email' class='user-id-holder'>
                           <input type='submit' class='saveButton' value='Save'>
                      </form>
                    </div>
                </div>
            </div>
        </div>
      ";

  }
}


mysqli_close($conn);

?>


