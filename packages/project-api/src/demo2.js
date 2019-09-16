import { Store } from 'confidence'

const { env } = process
console.log(env.mode)
const criteria = {
  mode: env.mode
}
const config = {
  port: {
    $filter: 'mode',
    production: 1000,
    uat: 2000,
    dev: 3000,
    $default: 5000
  }
}

const result = new Store(config)

console.log(result.get('/', criteria))

export default result.get('/', criteria)
