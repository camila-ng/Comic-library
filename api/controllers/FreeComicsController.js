class FreeComicsController {
    constructor(freeComicsService) {
        this.freeComicsService = freeComicsService
    }

    async getFreeComics(req, res) {
        const freeComics = await this.freeComicsService.getFreeComics()
        return res.json(freeComics)
    }

    async postFreeComics(req, res) {
        const body = req.body
        const postFreeComics = await this.freeComicsService.postFreeComics(body)
        return res.json(postFreeComics)
    }
}

module.exports = FreeComicsController;