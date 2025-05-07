<?php
require '../app/repos/PokemonDaoImp.php';
class PokemonService
{

    private $dao;

    public function __construct()
    {
        $this->dao = new PokemonDaoImp();
    }

    public function getPokemon()
    {
        return $this->dao->getPokemon();
    }
}