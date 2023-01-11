// do...while es igual que el while

let contador = 0
do {
  contador++
  console.log(contador)
} while (contador < 10)

let suma = 0
let numero
//scope o ámbito de las variables: una variable solo es visible dentro
// del bloque en el que ha sido creada
do {
  numero = prompt('Introduce numero (cero para salir)')
  suma += Number(numero)
} while (numero != '0')
console.log('La suma es ' + suma)
