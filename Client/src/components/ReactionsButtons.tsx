// import { AiOutlineDislike, AiOutlineLike, AiTwotoneFire } from 'react-icons/ai'

import { useState } from "react"
import {  AiOutlineLike } from "react-icons/ai"

export const ReactionsButtons = () => {
    const reactbuttons = {
    "🔥": 2,
    "👍": 30,
    "👎": 20,
    "😍": 675,
    "😰": 12,
    }
   const [reactions,setReactions]=useState(Object.entries(reactbuttons))
  
    console.log(reactions);
    
    function reactionInteractions (key_as_id: string) {
    //     setReactions(reactions.map(([ key, value ]: [ string, number ]) => (
                
        // )))
        console.log(key_as_id);
        
    }
    
    // console.log(Object.entries(reactbuttons).map(([ key, value ]) => { return { key, value } }))
    
    return(
        <span className="bg-white h-12 flex items-center gap-3 rounded-xl px-1.5 py-0.5">
         {Object.entries(reactbuttons).map(([ key, value ]:[string,number]) => (
        <button name=" fire" value={ key } onClick={()=>reactionInteractions(key)} className='flex items-center font-thin text-sm gap-0.5 text-yellow-800 hover:scale-125'>
            {key} {value}
                </button> 
       ))}
       </span>
    )

}


const ReactionPreview = () => {
  return (
        <div className="flex items-center justify-around  rounded-xl px-1.5 py-0.5 absolute bottom-16 left-[30px]">
          <span className='flex justify-between items-center'>
                         <AiOutlineLike className='-translate-x-[15px] text-lg bg-white rounded-full w-5 h-5' color='green' />
          </span>
          <span className='-translate-x-[10px] font-mono text-xs font-bold text-white'>236</span>
      </div>
  )
}

export default ReactionPreview


