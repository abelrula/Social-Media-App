
const {Schema,model}=require("mongoose")

const postedContentSchema = new Schema( {
    descritpion: {
        type: String,
    },
    images: [ {
        type:String
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
        type:Number
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
},{
  timestamps:true
})

const Post=model("Post",postedContentSchema)

module.exports =Post