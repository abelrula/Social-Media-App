
const asyncHandler = require( "express-async-handler" )
const User = require( "../models/UserSchema" )
const bycrypt=require("bcrypt")
exports.register = async ( req, res,next ) =>
{

    // extracting in a destructure form
    const { email, password, firstName, lastName, phone, age, college } = req.body

    // find if a duplicated user if its exist
    const user = await User.findOne( { email } )
    if ( user ) return ( res.status( 400 ).json( { message: "its duplicated" } ) )
    
    // specifying  number for genrated hashed password (salt)
    const salt = 10
    
    // hashed password using bcrypt
    const hashedPassword = await bycrypt.hash( password, salt )
    console.log( hashedPassword );
    console.log( hashedPassword );
   
    // if there's no user found in the user then create a user
    const newUser = new User( {
        email,
        firstName,
        lastName,
        password:hashedPassword,
        phone,
        age,
        college
    } )
    
    try {
        await newUser.save()
         res.status( 200 ).send( {
        message: "user created successfully",
        data: newUser
 
    } )
    } catch (error) {
        next(error)
    }
} 
    // login user
exports.login = async( req, res ) =>{
   
   
}
    

    // logout user
exports.logout = async ( req,res ) =>{
    
     
}