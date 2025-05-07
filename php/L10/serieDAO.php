<?php

class Serie_DAO {
    private $host = 'mysql://localhost:3306/fondamenti';

    private $username = 'ITS_2025';
    private $password = 'ITS_2025';
    
    private $db;

    public function __construct(){
        try {
            $this->db = new PDO($this->host, $this->username, $this->password);
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Errore di connessione: " . $e->getMessage());
        }
    }

    function saveSerie($serie){
        $query = 'INSERT INTO SerieTV (name, rating, genre, image) 
                  VALUES (:name, :rating, :genre, :image)';
        
        $placeholder = $this->db->prepare($query);
        $placeholder->bindParam(':name', $serie->name);
        $placeholder->bindParam(':rating', $serie->rating);
        $placeholder->bindParam(':genre', $serie->genre);
        $placeholder->bindParam(':image', $serie->image);

        $placeholder->execute();
    }
}
