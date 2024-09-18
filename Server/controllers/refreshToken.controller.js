const jwt= require("jsonwebtoken")
const User = require( "../models/user.model" )

async function handleRefreshToken  ( req, res )
{
    const cookies = req.cookies
    
    // check if theres cookies
    if ( !cookies?.jwt ) res.sendStatus( 401 )
    // if thers cookies then assign to refreshtoken
    const refreshToken = cookies?.jwt
       
    // find user based on stored refresh token
    const user = await User.findOne( { refreshToken } ).exec()
    console.log(user);
    
    if ( !user ) res.sendStatus(401)
        
    //verify using jwt if the stored userName in  refresh token and databse user name are the same
    //  then request new access token 
    jwt.verify( refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        ( err, encoded ) =>{
          
            if ( err || encoded.user.userName !== user.userName  ) res.sendStatus( 401 );
         const accessToken= jwt.sign( 
                {
                    "user":encoded.user
                }
                , process.env.ACCESS_TOKEN_SECRET,
                {
                expiresIn:"1hr"
             } )
             res.json({"accessToken":accessToken})
      }
    )




}


module.exports=handleRefreshToken