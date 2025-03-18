const express = require( "express" )
const refreshTokenController = require( "../controllers/refreshToken.controller" )
const router=express.Router()


router.get( "/", refreshTokenController )

module.exports=router
