const expressAsyncHandler = require( "express-async-handler" );
const  Post  = require( "../models/postedContent.model" )
const User = require( "../models/user.model" )

exports.post = expressAsyncHandler( async ( req, res ) =>{
    
    const { userName, ...post } = req.body
    
    // grabbing userInfo from verifyToken middleware
    const LoginUserName = req.user;
    
    if(!LoginUserName.userName) res.sendStatus(401)
        
     console.log( userName );
     console.log( LoginUserName );

    // check is username sent from client and logged in username don't match then they are un Authorized
    if ( userName !== LoginUserName.userName ) res.sendStatus( 401 )
    
    // const foundUser = await User.findOne( {userName} ).exec()
    // if ( !foundUser ) res.sendStatus( 404 )
    
    // else create new post for logged in user
    const newPost =  new Post( { ...post } )
    await newPost.save()

    res.send( { data: newPost } )
}   
    
)

exports.getAllPostedContnet = expressAsyncHandler(async (req,res) =>{

    const AllPostedContents = await Post.find({}).populate("owner","-_id firstName lastName profile" )
    
    if ( !AllPostedContents ) res.sendStatus( 204 )
     
    res.status( 200 ).send( {
        data: AllPostedContents,
         messaage: "succefully fetched all posts"
    } )  
    
})


exports.getPostedContnetById = expressAsyncHandler( async ( req, res ) =>{
    const ownerId = req.params.id
      
     const postedContentsById = await Post.find({owner:ownerId}).populate("owner","firstName lastName profile")
     if ( !postedContentsById ) res.sendStatus( 204 )
     res.status( 200 ).send( { data: postedContentsById } )  
})
 
 
