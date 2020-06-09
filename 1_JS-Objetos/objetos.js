// JSON
// JS => Javascript
// O => Object
// N => Notation

//TODO COMO UN OBJETO


// Un objeto carece de orden en sus elementos

var perro = {
    nombre: "Firulais",
    edad: 31,
    color: "marron",
    vive: true,
    juguetes: ["Pelota", "Hueso", "Peluche"],
    familia: {
        padre: "Homero",
        madre: "Marge",
        hermano: "Bart",
        hermana: "Lisa",
    },

    // Metodos

    juega: function(){
        return "El perro esta jugando"
    },

    come: function(comida) {
        var comidaMinus = comida.toLocaleLowerCase();
        if(comidaMinus == "croquetas") {
            return "es comida para perros" + " " + comidaMinus;
        } else {
            return comidaMinus + " " + "no es comida para perros";
        }
    }
}

// ¿Como accedo a una propiedad?
console.log(perro);
console.log(perro.color);
console.log(perro.nombre);
console.log(perro.juguetes[1]);
console.log(perro.familia.hermana);
console.log(perro.juega());
console.log(perro.come("croquetas"));



// -----------------------------------------------------------


// Un arreglo/array determina el orden de los elementos
//               0            1         2         3
var paises = ["Ecuador", "Colombia", "Mexico", "Peru"]

// ¿Como accedo a una posicion?
// console.log(paises);
// console.log(paises[1]);
// console.log(paises[3]);
// console.log(paises[2]);

// Buscar a un ave famoso y ficticio
// Agregar 5 caracteristicas
// 2 metodos
// mostrar en consola

var ave = {
    nombre: "Pajaro Loco",
    color: "Rojo",
    edad: 10,
    amigos: ["Pablo la morsa", "Pepe el gallinaso", "Pingüi"],
    novia: true,

    trabajo: function(profesion) {
        var profesionPajaro = profesion.toLocaleLowerCase();
        if(profesionPajaro == "picar arboles") {
            return profesionPajaro + " " + "es su trabajo";
        }else {
            return profesionPajaro + " " + "no es su trabajo";
        }
    },

    comida: function () {
        return "El pajaro está comiendo"
    },

    pregunta: function () {
        return "¿En que trabaja el pajaro loco?"
    },
}



console.log(ave);
console.log(ave.nombre);
console.log(ave.color);
console.log(ave.edad);
console.log(ave.amigos[2]);
console.log(ave.novia);
console.log(ave.comida());
console.log(ave.pregunta());
console.log(ave.trabajo(prompt("¿CUAL ES EL TRABAJO DEL PAJARO LOCO?")));



