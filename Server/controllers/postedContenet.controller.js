const expressAsyncHandler = require( "express-async-handler" );
const  Post  = require( "../models/postedContent.model" )
const User = require( "../models/user.model" )

exports.post = expressAsyncHandler( async ( req, res ) =>{
    
    const { ...post } = req.body
  const pramsId= req.params.id
    const userId = req.user
     console.log( post );

    if(userId !== pramsId) res.sendStatus(401)
    const foundUser = await User.findById(userId).lean()
    if (!foundUser ) res.sendStatus( 404 )
    const newPost =  new Post( { ...post } )
    await newPost.save()
    console.log( newPost );
    res.status( 200 ).send( { data: newPost } )
}   
    
)

exports.getAllPostedContnet = expressAsyncHandler(async (req,res) =>{

    const AllPostedContents = await Post.find({}).populate("owner","-_id firstName lastName profile" )
    
    if ( !AllPostedContents ) res.sendStatus( 404 )
     
    res.status( 200 ).send( {
        data: AllPostedContents,
         messaage: "succefully fetched all posts"
    } )  
    
})


exports.getPostedContnetById = expressAsyncHandler( async ( req, res ) =>{
    const postId = req.params.id
    console.log(postId);
     
     const postedContentsById = await Post.findById(postId).populate("owner","firstName lastName profile")
     if ( !postedContentsById ) res.sendStatus( 404 )
     res.status( 200 ).send( { data: postedContentsById } )  
})
 
 
