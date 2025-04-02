//variables y tipos de datos
//Declara una variable nombrecon tu nombre y otra edad con tu edad. Luego, muestra en consolación:

let nombre = "Abraham Lupa"
let edad = 22;  
document.write("Hola, mi nombre es " + nombre + " y tengo " + edad + " años.");
document.write("<br>");
//Operadores
//Calcula el área de un rectángulo (base = 5, altura = 3) y muestra el resultado.

let base = 12;
let altura = 7;  
let Area = base * altura;  
document.write("El área del rectángulo es: " + Area);
document.write("<br>");

//Condicionales
//Crea una condición que verifique si un número es par o impar.

let numero = 154; 
if (numero % 2 === 0) {

    document.write(numero + " es un número par.");

} else {

    document.write(numero + " es un número impar.");
}
document.write("<br>");

//Bucles
//Usa un bucle for para imprimir los números del 1 al 5.

for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        document.write(" el número " + i);

    } else {

        document.write(" el número " + i);
    }
}
document.write("<br>");

//Funciones
// Crea una función sumar que reciba dos números y devuelva su suma.

function sumar(numero1, numero2) {
    return numero1 + numero2;
}
document.write(sumar(15, 25)); 
document.write("<br>");

//Matrices
//Dado el array let frutas = ["manzana", "banana", "pera"];, agrega "uva" al final y muestra el array.

let frutas = ["manzana", "banana", "pera"];
frutas.push("uva");
document.write(frutas);
document.write("<br>");

//Objetos
//Crea un objeto usuario con las propiedades nombre(string) y edad(number), posteriormente 
//muestra la llave y el valor de ese objeto con el bucle correcto, usar el bucle incorrecto 
//anulara la pregunta

let usuario = {
    nombre: "Lupa ",
    edad:22
};
for (let llave in usuario) {
    document.write(String(llave) + ": " + String(usuario[llave]));
}document.write("<br>");

//Métodos de matrices
//Dado let numeros = [1, 2, 3, 4];, usa un método para obtener un nuevo array con cada número multiplicado por 2.
//Pista: para hacer esta pregunta te recomiendo que investigues sobre los métodos de los arrays, algunos de sus 
//métodos seria map, filter, find. Averigua cual seria la función correcta de Arrays para poder completar este ejercicio.

let numeros = [1, 2, 3, 4];
let multiplicar = numeros.map(function(num) {
    return num * 2;  
});
document.write(multiplicar);
document.write("<br>");

//Funciones Flecha
//Convierte esta función en una función flecha 
//function restar(a, b) {
  //  return a - b;
  // }
  const restar = (a, b) => a - b;
  document.write(restar);
  document.write("<br>");

  //Ejercicio Integrador
  //Crea una función filtrarPares que reciba una matriz de números y devuelva solo los pares.
//Pista: puedes lograrlo con una sola lineade Código
//Ejemplo:
//filtrarPares([1, 2, 3, 4]); // [2, 4]

const filtrarPares = matriz => matriz.filter(numero => numero % 2 === 0);
const num = [1, 2, 3, 4, 5, 6, 7, 8];
document.write(filtrarPares(num));