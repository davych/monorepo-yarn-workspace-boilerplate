import mongoose from 'mongoose'
mongoose.connect('mongodb://davy:123456@localhost:27017/project2', {
  useNewUrlParser: true
})

var db = mongoose.connection

export { db }
