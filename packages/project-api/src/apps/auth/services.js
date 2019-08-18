import { signature, settings } from '@project/core'

export const login = async credentials => {
  try {
    const { username, password } = credentials
    if (username === 'davy' && password === '123') {
      const signedToken = await signature.sign(
        settings.secret,
        { id: 'davy123' },
        settings.security.session.timeout
      )
      return { username: 'davy', token: signedToken }
    }
  } catch (err) {
    console.log(err)
  }
}
