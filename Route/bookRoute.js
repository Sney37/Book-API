const route = require('express').Router()
const{getBook,postBook} = require('../Controller/bookController')
const auth = require('../Middleware/auth')

route.get('/',getBook)

route.post('/',auth,postBook)


module.exports = route