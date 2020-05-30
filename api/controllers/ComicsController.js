class ComicsControllers {
    constructor(comicsService) {
        this.comicsService = comicsService
    }

    async getComics(req, res) {
        let page = req.query.page ? req.query.page : 1
        const comics = await this.comicsService.getComics(page)
        return res.json(comics)
    }

    async postComics(req, res) {
        const body = req.body
        const postComics = await this.comicsService.postComics(body)
        return res.json(postComics)
    }

    async getComicsById(req,res){
        const id = req.params.id
        const comic = await this.comicsService.getComicsById(id)
        return res.json(comic)
    }
}

module.exports = ComicsControllers;