<?php
session_start();
include("connection.php");
include("functions.php");
if ($_SERVER['REQUEST_METHOD'] == "POST") {

    $user_name =      $_POST['user_name'];
    $password =       $_POST['password'];
    if (!empty($user_name) && !empty($password) && !is_numeric($user_name)) {
        $user_id = random_num(20);
        $query = "insert into users (user_id,user_name,password)  values ('$user_id','$user_name','$password')";
        mysqli_query($con, $query);
        header("Location: loging.php");
        die;
    } else {



        echo "Please enter valid information!";
    }
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp</title>
</head>

<body>


<style type="text/css">
body{
    width:100%;
    height:90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
}


.mainHeader{
    width: 80%;
    height: 30vh;
    background: rgb(34,192,55);
    -webkit-box-shadow: inset 5px 3px 15px 5px rgba(0,0,0,0.66); 
box-shadow: inset 5px 3px 15px 5px rgba(0,0,0,0.66);
border-radius: 10px;
    background: -moz-linear-gradient(105deg, rgba(34,192,55,1) 16%, rgba(34,193,195,1) 72%, rgba(49,154,68,1) 100%);
    background: -webkit-linear-gradient(105deg, rgba(34,192,55,1) 16%, rgba(34,193,195,1) 72%, rgba(49,154,68,1) 100%);
    background: linear-gradient(105deg, rgba(34,192,55,1) 16%, rgba(34,193,195,1) 72%, rgba(49,154,68,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#22c037",endColorstr="#319a44",GradientType=1);
     display: flex;
  text-transform: capitalize;
     justify-content: center;
     align-items: center;

}


.mainHeader h1{
        font-size: 3rem;
        text-shadow: 6px -4px 2px rgba(206,89,55,0.36);
        font-family: monospace;
    }
#box
{
width: 40%;
height:60%;
background-color: rgb(165, 245, 18);
border-radius: 30px;
}
form{
    display: flex;
    flex-direction: column;
    font-family: monospace;
     justify-content: center;
     align-items: center;
}
label{
    font-size:15px;
}
input{
    padding:3px;
    
}

form h1{
    font-family: monospace;
}
.submit{
    font-family: monospace;
    font-size:1rem;
    padding:8px;
    text-transform: capitalize;
    transition: 0.4s linear;
    -webkit-box-shadow: 2px 5px 16px 0px #0B325E, 11px -7px 11px -2px rgba(0,0,0,0); 
box-shadow: 2px 5px 16px 0px #0B325E, 11px -7px 11px -2px rgba(0,0,0,0);
border-radius: 10px;
}




.submit:hover{
    background-color: rgb(165, 245, 18);
    color:white;
    cursor: pointer;
}

a{
    font-size:1rem;
    color:black;
}

</style>

<header class="mainHeader">


<h1 class="mainHeader__h1"> Welcome to London bus & taxi Hire</h1>



    </header>


    <div id="box">


<!-- 
    <div id="box">


        <form method="post">
            <div>SignUp</div>
            <input type="text" name="user_name"> <br><br>
            <input type="password" name="password" id=""> <br><br>
            <input type="submit" value="SignUp"> <br><br>
            <a href="loging.php">LogIn</a> <br><br>
        </form>

        <div id="box"> -->


<form method="post">
    <h1>Please SignUp</h1>
    <label for="userName">UserName</label>
    <input type="text" id="userName" name="user_name"> <br><br>
    <label for="password">Password</label>
    <input type="password" name="password" id="password"> <br><br>
    <input class='submit' type="submit" value="SignUp"> <br><br>
    <a href="loging.php">LogIn</a> <br><br>
</form>



    </div>
</body>

</html>