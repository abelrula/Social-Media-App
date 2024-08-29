 const express = require( "express" )
const PORT=3000

const app = express()
app.get( "/",( req, res ) =>
{
   res.send("whooooop")  
})
app.listen( PORT, () =>
{
    console.log(`running on port ${PORT}`);
    
})