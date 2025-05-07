<h1>galleria</h1>

<?php if (!isset($_SESSION['utente'])) 
    die("Non sei loggato, non puoi accedere a questa pagina");
?>

<section id="immagini">
<?php foreach($piazze as $piazza) : ?>
    <figure>
    <img
        src="<?= $piazza['foto'] ?>"
        alt="<?= $piazza['nome'] ?>" />
    <figcaption><?= $piazza['nome'] ?></figcaption>
</figure>
<?php endforeach; ?>
</section>