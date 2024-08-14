import { useState } from 'react'
import { profileImg } from '../lib/data'
import { SlPicture } from 'react-icons/sl'
import Emojies from './Emojies'
  
type propsTypes = {
  placeholder: string,
  buttonName: string,
  onclick?:()=>void

}

const TextBox = ({ placeholder,buttonName,onclick }: propsTypes) => {
 
  const [ msg, setMsg ] = useState('')
  
  
  return (
      <span className='flex gap-2'>
        <img className="w-8 h-8 rounded-full object-cover object-center" src={ profileImg } />
         <span className='relative flex flex-col w-full h-20 rounded-lg border'>
        <textarea className='w-full h-full outline-none text-sm text-start p-2' value={ msg } onClick={onclick} onChange={ (e) => setMsg(e.target.value) } placeholder={`${placeholder}😀`}  />
            <span className={`ml-2 flex items-center gap-1 z-50`}>
                 <SlPicture className='icon' color='red' />
                  <Emojies setMsg={setMsg} />       
             </span> 
        </span>
         <button  onClick={onclick} className='self-end bg-slate-900 px-2 rounded-lg text-white'  >{buttonName}</button>
    </span>
  )
}

export default TextBox