
const {Schema,model}=require("mongoose")

const postSchema = new Schema( {
    postDesc: {
        type: String,
    },
    images: [ {
        type:String
    } ],
    owner: {
        type: Schema.Types.ObjectId,
        ref:"User"
    }
} )

const Post=model("Post",postSchema)



module.exports ={Post}