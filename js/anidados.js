for (let i = 0; i < 10; i++) {
  let cad = ''
  for (let j = 0; j < 10; j++) {
    cad += j
  }
  console.log(cad)
  console.log('-')
}

for (let numero = 2; numero < 20; numero++) {
  let primo = true
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      // que i es múltiplo de numero, luego no es primo
      primo = false
    }
  }
  if (primo) {
    console.log(numero + ' es primo')
  } else {
    console.log(numero + ' NO es primo')
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    for (let j = 0; j < i; j++) {
      console.log(j)
    }
  }
}
