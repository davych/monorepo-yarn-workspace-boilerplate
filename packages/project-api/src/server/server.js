import path from 'path'
import Glue from '@hapi/glue'
import manifest from './manifest'

const basedir = path.join(__dirname, '..')

export const compose = async () => {
  return Glue.compose(
    manifest,
    { relativeTo: basedir }
  )
}
