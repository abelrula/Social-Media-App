import React from 'react'
 import { AiFillLike, AiOutlineDislike, AiOutlineLike, AiTwotoneFire } from 'react-icons/ai'
import { FcLike, FcShare} from 'react-icons/fc'
import { BsEmojiTear } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import ProfileImage from './ProfileImage'
import { IoIosClose } from 'react-icons/io'
import { profileImg } from '../data/data';
  
export const PostedContentModal = ({currentModal,setCurrentIndex,currentIndex,openLikeModal,setOpenLikeModal}) => {
  return (
    <div className=" bg-[#00000046] fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  bg-black z-50">
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
            {currentModal.image?<img className='w-6 h-6 rounded-full object-cover object-center ' src={currentModal.image[0]} />  : <ProfileImage profileName={currentModal.owner} />}
            <div> 
               <p className='text-sm font-thin text-black font-sans leading-tight'>
                {currentModal.owner}
               </p>
               <p className='text-xs font-thin text-slate-500 font-sans leading-tight'>1 hour ago</p>
                   </div>
                  </div>
                 <p className="w-5/6 font-sans text-xs ml-2.5 text-yellow-900 font-thin"  >{currentModal.titleDescription}</p>
                 <span className='flex gap-2'>
                   <img className="w-8 h-8 rounded-full object-cover object-center" src={ profileImg } />
                   <span className=' flex w-full h-12 rounded-lg border'>
                     <textarea className='w-full h-full outline-none text-sm text-start p-2' placeholder='Add Comment  ' />
                     <button className='self-end bg-slate-900 px-2 rounded-lg text-white'  >send</button>
                   </span>
                 </span>
                  <div className=' flex flex-col gap-2 h-1/2 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-thin'>
             { currentModal.comments.map((comment, i) => (
               <>
              <div className='m-auto w-11/12 flex flex-col  gap-1 border-b-[1px] border-slate-200 '>
                  <span className='flex gap-2'>
                    <img className="w-6 h-6 object-cover object-center rounded-full" src={ comment.profileImg } />
                    <p className='text-xs text-slate-900'>{ comment.owner }</p>
                  </span>
                 <p className='font-sans mr-3 text-xs ml-2.5 text-yellow-900 font-thin'>{comment.comment}</p>
              </div>
              </>
             ))}
              </div>
                 <div className="realtive flex justify-between w-10/12" >
                  {!openLikeModal && <AiFillLike color='#0046a1c7' className="hover:scale-125" onClick={()=>setOpenLikeModal(true)} />}
                 {openLikeModal ?( <span className="absolute left-0 flex items-center gap-1.5 rounded-xl px-1.5 py-0.5">
                                  <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800 hover:scale-125' ><AiTwotoneFire className='text-sm' color='blue' />0</p>
                                  <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800 hover:scale-125'><AiOutlineDislike  className='text-sm'  color='red'/>182</p>
                                  <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800 hover:scale-125'><AiOutlineLike className='text-sm'   color='green'/>27</p>
                                  <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800 hover:scale-125'> <FcLike className='text-sm' />45</p>
                                  <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800 hover:scale-125'><BsEmojiTear className='text-sm' />0</p>
                     </span>) : null}
             <span className="flex justify-between gap-2">
                 <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono' ><FaRegCommentDots color='black'  className='icon'/>comments <span className='font-mono text-xs '>{currentModal.comments.length}</span></label>
                 <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono '><FcShare className='icon' />share <span className='font-mono text-xs  '>{currentModal.share}</span></label>
             </span>
               </div>
                </div>
    </div>
         </div>
  )
}

 