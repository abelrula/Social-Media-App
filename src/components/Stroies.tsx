import { Stories } from "../lib/data"
 import React from "react"
const Stroies = () => {
  return (
      <div className="flex w-full mx-2 gap-3 sticky  bg-white">
          {
              Stories.slice(0,7).map((stories, i) => (
                  <div className="relative w-20 h-20" key={i}>
                          <img className=' w-full h-full rounded-xl object-cover object-center' src={stories.image} />
                           <img className='absolute top-0  w-8 h-8 rounded-full object-cover object-center' src={ stories.ProfileImage } />
                           <p className='absolute bottom-0 text-tiny text-white' >{ stories.owner }</p>
                   </div>
                ))
       }   
      </div>
  )
}

export default Stroies