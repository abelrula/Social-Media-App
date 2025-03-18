const express = require( "express")
const connectDB = require( "./config/dbConfig" )
const verifyToken=require("./utility/verifyToken")
const cookieParser = require( "cookie-parser" )
 const asyncHandlers=require("express-async-handler")
const bodyParser = require( "body-parser" )
const refreshToken_Route=require("./routes/refreshToken.route")
const auth_Route=require("./routes/auth.route")
const feeds_Route=require("./routes/postedContent.route")
const stories_Route=require("./routes/stories.route")
const user_Route=require("./routes/user.route")
 
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
app.use( "/api/auth", auth_Route )
//users posting content 
app.use( "/api/feeds", feeds_Route)

//users posting story and get all story 
app.use( "/api/stories", stories_Route )

// testing route refreshtoken for granting to get new accessToken
app.use( "/api/refreshToken",refreshToken_Route)

// getting all users for testing purpose
app.use( "/api/user",user_Route)


// listen server on port
app.listen( PORT, () =>{
    console.log(`running on port ${PORT}`);
})
app.use((err,req,res,next)=>{

     console.log(`this is global error${err.stack}`)
     res.status(500).send("server error")
})