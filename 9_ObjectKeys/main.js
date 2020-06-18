const array = ['a', 'b', 'c'];

const object = {
  M7GVSyg7boVogEBnRa: {
    title: "Hacer el desayuno",
    done: true
  },
};

const resultado = array.map((elemento) => elemento + 'x');
console.log(resultado);

const keysObject = Object.keys(object);
console.log(keysObject);

console.log(object["M7GVSyg7boVogEBnRa"]);

const lastArray = keysObject.map((id) => object[id]);
console.log(lastArray);

