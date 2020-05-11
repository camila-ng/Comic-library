const mongoose = require('mongoose')

const comicsImagesSchema = mongoose.Schema({

    image: {
        type: String
    },

    comicId: {
        type: String
    }
})


module.exports = mongoose.model('ComicsImages', comicsImagesSchema)
