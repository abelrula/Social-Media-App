import { useState } from "react"
import { profileImg, Stories } from "../lib/data"
import { CiCamera } from "react-icons/ci"
import { PostModal } from "./Modals"
const Stroies = () => {

    const [openmodal,setOpenModal]=useState(false)
    const onclick=()=> {
          setOpenModal(prev=>!prev)
     }

    return (
        <>
           <div className="flex w-full mx-2 gap-2 sticky  bg-white">
          {
              Stories.slice(0,5).map((stories, i) => (
                  <div className="relative w-[70px] h-20" key={i}>
                          <img className=' w-full h-full rounded-xl object-cover object-center' src={stories.image} />
                           <img className='absolute top-0  w-8 h-8 rounded-full object-cover object-center' src={ stories.ProfileImage } />
                           <p className='absolute bottom-0 text-[10px] text-white' >{ stories.owner }</p>
                   </div>
                ))
          }   
          <div className="relative w-20 h-20 bg-[#000000e6] rounded-xl  cursor-pointer hover:bg-[#5e5c5c80]"
                onClick={onclick}>
                           <CiCamera className="text-2xl absolute left-1/2 self-center h-3/4 text-white" />
                           <img className='absolute top-0  w-8 h-8 rounded-full object-cover object-center' src={ profileImg} />
                           <p className='absolute bottom-0 text-[10px] text-white z-20' >Abel Zewdu</p>
                   </div>
        </div>
        {
           openmodal && <PostModal onclick={onclick} postType="Add Story" />
        }
        </>
  )
}

export default Stroies