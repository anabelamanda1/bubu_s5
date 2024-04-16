const $usuario = $("#usuario");
const $password = $("#password");

const credenciales = {
    usuario: "BUBU2024",
    pass: "bubu2024"
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    if (valueUsuario == credenciales.usuario) {
        if (valuePassword == credenciales.pass) {
            localStorage.setItem("isLoggedIn", true); // Almacena que el usuario ha iniciado sesión
            location.href = "dashboard.html";
        } else {
            Swal.fire({
                title: "ERROR",
                text: "NO, no es la contraseña CORRECTA :|",
                icon: "error"
            });
        }
    } else {
        Swal.fire({
            title: "ERROR",
            text: "No es el USUARIO, Verifica!! :(",
            icon: "error"
        });
    }
});
