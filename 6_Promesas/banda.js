class Banda {
    constructor(nombre, anio, website, genero){
        this.nombre = nombre;
        this.anio = anio;
        this.website = website;
        this.genero = genero;
    }
}
// Exporto la clase como un objeto
module.exports = { Banda };


// // Objeto literal 

// const BandaX = {
//     nombre: 'pepe',
//     anio: 1990,
//     website: 'wwww.pepe.com',
//     genero: 'rock'
// }

// // console.log(BandaX);

// // const nombre = BandaX.nombre;
// // const anio = BandaX.anio;
// // const website = BandaX.website;
// // const genero = BandaX.genero;

// // Destructuración de Objetos

// const { nombre, anio, website, genero} = BandaX;

// console.log(website);
// console.log(anio);
// console.log(nombre);
// console.log(genero);


