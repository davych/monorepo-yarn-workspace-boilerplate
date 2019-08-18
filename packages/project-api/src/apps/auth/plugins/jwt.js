import jwt2 from 'hapi-auth-jwt2'
import { settings } from '@project/core'

export const plugin = {
  name: 'jwt',

  async register (server) {
    await server.register(jwt2)

    server.auth.strategy('jwt', 'jwt', {
      key: settings.secret,
      verifyOptions: { algorithems: ['HS256'] },
      validate: async ({ id }) => {
        return { isValid: id === 'davy123' }
      }
    })

    server.auth.default('jwt')
  }
}
