const express = require('express')

const postsRouter = require('./routes/posts')
const usersRouter = require('./routes/users')

const authRouter = require('./routes/auth')

const app = express()

// Middleaware de uso global
app.use(express.json())

// --- Other middlewares for Posts (routes from api) ---
app.use('/posts', postsRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

module.exports = app
