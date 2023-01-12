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
