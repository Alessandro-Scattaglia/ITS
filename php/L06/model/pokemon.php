<?php

class Pokemon
{
    public $nome;
    public $tipo1;
    public $tipo2;
    public $attacco;
    public $difesa;

    public function __construct($nome, $tipo1, $tipo2, $attacco, $difesa)
    {
        $this->nome = $nome;
        $this->tipo1 = $tipo1;
        $this->tipo2 = $tipo2;
        $this->attacco = $attacco;
        $this->difesa = $difesa;

    }
}






?>