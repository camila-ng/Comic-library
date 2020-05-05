const bcrypt = require('bcrypt-nodejs');

class UserController{
constructor(userService){
    this.userService = userService
}
async getUsers(req,res){
    const users = await this.userService.getUsers()
    return res.json(users)
}

async postUsers(req,res){
    const body = req.body

    const newBody = {
        ...body, password : bcrypt.hashSync(body.password)
    }

    if(body){   
    const postUsers = await this.userService.postUsers(newBody)

    return res.sendStatus(200)
    
} else {
    return res.sendStatus(400)
     }
    }
    
}

module.exports = UserController