
const userService = require("../service/user-service")

class UserController {
    async createUser(req, res, next) {
        try {
            const user = await userService.createUser()
            return res.json(user)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController()