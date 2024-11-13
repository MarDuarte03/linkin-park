//inicio sesión//
function errorUser(){
    var nombre = document.getElementById("nombre").value.trim();
    var nombreError = document.getElementById("nombreError");
    if (nombre === "") {
        nombreError.textContent = "El nombre de usuario es requerido.";
        return false;
    }else{
        nombreError.textContent = '';
        return true;
    }
}
function errorPass(){
    var contraseña = document.getElementById("contraseña").value.trim();
    var contraseñaError = document.getElementById("contraseñaError");
    if (contraseña === "") {
        contraseñaError.textContent = "La contraseña es requerida.";
        return false;
    }else{
        contraseñaError.textContent = '';
        return true;
    }

}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if(errorUser() && errorPass()){
        this.submit();
    }
});
document.getElementById("username").addEventListener("focus", function(){
    document.getElementById("usernameError").textContent = "";
})
document.getElementById("username").addEventListener("blur",errorUser);

document.getElementById("password").addEventListener("focus", function(){
    document.getElementById("passwordError").textContent = "";
})
document.getElementById("password").addEventListener("blur",errorPass);


