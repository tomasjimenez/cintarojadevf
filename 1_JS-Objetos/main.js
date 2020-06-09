console.log("Imprime otra cosa")

// Variable

// Tipo de variable number
// var edad = 24;
// console.log(typeof edad);
// console.log(edad);

// Tipo de variable string porque esta con ""
var nombre = "Tomas";
console.log(typeof nombre);
console.log(nombre);

// Tipo de variable boolean
var casado = false;
console.log(typeof casado);
console.log(casado);


// Operadores logicos 

console.log("5 > 9");
console.log(5 > 9);

console.log("0 < 3");
console.log(0 < 3);

console.log("-3 >= -9");
console.log(-3 >= -9);

console.log("Tomas == Juan");
console.log(nombre == "Juan");


if(nombre == "Tomas"){
    console.log("La condicion se cumple")
} else{
    console.log("La condicion no se cumple")
}

// Función

function mayorDeEdad(edad) {
    if(edad >= 18){
        console.log(edad + " " + "Eres mayor de edad");
    } else{
        console.log(edad + " " + "No eres mayor de edad");
    }
}


mayorDeEdad(19);
mayorDeEdad(9);
mayorDeEdad(25);
mayorDeEdad(prompt("Escribe tu edad"));

