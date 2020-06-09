// Promesa
// Algo que se va a cumplir en un futuro 
// Quiza no se puede cumplir

// Alba -> 22 de junio
// Cumpleaños => pastel (vamos a esperar a tu cumple)

// Tenemos que esperar hasta el dia del cumple

// Maneras de ver una PerformanceMeasure
// La falta de ppromesa esta pendiente
// Faltan 20 dias para tu cumple

// La promesa cumple
// Alba => pastel

// La promesa no se cumple
// Alba =>  Explicacion/Razon (No lo encontre, no estaba abierta la pasteleria, no tenia dinero,...)


const promesaCumple = new Promise ((resolve, reject) => {
    const number = Math.floor( Math.random() * 100); // nos devuelve un numero entre 0 y 1

    setTimeout(() => {
        if(number > 50){
            resolve('🎂');
        } else {
            reject("No pude entregarte el pastel");
        }
    }, 3000);

});

promesaCumple
    .then((pastel) => console.log(pastel))
    .catch((razon) => console.log(razon));

// console.log(Math.floor( Math.random() * 100))

