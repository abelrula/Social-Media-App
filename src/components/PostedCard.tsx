 
import { AiOutlineDislike, AiOutlineLike, AiTwotoneFire } from 'react-icons/ai'
import { FcLike, FcShare} from 'react-icons/fc'
import { BsEmojiTear } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import ProfileImage from './ProfileImage'

const PostedCard = ({items,index,setCurrentIndex}) => {
  
  
  return (
     <div className="bg-white flex justify-center flex-col gap-4 items-center border rounded-[5px] p-1.5 border-[#d9d9d9]" onClick={()=>setCurrentIndex(index)} key={index}>
          <div className="flex justify-start self-baseline ml-2.5 gap-2.5">
            {items.image?<img className='w-6 h-6 rounded-full object-cover object-center' src={items.image[0]} />  : <ProfileImage profileName={items.owner} />}
            <div> 
               <p className='text-sm font-thin text-black font-sans leading-tight'>
                {items.owner}
               </p>
               <p className='text-xs font-thin text-slate-500 font-sans leading-tight'>1 hour ago</p>
             </div>
          </div>
            <div className="w-11/12 flex flex-col gap-6">
                 <p className="w-5/6 font-sans text-xs ml-2.5 text-yellow-900 font-thin"  >{items.titleDescription}</p>
                 <div className="flex m-auto w-full rounded-full gap-0.5">
                      {
                        items.image.map((img,i)=>(
                          <img className='h-48 w-full object-cover object-center self-center items-end m-auto ' key={i} src={img}  />
                        ))
                      }
                 </div>
            </div>
            <div className="flex justify-between w-10/12">
             <span className="flex items-center gap-1.5 rounded-xl px-1.5 py-0.5">
               <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800' ><AiTwotoneFire className='text-sm' color='blue' />0</p>
               <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800'><AiOutlineDislike  className='text-sm'  color='red'/>182</p>
               <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800'><AiOutlineLike className='text-sm'   color='green'/>27</p>
               <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800'> <FcLike className='text-sm' />45</p>
               <p className='flex items-center font-thin text-xs gap-0.5 text-yellow-800'><BsEmojiTear className='text-sm' />0</p>
             </span>
             <span className="flex justify-between gap-2">
                 <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono' ><FaRegCommentDots color='black'  className='icon'/>comments <span className='font-mono text-xs '>{items.comment}</span></label>
                 <label className='flex items-center  text-xs gap-1 text-slate-400 font-mono '><FcShare className='icon' />share <span className='font-mono text-xs  '>{items.share}</span></label>
             </span>
            </div>
    </div>

  )
}

export default PostedCard