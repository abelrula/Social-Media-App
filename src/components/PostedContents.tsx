
import { useState } from 'react'
import PostedCard from './PostedCard'
import { PostedContentModal } from './Modals'
import { postedContentsData } from '../lib/data'
   

const PostedContents = () => {
  const [postedContents,setPostedContents]=useState<postedContentsDataType[]>(postedContentsData)
  const [ currentIndex, setCurrentIndex ] = useState<number>(null)
  const [openLikeModal,setOpenLikeModal] =useState(false)
  const currentModal = postedContents[ currentIndex ] 
     console.log(postedContentsData);
  
     console.log(currentModal);
   return (
    <div className="flex flex-col gap-2.5 h-screen " onClick={()=>setOpenLikeModal(false)}>
        {postedContents.map((items:postedContentsDataType,index:number)=>(
         <PostedCard  setCurrentIndex={setCurrentIndex} index={index}   items={items }  />
        )) }
       
      // modal on click on posted contenet 
       {
         currentIndex ?
           <PostedContentModal currentModal={currentModal} setCurrentIndex={setCurrentIndex} />
           :null
       }
    </div>  
  )
}

export default PostedContents