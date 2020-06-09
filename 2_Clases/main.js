// var platillo = {
//     nombre: "Hamburguesa",
//     ingredientes: ["Carne", "Queso", "Mayonesa", "Mostaza"],
//     tamanio: "Doble",
//     conTocino: true
// }

// console.log(platillo.nombre);

// Primera letra mayuscula y singular
class Auto {
    constructor(color, motor, matricula) {
        this.color = color;
        this.motor = motor;
        this.llantas = 4;
        this.matricula = matricula;
        this.volante = true;
    }

// Metodo
    encender() {
        return "El auto" + " " + this.color + " " + "con motor" + " " + this.motor + " " + "ha sido encendido" ;
    }

    cerrar() {
        return "El auto" + " " + this.color + " " + "con motor" + " " + this.motor + " " + "ha sido apagado";
    }

    cambiarMotor(nuevoMotor) {
        this.motor = nuevoMotor;
        return "Se ha cambiado el motor";
    }

    pintarAuto(nuevoColor) {
        this.color = nuevoColor;
        return "Se ha pintado el motor";
    }

    obtenResumen() {
    // if ( this.motor == "Electrico"){
    //     return "Esta perfecto"
    // } else{
    //     return "sino no"
    // }

        return "Este auto es de color" + this.color + ", tiene" + this.llantas + "y su matricula es" + this.matricula;
    }
    
}



// Instancia de mi clase 
var miAuto = new Auto("Plata", "V8", "PC281729383");
var autoDos = new Auto("Rojo", "V6", "PC281729383");
var autoTres = new Auto("Amarillo", "V4", "PC281729383");

console.log(miAuto);
// console.log(autoDos);
// console.log(autoTres);


// console.log(miAuto.encender());
// console.log(autoDos.encender());
// console.log(autoTres.encender());

// console.log(autoTres.cerrar());

console.log(miAuto.cambiarMotor("Electricod")) ;
console.log(miAuto);

console.log(autoDos.pintarAuto("Purpura")) ;
console.log(autoDos);

console.log(miAuto.obtenResumen())



/* Haz una clase llamada Persona que siga las siguientes condiciones:
    Sus atributos son: nombre, edad, género, peso y altura.
     calcularIMC()
     esMayorDeEdad()
     El constructor pide nombre, edad, género, peso y altura
*/





// class Persona {
//     constructor(nombre, edad, genero, peso, altura) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.genero = genero;
//         this.peso = peso;
//         this.altura = altura;
//     }

//     calcularImc() {
     
//         return this.nombre + " " + "tiene un IMC de" + " " + this.peso / ( this.altura * this.altura );
//     }

//     cambioEdad(cambioEdad){
//         this.edad = cambioEdad;
//         return this.edad 
//     }

//     esMayorDeEdad() {

//        if (this.edad >= 18) {
//            return this.nombre + " " + "es mayor de edad";
           
//        } else{
//            return this.nombre + " " + "es menor de edad";
//        }

//     }

// }

// var persona1 = new Persona ("Jose", 20, "Hombre", 150, 170);
// var persona2 = new Persona ("Luis", 16, "Hombre", 200, 180);


// console.log(persona1.calcularImc());

// console.log(persona1.esMayorDeEdad());

// console.log(persona2.calcularImc());

// console.log(persona2.esMayorDeEdad());

// console.log(persona1.cambioEdad(40))


/* 
Crear una clase Cuenta que tenga los siguientes atributos y metodos:
     -Titular y cantidad
     -ingresar(cantidad)
     -retirar(cantidad)
     Hacer las validaciones previas
     Como regla de negocio no debe de tener más de $900 y menos de $10
*/ 

class Cuenta {

    constructor(titular, cantidad) {
    this.cantidad = cantidad;
    this.titular = titular;
    }

    ingresar (cantidadIngresada) {
        if (this.cantidad + cantidadIngresada >= 10 && this.cantidad + cantidadIngresada <= 900){
            this.cantidad = cantidadIngresada + this.cantidad;
            return "Permitido tu nueva cantidad es " + this.cantidad
        } else {
            return "No permitido, no puede tener menos de 10$ o mas de 900$"
        }
    }

    retirar (cantidadRetirada) {

        if (this.cantidad - cantidadRetirada >= 10 && this.cantidad - cantidadRetirada <= 900){
            this.cantidad = this.cantidad - cantidadRetirada ;
            return "Permitido tu nueva cantidad es " + this.cantidad
        } else {
            return "No permitido, no puede tener menos de 10$ o mas de 900$"
        }
    }

}

var persona1 = new Cuenta ("Armando", 700);
var persona2 = new Cuenta ("Monica", 1700);

console.log(persona1.ingresar(200));
console.log(persona1.retirar(100));



function formulaGrados (gradosF){

    var gradosC = (gradosF - 32) * 5/9 ;
    return "Los grados son" + gradosC
    
}



