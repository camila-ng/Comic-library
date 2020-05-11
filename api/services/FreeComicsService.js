const FreeComics = require('../models/FreeComics')

class FreeComicsService{

getFreeComics(){
    const freeComics = FreeComics.find().exec()
    return freeComics
    }   

postFreeComics(body){
    const freeComicsPost = new FreeComics(body)
    return freeComicsPost.save()
    }

}


module.exports = FreeComicsService; 
