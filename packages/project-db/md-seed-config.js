import mongoose from 'mongoose'
import AccountSeeder from './seeders/account.seeder'
const mongoURL =
  process.env.MONGO_URL || 'mongodb://davy:123456@localhost:27017/project2'
/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
  AccountSeeder
}
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () => {
  const db = await mongoose.connect(mongoURL, { useNewUrlParser: true })
  return db
}
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase()
