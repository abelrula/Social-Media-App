import { useState } from "react"
  import {ReplyOnComment} from "./Modals"
 
const Comments = ({ comments,width="max-w-80 gap" }) => { 
  
  const [ replyComment, setReplyComment ] = useState(false)
 
   
  return (
      <>
           <div className={`flex flex-col ${width} gap-.5 h-1/2 overflow-scroll pt-1 rounded-lg border border-x-sky-800`}>
                 {comments?.map((comment, i) => (
               <>
                     <div key={ i}  className='m-auto w-10/12 flex flex-col   border-b-[1px] border-slate-200 '>
                  <span className='flex gap-2 items-center'>
                    <img className="w-6 h-6 object-cover object-center rounded-full" src={ comment.profileImg } />
                    <p className='text-xs text-black'>{ comment.owner }</p>
                       <p className='text-[9px] text-start font-thin text-slate-500 font-sans leading-tight  '>1 hour ago</p>

                  </span>
                 <p className='font-sans mr-3 text-xs px-3 ml-2.5 text-yellow-900 font-thin'>{comment.comment}</p>
                     {!replyComment &&  <button className="text-xs self-end " onClick={ () => setReplyComment((prev)=>!prev) }> reply</button>}
                       {
                         replyComment && <ReplyOnComment setReplyComment={ setReplyComment } comment={comment} />
                       }
            </div>
              </>
             ))}
                </div>
      </>
  )
}

export default Comments