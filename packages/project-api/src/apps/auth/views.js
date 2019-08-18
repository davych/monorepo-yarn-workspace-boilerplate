import * as services from './services'
import * as validators from './validators'

export const plugin = {
  name: 'login',

  async register (server) {
    server.route([
      {
        method: 'POST',
        path: '/login',
        options: {
          tags: ['api'],
          notes: 'login',
          auth: false,
          validate: {
            payload: validators.login
          },
          plugins: {}
        },
        handler: async (request, h) => {
          const { payload } = request
          const { username, token } = await services.login(payload)
          return h
            .response({
              username,
              token
            })
            .header('Authorization', token)
            .header('Set-Cookie', `token=${token}`)
        }
      }
    ])
  }
}
