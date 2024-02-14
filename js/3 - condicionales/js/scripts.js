
// Declaración de variables
let edad = 20;
let esMayorDeEdad = false;

// Condicionales
// If-else statement
if (edad >= 18) {
  esMayorDeEdad = true;
  console.log("La persona es mayor de edad.");
} else {
  console.log("La persona es menor de edad.");
}

// Operador ternario
const mensaje = esMayorDeEdad ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje);

// Switch statement
const diaDeLaSemana = "Lunes";
switch (diaDeLaSemana) {
  case "Lunes":
    console.log("Hoy es lunes.");
    break;
  case "Martes":
    console.log("Hoy es martes.");
    break;
  default:
    console.log("No es lunes ni martes.");
}

// Condicionales anidados
let temperatura = 25;
if (temperatura > 30) {
  console.log("Hace mucho calor.");
} else if (temperatura >= 20 && temperatura <= 30) {
  console.log("La temperatura es agradable.");
} else {
  console.log("Hace frío.");
}
