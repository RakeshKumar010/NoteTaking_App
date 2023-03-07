const mongoose = require('mongoose')

module.exports = mongoose.model('addNotes',mongoose.Schema({
    topic:String,
    message:String
}))