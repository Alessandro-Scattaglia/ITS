<?php

require "../app/service/PokemonService.php";
class PokemonMvc 
{

    private $service;

    public function __construct()
    {
        $this->service = new PokemonService();
    }

    public function tabellaPokemon()
    {
       foreach($this->service->getPokemon() as $pokemon) {
            echo "<h3>" . $pokemon->nome . "</h3>";
        }
    }
}