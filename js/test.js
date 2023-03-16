let data = await service.getAll()
console.log(data)
for (let name in data[0]) {
  console.log(name)
}
