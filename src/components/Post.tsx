import { SlPicture } from "react-icons/sl"
import { BsEmojiSmile } from "react-icons/bs"
 import TextBox from "./TextBox"
import Emojies from "./Emojies"
 

const Post = () => {
 
  return (
     <div className="bg-white flex gap-2.5 flex-col rounded-[5px] border-[#d9d9d9] border p-2.5">
     <div className="w-auto ">
        <TextBox  placeholder="what`s on your mind ?" buttonName="post"/> 
     </div>
     
    </div>
   )
}

export default Post