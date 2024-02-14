// Bucle for
console.log("Bucle for:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Bucle while
console.log("\nBucle while:");
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Bucle do-while
console.log("\nBucle do-while:");
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// Bucle for-in (iterando sobre las propiedades de un objeto)
console.log("\nBucle for-in:");
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};
for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

// Bucle for-of (iterando sobre elementos de un arreglo)
console.log("\nBucle for-of:");
const numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}
