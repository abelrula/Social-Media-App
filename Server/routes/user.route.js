const express=require("express")
const user=require("../controllers/user.controller")
const verifyToken = require( "../utility/verifyToken" )
const router = express.Router()


router.patch( "/update",verifyToken,user.updateProfile)

module.exports=router