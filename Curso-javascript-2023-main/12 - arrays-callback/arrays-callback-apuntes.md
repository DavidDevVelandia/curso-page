# Arrays métodos de callback

## ¿Qué es un callback?

Es una función que se pasa como argumento a otra función y se llama en un momento posterior o en respuesta a un evento específico.

```javascript
const add = (a, b, callback) => {
  const result = a + b;
  callback(result);
};

const printResult = result => {
  console.log('The result is:', result);
};

const saveResult = result => {
  // Esta función guarda el dato en una base de datos
  console.log('The result is saved');
};

add(5, 3, printResult);
add(5, 3, saveResult);
```
