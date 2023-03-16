// Capturo el elemento botón añadir
let addButton = document.getElementById('add')

// Le añado un evento
addButton.addEventListener('click', addAula)

// Tendré que hacer lo necesario para añadir el aula
function addAula () {
  console.log('Hay que añadir el aula')
  let nombre = document.getElementById('nombre').value
  let capacidad = document.getElementById('capacidad').value

  console.log(nombre)
  console.log(capacidad)
  let datos = { nombre: nombre, capacidad: capacidad }
  service.add(datos).then(result => {
    if (result.error) {
      console.log('Error añadiendo')
    } else {
      console.log('aula añadida correctamente')
    }
  })
}

service.getAll().then(data => {
  // Voy a rellenar la tabla con los datos que me envían
  let tabla = document.getElementById('paises')
  tabla.innerHTML = ''
  for (let pais of data) {
    // pais.country_id pais.country
    let fila = tabla.insertRow(-1)
    let celda_id = fila.insertCell(-1)
    celda_id.innerHTML = pais.country_id
    let celda_country = fila.insertCell(-1)
    celda_country.innerHTML = pais.country
  }
})
