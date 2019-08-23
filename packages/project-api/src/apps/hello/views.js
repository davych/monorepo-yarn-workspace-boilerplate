import * as services from './services'
import * as validators from './validators'

export const plugin = {
  name: 'hello',

  async register (server) {
    server.route([
      {
        method: 'GET',
        path: '/hello/{name}',
        options: {
          tags: ['api'],
          notes: 'hello {name}',
          validate: validators.get,
          plugins: {}
        },
        handler: async (request, h) => {
          const { name } = request.params
          const response = h.response(await services.getWelcome(name))
          return response
        }
      }
    ])
  }
}
