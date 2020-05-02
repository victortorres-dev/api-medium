const User = require('../models/users')

function create (userObjectData) {
  return User.create(userObjectData)
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

module.exports = {
  create,
  getAll,
  updateById,
  deleteById
}
