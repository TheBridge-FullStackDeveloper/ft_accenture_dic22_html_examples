// Una función a la que le pasemos un número
// Y nos diga sus divisores
// Por ejemplo, le paso 12
// y me tiene que devolver 1,2,3,4,6,12

function divisores (numero) {
  // Mirar todos los números entre 1 y el número incluidos for
  // Mirar si esos números dividen al número o no %==0
  // Sí que dividen ir guardándolos en algçun sitio concatenar en una cadena
  let resultado = ''
  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      resultado += i + ', '
    }
  }
  return resultado.slice(0, -2)
}
console.log(divisores(7))
console.log(divisores(12))
