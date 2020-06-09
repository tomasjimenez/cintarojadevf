// Súper clase o clase padre

class Mascota {

    constructor(nombre, patas) {
        this.nombre = nombre;
        this.cerebro = true;
        this.patas = patas;
        
    }

    alimentarse(){
        return this.nombre + " se està alimentando";
    }
}
// COMO HACER UNA INSTANCIA DE UNA MASCOTA CON UNA VARIABLE
// var mascota1 = new Mascota("Lucky", 4);
// console.log(mascota1)

// Perros

class Perro extends Mascota{
    constructor(nombre, patas, ladra, cola){
        // ejecuta el constructor de la clase padre
        super(nombre, patas);
        this.ladra = ladra;
        this.cola = cola;
    }

    truco() {
        return this.nombre + " está haciendo un truco";
    }
}

var perro1 = new Perro("Alfonso ", 4, true, false);
console.log(perro1)
console.log(perro1.patas)
console.log(perro1.alimentarse())
console.log(perro1.truco())



// Serpientes

class Serpiente extends Mascota {
    constructor(nombre, patas, color) {
        super(nombre, patas)
        this.color = color;
        this.venenosa = false;
    }

    enrroscarse(){
        return this.nombre + " se esta enroscando"
    }
}

var serpiente1 = new Serpiente ("Boa", 0, "Cafe")
console.log(serpiente1)
console.log(serpiente1.alimentarse())
console.log(serpiente1.enrroscarse())