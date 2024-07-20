<?php
    include '../DB/conexion.php';

    $consulta = $base_datos->query("SELECT * FROM peliculas");
    $peliculas = $consulta->fetchAll(PDO::FETCH_ASSOC);

    $datos = mb_convert_encoding($peliculas, "UTF-8", "iso-8859-1");
    echo json_encode($datos);

?>