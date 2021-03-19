var mongoose=require('mongoose')
exports.connect=()=>{
    mongoose.connect("mongodb://localhost/Task",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("db connected")
        }
    })
}