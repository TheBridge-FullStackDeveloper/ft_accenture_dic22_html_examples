// Bucle: ejecutar ciertas instrucciones repetidas veces

// while: Mientras se cumpla una condición

let contador = 0

console.log('Inicio de bucle')
while (contador < 10) {
  contador++
  console.log(contador)
}
console.log('Fin de bucle')

let numero = 65536
while (numero > 1) {
  console.log(numero)
  numero /= 2
}

let tabla = prompt('Introduce un número')
tabla = Number(tabla)
contador = 1
while (contador <= 10) {
  console.log(`${tabla} x ${contador} = ${tabla * contador}`)
  contador++
}

let inicial = 1
let razon = 5
let serie = inicial * razon
while (serie < 10000) {
  console.log(serie)
  serie *= razon
}

contador = 0
while (contador < 20) {
  if (contador % 2 == 1) {
    console.log(contador)
  }
  contador++
}

contador = 0
let suma = 0
while (contador < 20) {
  if (contador % 2 == 1) {
    suma += contador
  }
  contador++
}
console.log(suma)
