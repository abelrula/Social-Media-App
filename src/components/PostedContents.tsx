
import { useState } from 'react'
import PostedCard from './PostedCard'
import { PostedContentModal } from './Modals'
import { postedContentsData } from '../lib/data'
   

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