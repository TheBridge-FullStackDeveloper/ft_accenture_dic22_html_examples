// DIVIDE Y VENCERÁS

// Pedir un nombre
// Guardarlo en una variable
// Si es "Ana" correcto y si no incorrecto

let nombreUsuario = prompt('Introduzca el nombre')
console.log(nombreUsuario)

if (nombreUsuario === 'Ana') {
  console.log('Nombre correcto')
} else {
  console.log('Nombre incorrecto')
}

// Pedir un precio
// Guardarlo en una variable
// COnvertirlo a número
// Calcular el IVA
// SI el iva >100 mostrar un mensaje

let precio = prompt('Introduce un precio')
console.log(precio)
precio = Number(precio)
console.log(precio)
let iva = precio * 0.21
console.log(iva)
if (iva > 100) {
  console.log('El pago se puede fraccionar')
}
