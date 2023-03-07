const mongoose = require('mongoose')

module.exports = mongoose.model('ntCollection',mongoose.Schema({
    name:{
        type:String,
        uppercase:true
    },
    email:String,
    password:String
}))