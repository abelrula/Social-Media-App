import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { realtedSearchValues } from '../lib/data'
import useDebounce from "../hooks/useDebounce"
type propTypes = {
  placeholder: string,
  setFilterdContent?:React.Dispatch<React.SetStateAction<string[]>>
}

const Search = ({ placeholder,setFilterdContent }: propTypes) => {
  const [ searchContent, setSearchContent ] = useState<string>(""); 
  const value=useDebounce(2000,searchContent)
   
  useEffect(() => {
       const searchContents = realtedSearchValues.filter((values: string) => {
         return values.toLowerCase() === " "
           ? ""
           : values.toLowerCase().includes(value.toLowerCase())
      }
    )
    setFilterdContent(searchContents)
    console.log(searchContents);

   }, [value,setFilterdContent])
 
 
  return (
      <div className='w-full max-h-28 '>
          <span className=" bg-slate-100 rounded-xl p-1.5 sm:max-md:border-none sm:max-md:bg-transparent  flex items-center border-[#d9d9d9] border">
              <BiSearch className='text-zinc-700' /> 
          <input
          onChange={ (e) => { setSearchContent(e.target.value) }}
         className=" bg-slate-100 h-6 w-full  rounded-none outline-none text-xs font-mono text-zinc-700" 
         type='text' placeholder={placeholder} />
          </span>
      </div>
  )
}

export default Search