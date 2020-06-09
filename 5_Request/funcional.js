const array = [10, 21, 33, 48, 52];


// Imperativo ->Iteramos  nuestro arreglo por medio de un for

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Funciones de recorrer un arreglo
// forEach

array.forEach((valor) => console.log(valor));

// Map
// Generar un nuevo arreglo a partir de otro 

array.map((a, b, c) => console.log(a, b, c));

// Generar un nuevo arreglo con su valor multiplicado por 2

const array2 = array.map((element, index) => `Indice ${index} ${element * 2}`);
console.log(array2);

// Filter
// Generar un nuevo arreglo que cumpla una condición

const arrayFilter = array.filter((element) => element % 3 === 0)
console.log(arrayFilter);


const countries = ["Mexico", "Peru", "Colombia", "Costa Rica"];

// Utilizando filter me devuelvas los paises con 5 caracteres o menos

const filteredCountries = countries.filter((country) => country.length <= 6);
console.log(filteredCountries);