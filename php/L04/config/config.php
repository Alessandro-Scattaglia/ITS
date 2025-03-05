<?php

session_start();


define("TITOLO", "My Personal Home Page");

function doLogin($username, $password){
    $user = "Marco";
    $pass = "123";

    if ($user == $username && $pass = $password){
        echo "Logged in";
    }
    else{
        echo "Not Logged";
    }

}
?>



    