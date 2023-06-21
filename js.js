document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    var username = document.querySelector(".login-username").value;
    var password = document.querySelector(".login-password").value;

    if (
        (username === "fernando" && password === "12345") ||
        (username === "laura" && password === "12345") ||
        (username === "danitza" && password === "12345") ||
        (username === "isael12" && password === "12345") ||
        (username === "santiago" && password === "12345")
    ) {
        // Si los datos son correctos, almacenar el valor de autenticación en sessionStorage
        sessionStorage.setItem("authenticated", "true");

        // Redireccionar a la página de loader
        window.location.href = "loader.html";
    } else {
        // Si los datos son incorrectos, mostrar el modal de error
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Verificar si hay un valor de autenticación en sessionStorage al cargar la página
window.addEventListener("load", function() {
    var authenticated = sessionStorage.getItem("authenticated");
    if (!authenticated) {
        // No hay un valor de autenticación, volver a solicitar usuario y contraseña
        sessionStorage.removeItem("authenticated");
    }
});