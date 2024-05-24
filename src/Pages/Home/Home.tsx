import { BsEmojiSmile } from "react-icons/bs"
import PostedContents from "../../components/PostedContents"
import { IoIosAttach } from "react-icons/io"
import { SlPicture } from "react-icons/sl"
import { BiSearch } from "react-icons/bi"
import ProfileImage from "../../components/ProfileImage"

 
 const Home = () => {
   return (
    <div className="w-[600px] flex flex-col gap-5 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin">
            <div className="bg-white flex flex-row p-2.5">
            <div className=" flex items-center">
              <ProfileImage profileName="abel zewdu" />
                <span className=" bg-slate-100 rounded-xl p-1.5 w-[420px] flex items-center">
                  <BiSearch className='text-zinc-700' /> 
                  <input className="bg-slate-100 h-6 w-full rounded-none outline-none text-xs font-mono text-zinc-700" type='text' placeholder='what`s on your mind ?' />
                </span>
            </div>
            <div className='flex items-center gap-2.5 justify-between'>
              <span className='flex  ml-2.5'>
                <SlPicture className='icon' color='red' />
                <IoIosAttach className='icon' />
                <BsEmojiSmile className='icon' />
              </span> 
             <button className="rounded-sm px-2.5 cursor-pointer  border-zinc-400 hover:bg-zinc-500 bg-zinc-400">post</button>
            </div>
            </div>
            <PostedContents />
            </div>
   )
 }
 
 export default Home