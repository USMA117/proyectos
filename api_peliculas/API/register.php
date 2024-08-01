<?php
    include '../DB/conexion.php';

    if(!empty($_POST['nombre_usuario']) || !empty($_POST['email']) || !empty($_POST['usuario_password'])){
        $username = $_POST['nombre_usuario'];
        $email = $_POST['email'];
        $password = password_hash($_POST['usuario_password'], PASSWORD_BCRYPT);

        try {
            $query_register = $base_datos->prepare('INSERT INTO usuario (nombre_usuario,email,usuario_password) VALUES(:nom,:em,:pass)');
            $query_register->bindParam(':nom',$username);
            $query_register->bindParam(':em',$email);
            $query_register->bindParam(':pass',$password);
            
            $ejecucion = $query_register->execute();

            if($ejecucion && $query_register->rowCount() != 0){
                $response = [
                    "register_status"=> true
                ];
                echo json_encode($response);
            }
        } catch (Exception $e) {
            $response = [
                "register_status"=> false
            ];
            echo json_encode($response);
        }
        
    }else{
        $response = [
            "message"=> "Todos los campos son obligatorios"
        ];
        echo json_encode($response);
    }
    


?>