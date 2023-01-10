// Tenemos tres operadores lógicos: && (AND) || (OR) y ! (NOT)

// && AND Se tienen que cumplir las dos condiciones que une

let precio = 80

if (precio > 50 && precio < 100) {
  console.log('Lo que sea')
}

let user = 'Ana'
let pass = '1234'

if (user === 'Ana' && pass === '1234') {
  console.log('Acceso permitido')
}

// || (OR) Con que se umpla una de las condiciones vale

precio = 180

if (precio < 30 || precio > 100) {
  console.log('Muy barato o muy caro')
}

if (user === 'Ana' || user === 'Juan') {
  console.log('Administradores')
}

// ! (NOT) Lo contrario de la condición, si es true pasa a false y si el false pasa a true

if (!(precio > 100)) {
  console.log('NO es mayor que 100')
}

if (precio > 100 || (user === 'Ana' && pass === '1234')) {
  console.log('precio correcto')
}
