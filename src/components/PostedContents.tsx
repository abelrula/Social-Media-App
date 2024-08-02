
import { useState } from 'react'
import { postedContentsData } from '../data/data'
import PostedCard from './PostedCard'
 import { AiOutlineDislike, AiOutlineLike, AiTwotoneFire } from 'react-icons/ai'
import { FcLike, FcShare} from 'react-icons/fc'
import { BsEmojiTear } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import ProfileImage from './ProfileImage'
import { IoIosClose } from 'react-icons/io'
import { profileImg } from '../data/data';
 
const PostedContents = () => {
  const [postedContents,setPostedContents]=useState(postedContentsData)
  const [currentIndex,setCurrentIndex]=useState(undefined)
     console.log(postedContentsData);
     const currentModal=postedContents[currentIndex]  
     console.log(currentModal);
   return (
    <div className="flex flex-col gap-2.5 h-screen">
        {postedContents.map((items,index)=>(
         <PostedCard  setCurrentIndex={setCurrentIndex} index={index}   items={items }  />
        )) }
      
      // modal on click on posted contenet 
       {
         currentIndex ?
           <div className=" bg-[#000000e6] fixed top-0 bottom-0 flex items-center justify-center left-0 right-0  bg-black z-50">
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
               <div className="flex flex-col gap-4">
               <IoIosClose fontSize={23} className='text-lg absolute top-0 right-0 hover:text-3xl' onClick={()=>setCurrentIndex(undefined)} />
                   <div className="flex justify-start self-baseline ml-2.5 gap-2.5">
            {postedContents[currentIndex].image?<img className='w-6 h-6 rounded-full object-cover object-center ' src={currentModal.image[0]} />  : <ProfileImage profileName={currentModal.owner} />}
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
                   <textarea className='w-full h-12 rounded-lg border text-sm text-start p-2' placeholder='Add Comment  ' />
                 </span>               
                 <div className="flex justify-between w-10/12">
             <span className="flex items-center gap-1.5 rounded-xl px-1.5 py-0.5">
               <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800' ><AiTwotoneFire className='text-sm' color='blue' />0</p>
               <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800'><AiOutlineDislike  className='text-sm'  color='red'/>182</p>
               <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800'><AiOutlineLike className='text-sm'   color='green'/>27</p>
               <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800'> <FcLike className='text-sm' />45</p>
               <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800'><BsEmojiTear className='text-sm' />0</p>
             </span>
             <span className="flex justify-between gap-2">
                 <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono' ><FaRegCommentDots color='black'  className='icon'/>comments <span className='font-mono text-xs '>{currentModal.comment}</span></label>
                 <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono '><FcShare className='icon' />share <span className='font-mono text-xs  '>{currentModal.share}</span></label>
             </span>
            </div>
                </div>
    </div>
         </div>:null
       }
    </div>  
  )
}

export default PostedContents