import React from 'react'
import { profileImg } from '../lib/data'

const TextBox = ( {placeholder}) => {
  return (
     <span className='flex gap-2'>
                   <img className="w-8 h-8 rounded-full object-cover object-center" src={ profileImg } />
                   <span className=' flex w-full h-12 rounded-lg border'>
                     <textarea className='w-full h-full outline-none text-sm text-start p-2' placeholder={placeholder} />
                     <button className='self-end bg-slate-900 px-2 rounded-lg text-white'  >send</button>
                   </span>
    </span>
  )
}

export default TextBox