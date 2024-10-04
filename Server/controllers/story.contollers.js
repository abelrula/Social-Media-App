 const expressAsyncHandler = require( "express-async-handler" );
const Story = require( "../models/stories.model" );

exports.postStory = expressAsyncHandler(async ( req, res ) =>{
    
    const { ...post  } = req.body
    const pramsId= req.params.id
    const userId = req.user
 
    if(userId !== pramsId) res.sendStatus(401)
    const foundUser = await Story.findById(userId).exec()
    if ( !foundUser ) res.sendStatus(500)
    
        const newPost = await new Story( {...post,owner:userId})
        console.log(newPost);
        res.status(200).send({"data":newPost,"message":"success posted new story"})
    
} )
 
exports.getAllStories = expressAsyncHandler(async (req,res) =>{
    const postId = req.params.id
    
 const allStories = await Story.find(postId).populate("owner","-_id firstName lastName profile" )
    
    if ( !allStories ) res.sendStatus( 404 )
     
    res.status( 200 ).send( {
        data: allStories
    } )  
    
})

 

