// Función que devuelve una promesa
function sumar(a, b) {
    return new Promise((resolve, reject) => {
      // Se define una nueva promesa con una función de callback que toma dos argumentos: resolve y reject
      // resolve se utiliza para indicar que la promesa se ha cumplido exitosamente y pasar un valor como resultado
      // reject se utiliza para indicar que la promesa ha sido rechazada, pasando un motivo de rechazo
  
      // Simular un tiempo de espera con setTimeout
      setTimeout(() => {
        // Dentro del setTimeout, se comprueba si ambos argumentos son números
        if (typeof a !== 'number' || typeof b !== 'number') {
          // Si alguno de los argumentos no es un número, se rechaza la promesa con un mensaje de error
          reject('Ambos argumentos deben ser números');
        } else {
          // Si ambos argumentos son números, se resuelve la promesa con la suma de los dos números
          resolve(a + b);
        }
      }, 1000); // Espera 1 segundo antes de resolver la promesa
    });
  }
  
  // Uso de la promesa
  console.log("Iniciando la suma...");
  sumar(5, 3)
    .then(resultado => {
      // Se encadena el método then() para manejar el caso en que la promesa se resuelva correctamente
      console.log("La suma es:", resultado);
    })
    .catch(error => {
      // Se encadena el método catch() para manejar el caso en que la promesa sea rechazada
      console.error("Error:", error);
    });
  