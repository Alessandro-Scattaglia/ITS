<?php
function addizzione($a,$b){
    return $a + $b;
}


function sottrazione($a,$b){
    return $a - $b;
}


function prodotto($a,$b){
    return $a * $b;
}


function quoziente($a,$b){
    return $a / $b;
}

$a = 12;
$b = 4;

echo addizzione(a: $a, b: $b) . "\n";
echo sottrazione(a: $a, b: $b) . "\n";
echo prodotto(a: $a, b: $b) . "\n";
echo quoziente(a: $a, b: $b) . "\n";