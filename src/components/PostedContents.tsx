
import { useState } from 'react'
import { postedContentsData } from '../data/data'
import PostedCard from './PostedCard'
 import { AiFillLike, AiOutlineDislike, AiOutlineLike, AiTwotoneFire } from 'react-icons/ai'
import { FcLike, FcShare} from 'react-icons/fc'
import { BsEmojiTear } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import ProfileImage from './ProfileImage'
import { IoIosClose } from 'react-icons/io'
import { profileImg } from '../data/data';
import { PostedContentModal } from './Modals'
   

const PostedContents = () => {
  const [postedContents,setPostedContents]=useState(postedContentsData)
  const [ currentIndex, setCurrentIndex ] = useState(undefined)
  const [openLikeModal,setOpenLikeModal] =useState(false)
     console.log(postedContentsData);
     const currentModal=postedContents[currentIndex]  
     console.log(currentModal);
   return (
    <div className="flex flex-col gap-2.5 h-screen " onClick={()=>setOpenLikeModal(false)}>
        {postedContents.map((items,index)=>(
         <PostedCard  setCurrentIndex={setCurrentIndex} index={index}   items={items }  />
        )) }
      
      // modal on click on posted contenet 
       {
         currentIndex ?
           <PostedContentModal currentModal={currentModal} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} openLikeModal={openLikeModal} setOpenLikeModal={setOpenLikeModal}  />
           :null
       }
    </div>  
  )
}

export default PostedContents