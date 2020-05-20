const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const path = require('path')
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


// Serve static assests if in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
    })
}


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