const { Schema, model } = require( "mongoose" )
const userSchema = Schema( {
    email: {
        type: String,
        required: [true,"email is needed"]
    },
    firstName: {
        type: String,
        required: [true,"firstName is needed"]
     },
    lastName: {
        type: String,
        required: [true,"lastName is needed"]
    },
    userName: {
        type: String,
        required: [true,"userName is needed"]
    },
    password: {
        type: String,
        required: [true,"password is needed for authorization"]
    },
    phone: {
        type: String,
        required: [true,"phone is needed for verification"]
    },
    age: {
        type: Number,
        min: 18,
        maxL:65,
        required: [true,"age is needed"]
    },
   college: {
        type: String,
        required: false
    },
    profile:  {
        type:String
    },
    coverPhoto: {
        type: String
    },
    refreshToken: {
        type: String,
    },
    friends: {
        type: Schema.Types.ObjectId,
    },
    friendRequestSent: [{
            type: Schema.Types.ObjectId,
            ref:"User"
        } ],
     friendRequesRecieved: [{
            type: Schema.Types.ObjectId,
            ref:"User"
        } ],
    followers: [{
            type: Schema.Types.ObjectId,
            ref:"User"
        } ],
    status:[
        {
            type:String,
            enum: [ "online", "offline" ]
        }
    ]
}, 
    { timestamp: true }
)

const User = model( "User", userSchema )

module.exports= User
 
