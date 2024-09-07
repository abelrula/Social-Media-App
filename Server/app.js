const express = require( "express")
const connectDB = require( "./config/dbConfig" )
const authController=require("./routes/auth")
require( "dotenv" ).config()

const app = express()
const PORT=process.env.PORT || 3500

app.use( express.json() )
//database connection
connectDB()

// user Authorization 
app.use( "/auth", authController )

// listen server on port
app.listen( PORT, () =>
{
    console.log(`running on port ${PORT}`);
    
})