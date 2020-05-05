const Comics = require('../models/Comics')

class ComicsService{
constructor(){ 
    this.limit = 9
}

getComics(page){
    let skip = (page - 1) * this.limit
    const comics = Comics.find().skip(skip).limit(this.limit).exec()
    return comics
    }   

postComics(body){
    const comicsPost = new Comics(body)
    return comicsPost.save()
    }

getComicsById(id){
    const comicsId = Comics.findOne({ _id : id}).exec()
    return comicsId
    }
}


module.exports = ComicsService; 
