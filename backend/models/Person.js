const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
  name: String,
  profession: String,
  description: String,
  email: String,
  password: String,
  skills: Array,
  whatsapp: String,
  calendly: String,
  portfolio: String,
  linkedin: String,
  drive: String
})

module.exports = Person
