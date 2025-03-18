const expressAsyncHandler = require( "express-async-handler" )
const User = require( "../models/user.model" )
const { filterobj } = require( "../utility/filterObj" )


exports.updateProfile = expressAsyncHandler( async( req, res, next ) =>{
   
     const email = req.user.email
    const user = await User.find( { email } )
     if ( !user ) res.sendStatus( 401 )
    if ( !req.body.email === email ) res.sendStatus( 401 )
    console.log(email)
    const updateFiles=  filterobj(req.body,"firstName","lastName","profile","cover")
    
    const updatedUser = await User.findOneAndUpdate( { email }, updateFiles, { new: true,upsert:true } )
    
    res.status( 200 ).send( {
        "message": "updated successfully",
        "data":updatedUser
    } )
    next()
})