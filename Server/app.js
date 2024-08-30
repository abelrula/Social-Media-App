const express = require( "express" )
require( "dotenv" ).config()
const app = express()
const authController=require("./routes/auth")
 
const PORT=process.env.PORT || 3500
app.use( "/auth",authController)
app.listen( PORT, () =>
{
    console.log(`running on port ${PORT}`);
    
})