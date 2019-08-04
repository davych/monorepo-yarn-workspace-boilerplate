import path from 'path'
import { Record } from 'immutable'
import { Store } from 'confidence'

const { env } = process

const internals = {
  criteria: {
    mode: env.NODE_ENV,
    deployment: env.DEPLOYMENT
  }
}

internals.settings = {
  $meta: 'application settings file',
  debug: [undefined, 'development', 'test'].includes(process.env.NODE_ENV),
  app: 'project Platform',
  basedir: path.join(__dirname, '..'),
  prefix: '/api/v2',
  host: '0.0.0.0',
  port: {
    $filter: 'mode',
    production: env.PORT,
    $default: 5000
  },
  cors: {
    origin: ['*'],
    maxAge: 600,
    credentials: true,
    headers: [
      'Accept',
      'Authorization',
      'Content-Type',
      'If-None-Match',
      'x-mfa-token',
      'X-CSRF-Token'
    ]
  }
}

internals.store = new Store(internals.settings)

export default Record(internals.store.get('/', internals.criteria))()
