const mongoose = require('mongoose')

const Group = mongoose.model('Group', {
  title: String,
  date: String,
  time: String,
  subject: String,
  link: String
})

module.exports = Group