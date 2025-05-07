<?php

class Pokemon {

    private $id;
    private $name;
    private $type1;
    private $type2;
    private $generation;
    private $legendary;

    public function __get ($nome){
        return $this->$nome;
    }

    public function __set ($nome, $valore){
        $this->$nome = $valore;
    }
}