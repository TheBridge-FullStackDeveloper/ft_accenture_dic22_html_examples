/*
1.- Vamos a pedir al usuario un número y 
vamos a escribir todos los números desde 
el 1 hasta ese número
*/

// Pedirle un número al usuario
let numero = prompt('Dame un número')
numero = Number(numero)
console.log(numero)
// Imprimir por consola todos los números desde el 1 hasta X
let contador = 0
while (contador < numero) {
  contador++
  console.log(contador)
}
/*
2.- Vamos a hacer un programa que nos devuelva
 todos los múltiplos de 7 entre 1 y 100
*/

// Recorrer todos los números entre 1 100
contador = 1
while (contador <= 100) {
  contador++

  // Saber si un número es múltiplo de 7
  if (contador % 7 == 0) {
    console.log(contador)
  }
}
/*
1.- Pedir al usuario un número y 
mostrar la tabla de multiplicar de ese número
*/

//Pedir un número al usuario
numero = prompt('Dame un número')
numero = Number(numero)
//mostrar la tabla

for (let i = 1; i <= 10; i++) {
  console.log(numero + ' x ' + i + ' = ' + numero * i)
}

/*
2.- Pedir al usuario un número 
y mostrar la suma de todos los números hasta él.
 (ej, si pone el 5: 1+2+3+4+5)
*/

//Pedir un número al usuario
// Recorrer todos los números desde el 1 hasta ese número
// Hacer la suma

numero = prompt('Dame un número')
numero = Number(numero)
let suma = 0
for (let i = 1; i <= numero; i++) {
  suma += i
}
console.log(suma)

// Pedir un número y saber si es primo

//Pedir número
numero = prompt('Dame un número')
numero = Number(numero)

//Algoritmo: como vamos a resolver un problema
// Equivalente a una receta de cocina

// Voy a coger el número, lo voy a dividir entre todos los números entre 2 y el
// número (no incluído) y si en alguno es múltiplo no es primo

let primo = true
for (let i = 2; i < numero; i++) {
  if (numero % i == 0) {
    // que i es múltiplo de numero, luego no es primo
    primo = false
  }
}
if (primo) {
  console.log(numero + ' es primo')
} else {
  console.log(numero + ' NO es primo')
}
