import { useEffect, useState } from 'react'
import { profileImg } from '../lib/data'
import { SlPicture } from 'react-icons/sl'
import Emojies from './Emojies'
 import 'react-quill/dist/quill.snow.css';  
 
type propsTypes = {
  placeholder: string,
  buttonName: string,
  onclick?: (e) => void,
  style?:string

}

const TextBox = ({ placeholder,buttonName,onclick,style}: propsTypes) => {
 
   const [ msg, setMsg ] = useState('')
  useEffect(() => {
  
  //  textFocusRef.current.focus()
 }, [])
   console.log(msg)
  return (
    <div className={`flex gap-2 self-center bg-white ${style} shadow-[0_4px_9px_-4px_#3b71ca] w-3/4 ` } >
        <img className="w-8 h-8 rounded-full object-cover object-center" src={ profileImg } />
         <div className='relative flex flex-col w-full   rounded-lg border border-slate-400'>
        <textarea    className='w-full h-full outline-none text-xs text-start p-2' value={ msg }  onChange={ (e) => setMsg(e.target.value) } placeholder={`${placeholder}😀`}  />
        <span className={ `ml-2 flex items-center gap-1 z-50` }>
                {buttonName.includes("reply comment")  && <SlPicture className='icon' color='red' />}
                  <Emojies setMsg={setMsg} />       
             </span> 
        </div>
         <button  onClick={onclick} className='self-center bg-slate-900  h-1/2 px-2 text-xs rounded-lg text-white font-bold'  >{buttonName}</button>
    </div>
  )
}

export default TextBox