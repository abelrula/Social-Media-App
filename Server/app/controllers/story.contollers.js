 const expressAsyncHandler = require( "express-async-handler" );
const Story = require( "../models/stories.model" );

exports.postStory = expressAsyncHandler(async ( req, res ) =>{
    
     const { userName, ...post } = req.body
    
    // grabbing userInfo from verifyToken middleware
    const LoginUserName = req.user;
    
    if(!LoginUserName.userName) res.sendStatus(401)
        
     console.log( userName );
     console.log( LoginUserName );

    // check is username sent from client and logged in username don't match then they are un Authorized
    if ( userName !== LoginUserName.userName ) res.sendStatus( 401 )
    
 
    
    // else create new post for logged in user
    const newPost =  new Story( { ...post } )
    await newPost.save()

    res.send( { data: newPost } )
}    )
 
exports.getAllStories = expressAsyncHandler(async (req,res) =>{
  
    const AllPostedContents = await Story.find({}).populate("owner","-_id firstName lastName profile" )
    
    if ( !AllPostedContents ) res.sendStatus( 204 )
     
    res.status( 200 ).send( {
        data: AllPostedContents,
         messaage: "succefully fetched all posts"
    } )  
    
})

 

