var express=require('express')
var app=express()
var DB=require('./config/db.config')
var cors=require('cors')
var userRouter=require('./routes/user.routes')

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(express.static('uploads'))


app.listen(9010,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is started....!")
    }

})

DB.connect()