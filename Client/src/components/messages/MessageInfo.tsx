import {  IoIosArrowForward, IoIosArrowRoundBack } from "react-icons/io"
import { imagesPostedByTheOwner } from "../../lib/data"
import React, { useState } from "react"
import { ViewMore } from "./ViewMore"
 
 
type propTypes = {
  toggle:boolean , 
  setToggele:React.Dispatch<React.SetStateAction<boolean>>
 }
const MessageInfo = ({toggle,setToggele}:propTypes) => {
  
  const [selectedViewMore,setSelectedViewMore]=useState<string>("")
  return (
    <>
     <div className={`flex flex-col w-1/3  ${toggle ? "sm:max-md:fixed sm:max-md:top-14 sm:max-md:left-0 sm:max-md:right-0 sm:max-md:bottom-0 sm:max-md:bg-white sm:max-md:w-full" : "sm:max-md:hidden"} ${selectedViewMore === "" ? "items-center" : "items-start"} gap-5 overflow-hidden`}>
        {selectedViewMore === ""  && ( <>
          <header className="flex  gap-2 items-center self-start">
            { toggle && <IoIosArrowRoundBack fontSize={ 43 } onClick={ () => setToggele(false) } className=" " /> } 
            <h1 className="text-slate-900  font-mono text-2xl">Chat details</h1>
          </header>
          
                <div className="w-full m-x-auto flex flex-col gap-5 px-3">
                    <h4 className="text-slate-900 font-mono text-sm flex justify-between cursor-pointer" 
                    onClick={()=>setSelectedViewMore("media")}>Shared media (284) <span className="text-[10px] flex items-center">view more <IoIosArrowForward /></span></h4>
                    <div className="flex flex-wrap gap-1 items-center">
                      {
                        imagesPostedByTheOwner.slice(0,6).map((image,i)=>(
                          <img className="w-16 h-16 rounded-lg object-cover object-center" src={image.image[0]} key={i} alt="posts" />
                        ))
                      }
                    </div>
                    <h5 className="text-slate-900 font-mono text-sm flex justify-between cursor-pointer" 
                    onClick={()=>setSelectedViewMore("files")}>Shared Files(4) <IoIosArrowForward /></h5>
                    <ul className="flex flex-col gap-3 text-start px-3">
                        <li className="text-xs text-slate-600 ">Document.pdf</li>
                        <li className="text-xs text-slate-600 ">Doctor Poiontement.pdf</li>
                        <li className="text-xs text-slate-600 ">Essay.pdf</li>
                    </ul>
                      <h5 className="text-slate-900 font-mono text-sm flex justify-between cursor-pointer" 
                      onClick={()=>setSelectedViewMore("links")}>Shared Links(4) <IoIosArrowForward /></h5>
                    <ul className="flex flex-col gap-3 text-center px-3">
                        <li className="text-xs text-slate-600 ">https://Linekeldn:esaylocal.com</li>
                        <li className="text-xs text-slate-600 ">https://Linekeldn:esaylocal.com</li>
                        <li className="text-xs text-slate-600 ">https://Linekeldn:esaylocal.com</li>
                        <li className="text-xs text-slate-600 ">https://Linekeldn:esaylocal.com</li>
                    </ul>
              </div>
        </> )}
       {selectedViewMore && <ViewMore type={selectedViewMore} setSelectedViewMore={setSelectedViewMore} />}
      </div>
      
    </>
  )
}

export default MessageInfo


