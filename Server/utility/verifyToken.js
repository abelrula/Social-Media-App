const jwt= require("jsonwebtoken")


 function verifyToken ( req, res, next ){
    
     const authHeader = req?.headers["authorization"] || req?.headers["Authorization"]
     if ( !authHeader ) res.sendStatus( 401 )
      
    const token = authHeader?.split( " " )[1]
       
    console.log("token"+ token);
    
     jwt.verify( token,
         process.env.ACCESS_TOKEN_SECRET,
         ( err, decoded ) =>{
             
             if ( err ) res.sendStatus( 403 )
             req.user = decoded.user
            console.log(req.user);
            
             next()
         }
      )   
}
module.exports=verifyToken