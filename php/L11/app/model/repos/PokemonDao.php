<?php


interface PokemonDao {
 const FIND_ALL = "SELECT Id, Nome, Tipo1, Tipo2, Generazione, Leggendario FROM pokemon.pokemon";


function getPokemons();
public function getPokemon();
public function getPokemonById($id);
public function getPokemonByName($name);
public function getPokemonByType($type1);
public function getPokemonByType2($type2);
public function getPokemonByGeneration($generation);
public function getPokemonByLegendary($legendary);

}
