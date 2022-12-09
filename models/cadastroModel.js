const mongoose = require('mongoose')

const model = new mongoose.Schema({
    user:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
    }
})    

module.exports = mongoose.model('cadastro', model)