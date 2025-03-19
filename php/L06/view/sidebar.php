<?php

$lista_pokemon = file("./files/nomi_pokemon.csv", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
sort($lista_pokemon);

?>

<div id="sidebar">
    <h2 class="titolo">Lista Pokémon</h2>
    <ul>
        <?php foreach ($lista_pokemon as $pokemon): ?>
            <li>
                <a href="?nome_pokemon=<?= str_replace('"', '', $pokemon) ?>" 
                   title="Scheda dettaglio Pokémon: <?= str_replace('"', '', $pokemon) ?>">
                    <?= str_replace('"', '', $pokemon) ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</div>
