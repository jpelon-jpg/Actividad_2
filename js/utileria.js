function validarCorreo(correo) {
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}

function soloLetras(texto) {
    let expresion = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
    return expresion.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    return numero.toString().length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
    let nacimiento = new Date(fechaNacimiento);
    let hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    let mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    let mayuscula = /[A-Z]/;
    let minuscula = /[a-z]/;
    let numero = /[0-9]/;
    let especial = /[!@#$%^&*(),.?":{}|<>_\-]/;

    return password.length >= 8 &&
           mayuscula.test(password) &&
           minuscula.test(password) &&
           numero.test(password) &&
           especial.test(password);
}

function formatearNombre(nombre) {
    return nombre
        .toLowerCase()
        .split(" ")
        .map(function(palabra) {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1);
        })
        .join(" ");
}

function validarTelefono(telefono) {
    let expresion = /^[0-9]{10}$/;
    return expresion.test(telefono);
}