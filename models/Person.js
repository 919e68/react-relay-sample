var mongoose = require('mongoose')

var PersonSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

module.exports = mongoose.model('Person', PersonSchema)