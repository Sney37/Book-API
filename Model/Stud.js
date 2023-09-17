const mongoose = require('mongoose')

const studSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    createdate : {
        type : Date,
        default : Date.now()
    }
});

module.exports = mongoose.model('stud-data',studSchema)