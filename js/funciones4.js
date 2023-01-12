// Una función a la que le pasemos un número y nos haga un arbolito así:
/*
arbolito(4)
*
**
***
****

*/

function arbolito (numero = 5, bola = '*') {
  let resultado = ''

  let bolas = bola
  // Voy a  hacer tantas líneas como número me hayan pasado
  // Y en cada línea le añado una bola a 'bolas'
  for (let i = 0; i < numero; i++) {
    resultado += bolas + '\r\n'
    bolas += bola
  }

  return resultado
}

console.log(arbolito())
console.log(arbolito(4))
console.log(arbolito(4, '@'))
