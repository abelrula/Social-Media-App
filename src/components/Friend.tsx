import { useState } from "react";
import img1 from "../assets/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
import { PiDotsThree } from "react-icons/pi";const Friend = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-52 h-16 rounded-lg flex gap-1.5 items-center relative">
    <img src={img1} aria-placeholder="avatar" className="w-12 h-12 rounded-full object-center"/>
    <span className="flex flex-col">
      <p className="text-start font-mono text-xs text-slate-700">marci michael</p>
      <p className="text-start font-mono text-xs text-slate-500">12 mutaul friends</p>
    </span>
    <PiDotsThree onClick={()=>{setOpen(true);setTimeout(() => { setOpen(false) }, 100);
 } } />
      {open && 
       <div className="flex flex-col gap-1 items-center w-24 absolute left-40 -top-9">
          <span className=" bg-sky-900 hover:bg-sky-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">un follow</span>
          <span className=" bg-sky-900 hover:bg-sky-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">un follow</span>
          <span className=" bg-sky-900 hover:bg-sky-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">see profile</span>
        </div>
        }
</div>
  )
}

export default Friend