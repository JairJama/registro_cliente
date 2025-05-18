document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".tabla-form");

    form.addEventListener("submit", function (e) {
        const nombre = document.getElementById("name").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const cedula = document.getElementById("cedula").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const fecha = document.getElementById("date").value;
        const condiciones = document.getElementById("checkbox").checked;

        let errores = [];

        // Expresiones regulares
        const regexNombre = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/; // Solo letras y espacios
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexCedula = /^\d{10}$/;

        // Validación de nombre
        if (nombre === "") {
            errores.push("El nombre es obligatorio.");
        } else if (!regexNombre.test(nombre)) {
            errores.push("El nombre solo debe contener letras y espacios.");
        }

        // Validación de apellido
        if (apellido === "") {
            errores.push("El apellido es obligatorio.");
        } else if (!regexNombre.test(apellido)) {
            errores.push("El apellido solo debe contener letras y espacios.");
        }

        // Validación de correo electrónico
        if (!regexEmail.test(email)) {
            errores.push("El correo electrónico no es válido.");
        }

        // Validación de cédula
        if (!regexCedula.test(cedula)) {
            errores.push("La cédula debe tener exactamente 10 dígitos numéricos.");
        }

        // Validación de dirección
        if (direccion === "") {
            errores.push("La dirección es obligatoria.");
        }

        // Validación de fecha
        if (fecha === "") {
            errores.push("La fecha de nacimiento es obligatoria.");
        }

        // Validación de aceptación de condiciones
        if (!condiciones) {
            errores.push("Debes aceptar las condiciones.");
        }

        // Mostrar errores si hay alguno
        if (errores.length > 0) {
            e.preventDefault();
            alert("Errores encontrados:\n\n" + errores.join("\n"));
        }
    });
});
