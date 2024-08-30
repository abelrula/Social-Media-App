
const asyncHandler = require( "express-async-handler" )

exports.register =( req, res ) =>
{
    res.status(200).send("register")
console.log("register");

} 
exports.login = ( req, res ) =>
{
    res.status(200).send("login")
    
    
}
exports.logout = ( req, res ) =>
{
    
    res.status(200).send("logout")
    
}