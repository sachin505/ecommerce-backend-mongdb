var userModel=require('../model/user.model')
var express=require('express')
const Router = express.Router();

exports.signupUser=(req,res)=>{
    var userData=req.body  
    var newData=new userModel(userData)
    
    newData.save((err,doc)=>{
        if(err){
            res.send({result:false})
        }
        if(doc){
            res.send({result:true})
        }
    })

}

exports.getAccounts=(req,res)=>{
userModel.find({},(err,doc)=>{
    if(err){
        res.send({error:err.message})
    }
    if(doc){
        res.send(doc)
    }
})
}

exports.getAccountDetails=(req,res)=>{
    var username=req.params.username
    userModel.findOne({username:username},(err,docs)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(docs)
        }
    })
}