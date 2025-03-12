<?php include './demo.php'; ?>
<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playlist</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 8px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>
    <h1>Playlist</h1>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($scatolaCanzoni as $index => $canzone): ?>
                <tr>
                    <td><?= $index + 1 ?></td>
                   
                    <td><a href="https://www.youtube.com/results?search_query=<?= $canzone->titolo ?>" target="_blank"><?= $canzone->titolo ?></a></td>
               
                    <td><a href="https://www.google.com/search?q=<?= $canzone->cantanti ?>" target="_blank"><?= $canzone->cantanti ?></a></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

</body>

</html>
