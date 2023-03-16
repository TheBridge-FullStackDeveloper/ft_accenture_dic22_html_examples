// Capturo el elemento botón añadir
let addButton = document.getElementById('add')
let updateButton = document.getElementById('update')
let deleteButton = document.getElementById('delete')

// Le añado un evento
addButton.addEventListener('click', addAula)
updateButton.addEventListener('click', updateAula)
deleteButton.addEventListener('click', deleteAula)

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

function updateAula () {
  let id = document.getElementById('id').value
  let nombre = document.getElementById('nombre').value
  let capacidad = document.getElementById('capacidad').value
  let datos = { nombre: nombre, capacidad: capacidad }
  service.update(id, datos).then(result => {
    if (result.error) {
      console.log('Error modificando')
    } else {
      console.log('aula modificada correctamente')
    }
  })
}
function updateAula () {
  console.log('Hay que eliminar el aula')
  let id = document.getElementById('id').value
  service.remove(id).then(result => {
    if (result.error) {
      console.log('Error eliminando')
    } else {
      console.log('aula eliminada correctamente')
    }
  })
}

service.getAll().then(data => {
  console.log(data.Data)
  let datos_convertidos = JSON.parse(data.Data)
  console.log(datos_convertidos)
  // Voy a rellenar la tabla con los datos que me envían
  let tabla = document.getElementById('paises')
  tabla.innerHTML = ''
  for (let pais of datos_convertidos) {
    // pais.country_id pais.country
    let fila = tabla.insertRow(-1)
    let celda_id = fila.insertCell(-1)
    celda_id.innerHTML = pais.country_id
    let celda_country = fila.insertCell(-1)
    celda_country.innerHTML = pais.country
  }
})
