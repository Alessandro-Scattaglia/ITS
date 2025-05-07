<?php

//costanti
define("TITOLO", "Titolo del sito");
define("ASSETS", "./public/assets/");
define("CSS", './public/assets/css/');
define("JS", "./public/assets/js/");
define("VIEW", "./app/view/");

//variabili
$author = "Alessandro";

$menu_nav = [
    ["nome"=>"home", "collegamento"=>"?"],
    ["nome"=> "gallery","collegamento"=> "?page=gallery"],
    ["nome"=> "calc","collegamento"=> "?page=calc"],
    // ["nome"=> "login","collegamento"=> "?page=login"],
    // ["nome"=> "logout","collegamento"=> "?page=logout"]
];

$piazze = [
    ["nome"=>"Piazza Vittorio", "foto"=>"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Piazza_Vittorio_Veneto_Torino.JPG/1280px-Piazza_Vittorio_Veneto_Torino.JPG"],
    ["nome"=>"Piazza Castello", "foto"=>"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Turin_piazza_costello.JPG/1280px-Turin_piazza_costello.JPG"],
    ["nome"=>"Piazza San Carlo", "foto"=>"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Turin_piazza_san_carlo_2009.JPG/1280px-Turin_piazza_san_carlo_2009.JPG"],
    ["nome"=>"Piazza Statuto", "foto"=>"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/PiazzaStatutoTorino.JPG/1280px-PiazzaStatutoTorino.JPG"]
];
    

//faccio partire la sessione: uno spazio di memoria sul server
session_start(); //deve succere prima di qualsiasi istruzione di output

//funzioni custom
function login($user, $pass){
    if ($user == "admin" && $pass == "12345") {
        $_SESSION['login'] = true;
        return true;
    } 
    return false;    
}

if(isset($_POST['username']) && isset($_POST['password']) && $_POST['username'] != trim('') && $_POST['password'] != trim('')){
    $logged = login($_POST['username'], $_POST['password']);
    

    if($logged){
        $_SESSION['utente'] = $_POST['username'];
    }
}
