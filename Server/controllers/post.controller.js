const { Post } = require( "../models/post.model" )
const User = require( "../models/user.model" )

const post = async (req,res) =>{
    
    const { ...post  } = req.body
    console.log(post);
    
    const foundUser = await User.findById(post.owner ).lean()
    if ( !foundUser ) res.sendStatus( 404 )
     try{
        const newPost = await new Post( post)
        console.log(newPost);
        res.status(200).send({"post":newPost})
    } catch (error){
    console.log(error);
    } 
}

module.exports=post

