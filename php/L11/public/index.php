<?php require "../app/config/config.php"; ?>


<?php

require "../app/presentation/PokemonMVC.php";

$ctrl = new PokemonMvc();
$ctrl->tabellaPokemon();