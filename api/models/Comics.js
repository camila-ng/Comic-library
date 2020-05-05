const mongoose = require('mongoose')

const comicsSchema = mongoose.Schema({
    name: {
        type: String
    },

    category: {
        type: []
    },

    image: {
        type: String
    }
})


module.exports = mongoose.model('Comics', comicsSchema)
