<?php

class SerieCtrl {
    public $series = [];

    public function addSerie($serie){
        $this->series[] = $serie;
        // oppure: array_push($this->series, $serie);
    }

    public function getSeries(){
        return $this->series;
    }
}
