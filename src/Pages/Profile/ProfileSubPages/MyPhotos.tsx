import { AiOutlineDislike } from "react-icons/ai"
import { FcLike} from "react-icons/fc"
import { postedPhoto } from "../../../lib/data"

 
const MyPhotos = () => {
  return (
    <div className="container mt-3">
                 <div className="flex flex-wrap w-full rounded-full gap-2 m-auto ">
                      {
                        postedPhoto.map((posted,i)=>(
                         <div className="relative h-48 w-52 " key={i}  >
                          <img  src={posted.image} className='rounded-sm w-full h-full object-center object-cover' />
                            <span className="w-10/12 flex items-center justify-between  rounded-xl px-1.5 py-0.5 absolute bottom-16 left-[30px]">
                              { posted.reactions.hate > 0 && <p className='flex items-center font-thin text-xs gap-0.5 text-white'><AiOutlineDislike  color="yellow" size={27} className='text-sm'  />182</p> }
                              { posted.reactions.love > 0 && <p className='flex items-center font-thin text-xs gap-0.5 text-white'> <FcLike color="red" size={ 27 } className='text-sm' />45</p> }
                            </span>
                          </div>
                        ))
                     }
                 
         </div>
      
            </div>
  )
}

export default MyPhotos