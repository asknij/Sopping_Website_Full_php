const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('user', userSchema)