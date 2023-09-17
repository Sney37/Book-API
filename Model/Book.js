const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    }
})

module.exports = mongoose.model('book-data',bookSchema)