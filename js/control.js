//Estructuras de control

// if

alert('Mensaje de la web')
let edad = 20

console.log(typeof edad)
let esMayor = edad >= 18
console.log(typeof esMayor)

// if (condicion a evaluar)  {codigo a ejecutar si se cumple la condicion}
if (esMayor) {
  console.log('Puedes entrar a la web')
  console.log('Disfruta del contenido')
}

// if (condicion a evaluar)  {codigo a ejecutar si se cumple la condicion}
// else {codigo a ejecutar si no se cumple}
if (esMayor) {
  console.log('Puedes entrar a la web')
  console.log('Disfruta del contenido')
} else {
  console.log('NO PUEDES ENTRAR')
  console.log('Eres menor de edad')
}

if (edad) {
  console.log('cualquier número que no sea cero es true')
}

if (confirm('¿Quieres entrar?')) {
  console.log('Vamos palante')
} else {
  console.log('Que te vaya bien')
}

let respuesta = prompt('Introduce una cadena')

console.log(respuesta)
