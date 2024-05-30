import { BiSearch } from "react-icons/bi"
import ProfileImage from "./ProfileImage"
import { SlPicture } from "react-icons/sl"
import { IoIosAttach } from "react-icons/io"
import { BsEmojiSmile } from "react-icons/bs"
 
 
const Post = () => {
  return (
     <div className="bg-white flex gap-2.5 flex-col">
     <div className="flex items-center">
      <ProfileImage profileName="abel zewdu" />
        <span className="bg-slate-100 rounded-xl p-1.5 w-[420px] flex items-center">
          <BiSearch className='text-zinc-700' /> 
          <input className="bg-slate-100 h-6 w-full rounded-none outline-none text-xs font-mono text-zinc-700" type='text' placeholder='what`s on your mind ?' />
        </span>
    </div>
    <div className='flex items-center gap-2.5 justify-between'>
      <span className='flex ml-2.5 gap-1'>
        <SlPicture className='icon' color='red' />
        <IoIosAttach className='icon' />
        <BsEmojiSmile className='icon' />
      </span> 
     <button className="rounded-lg px-2.5 cursor-pointer text-zinc-800 font-mono border-zinc-400 font-bold hover:bg-zinc-500 bg-zinc-400">post</button>
    </div>
    </div>
   )
}

export default Post