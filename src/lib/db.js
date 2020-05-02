const mongoose = require('mongoose')

const DB_USER = 'victortorres-dev'
const DB_PASSWORD = ''
const DB_HOST = 'kodertavo-9de4q.mongodb.net'
const DB_NAME = 'medium'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connectToDB () {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = { connectToDB }
