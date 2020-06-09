var { Largometraje } = require ("./Largometraje");

// CLASE HIJO 

class Pelicula extends Largometraje {
    constructor(titulo, duracion, genero, director) {
        super(titulo, duracion);
        this.genero = genero;
        this.director = director;
        this.entrada = "$5";
    }

}


var pelicula1 = new Pelicula("Episio I Star Wars", "1:30 mins", "Ciencia Ficción", "George Lucas")
var pelicula2 = new Pelicula("Hombre al agua", "1:20 mins", "Comedia", "Eugenio Dervez")

// console.log(pelicula1)
// console.log(pelicula2)

module.exports = { pelicula1, pelicula2}