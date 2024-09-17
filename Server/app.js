const express = require( "express")
const connectDB = require( "./config/dbConfig" )
const verifyToken=require("./utility/verifyToken")
const authController=require("./routes/auth")
const cookieParser = require( "cookie-parser" )
const bodyParser = require( "body-parser" )
const handleRefreshToken = require( "./controllers/refreshToken" )

require( "dotenv" ).config()
const app = express()
app.use( cookieParser() )
app.use(bodyParser.urlencoded({extended:false}))
app.use( bodyParser.json() )

// parsing incoming cookies

const PORT=process.env.PORT || 3500

app.use( express.json() )

    //database connection
connectDB()
// user Authorization 
app.use( "/auth", authController )

// testing verifyToken middleware workin 
app.get( "/test", verifyToken, ( req, res ) =>
{
      res.status(200).json({message:"yep",
        user:req.user
      })
} )

// testing route refreshtoken for granting to get new accessToken
app.get("/refreshToken",handleRefreshToken)
// listen server on port
app.listen( PORT, () =>{
    console.log(`running on port ${PORT}`);
})
app.use((err,req,res,next)=>{

     console.log(`this is global error${err.stack}`)
     res.status(500).send("server error")
})