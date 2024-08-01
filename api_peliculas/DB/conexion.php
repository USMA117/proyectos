<?php
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: * ");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    $host = "localhost";
    $database = "peliculas_bd";
    $user = "root";
    $password = "";
    

    try {
        $base_datos = new PDO("mysql:host=$host; dbname=$database",$user,$password);
        
    } catch (Exception $e) {
        echo 'Ha surgido un error y no se puede conectar a la base de datos. Detalle: ' . $e->getMessage();
	exit;
    }
?>