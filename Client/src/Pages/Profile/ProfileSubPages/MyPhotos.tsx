import { imagesPostedByTheOwner } from "../../../lib/data"
import { useState } from "react"
import { PostedContentModal, SmallerDeviceModal } from "../../../components/Modals"
import ReactionPreview from "../../../components/ReactionsButtons"
 import useScreenSize from "../../../hooks/useScreenSize"  
 
 
const MyPhotos = () => {
    const [ screenSize ] = useScreenSize()
  const [ currentIndex, setCurrentIndex ] = useState<number>(null)
  const [currentModal,setCurrentModal]=useState<postedContentsDataType>(null)
  
  return (
    <div className="container mt-3 lg:p-9 m-auto">
                 <div className="grid grid-cols-4 justify-start w-full gap-2   sm:max-md:grid-cols-3  ">
                      {
                        imagesPostedByTheOwner.map((posted,i)=>(
                         <div className="relative h-auto w-auto" key={i} onClick={ () => { setCurrentIndex(i); setCurrentModal(posted)}} >
                          <img  src={posted.image[0]} className='rounded-sm w-full h-full object-center object-cover' />
                         <ReactionPreview />
                          </div>
                        ))
                     }
                 
         </div>
        {/* modal on click on posted contenet  */}
             {
               currentIndex  && screenSize.width < 760 ?
                 <SmallerDeviceModal
                   currentModal={ currentModal }
                   setCurrentIndex={ setCurrentIndex } /> :
                 currentIndex && screenSize.width > 760 ?
                   <PostedContentModal
                     currentModal={ currentModal }
                     setCurrentIndex={ setCurrentIndex } /> :
                   "null"
                 
             }
            </div>
  )
}

export default MyPhotos