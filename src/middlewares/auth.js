// Restringiendo permisos mediante middleware
const jwt = require('../lib/jwt')

function authentication (request, response, next) {
  // Verificar que esta logeado en cualquier ruta en el header-authorization
  const { authorization: token } = request.headers
  try {
    jwt.verify(token)
    // Dado que es un middleware y no un punto final le indicamos que continue con el flujo:
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Unauthorized'
    })
  }
}

module.exports = authentication
