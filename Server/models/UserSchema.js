const { Schema, model } = require( "mongoose" )
const userSchema = Schema( {
     email: {
        type: String,
        required:true
    },
    firstName: {
        type: String,
        required:true
    },
     lastName: {
        type: String,
        required:true
    },
    password: {
         type: String,
         required:true
    },
     phone:{
         type:String,
     },
    age: {
        type: Number,
        min:18,
        required:true
    },
    college: {
        type: String,
        required:false
    },
},
    { timestamp: true }
)

const User = model( "User", userSchema )
module.exports = User
 
