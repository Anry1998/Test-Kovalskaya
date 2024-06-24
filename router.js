const Router = require('express')
const router = new Router()
const {body} = require('express-validator')


const UserController = require('./controllers/user-controller')
const BalanceController = require('./controllers/balance-controller')

router.post('/create', UserController.createUser)
router.put('/changebalance', 
    body('userId').trim().isNumeric(),
    body('amount').isNumeric(),
BalanceController.changeBalance)

module.exports = router;  