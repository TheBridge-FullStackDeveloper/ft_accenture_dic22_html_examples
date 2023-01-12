function mayor (a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

console.log(mayor(190, 90))
let total = mayor(1, 10) + mayor(10, 20)
console.log(total)

function mayor3 (a, b, c) {
  if (a > b && a > c) {
    return a
  }
  if (b > c) {
    return b
  } else {
    return c
  }
}

console.log(mayor3(1, 10, 2))
console.log(mayor3(100, 10, 2))
console.log(mayor3(1, 10, 222))

function esPrimo (numero) {
  for (i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false
    }
  }
  return true
}

for (let i = 1; i <= 20; i++) {
  if (esPrimo(i)) {
    console.log(i)
  }
}

// Parámetros con valor por defecto.
// Si no nos pasan valor coge el que le pongamos aquí
function tabla (numero = 1) {
  let resultado = ''
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\r\n`
  }
  return resultado
}

let t = tabla(8)
console.log(t)
alert(t)
console.log(tabla())
