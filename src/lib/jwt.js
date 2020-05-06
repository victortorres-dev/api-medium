const jwt = require('jsonwebtoken')

const _SECRET = 'holamundoSecreto2019'

// Generar token
function sign (payload = {}) {
  return jwt.sign(payload, _SECRET)
}

// Verificar el token
function verify (token = '') {
  return jwt.verify(token, _SECRET)
}

module.exports = {
  ...jwt,
  sign,
  verify
}
