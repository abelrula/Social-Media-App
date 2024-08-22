 import { useState } from "react"
import TextBox from "./TextBox"
import { PostModal } from "./Modals"
 

const Post = () => {
 
   const [openmodal,setOpenModal]=useState(false)
   const onclick=()=> {
          setOpenModal(prev=>!prev)
    }
  return (
     <>
     <div className="bg-white flex gap-2.5 flex-col rounded-[5px] border-[#d9d9d9] border p-2.5">
     <div className="w-auto ">
           <TextBox  placeholder="what`s on your mind ?" buttonName="post" onclick={onclick}  /> 
     </div>
        </div>
        {
           openmodal && <PostModal onclick={onclick} />
        }
     </>
   )
}

export default Post