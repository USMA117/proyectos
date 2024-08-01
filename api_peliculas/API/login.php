<?php
    include '../DB/conexion.php';

    if(!empty($_POST['email']) || !empty($_POST['usuario_password'])){
        $email = $_POST['email'];
        $usuario_password = $_POST['usuario_password'];

        try{
            $query_signin = $base_datos->prepare("SELECT * FROM usuario WHERE email = :em");
            $query_signin->bindParam(':em',$email);
            $query_signin->execute();
            $user = $query_signin->fetchAll(PDO::FETCH_ASSOC);

            if(password_verify($usuario_password,$user[0]['usuario_password'])){
                $response = [
                    "signin"=> true
                ];
                echo json_encode($response);
            }else{
                $response = [
                    "signin"=> false
                ];
                echo json_encode($response);
            }
        }catch(Exception $e){
            $response = [
                "signin"=> false
            ];
            echo json_encode($response); 
        }
    }else{
        $response = [
            "response"=> "Debe ingresar todos los campos"
        ];
        echo json_encode($response);
    }
?>