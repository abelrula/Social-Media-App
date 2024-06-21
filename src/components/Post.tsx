import { BiSearch } from "react-icons/bi"
import ProfileImage from "./ProfileImage"
import { SlPicture } from "react-icons/sl"
import { IoIosAttach } from "react-icons/io"
import { BsEmojiSmile } from "react-icons/bs"
import { useState } from "react"
import Emojii from "./Emojii"
 

const Post = () => {
 
  const [postContenet, setPostContenet] = useState(""); 

   console.log(postContenet);
   
  return (
     <div className="bg-white flex gap-2.5 flex-col rounded-[5px]   border-[#d9d9d9] border p-2.5">
     <div className="flex items-center">
      <ProfileImage profileName="abel zewdu" />
       
        <span className="bg-slate-100 rounded-xl p-1.5 w-[420px] flex items-center border-[#d9d9d9] border">
          <BiSearch className='text-zinc-700' /> 
          <input onChange={(e)=>{setPostContenet(e.target.value)}}
         className="bg-slate-100 h-6 w-full rounded-none outline-none text-xs font-mono text-zinc-700" type='text' placeholder='what`s on your mind ?' />
          </span>
    </div>
    <div className='flex items-center gap-2.5 justify-between'>
      <span className='flex ml-2.5 gap-1'>
        <SlPicture className='icon' color='red' />
        <IoIosAttach className='icon' />
        <BsEmojiSmile  className='icon' />        
      </span> 
     <button className="rounded-lg px-2.5 cursor-pointer text-white font-mono border-zinc-400   hover:bg-zinc-500 bg-cyan-950">post</button>
    </div>
    </div>
   )
}

export default Post