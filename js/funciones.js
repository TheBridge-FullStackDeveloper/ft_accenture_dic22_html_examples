function saludo (nombre) {
  console.log('Hola ' + nombre + ' que tal estás')
  console.log('Yo estoy mu bien')
  console.log('Vamos a casa')
}

saludo('Ana')
saludo('Eva')
saludo('Juan')

function tablaMultiplicar (numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
  }
}

tablaMultiplicar(7)
tablaMultiplicar(5)
tablaMultiplicar(9)

function tablaMultiplicarOk (numero) {
  let cad = ''
  for (let i = 1; i <= 10; i++) {
    cad += `${numero} x ${i} = ${numero * i}\r\n`
  }
  return cad
}
let tabla7 = tablaMultiplicarOk(7)
console.log(tabla7)
function sumar (a, b) {
  let suma = a + b
  return suma
}
let res = sumar(2, 3)
console.log(res)
res = sumar(12, 37)
console.log(res)
res = sumar(1212, 237)
console.log(res)

// Una función agrupa un trozo de código reutilizable
// La declaramos con la palabra clave function
// Admite parámetros que nos permiten variar lo que hace la función
// Puede devolver un resultado
// Si interacciona con el entorno->Impura
// Si no interacciona->pura (es decir, lo que hay que hacer)
