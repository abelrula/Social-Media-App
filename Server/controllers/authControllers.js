
const asyncHandler = require( "express-async-handler" )
const User = require( "../models/UserSchema" )
const jwt= require("jsonwebtoken")
const bcrypt=require("bcrypt")
exports.register = async ( req, res,next ) =>
{

    // extracting in a destructure form
    const { email, password, firstName,userName, lastName, phone, age, college } = req.body

    // find if a duplicated user if its exist
    const user = await User.findOne( { email } )
    if ( user ) return ( res.status( 400 ).json( { message: "its duplicated" } ) )
    
    // specifying  number for genrated hashed password (salt)
    const salt = 10
    
    // hashed password using bcrypt
    const hashedPassword = await bcrypt.hash( password, salt )
    console.log( hashedPassword );
    console.log( hashedPassword );
   
    // if there's no user found in the user then create a user
    const newUser = new User( {
        email,
        firstName,
        lastName,
        userName,
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
exports.login = async ( req, res ) =>
{
    const { email, password } = req.body
    console.log(email, password)
    
    if ( !email && !password ) res.status( 401 ).json( { message: "All Field Is Required" } )
    
    // find if a user if its exist
    const user = await User.findOne( { email } ).exec()
    console.log(user);
 
    // decrypt password using bcrypt
    
    const hashedPassword = user.password
    
     const matchedPassword =  await bcrypt.compare( password,hashedPassword, function(err, res) {
                     if(err) {
                        console.log('Comparison error: ', err);
                    }
                })
    console.log(matchedPassword);
    
    
    if ( !matchedPassword || !user ) res.status( 400 ).json( { message: "failed to login username or password is incorrect" } )
    
    
         
        // generating access token and will be generated | requested based on refresh token within small amount of time
        const AccessToken = jwt.sign( {
            user: {
            userName: user.userName,
            email: user.email
            }
        },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "30m" } )
        
        // generating refresh token after some amount of time saved in browser coockie so not to be leaked
        
        const RefreshToken = jwt.sign(
            { user: {
                userName: user.userName,
             email: user.email
            }},
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "7d" }
        )

        
        res.status( 200 ).json( {
            message: "logged in successfully",
            accessToken: AccessToken
        } )
        
        res.cookie( "jwt", RefreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            sameSite: "none",
            secure: true
        } )
        
     
}

    // logout user
exports.logout = async ( req,res ) =>{
    
     
}