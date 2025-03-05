<?php 

$vista = isset($_GET["view"]) ? $_GET["view"] : "Home";


switch ($vista) {
    case 'contacts':
        include "./views/contacts.php";
        break;
    
    default:
        include "./views/home.php";
        break;
}




?>