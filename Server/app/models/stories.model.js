const { Schema, model } = require( "mongoose" )

const sotrySchema = new Schema( {
    descritpion: {
        type:String
    },
    images: [{
        type:String,
        required:["stories with out image is not supported"]
    } ],
    owner: {
        type: Schema.Types.ObjectId,
          ref:"User"
    },
    comments: [{
        comment:String,
              owner: {
                 type: Schema.Types.ObjectId,
                 ref: "User",
        },
        createdAt: {
            type: Date,
            default:Date.now()
              }
              
        }],
    shared: {
        type: Number,
        default:0
    },
    reactions: {
        laugh: {
            type:Number,
            default:0
        },
        cry: {
            type:Number,
            default:0
        },
         love: {
            type:Number,
            default:0
        },
        like: {
            type:Number,
            default:0
        },
        disLike: {
            type:Number,
            default:0
        }
    }
},
    {
    timestamps:true
})

const Story=model("Story",sotrySchema)



module.exports =Story