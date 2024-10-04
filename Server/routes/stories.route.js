const express = require( "express" )
const {postStory,getAllStories} = require( "../controllers/story.contollers" )
const verifyToken = require( "../utility/verifyToken" )


const router = express.Router()

router.post( "/post", postStory )
router.get( "/",getAllStories )
  
module.exports=router