import { useState } from "react";
 import { PiDotsThree } from "react-icons/pi";
import { useLocation } from "react-router-dom";
 
type props = {
  name: string,
  profile: string,
  mutualFriendes: number,
}
const Friend = ({name,profile,mutualFriendes}:props) => {
  const [ open, setOpen ] = useState(false)
  const { pathname } = useLocation()
  console.log(pathname);
  
  return (
       <div className=" max-w-64  flex gap-1.5 items-center justify-between rounded-xl  relative border border-neutral-100 p-2.5 sm:max-md:p-0.5 sm:max-md:gap-0.5   sm:max-md:flex-col ">
         <div className="flex justify-between">
            <img src={profile} aria-placeholder="avatar" className="w-12 h-12 rounded-full object-cover sm:max-md:w-7 sm:max-md:h-7 "/>
                <span className="flex flex-col">
                  <p className="text-start font-mono text-xs text-slate-700">{name}</p>
                  <p className="text-start font-mono text-xs text-slate-500">{mutualFriendes} mutual friends</p>
                </span>
           </div>
      
                {pathname.includes("profile") && <PiDotsThree onClick={()=>{setOpen(true);setTimeout(() => { setOpen(false) }, 5000);
            } } />}
     
             {/* will render if we are in our profile page viewing our friends */}
              { open && pathname.includes("profile") &&
                (<div className="flex flex-col gap-1 items-center w-24 absolute right-0 -top-9">
                  <span className=" bg-gray-900 hover:bg-gray-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">Un Follow</span>
                  <span className=" bg-gray-900 hover:bg-gray-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">Un Follow</span>
                  <span className=" bg-gray-900 hover:bg-gray-800 hover:cursor-pointer px-2 w-full py-1 text-white rounded-xl text-start font-mono text-xs">
                    See Profile</span>
                </div>)
              }
              {/* will render if we are in our friends pageto explore friends */}
              { pathname === "/friends" &&
                (<div className="flex flex-col gap-1 items-center  sm:flex-row">
                  <span className=" bg-sky-900 hover:bg-gray-800 hover:cursor-pointer px-1 w-full py-1 text-white rounded-xl text-center font-mono  text-[9px]"> Follow</span>
                  <span className=" bg-sky-900 hover:bg-gray-800 hover:cursor-pointer px-1 w-full py-1 text-white rounded-xl text-center font-mono  text-[9px] text-nowrap"> Add Friend</span>
                </div>) }
       </div>
   )
}

export default Friend