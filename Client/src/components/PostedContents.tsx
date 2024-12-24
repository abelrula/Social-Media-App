
import { useState } from 'react'
import PostedCard from './PostedCard'
import { PostedContentModal, SmallerDeviceModal } from './Modals'
import { postedContentsData } from '../lib/data'
 import useScreenSize from "../hooks/useScreenSize"  
   

const PostedContents = ({postedContents}) => {
  
  const [ screenSize ] = useScreenSize()
  console.log( screenSize.width < 625 ? "true" : "false");
  
  const [ currentIndex, setCurrentIndex ] = useState<number>(null)
  const [openLikeModal,setOpenLikeModal] =useState(false)
  const currentModal = postedContents[ currentIndex ] 
    //  console.log(postedContentsData);
  console.log( currentIndex );
  
    //  console.log(currentModal);
   return (
    <div className="flex flex-col gap-2.5 h-screen overflow-scroll" onClick={()=>setOpenLikeModal(false)}>
        {postedContents.map((posts:postedContentsDataType,index:number)=>(
         <PostedCard key={index } setCurrentIndex={setCurrentIndex} index={index}   postedItems={posts }  />
        )) }
       
      {/* modal on click on posted contenet  */}
       {
         currentIndex  && screenSize.width < 760 ?
         <SmallerDeviceModal currentModal={ currentModal } setCurrentIndex={ setCurrentIndex } /> :
          currentIndex  && screenSize.width > 760 ? <PostedContentModal currentModal={ currentModal } setCurrentIndex={ setCurrentIndex } /> :"null"
           
       }
    </div>   
  )
}

export default PostedContents