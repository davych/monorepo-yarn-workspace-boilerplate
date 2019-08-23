import mongoose from 'mongoose'
const Schema = mongoose.Schema
const name = 'account'
const model = mongoose.model(
  name,
  new Schema({
    name: String,
    role: String,
    createAt: { type: Date, default: Date.now }
  })
)
export default model
