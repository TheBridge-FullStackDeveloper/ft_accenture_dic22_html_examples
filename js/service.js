const service = {
  url_base: 'http://localhost:8080/ApiBD/country',

  getAll: async function () {
    return await fetch(this.url_base)
      .then(response => response.json())
      .then(data => data)
  },
  getById: async function (id) {
    return fetch(this.url_base + '/' + id)
      .then(response => response.json())
      .then(data => data)
  },
  add: async function (data) {
    return fetch(this.url_base, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => data)
  },
  update: async function (id, data) {
    return fetch(this.url_base + '/' + id, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => data)
  },
  remove: async function (id) {
    return fetch(this.url_base + '/' + id, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => data)
  }
}
service.getById(1).then(data => console.log(data))
