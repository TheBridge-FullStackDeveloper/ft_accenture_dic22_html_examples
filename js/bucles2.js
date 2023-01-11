// do...while es igual que el while

let contador = 0
do {
  contador++
  console.log(contador)
} while (contador < 10)

let suma = 0
let numero
do {
  numero = prompt('Introduce numero (cero para salir)')
  suma += Number(numero)
} while (numero != '0')
console.log('La suma es ' + suma)
