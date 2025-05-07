<?php

include 'serie.php';
include 'serieDAO.php';
include 'serieCtrl.php';

$s = new Serie(1,'Breaking Bad','9.3','Drama,Thriller,Crime', 'breaking.png');

$ctrl = new SerieCtrl();
$ctrl-> addSerie($s);

$series = $ctrl->getSeries();

var_dump($series);
