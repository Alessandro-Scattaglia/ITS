<?php

$nome = readline(prompt: "come ti chiami?");

switch ($nome) {
    case "alessandro":
        echo 'La variabile $nome è = a ', $nome;
        break;
    case "giovanna":
        echo "Ciao $nome, benvenutx";

    default:
        echo "Hello world";
        break;

}

?>