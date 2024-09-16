const express = require( "express")
const connectDB = require( "./config/dbConfig" )
const verifyToken=require("./utility/verifyToken")
const authController=require("./routes/auth")
const cookieParser = require( "cookie-parser" )

require( "dotenv" ).config()
// parsing incoming cookies
const app = express()
app.use(cookieParser())
const PORT=process.env.PORT || 3500

app.use( express.json() )

    //database connection
connectDB()
// user Authorization 
app.use( "/auth", authController )

// listen server on port
app.listen( PORT, () =>{
    console.log(`running on port ${PORT}`);
})
app.use((err,req,res,next)=>{

     console.log(`this is global error${err.stack}`)
     res.status(500).send("server error")
})