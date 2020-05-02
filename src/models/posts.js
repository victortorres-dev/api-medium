const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    uppercase: true,
    minlength: 10,
    maxlength: 50
  },
  imagen: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  estimatedReadTime: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2
  },
  date: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Post', PostSchema)
