<?php



class Prodotto {

    private $nome;
    private $prezzo;
    private $quantita;


    function __construct($nome, $prezzo, $quantita) {
        $this->nome = $nome;
        $this->prezzo = $prezzo;
        $this->quantita = $quantita;
    }

    public function __get($nome) {
        return $this->$nome;
    }

    public function __set($nome, $value) {
        $this->$nome = $value;
    }
}