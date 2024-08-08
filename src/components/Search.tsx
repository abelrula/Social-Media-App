import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

type propTypes = {
    placeholder:string
}
const Search = () => {
  const [searchContent, setSearchContent] = useState(""); 
    return (
      <div>
          <span className="bg-slate-100 rounded-xl p-1.5 w-[420px] flex items-center border-[#d9d9d9] border">
              <BiSearch
                  className='text-zinc-700' /> 
          <input onChange={(e)=>{setSearchContent(e.target.value)}}
         className="bg-slate-100 h-6 w-full rounded-none outline-none text-xs font-mono text-zinc-700" type='text' placeholder='search' />
          </span>
      </div>
  )
}

export default Search