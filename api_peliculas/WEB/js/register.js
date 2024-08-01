
let form_register = document.getElementById('form_register');
let username = '';
let email = '';
let usuario_password = '';

form_register.addEventListener('submit', function(event){
    event.preventDefault();
    username = document.getElementById('input_username').value;
    email = document.getElementById('input_email').value;
    usuario_password = document.getElementById('input_password').value;
    if(username.trim() == '' || email.trim() == '' || usuario_password.trim() == ''){
        // alerta para ingrese todos los datos
        console.log('Hay datos vacios');
    }else{
        console.log('username: ' + username + ' email: ' + email + ' pass: ' + usuario_password);
        register_user(username, email, usuario_password);
    }
    
    
});


function register_user(username, email, usuario_password){

    let new_user = new FormData();
    new_user.append("nombre_usuario", username);
    new_user.append("email",email);
    new_user.append("usuario_password",  usuario_password);

    let settings = {
        method: 'POST',
        body: new_user,
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('http://localhost/proyectos/api_peliculas/API/register.php',settings)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(data.register_status == false){
            console.log("Eres DIOS");
        }
    });
}