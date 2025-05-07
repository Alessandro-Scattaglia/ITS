<?php

class Connessione
{
    private $conn;

   
    private function connetti() {
        $dsn = "mysql:host=".HOST.";dbname=".DBNAME.";";
        $this->conn = new PDO("$dsn", USER, PASS);
        if ($this->conn == null) $this->connetti();
        return  $this->conn;
    }

    private function disconnetti() {

    }

    public function getConn() {


    }

}