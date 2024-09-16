const express = require( "express" )
const { register,login,logout}=require("../controllers/authControllers")
const router =express.Router()

router.post( "/register",register)
router.get( "/login",login)
router.post( "/logout",logout)
module.exports = router