import { AiOutlineDislike, AiOutlineLike, AiTwotoneFire } from "react-icons/ai"
import { FcLike} from "react-icons/fc"
import { imagesPostedByTheOwner } from "../../../lib/data"
import { useState } from "react"
import { PhotoModal } from "../../../components/Modals"
import Reactions from "../../../components/Reactions"
 
 
const MyPhotos = () => {
  const [openModal,setOpenModal]=useState(false)
  const [posted,setPosted]=useState<imagesPostedByTheOwner>(null)
  
  return (
    <div className="container mt-3">
                 <div className="flex flex-wrap w-full rounded-full gap-2 m-auto ">
                      {
                        imagesPostedByTheOwner.map((posted,i)=>(
                         <div className="relative h-48 w-52 " key={i} onClick={ () => { setOpenModal(true); setPosted(posted)}} >
                          <img  src={posted.image} className='rounded-sm w-full h-full object-center object-cover' />
                         <Reactions />
                          </div>
                        ))
                     }
                 
         </div>
         { openModal && <PhotoModal posted={posted} setOpenModal={setOpenModal} />}
            </div>
  )
}

export default MyPhotos