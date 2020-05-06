// Crear post para realizar login mediante email y password
const express = require('express')
const users = require('../useCases/users')

const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    // Generar el token con las credenciales válidas
    const token = await users.login(email, password)
    response.json({
      messaje: 'There are the credentials',
      email: email,
      pass: password,
      token: token
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
