const route = require('express').Router()
const{register,login, getStud} = require('../Controller/studController')

route.get('/',getStud)

route.post('/',register)

route.post('/login',login)


module.exports = route