 
import {  AiOutlineDislike, AiOutlineLike, AiTwotoneFire } from 'react-icons/ai'
import { FcLike, FcShare} from 'react-icons/fc'
import { BsEmojiTear } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import ProfileImage from './ProfileImage'
import { useState } from 'react'
import { BiLike } from 'react-icons/bi'


type propsType = { items: postedContentsDataType, index: number, setCurrentIndex:  React.Dispatch<React.SetStateAction<number>> }

const PostedCard = ({items,index,setCurrentIndex}:propsType) => {
  
  const [ openLikeModal, setOpenLikeModal ] = useState<boolean>(false)
  const [slideImageNums,setSlideImageNums] =useState<number>(0)
  const [slideOnImage,setSlideOnImage] =useState<number>(0)
   const [ reactions, setReactions ] = useState<reactionsType>({
    fire: 2,
    like: 30,
    dislike: 20,
    love: 675,
    cry: 12,
   })

 
  function reactToReactions (e){
    const {name,value} = e.target
    console.log(e.target);
    
    setReactions((prev) => {
     return { ...prev,
       name:value + 1}
     })
   }
 
 
  return (
     <div className="bg-white flex justify-center flex-col gap-4 items-center border rounded-[5px] p-1.5 border-[#d9d9d9]"  key={index}>
          <div className="flex justify-start self-baseline ml-2.5 gap-2.5">
            {items.image?<img className='w-6 h-6 rounded-full object-cover object-center' src={items.image[0]} />  : <ProfileImage profileName={items.owner} />}
            <div> 
               <p className='text-sm font-thin text-black font-sans leading-tight'>
                {items.owner}
               </p>
               <p className='text-xs font-thin text-slate-500 font-sans leading-tight'>1 hour ago</p>
             </div>
          </div>
            <div className="relative w-11/12 flex flex-col gap-6" onClick={()=>setCurrentIndex(index)}>
                 <p className="w-5/6 font-sans text-xs ml-2.5 text-yellow-900 font-thin"  >{items.titleDescription}</p>
                 <div className="flex m-auto w-full rounded-sm gap-0.5 overflow-x-scroll scroll-smooth scrollbar-thin">
                      {
                        items.image.map((img,i)=>(
                          <img className='h-48 w-full object-cover object-center self-center items-end m-auto ' key={i} src={img}  />
                        ))
                      }
        </div>
         
      </div>
      <div className='relative flex flex-col w-10/12  gap-4'>
        { openLikeModal ? (
                    <span className="bg-white h-12 absolute z-50 -bottom-4 left-8 flex items-center gap-3 rounded-xl px-1.5 py-0.5">
            <button name="fire" value={reactions.fire} className='flex items-center font-thin text-xs gap-0.5 text-yellow-800 hover:scale-125' onClick={reactToReactions } >
              <AiTwotoneFire className='text-sm' color='blue' /> { reactions.fire }</button>
            <button name="dislike" value={reactions.dislike} className='flex items-center font-thin text-xs gap-0.5 text-yellow-800 hover:scale-125' onClick={reactToReactions } >
              <AiOutlineDislike  className='text-sm'  color='red' /> { reactions.dislike }</button>
            <button name="like"  value={reactions.like}className='flex items-center font-thin text-xs gap-0.5 text-yellow-800 hover:scale-125' onClick={reactToReactions } >
              <AiOutlineLike className='text-sm' color='green' />{ reactions.like } </button>
            <button name="love" value={reactions.love} className='flex items-center font-thin text-xs gap-0.5 text-yellow-800 hover:scale-125' onClick={reactToReactions } >
              <FcLike className='text-sm' />{ reactions.love }</button>
            <button name="cry" value={reactions.cry} className='flex items-center font-thin text-xs gabutton name-0.5 text-yellow-800 hover:scale-125' onClick={reactToReactions }>
              <BsEmojiTear className='text-sm' /> { reactions.cry }</button>
                     </span>) : null}
         <div className="relative flex justify-between" >
              <div className="bg-white flex items-center rounded-xl px-1.5 py-0.5">
            <span className='flex justify-between items-center'>
                         <span className='-translate-x-[0px]  text-sm bg-white rounded-full w-5 h-5'>😅</span>
                        <AiTwotoneFire className='-translate-x-[5px] text-lg bg-white rounded-full w-5 h-5' color='blue' /> 
                        <AiOutlineDislike className='-translate-x-[10px] text-lg bg-white rounded-full w-5 h-5' color='red'   />
                       <AiOutlineLike className='-translate-x-[15px] text-lg bg-white rounded-full w-5 h-5' color='green' />
            </span>
            <span className='-translate-x-[10px] font-mono text-xs font-bold'>236</span>
                </div>
                <span className=" flex justify-between gap-2">
                    <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono' ><span className='font-mono text-xs '>{items.comments.length} </span>comments </label>
                    <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono '><span className='font-mono text-xs  '>{items.share}</span>share </label>
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