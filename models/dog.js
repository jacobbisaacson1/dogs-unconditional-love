const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true // dogs must have a user
  }
})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog
