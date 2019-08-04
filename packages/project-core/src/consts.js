import path from 'path'
import { Record } from 'immutable'

/**
 * Create dot-notation immutable value object via immutable Record template.
 * @apiParam {Object} values - values to be locked via immutable system.
 */
export const create = (values = {}) => new Record(values)(values)

/**
 * Traverse  and update the Object literal with updated full path values (dot-notation).
 * @apiParam {String} ns - dot-notation based namespace starts with application folder name.
 * @apiParam {Object} values - Object literal.
 */
const traverse = (ns, values = {}) => {
  Object.entries(values).forEach(([k, v]) => {
    if (v && typeof v === 'object') {
      traverse(`${ns}.${k}`, v)
    } else {
      // eslint-disable-next-line security/detect-object-injection
      values[k] = v ? `${ns}.${k}.${v}` : `${ns}.${k}`
    }
  })
  return values
}

/**
 * Create dot-notation immutable value object via immutable Record template
 * under the auto-detected namespace (folder name by default). Additionally,
 * values in the constructed object will be automatically populated in
 * `${NS}.${key}.${value}` format.
 * @apiParam {Object} values
 */
export const createKeyMirror = (values = {}, namespace = null) => {
  const caller = () => path.dirname(__filename)
  return create(traverse(namespace || path.basename(caller()), values))
}
