import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

type propTypes = {
    placeholder:string
}
const Search = ({placeholder}:propTypes) => {
  const [searchContent, setSearchContent] = useState(""); 
    return (
      <div>
          <span className=" bg-slate-100 rounded-xl p-1.5 md:max-lg:w-[280px] sm:max-md:border-none sm:max-md:bg-transparent  flex items-center border-[#d9d9d9] border">
              <BiSearch
                  className='text-zinc-700' /> 
          <input
            onChange={ (e) => { setSearchContent(e.target.value) } }
         className=" bg-slate-100 h-6 w-full sm:max-md:hidden rounded-none outline-none text-xs font-mono text-zinc-700" 
         type='text' placeholder={placeholder} />
          </span>
      </div>
  )
}

export default Search