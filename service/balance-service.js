// const {User} = require('../user-model')
const {User} = require('../models/index')
const ApiError = require('../exceptions/errors')

class BalanceService {
    async changeBalance(userId, amount) {
        const user = await User.findOne({where: {id: userId}})

        if (!user) {
            throw ApiError.BedRequest(`Пользователь с id: ${userId} не был найден`)
        }

        if (user.balance + amount < 0) {
            throw ApiError.BedRequest(`На счете недостаточно средств`)
        }

        user.balance = user.balance + amount
        user.save()
        return {user}   
    }
}
 
module.exports = new BalanceService()


