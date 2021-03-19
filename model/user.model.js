var mongoose=require('mongoose')
var schema=mongoose.Schema
var userModel=schema({
    username:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    phonenumber:{
        type:Number
    },
    website:{
        type:String
    },
    companyname:{
        type:String
    },
    catchPhrase:{
        type:String
    },
    bs:{
        type:String
    },
    street:{
        type:String
    },
    city:{
        type:String
    },
    suite:{
        type:String
    },
    zipcode:{
        type:Number
    },
    image:{
        type:String
    }
})
module.exports=mongoose.model('users',userModel)