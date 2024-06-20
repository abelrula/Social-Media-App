import { useState } from "react";
 import { PiDotsThree } from "react-icons/pi";
import { useLocation } from "react-router-dom";
type props= {
  name: string,
  profile: string,
  mutualFriendes: number,
}
const Friend = ({name,profile,mutualFriendes}:props) => {
  const [ open, setOpen ] = useState(false)
  const {pathname} =useLocation()
  return (
    <div className="w-72 h-16  flex gap-2.5 items-center relative border border-neutral-100 p-2.5  rounded-xl ">
    <img src={profile} aria-placeholder="avatar" className="w-12 h-12 rounded-full object-cover"/>
    <span className="flex flex-col">
      <p className="text-start font-mono text-xs text-slate-700">{name}</p>
      <p className="text-start font-mono text-xs text-slate-500">{mutualFriendes} mutaul friends</p>
    </span>
    {pathname.includes("profile") && <PiDotsThree onClick={()=>{setOpen(true);setTimeout(() => { setOpen(false) }, 5000);
 } } />}
      {open &&  pathname.includes("profile")  ?(
       <div className="flex flex-col gap-1 items-center w-24 absolute left-40 -top-9">
          <span className=" bg-gray-900 hover:bg-gray-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">Un Follow</span>
          <span className=" bg-gray-900 hover:bg-gray-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">Un Follow</span>
          <span className=" bg-gray-900 hover:bg-gray-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">
          See Profile</span>
        </div>) : (
          <div className="flex flex-col gap-1 items-center ">
          <span className=" bg-sky-900 hover:bg-gray-800 hover:cursor-pointer px-1 w-full py-1 text-white rounded-xl text-start font-mono  text-[9px]"> Follow</span>
          <span className=" bg-sky-900 hover:bg-gray-800 hover:cursor-pointer px-1 w-full py-1 text-white rounded-xl text-start font-mono  text-[9px]"> Add Friend</span>
         
        </div>
        )
        }
</div>
  )
}

export default Friend