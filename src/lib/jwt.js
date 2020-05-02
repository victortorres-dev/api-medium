const jwt = require('jsonwebtoken')

const secret = 'mysecretword'

// Creando el JWT con sign
function sign (payload = {}) {
  return jwt.sign(payload, secret)
}

// decodificar el token y el secreto
function verify (token = '') {
  return jwt.verify(token, secret)
} 

module.exports = {
  ...jwt,
  sign,
  verify
}
