import React from 'react'
 import { AiFillLike, AiOutlineDislike, AiOutlineLike, AiTwotoneFire } from 'react-icons/ai'
import { FcLike, FcShare} from 'react-icons/fc'
import { BsEmojiTear } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import ProfileImage from './ProfileImage'
import { IoIosClose } from 'react-icons/io'
import { profileImg } from '../lib/data'
import Comments from './Comments'
import TextBox from './TextBox'
  
export const PostedContentModal = ({currentModal,setCurrentIndex,currentIndex,openLikeModal,setOpenLikeModal}) => {
 
  return (
    <div className=" bg-[#000000ad] fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  z-50">
            <div className="relative bg-white w-[820px] h-[450px] flex gap-4 border rounded-[5px] p-1.5 border-[#d9d9d9] z-50" >
               <div className="w-11/12 flex h-auto flex-col gap-6 overflow-hidden">
                 <div className="flexw-full rounded-full gap-0.5 ">
                      {
                        currentModal.image.map((img,i)=>(
                          <img className='max-h-[430px] w-full object-cover object-center self-center items-end  h-auto' key={i} src={img}  />
                        ))
                      }
                 </div>
               </div>
               <div className="w-full flex flex-col gap-4">
               <IoIosClose fontSize={23} className='text-lg absolute top-0 right-0 hover:text-3xl' onClick={()=>setCurrentIndex(undefined)} />
                   <div className="flex justify-start self-baseline ml-2.5 gap-2.5">
            { currentModal.image ?
              <img className='w-6 h-6 rounded-full object-cover object-center ' src={ currentModal.image[ 0 ] } /> : <ProfileImage profileName={ currentModal.owner } /> }
            <div> 
               <p className='text-sm font-thin text-black font-sans leading-tight'>
                {currentModal.owner}
               </p>
               <p className='text-xs font-thin text-slate-500 font-sans leading-tight'>1 hour ago</p>
            </div>
              </div>
                 <p className="w-5/6 font-sans text-xs ml-2.5 text-yellow-900 font-thin"  >{currentModal.titleDescription}</p>
               <TextBox placeholder="add comments" />      
              <Comments comments={ currentModal.comments } />
             
                </div>
    </div>
         </div>
  )
}

 