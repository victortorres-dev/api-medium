const express = require('express')

const router = express.Router()

const posts = require('../useCases/post')

const authMiddleware = require('../middlewares/auth')

// Aplicamos(según el caso) el middleware para autorizzación especificamente a las rutas del post
router.use(authMiddleware)

// Create a post
router.post('/', async (request, response) => {
  try {
    const createdPost = await posts.create(request.body)
    response.json({
      success: true,
      message: 'The next post was created',
      data: {
        newPost: createdPost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: Object.entries(error)[0]
    })
  }
})

// List all posts
router.get('/', async (request, response) => {
  try {
    const allPosts = await posts.getAll()
    response.json({
      success: true,
      message: 'Showing all posts from Medium',
      data: {
        posts: allPosts
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
    const postUpdated = await posts.updateById(id, dataToUpdate)
    response.json({
      success: true,
      message: 'The next post was updated',
      data: {
        post: postUpdated
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
    const postDeleted = await posts.deleteById(id)
    response.json({
      message: 'The next post was deleted',
      data: {
        post: postDeleted
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
