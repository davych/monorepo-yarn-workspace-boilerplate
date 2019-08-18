import { compose } from './server'
;(async () => {
  try {
    const server = await compose()
    await server.start()
  } catch (err) {
    process.exit(1)
  }
})()
