document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        let valid = true;

        if (nombre === "") {
            error("nombre", "Por favor, ingresa tu nombre.");
            valid = false;
        }
        else {
            eliminarError("nombre");
        }
        if (email === "") {
            error("email", "Por favor, ingresa tu email.");
            valid = false;
        } else {
            eliminarError("email");
        }
        if (mensaje === "") {
            error("mensaje", "Por favor, ingresa un mensaje.");
            valid = false;
        } else {
            eliminarError("mensaje");
        }
        if (valid) {
            alert("Formulario enviado con éxito.");
            form.submit();
        }
    });
    function error(id, mensaje) {
        let elemento = document.getElementById(id);
        let errorElemento = document.getElementById(id + "-error");

        if (!errorElemento) {
            errorElemento = document.createElement("div");
            errorElemento.id = id + "-error";
            errorElemento.className = "error-mensaje";
            elemento.parentNode.appendChild(errorElemento);
        }

        errorElemento.textContent = mensaje;
        errorElemento.style.color = "red";
        elemento.style.border = "2px solid red";
    }
    function eliminarError(id) {
        let elemento = document.getElementById(id);
        let errorElemento = document.getElementById(id + "-error");

        if (errorElemento) {
            errorElemento.remove();
        }

        elemento.style.border = "2px solid #ccc";
    }




});