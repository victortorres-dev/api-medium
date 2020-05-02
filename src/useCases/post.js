const Post = require('../models/posts')

function create (postOjectData) {
  return Post.create(postOjectData)
}

function getAll () {
  return Post.find()
}

function updateById (id, newPostOjectData) {
  return Post.findByIdAndUpdate(id, newPostOjectData)
}

function deleteById (id) {
  return Post.findByIdAndRemove(id)
}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById
}
