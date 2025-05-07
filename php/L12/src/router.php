<?php

$pagina = 'home';

if (isset($_GET['page'])){
    $pagina = $_GET['page'];


}

switch($pagina){
    case 'automobili':
        break;
    case 'api':
        break;
    default:
        $ctrl = new AutosaloneMVC();
        $ctrl->home();
        break;
}