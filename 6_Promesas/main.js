
// LLamamos a nuestra dependencia que se llama request
// Request nos va a permitir hacer peticiones http
const request = require('request');

const { Banda } = require ('./banda');

const endPoint = 'http://www.theaudiodb.com/api/v1/json/1/search.php?s=Nirdsfsdfvasna';

// Declaramos mi funcion, buscaBanda y recibe parametro (nombre)
const buscaBanda = (nombre) => {
    // Retorna una promesa 
    return new Promise ((resolve, reject) => {
    // Creamos nuestra constante endPoint y concatenamos el valor nombre
    const endPoint = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;
    // Ejecutamos request   
    // request recibe como primer parametro endPoint
    // callback function (error, response, body)
    // error => me va a indicar un error
    // response => me va a dar información de la petición (status code)
    //body => JSON que recibimos
    request(endPoint, (error, response, body) => {
        // Si no hay errores continuamos
        if (error === null) {
        // Hacemos legible nuestro JSON para JS
        // Un string a un objeto
         const respuesta = JSON.parse(body);
        // Instancia de mi clase Banda

        // Creo constantes basadas en los atributos del objeto => respuesta.artists [0]

        const { strArtist, intFormedYear, strWebsite, strGenre } = respuesta.artist[0];

        // Instancia de mi clase Banda
        const Banda = new Banda ( strArtist, intFormedYear, strWebsite, strGenre);
        //  console.log(respuesta.artists[0].strArtist);
        //  const banda = new Banda(
        //     respuesta.artists[0].strArtist,
        //     respuesta.artists[0].intFormedYear,
        //     respuesta.artists[0].intFormedYear,
        //     respuesta.artists[0].strGenre
        //  )

        // Resuelve la promesa
         resolve(banda);
        } else {
            reject('No encontré a la banda');
        }
     });     
    });  
}

buscaBanda('Melinda')
    .then((banda) => console.log(banda))
    .catch((error) => console.log(error));



