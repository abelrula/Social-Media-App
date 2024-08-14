 
import {  AiOutlineDislike, AiOutlineLike, AiTwotoneFire } from 'react-icons/ai'
import { FcLike, FcShare} from 'react-icons/fc'
import { BsEmojiTear } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import ProfileImage from './ProfileImage'
import { useState } from 'react'
import { BiLike } from 'react-icons/bi'
import Reactions, { ReactionsButtons } from './Reactions'


type propsType = { postedItems: postedContentsDataType, index: number, setCurrentIndex:  React.Dispatch<React.SetStateAction<number>> }

const PostedCard = ({postedItems,index,setCurrentIndex}:propsType) => {
  
  const [ openLikeModal, setOpenLikeModal ] = useState<boolean>(false)
  const [slideImageNums,setSlideImageNums] =useState<number>(0)
  const [slideOnImage,setSlideOnImage] =useState<number>(0)
  
 
  return (
     <div className="bg-white flex justify-center flex-col gap-4 items-center border rounded-[5px] p-1.5 border-[#d9d9d9]" >
          <div className="flex justify-start self-baseline ml-2.5 gap-2.5">
        { postedItems.image ? <img className='w-6 h-6 rounded-full object-cover object-center' src={ postedItems.image[ 0 ] } /> :
          <ProfileImage profileName={ postedItems.owner } /> }
            <div> 
               <p className='text-sm font-bold text-slate-700 font-sans leading-tight'>
                {postedItems.owner}
               </p>
               <p className='text-xs font-thin text-slate-500 font-sans leading-tight'>1 hour ago</p>
             </div>
          </div>
            <div className="relative w-11/12 flex flex-col gap-6" onClick={()=>setCurrentIndex(index)}>
                 <p className="w-5/6 font-sans text-xs ml-2.5 text-black font-normal"  >{postedItems.titleDescription}</p>
                 <div className="flex w-full rounded-sm gap-0.5 overflow-x-scroll ">
                      <img className={`h-64  ${postedItems.image.length > 1 ?"w-10/12" :"w-full"} object-cover self-center items-end m-auto object-top`}  src={postedItems.image[0]}  />
               { postedItems.image.length > 1 &&
                       <div className="relative flex w-1/4 h-[255px] flex-col rounded-md  gap-1 overflow-hidden ">
                                  {
                                    postedItems.image.slice(0,3).map((img,i)=>(
                                      <img className='w-full h-auto object-cover self-center items-end object-top' key={i} src={img}  />
                                      ))
                                  }
                                    <span className='absolute top-0 b-0 h- !opacity-75 rounded-md w-full h-full bg-black text-white flex justify-center items-center hover:opacity-55 cursor-pointer'>
                                           { postedItems.image.length} +
                                    </span>
                      </div>}
           </div>
         
      </div>
     
      <div className='relative flex flex-col w-10/12  gap-4'>
        { openLikeModal ?
          <div className="absolute z-50 -top-4 left-2">
             <ReactionsButtons />
          </div>
          : null }
         <div className="relative flex justify-between" >
          <div className="bg-white flex items-center rounded-xl px-1.5 py-0.5">
           <Reactions />
                </div>
                <span className=" flex justify-between gap-2">
                    <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono' ><span className='font-mono text-xs '>{postedItems.comments.length} </span>comments </label>
                    <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono '><span className='font-mono text-xs  '>{postedItems.share}</span>share </label>
                </span>
          </div>
            <hr className='h-0.5 w-full'/>
              <div className="flex justify-between" >
                <BiLike className=" hover:scale-125" onClick={()=>setOpenLikeModal(prev=>!prev)} />          
                 <label  className='flex items-center  text-xs gap-1 text-slate-400 font-mono'  onClick={()=>setCurrentIndex(index)} ><FaRegCommentDots color='black'  className='icon'/>Comments</label>
                 <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono '><FcShare className='icon' />share </label>
        </div> 
         </div>
    </div>
    
  )
}

export default PostedCard