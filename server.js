const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const items = require('./routes/api/items')

const app = express()

// Bodyparser middleware
app.use(bodyparser.json())

// DB Config
const mongoURI = require('./config/keys').mongoURI
mongoose.connect(mongoURI,{useUnifiedTopology:true, useNewUrlParser:true})
        .then(()=> console.log('MongoDB connected'))
        .catch(err => console.log(err))

//routes
app.use('/api/items',items)

//port
const port = process.env.PORT || 5000


//server listen
app.listen(port,function(err){
    if (err){
        console.log(err)
    }else{
        console.log(`server started @ ${port}`)
    }
})