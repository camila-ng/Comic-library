const Comics = require('../models/Comics');
const ComicsImages = require('../models/ComicsImages');

class ComicsService{
constructor(){ 
    this.limit = 9;
}

getComics(page){
    let skip = (page - 1) * this.limit
    const comics = Comics.find().skip(skip).limit(this.limit).exec()
    return comics
    }   

//not used by react 
postComics(body){
    //Creates Comics model.
    const comicsPost = new Comics(body.comic);

    const result = comicsPost.save((err, data) => {
        const id = data._id.toString();
        for(let i= 0; i < body.imagesarray.length; i++){

            let image = body.imagesarray[i];
            image.comicId = id;

            const comicsImages = new ComicsImages(image);
            comicsImages.save();
        }
    });

    return result;
}

async getComicsById(id) {
    let result = {
        comic: {},
        images: []
    };

    await Comics.findOne({ _id : id}).exec().then((comic => {
        result.comic = comic;
    }));

    await ComicsImages.find({comicId : id}).exec().then((images => {
        result.images = images;
    }));

    return result;
    }
}

module.exports = ComicsService; 
