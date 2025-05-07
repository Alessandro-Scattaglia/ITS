<?php

// costanti

define('TITOLO', 'Autosalone WDV');

define('HOST', 'localhost:3306');
define('USER', 'ITS_2025');
define('PASS', 'ITS_2025');
define('DB_NAME', 'ITS_2025');


define('DSN', 'mysql:host=' .HOST . ';dbname=' . DB_NAME);

define('PATH_CSS', './css/');
define('PATH_JS', './js/');
define('SRC', '../src/');
define('VIEW', 'view/');

require SRC . '/model/Automobile.php';
require SRC . '/model/AutomobileDAO.php';
require SRC . '/model/AutomobileService.php';
require SRC . '/model/AutomobileMVC.php';
require SRC . '/model/AutomobileREST.php';