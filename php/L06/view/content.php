<?php $nome=isset($_GET['nome_pokemon'])?$_GET['nome_pokemon']:"undefined"; ?>
<?php

include("./model/pokemon.php");

$lista_pokemon= file("./files/pokemon_completo.csv");
$raccoglitore_pokemon = [];
foreach($lista_pokemon as $riga){
    $riga_esplosa=explode(",",$riga);
    $nome_= $riga_esplosa[1];
    $tipo1= $riga_esplosa[2];
    $tipo2= $riga_esplosa[3];
    $attacco= $riga_esplosa[6];
    $difesa= $riga_esplosa[7];

    $pokemon= new pokemon($nome_, $tipo1, $tipo2, $attacco, $difesa);
    array_push($raccoglitore_pokemon, $pokemon);
}

foreach($raccoglitore_pokemon as $pokemon){
    if($pokemon -> nome ==$nome){
        $tipo1=$pokemon->tipo1;
        $tipo2=$pokemon->tipo2;
        $attacco= $pokemon->attacco;
        $difesa= $pokemon->difesa;
    }
}

?>
    
    
    <div class="content">
        <h2 class="nome pokemon"><?= $nome ?></h2>
        <h2 class="nome pokemon">primo tipo: <?= $tipo1 ?></h2>
        <h2 class="nome pokemon">secondo tipo: <?= $tipo2 ?></h2>
        <h2 class="nome pokemon">attacco: <?= $attacco ?></h2>
        <h2 class="nome pokemon">difesa: <?= $difesa ?></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, maiores!</p>
        <div class="clear"></div>
    </div>
</div>