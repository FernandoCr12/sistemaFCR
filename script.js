let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
});

// Verificar si hay un valor de autenticación en sessionStorage al cargar la página
window.addEventListener("load", function() {
    var authenticated = sessionStorage.getItem("authenticated");
    if (!authenticated) {
        // No hay un valor de autenticación, redireccionar a la página de inicio de sesión
        window.location.href = "login.html";
    }
});

// Escuchar el evento beforeunload para cerrar la sesión
window.addEventListener("beforeunload", function() {
    // Remover el valor de autenticación de sessionStorage
    sessionStorage.removeItem("authenticated");
});

// Función para cerrar sesión
function logout() {
    // Remover el valor de autenticación de sessionStorage
    sessionStorage.removeItem("authenticated");

    // Redireccionar a la página de inicio de sesión
    window.location.href = "login.html";
}