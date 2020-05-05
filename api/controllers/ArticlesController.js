class ArticlesControllers{
    constructor(articlesService){
        this.articlesService = articlesService
    }
    
    async getArticles(req, res){
        let page = req.query.page ? req.query.page : 1
        const articles = await this.articlesService.getArticles(page)
        return res.json(articles)
    }
    
    async postArticles(req, res){
        const body = req.body
        const postArticles = await this.articlesService.postArticles(body)
        return res.json(postArticles)
    }
    
    async getArticlesById(req,res){
        const id = req.params.id
        const articlesId = await this.articlesService.getArticlesById(id)
        return res.json(articlesId)
    }
    }
    
    module.exports = ArticlesControllers;