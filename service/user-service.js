// const User = require('../models/user')

const {User} = require('../models/index')


class UserService {
    async createUser() {
        const user = await User.create()
        return {user} 
    }
}
 
module.exports = new UserService()


