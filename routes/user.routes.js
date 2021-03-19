var express=require('express')
var controllers=require('../controllers/user.controller')
var userRouter=express.Router()
userRouter.post('/signupuser',controllers.signupUser)
userRouter.get('/getAllAccounts',controllers.getAccounts)
userRouter.get('/getAccountDetails/:username',controllers.getAccountDetails)
module.exports=userRouter