// >, <, >=, <= , ==, !=, ===, !==

let a = 5
let b = '5'

console.log(a == b) //true
console.log(a === b) //false  Opción recomendada

console.log(a != b) //false
console.log(a !== b) //true   Opción recomendada

let c = a + Number(b) //Para convertir es la opción recomendada

console.log(c)

let nombreUsuario = prompt('INtroduce nombre')
if (nombreUsuario == 'Ana') {
  console.log('correcto')
}
