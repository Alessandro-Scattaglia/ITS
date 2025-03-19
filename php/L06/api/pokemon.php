<?php    


include "../model/pokemon.php";

$lista_pokemon = file("../files/pokemon_completo.csv");
// echo "<pre>";
// print_r($lista_pokemon);

// echo"</pre>";
$raccoglitore_pokemon = [];

foreach ($lista_pokemon as $riga) {
    $riga_esplosa = explode(",", $riga);
    $nome = $riga_esplosa[1];
    $tipo1 = $riga_esplosa[2];
    $tipo2= $riga_esplosa[3];
    $attacco = $riga_esplosa[6];
    $difesa = $riga_esplosa[7];

    $pokemon = new Pokemon($nome, $tipo1, $tipo2, $attacco, $difesa);
    array_push($raccoglitore_pokemon, $pokemon);
}

header("content-type:application/json");
echo json_encode($raccoglitore_pokemon);