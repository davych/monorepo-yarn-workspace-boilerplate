import { Seeder } from 'mongoose-data-seed'
import { account } from '../src/schema'

const data = [
  {
    name: '伟哥',
    role: 'admin'
  }
]

class AccountSeeder extends Seeder {
  async shouldRun () {
    return account
      .countDocuments()
      .exec()
      .then(count => count === 0)
  }

  async run () {
    return account.create(data)
  }
}

export default AccountSeeder
