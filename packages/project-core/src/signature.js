import jwt from 'jsonwebtoken'
import Boom from '@hapi/boom'
import logger from './logger'

/**
 * Encrypt given payload to string based token value with options.
 * ----------------------------------------------------------------------
 * @param {String|Buffer} secret is a string, buffer or object containing either
 *  the secret for HMAC algorithms or the PEM encoded private key for RSA and ECDSA.
 * @param {String|Object|Buffer} payload - value can be an object literal,
 *  buffer or string representing valid JSON. Please *NOTE* that `exp` or
 *  any other claim is only set if the payload is an object literal. Buffer
 *  or string payloads are not check for JSON validity.
 */
export const sign = (secret, payload, expiresIn = '1d') => {
  try {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, secret, { expiresIn }, (err, token) => {
        err ? reject(Boom.boomify(err, { statusCode: 400 })) : resolve(token)
      })
    })
  } catch (err) {
    logger.warn(`[signature] failed to sign the given payload: ${err.message}`)
    throw Boom.badRequest(err.message)
  }
}

/**
 * Decrypt to original values from the given payload using secret.
 * ----------------------------------------------------------------------
 * @param {String|Buffer} secret is a string, buffer or object containing either
 *  the secret for HMAC algorithms or the PEM encoded private key for RSA and ECDSA.
 * @param {String} payload - String token values to be decrypted.
 */
export const verify = (secret, payload) => {
  try {
    return new Promise((resolve, reject) => {
      jwt.verify(payload, secret, (err, decoded) => {
        err ? reject(Boom.boomify(err, { statusCode: 400 })) : resolve(decoded)
      })
    })
  } catch (err) {
    logger.warn(
      `[signature] failed to verify the given payload: ${err.message}`
    )
    throw Boom.badRequest(err.message)
  }
}
