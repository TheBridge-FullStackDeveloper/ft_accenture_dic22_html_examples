// Bucle for
// Sabemos el numero de iteracciones que vamos a ejecutar
/*
for(inicializacion;condicion;modificacion){

}
*/

//Canónico
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

for (let i = 10; i >= 0; i--) {
  console.log(i)
}

for (let i = 1; i <= 10; i += 2) {
  console.log(i)
}

let salir = false
for (let i = 1; i <= 10 && !salir; i++) {
  console.log(i)
  if (i == 6) {
    salir = true
  }
}

let cont = 0
for (; cont < 10; cont++) {
  console.log(cont)
}

cont = 0
for (; cont < 10; ) {
  console.log(cont)
  cont++
}

cont = 0
for (;;) {
  console.log(cont)
  cont++
  if (cont == 10) {
    break //Nos sale de cualquier bucle, no recomiendo usarlo
  }
}

/*
let inicial = 1
let razon = 5
let serie = inicial * razon
while (serie < 10000) {
  console.log(serie)
  serie *= razon
}
*/

let inicial = 1
let razon = 5
for (let serie = inicial * razon; serie < 10000; serie *= razon) {
  console.log(serie)
}
