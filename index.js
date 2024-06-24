require('dotenv').config()
const express = require('express')
const router = require('./router')

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json()) 
app.use('/api', router)

const start = async  () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start() 





