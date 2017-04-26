function translate(){

    //Titulo formulario
    var title = document.getElementById("form-signin-heading");
    title.innerHTML = "Por favor inicia sesión";
    //Caja ingresar email
    var email = document.getElementById("inputEmail");
    email.placeholder = "Correo Electrónico";
    //Caja ingresar contraseña
    var password = document.getElementById("inputPassword");
    password.placeholder = "Contraseña";
    //Recordar datos para hacer check
    var remember = document.getElementsByTagName("span")[0];
    remember.innerHTML = "Recordar datos";
    //Boton
    var button = document.getElementsByClassName("btn")[0];
    button.innerHTML = "Iniciar Sesión";

}
translate();

function imprimirDatos() {
    /* necesito llamar los datos ingresados al email, con getElementById. 
    Toma el valor de lo ingresado que deberian ser distintos cada vez */
    var email = document.getElementById('inputEmail').value;
    /* necesito llamar los datos ingresados como pass, con getElementById */
    var password = document.getElementById('inputPassword').value;
    /* con innerHTML imprimo los datos que son "estaticos". Creo etiqueta <div> para almacenarlos como texto */
    document.getElementById("printEmail").innerHTML = '<div><h4>Datos de formulario</h4></div>' +
        '<div>El correo electrónico ingresado es:</div>' + email + '<div>La clave ingresada es:</div>';
    document.getElementById("printPass").innerHTML = password;
}

