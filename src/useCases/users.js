const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')
const User = require('../models/users')

// implementación de signUp -> verificacion de cuenta existente y encriptación de passaword en bd
async function signUp (userObjectData) {
  // comprobar existencia de email
  const { email, password } = userObjectData
  const userExists = await User.findOne({ email })
  if (userExists) throw new Error('email alredy exists')
  // validación de password
  if (password.lenght < 6) throw new Error('The password must be 6 characteres')
  // DEspues de los filtros anteriores, ahora debe haceerse el hash del password (hash que toma cierto tiempo -> await)
  const hash = await bcrypt.hash(password, 10)
  // retornar la data del body y la contraseña encriptada
  return User.create({ ...userObjectData, password: hash }) // retorna una promesa
}

function getAll () {
  return User.find()
}

function updateById (id, newUserObjectData) {
  return User.findByIdAndUpdate(id, newUserObjectData)
}

function deleteById (id) {
  return User.findByIdAndRemove(id)
}

// Para que un usuario acceda a *funcionalidades de la api, deben comproarse sus credenciales
async function login (email, password) {
  // Comprobando existencia del user a logear
  const userExists = await User.findOne({ email })
  // Siguiendo el flujo...
  // Si el email no existe generar error y termina el proceso
  if (!userExists) throw new Error('Error in credentials')
  // Comproar el password
  const isPasswordCorrect = await bcrypt.compare(password, userExists.password)
  if (!isPasswordCorrect) throw new Error('Error in credentials')
  // Completados los filtros de crdencial, ahora se retorna el token
  return jwt.sign({ id: userExists._id })
}

module.exports = {
  signUp,
  getAll,
  updateById,
  deleteById,
  login
}
