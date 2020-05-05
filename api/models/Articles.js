const mongoose = require('mongoose')

const articlesSchema = mongoose.Schema({
    title: {
        type: String
    },

    subtitle: {
        type: String
    },

    image: {
        type: String
    },

    author: {
        type: String
    },

    category: {
        type: String
    },

    timeOfRead: {
        type: String
    },

    content: {
        type: String
    },

})


module.exports = mongoose.model('Articles', articlesSchema)
