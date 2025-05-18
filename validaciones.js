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

        // Validación de nombre y apellido
        if (nombre === "") {
            errores.push("El nombre es obligatorio.");
        }

        if (apellido === "") {
            errores.push("El apellido es obligatorio.");
        }

        // Validación de correo electrónico
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            errores.push("El correo electrónico no es válido.");
        }

        // Validación de cédula (solo números y 10 dígitos)
        const regexCedula = /^\d{10}$/;
        if (!regexCedula.test(cedula)) {
            errores.push("La cédula debe tener exactamente 10 dígitos numéricos.");
        }

        // Validación de dirección
        if (direccion === "") {
            errores.push("La dirección es obligatoria.");
        }

        // Validación de fecha de nacimiento
        if (fecha === "") {
            errores.push("La fecha de nacimiento es obligatoria.");
        }

        // Validación de condiciones
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
