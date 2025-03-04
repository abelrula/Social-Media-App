import { useEffect, useRef, useState } from 'react'
import { profileImg } from '../lib/data'
import { SlPicture } from 'react-icons/sl'
import Emojies from './Emojies'
 import 'react-quill/dist/quill.snow.css';  
 
type propsTypes = {
  placeholder: string,
  buttonName: string,
  setPreviewUrl?:React.Dispatch<string[]>,
  onclick?: (e) => void,
  style?:string

}

const TextBox = ({ placeholder,buttonName,setPreviewUrl,onclick,style}: propsTypes) => {
 
    const fileRef = useRef<HTMLInputElement>()
    const [ msg, setMsg ] = useState('')
  const OpenFile = () => {
    fileRef.current.click()
   }
  function readAndPreview (e) {
    const files = e.target.files
    if (files) {
             
      const Arrfiles = Array.from(files).map((img: Blob) => URL.createObjectURL(img))
      console.log(Arrfiles);
      setPreviewUrl(Arrfiles)
    }
  }
  useEffect(() => {
  
  //  textFocusRef.current.focus()
 }, [])
   console.log(msg)
  return (
    <div className={`flex gap-2 self-center bg-white w-full ${style} shadow-[0_4px_9px_-4px_#3b71ca] w-3/4 ` } >
        <img className="w-8 h-8 rounded-full object-cover object-center" src={ profileImg } />
         <div className='relative flex flex-col w-full   rounded-lg border border-slate-400'>
        <textarea    className='w-full h-full outline-none text-xs text-start p-2' value={ msg }  onChange={ (e) => setMsg(e.target.value) } placeholder={`${placeholder}😀`}  />
        <span className={ `ml-2 flex items-center gap-1 z-30` }>
          { buttonName !== "comment" && buttonName !== "reply" && <SlPicture className='z-10' color='red' onClick={OpenFile} />}
            <input type='file' onChange={readAndPreview} className='hidden' multiple={true} ref={fileRef}  />   
                  <Emojies setMsg={setMsg} />       
             </span> 
        </div>
         <button  onClick={onclick} className='self-center bg-slate-900  h-1/2 px-2 text-xs rounded-lg text-white font-bold'  >{buttonName}</button>
    </div>
  )
}

export default TextBox