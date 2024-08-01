let email = '';
let password = '';
let form_signin = document.getElementById('form_signin');
let login = false;
let username = document.getElementById('username');

form_signin.addEventListener('submit', function (e){
    e.preventDefault();
    email = document.getElementById('input_email').value;
    password = document.getElementById('input_user_password').value;
    if(email.trim() == '' || password.trim() == ''){
        // Alerta de ingresar todos los campos
    }else{
        signin(email,password);
    }

});

function signin(email,password){

    let user = new FormData();
    user.append('email', email);
    user.append('usuario_password', password);

    let settings = {
        "method": "POST",
        "body": user,
        "headers": {
            "Accept": "application/json"
        }
    }

    fetch('http://localhost/proyectos/api_peliculas/API/login.php',settings)
    .then(response => response.json())
    .then(data => {
        if(data.signin) {
            login = true;
            // guardar en el local storage
        }
    });

}