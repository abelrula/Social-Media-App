import { useEffect, useRef, useState } from 'react'
import { profileImg } from '../lib/data'
import { SlPicture } from 'react-icons/sl'
import Emojies from './Emojies'
  
type propsTypes = {
  placeholder: string,
  buttonName: string,
  onclick?:(e)=>void

}

const TextBox = ({ placeholder,buttonName,onclick }: propsTypes) => {
 
   const [ msg, setMsg ] = useState('')

 useEffect(() => {
  
  //  textFocusRef.current.focus()
 }, [])
   
  return (
    <span className='flex gap-2' >
        <img className="w-8 h-8 rounded-full object-cover object-center" src={ profileImg } />
         <span className='relative flex flex-col w-full   rounded-lg border'>
        <textarea    className='w-full h-full outline-none text-xs text-start p-2' value={ msg }  onChange={ (e) => setMsg(e.target.value) } placeholder={`${placeholder}😀`}  />
            <span className={`ml-2 flex items-center gap-1 z-50`}>
                {buttonName.includes("reply comment")  && <SlPicture className='icon' color='red' />}
                  <Emojies setMsg={setMsg} />       
             </span> 
        </span>
         <button  onClick={onclick} className='self-end bg-slate-900 px-2 text-xs rounded-lg text-white'  >{buttonName}</button>
    </span>
  )
}

export default TextBox