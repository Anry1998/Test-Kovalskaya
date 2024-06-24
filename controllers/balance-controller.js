const balanceService = require("../service/balance-service")

class BalanceController {
    async changeBalance(req, res, next) {
        try {
            const {userId, amount} = req.body
            const userBalance = await balanceService.changeBalance(userId, amount)
            return res.json(userBalance)
        } catch (e) {
            console.log(e) 
        }
    }
} 

module.exports = new BalanceController()