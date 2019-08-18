import pino from 'pino'
import settings from './settings'

export default pino({
  name: process.env.npm_package_name,
  level: settings.loglevel,
  prettyPrint: {
    colorize: settings.debug,
    levelFirst: false,
    translateTime: true,
    ignore: 'pid,hostname'
  }
})
