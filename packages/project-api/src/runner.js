import { compose } from './server'
;(async () => {
  try {
    const server = await compose()
    await server.start()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
