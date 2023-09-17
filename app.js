const express = require('express');
const mongoose = require('mongoose');
const studRoute = require('./Route/studRoute');
const bookRoute = require('./Route/bookRoute');
require('dotenv/config')

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('this is home')
})

app.use('/api/stud',studRoute)
app.use('/api/book',bookRoute)

app.listen(process.env.PORT)

async function db1() {
   
        const res = await mongoose.connect(process.env.DB);
        console.log(res.default.STATES.connected);
   
}

db1()