// for the project database prepared a connecting user
db.createUser({
  user: 'davy',
  pwd: '123456',
  roles: [{ role: 'readWrite', db: 'project2' }]
})
