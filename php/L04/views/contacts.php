<?php

$sedi = [
    "Torino" => "Via Roma 1, 10100",
    "Milano" => "Corso Buenos Aires 10, 20100",
    "Roma" => "Piazza Venezia 5, 00100",
    "Napoli" => "Via Toledo 20, 80100",
    "Firenze" => "Ponte Vecchio 3, 50100"
];

?>
<h2>Contatti</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquam aliquid accusamus eveniet consectetur
    nulla! Voluptatibus veniam inventore ullam, illo ratione id architecto optio, culpa maxime ipsa assumenda.
    Exercitationem, ab.</p>


<h2>Sedi</h2>
<h3>é brutta</h3>
<ul>
    <?php

    foreach ($sedi as $citta => $indirizzo) {
        echo "<li>" . $citta . ":" . $indirizzo . "</li>";
    }

    ?>

</ul>

<h3>é più bella</h3>

<ul>
    <?php foreach ($sedi as $citta => $indirizzo): ?>
        <li><?= $citta ?>     <?= $indirizzo ?></li>
    <?php endforeach; ?>
</ul>