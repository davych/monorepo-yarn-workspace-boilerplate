// ------------------------------------------------------------
//  Secure Cookie Settings
// ------------------------------------------------------------
export default {
  name: 'sid',
  storeBlank: false,
  cookieOptions: {
    password: {
      $filter: 'mode',
      production: process.env.SECRET,
      $default:
        'LbIR1yEyh_qzvWqeUF8RWOxRwE0oM87Kv3e2sbR6Xs1Cm1hvIHUfeHpJWvgsmEPLptPjQ0_bU6lZnY0l'
    },
    path: '/',
    isSameSite: 'Lax',
    isSecure: {
      $filter: 'mode',
      production: true,
      $default: false
    },
    isHttpOnly: {
      $filter: 'mode',
      production: true,
      $default: false
    },
    ttl: null
  }
}
