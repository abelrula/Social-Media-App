const jwt= require("jsonwebtoken")


 function verifyToken ( req, res, next ){
    
     const authHeader = req.headers["authorization"]
      
    const token = authHeader?.split( " " )[1]
     
    if ( !authHeader ) res.sendStatus( 401 )
    
     jwt.verify( token,
         process.env.ACCESS_TOKEN_SECRET,
         ( err, decoded ) =>{
             
             if ( err ) res.sendStatus( 401 )
             req.user = decoded.user
             next()
         }
      )   
     next()
}
module.exports=verifyToken