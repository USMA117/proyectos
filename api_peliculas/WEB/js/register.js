
let form_register = document.getElementById('form_register');
let username = '';
let email = '';
let usuario_password = '';
let alert_success = document.getElementById('alert_success');
let alert_error = document.getElementById('alert_error');
let alert_field_empty = document.getElementById('alert_field_empty');

form_register.addEventListener('submit', function(event){
    event.preventDefault();
    username = document.getElementById('input_username').value;
    email = document.getElementById('input_email').value;
    usuario_password = document.getElementById('input_password').value;

    if(username.trim() == '' || email.trim() == '' || usuario_password.trim() == ''){
        alert_field_empty.style.display = 'block';
        setTimeout(()=>{
            alert_field_empty.style.display = 'none';
        },2000);
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
        if(data.register_status == true){
            alert_success.style.display = 'block';
            setTimeout(()=>{
                alert_success.style.display = 'none';
            },2000);
        }
        if(data.register_status == false){
            alert_error.style.display = 'block';
            setTimeout(()=>{
                alert_error.style.display = 'none';
            },2000);
        }
    });
}