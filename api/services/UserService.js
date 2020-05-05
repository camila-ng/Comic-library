const User = require('../models/User');

class UserService {
    getUsers() {
        const users = User.find().exec()
        return users
    }

    postUsers(body) {
        const usersBody = new User(body)
        return usersBody.save()
    }

    getUserByName(user) {
        const userName = User.findOne({ user: user }).exec()
        return userName
    }
}




module.exports = UserService;