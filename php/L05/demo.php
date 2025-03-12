<?php

include 'canzone.php';

$canzoni = file('./liked_songs.csv');
// var_dump($canzoni);

$scatolaCanzoni = [];

foreach($canzoni as $riga ) {
    $dueStringhe = explode( ',', $riga);
    $titolo = $dueStringhe[0];
    $cantanti = $dueStringhe[1];
    $scatolaCanzoni[] = new Canzone($titolo, $cantanti);
}

