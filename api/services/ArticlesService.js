const Articles = require('../models/Articles')


class ArticlesService{
    constructor(){ 
        this.limit = 3
    }
    

getArticles(page){
    let skip = (page - 1) * this.limit
    const articles = Articles.find().skip(skip).limit(this.limit).exec()
    return articles
}

postArticles(body){
    const articlesPost = new Articles(body)
    return articlesPost.save()
}

getArticlesById(id){
    const articlesId = Articles.findOne({ _id : id}).exec()
    return articlesId
}
}


module.exports = ArticlesService; 
