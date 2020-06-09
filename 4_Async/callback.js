// Funcion de orden superior
function miPrimerCallback(operacion, a, b) {
    return operacion(a, b);
}


function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a-b
}

function division(a, b) {
    return a / b;
}

// console.log(suma(3, 5))
// console.log(resta(8, 3))

// console.log(miPrimerCallback(suma, 8, 4));
// console.log(miPrimerCallback(resta, 2, 1));
// console.log(miPrimerCallback(division, 8, 2));


// Muestra un mensaje en consola mediante un callback. La función de orden superior
// que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info,
// o cualquier método para pintar en consola del objeto console.


function ordenSuperior (consola, mensaje){
    return consola(mensaje);
}

function warn(mensaje){
    console.warn(mensaje)
}

function error(mensaje){
    console.error(mensaje);
}

function info(mensaje){
    console.info(mensaje);
}

// ordenSuperior(warn, "Esto es un warn");
// ordenSuperior(error, "Esto es un error");
// ordenSuperior(info, "Esto es un info");
// Escribe una función de orden superior que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.

function segundaOrden (cadena, convertir){
    return convertir(cadena)
}

function mayus(cadena){
    return cadena.toUpperCase();
}

function minus (cadena){
    return cadena.toLowerCase();
}

console.log(segundaOrden ("esto es un mensaje", mayus));
console.log(segundaOrden ("ESTO ES UN MENSAJE", minus));