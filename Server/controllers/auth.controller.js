
 const User = require( "../models/user.model" )
const jwt= require("jsonwebtoken")
const bcrypt=require("bcrypt")
const expressAsyncHandler = require( "express-async-handler" )

exports.register = expressAsyncHandler(async ( req, res,next ) =>
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
    
    
       const savedUser= await newUser.save()
        res.status( 200 ).send( {
        message: "user created successfully",
        data: newUser,
        savedUser: savedUser
    } )
 
     
} )
    // login user
exports.login = expressAsyncHandler(async ( req, res ) =>{
    
    const { email, password } = req.body

    if ( !email || !password ) res.status( 401 ).json( { message: "All Field Is Required" } )
    
    // find if a user if its exist
    const user = await User.findOne( { email } ).exec()
    console.log(user);
  if(!user ) res.status( 400 ).json( { message: "failed to login username or password is incorrect" } )
    // decrypt password using bcrypt
    
    const hashedPassword = user.password
    
     const matchedPassword =  await bcrypt.compare( password,hashedPassword)
    // console.log(matchedPassword);
    
    
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
        
        const RefreshToken = jwt.sign({
                user: {
                userName: user.userName,
             email: user.email
            }},
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "7d" }
        )

    // save user with refreshToken in database
     user.refreshToken = RefreshToken
    
    const userWithRefreshToken = await user.save()
        
        // console.log(userWithRefreshToken);
      
    // store  refreshToken in cookies to not be accesed by front end using javascript 
    // used as request fro the new access token in fron end
        res.cookie( "jwt", RefreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            sameSite: "none",
            secure:true
         } )
       
    
        res.status( 200 ).json( {
            message: "logged in successfully",
            accessToken: AccessToken
        } )
     
})

    // logout user
exports.logout = expressAsyncHandler(async ( req, res ) =>{
   
    // not content
    if ( !req.cookies.jwt ) res.sendStatus( 204 )
    
    const Token = req.cookies.jwt
    const user = await User.findOne( { refreshToken: Token } ).exec()
    
    if ( !user ){
        res.clearCookie( "jwt", { httpOnly: true } );
        return res.sendStatus( 204 );
    }

   // find the user and remove the refreshToken from db
      await User.update({refreshToken:Token},{$unset:{refreshToken:""}}).exec()
   
    //remove  jwt cookie if its there
      res.clearCookie( "jwt", { httpOnly: true } );
         return res.sendStatus( 204 );

})