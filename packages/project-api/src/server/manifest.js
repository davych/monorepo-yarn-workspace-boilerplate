import { settings } from '@project/core'

export default {
  server: {
    host: settings.host,
    port: settings.port,
    router: {
      isCaseSensitive: false,
      stripTrailingSlash: true
    },
    routes: {
      cors: settings.cors,
      security: {
        hsts: true,
        xss: true,
        noOpen: true,
        noSniff: true,
        xframe: true
      }
    }
  },
  register: {
    plugins: [
      {
        plugin: './apps/hello',
        routes: { prefix: settings.prefix }
      }
    ]
  }
}
