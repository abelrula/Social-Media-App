const express = require( "express" )
const {getAllPostedContnet,post,getPostedContnetById} = require( "../controllers/postedContenet.controller" )


const router = express.Router()

router.post( "/post",post )
router.get( "/", getAllPostedContnet )
router.get( "/:id",verifyToken,getPostedContnetById )
// router.post( "/", postController )

module.exports=router