const mongoose = require('mongoose')

const freeComicsSchema = mongoose.Schema({
    name: {
        type: String
    },

    category: {
        type: []
    },

    image: {
        type: String
    },

    description: {
        type: String
    }
})


module.exports = mongoose.model('FreeComics', freeComicsSchema)
