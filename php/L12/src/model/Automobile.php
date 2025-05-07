<?php 

class Automobile{
    private $id;
    private $marca;
    private $modello;
    private $cilindrata;
    private $posti;
    private $prezzo;

    public function __get($nomedellaproprietadagettare){
        return $this->$nomedellaproprietadagettare;
    }

    public function __set($nomeProprieta, $valoreProp){
        $this->$nomeProprieta = $valoreProp;
    }



}