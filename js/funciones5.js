/*
Una progresión geométrica empieza con un número al que se le va
multiplicando otro, por ejemplo: Si empezamos por el 2 y la razón (el
número que se multiplica) es 3 la serie sería: 2,6,18,54

geometrica(inicial,razon,numero)

*/

function geometrica (inicial, razon, numero) {
  let resultado = inicial
  for (let i = 1; i < numero; i++) {
    resultado *= razon
  }
  return resultado
}

console.log(geometrica(1, 2, 10))

/*
- Escribir una función que nos muestre lo siguiente:

1
22
333
4444
55555

arbolNumerico(5)
*/

function repetirNumero (numero) {
  let resultado = ''
  for (let i = 1; i <= numero; i++) {
    resultado += numero
  }
  return resultado
}

function arbolNumerico (numero) {
  let resultado = ''
  for (let i = 1; i <= numero; i++) {
    resultado += repetirNumero(i) + '\r\n'
  }
  return resultado
}

let arbol = arbolNumerico(5)
console.log(arbol)

/*

En un parque de atracciones los niños pueden subir si:
1.- Son mayores de 12 años
O
2.- Miden más de 130 cm

en caso contrario no pueden pasar

admision(edad,altura)--> true si pueden pasar, false si no pueden pasar
*/

function admision (edad, altura) {
  if (edad > 12 || altura > 130) {
    return true
  } else {
    return false
  }
}

function admisionNinja (edad, altura) {
  return edad > 12 || altura > 130
}
/*
let edad = Number(prompt('Edad del niño'))
let altura = Number(prompt('Altura del niño'))
if (admisionNinja(edad, altura)) {
  console.log('Padentro con el niño')
} else {
  console.log('El niño no puede pasar')
}
*/
/*

Función factorial
Factorial de un número es la multiplicación de todos los números
Hasta ese número
factorial(5)-->1*2*3*4*5

*/

function factorial (numero) {
  let resultado = 1

  for (let i = 1; i <= numero; i++) {
    resultado *= i
  }

  return resultado
}

let fac5 = factorial(5)
console.log(fac5)
