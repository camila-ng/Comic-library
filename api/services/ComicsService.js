const Comics = require('../models/Comics')
const ComicsImages = require('../models/ComicsImages')

class ComicsService{
constructor(){ 
    this.limit = 9;
}

getComics(page){
    let skip = (page - 1) * this.limit
    const comics = Comics.find().skip(skip).limit(this.limit).exec()
    return comics
    }   

postComics(body){
    const comicsPost = new Comics(body.comic)
    const result = comicsPost.save( (err, data) => {
        for(let i= 0; i < body.imagesarray.length; i++){
            const id = data._id.toString()
            let imageAtIndexI = body.imagesarray[i] 
            imageAtIndexI.comicId = id
            const comicsImages = new ComicsImages(imageAtIndexI)
            comicsImages.save()
        }
    })
        
    return result;

    }

async getComicsById(id){
    let result= {comic: {},
                images: []
            }

    await Comics.findOne({ _id : id}).exec().then((comic => {
        result.comic= comic;
    }))

    await ComicsImages.find({comicId : id}).exec().then((images => {
        result.images= images;
    }));
    return result;
    }
}



module.exports = ComicsService; 