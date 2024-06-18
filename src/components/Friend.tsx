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
    <PiDotsThree onClick={()=>{setOpen(true);setTimeout(() => { setOpen(false) }, 5000);
 } } />
      {open && 
       <div className="flex flex-col gap-1 items-center w-24 absolute left-40 -top-9">
          <span className=" bg-gray-900 hover:bg-gray-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">Un Follow</span>
          <span className=" bg-gray-900 hover:bg-gray-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">Un Follow</span>
          <span className=" bg-gray-900 hover:bg-gray-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">
          See Profile</span>
        </div>
        }
</div>
  )
}

export default Friend