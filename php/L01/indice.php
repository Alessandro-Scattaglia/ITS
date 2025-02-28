<?php define('TITOLO', 'Benvenuto nel mio sito web PHP powered')?>
<?php include 'intestazione.php';?>

<h1><?= TITOLO ?></h1>

<p>Oggi è il <?= date('d/m/Y') ?></p>
<p>Sono le ore <?= date('h:i:s') ?></p>

<?php $materia = "php"; ?>