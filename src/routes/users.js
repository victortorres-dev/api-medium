const express = require('express')

const users = require('../useCases/users')

const router = express.Router()

// Create a post
router.post('/', async (request, response) => {
  try {
    const createdUser = await users.signUp(request.body)
    response.json({
      success: true,
      message: 'The next user was created',
      data: {
        newUser: createdUser
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

// List all posts
router.get('/', async (request, response) => {
  try {
    const allUsers = await users.getAll()
    response.json({
      success: true,
      message: 'Showing all users from Medium',
      data: {
        users: allUsers
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

// Update post by id
router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const dataToUpdate = request.body
    const userUpdated = await users.updateById(id, dataToUpdate)
    response.json({
      success: true,
      message: 'The next post was updated',
      data: {
        post: userUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

// Delete post by id
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const userDeleted = await users.deleteById(id)
    response.json({
      success: true,
      message: 'The next user was deleted',
      data: {
        user: userDeleted
      }
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
