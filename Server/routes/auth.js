const express = require( "express" )
const { register,login,logout}=require("../controllers/authControllers")
const router =express.Router()

 router.get( "/register",register)
router.get( "/login",login)
router.get( "/logout",logout)
module.exports = router