<?php

require "../app/repos/PokemonDao.php";
require "../app/repos/Connessione.php";
require "../app/model/Pokemon.php";


class PokemonDaoImp implements PokemonDao
{


    private $connessione;

    public function __construct()
    {
        $this->connessione = new Connessione();
    }

    public function getPokemon()
    {
        $result = $this->connessione->getConn()->query(PokemonDao::FIND_ALL);
        $pokemons = [];
        while ($record = $result->fetch(PDO::FETCH_ASSOC)) {
            $id = $record['id'];
            $name = $record['nome'];
            $type1 = $record['tipo1'];
            $type2 = $record['tipo2'];
            $generation = $record['Generation'];
            $legendary = $record['Legendary'];

            $pokemon = new Pokemon();
            $pokemon->id = $id;
            $pokemon->name = $name;
            $pokemon->type1 = $type1;
            $pokemon->type2 = $type2;
            $pokemon->generation = $generation;
            $pokemon->legendary = $legendary;

            $pokemons[] = $pokemon;


        }
        return $pokemons;
    }

    public function getPokemonByGeneration($generation)
    {
        // TODO: Implement getPokemonByGeneration() method.
    }

    public function getPokemonById($id)
    {
        // TODO: Implement getPokemonById() method.
    }

    public function getPokemonByLegendary($legendary)
    {
        // TODO: Implement getPokemonByLegendary() method.
    }

    public function getPokemonByName($name)
    {
        // TODO: Implement getPokemonByName() method.
    }

    public function getPokemonByType($type1)
    {
        // TODO: Implement getPokemonByType() method.
    }

    public function getPokemonByType2($type2)
    {
        // TODO: Implement getPokemonByType2() method.
    }

    public function getPokemons()
    {
        // TODO: Implement getPokemons() method.
    }
}
