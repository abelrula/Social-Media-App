import {  IoIosArrowForward, IoIosArrowRoundBack, IoIosClose } from "react-icons/io"
import { imagesPostedByTheOwner } from "../../lib/data"
import React, { useState } from "react"
import { ViewMore } from "./ViewMore"
import { FaFileAlt, FaLink } from "react-icons/fa"
 
 
type propTypes = {
  toggle:boolean , 
  setToggele:React.Dispatch<React.SetStateAction<boolean>>
 }
const MessageInfo = ({toggle,setToggele}:propTypes) => {
  
  const [ selectedViewMore, setSelectedViewMore ] = useState<string>("")
    const images = imagesPostedByTheOwner.slice(0, 6)
   return (
    <>
     <div className={`flex flex-col w-1/3 bg-white border border-l-slate-400 ${toggle ? "sm:max-md:fixed sm:max-md:top-0 sm:max-md:left-0 sm:max-md:right-0 sm:max-md:bottom-0 sm:max-md:bg-white sm:max-md:w-full" : "sm:max-md:hidden"} ${selectedViewMore === "" ? "items-center" : "items-start"} gap-5 overflow-hidden`}>
        {selectedViewMore === ""  && ( <>
          <header className="flex  gap-2 items-center self-start">
            { toggle && <IoIosArrowRoundBack className="md:hidden" fontSize={ 43 } onClick={ () => setToggele(false) }   /> } 
             <h1 className="text-slate-900 flex self-center font-mono text-2xl">Chat details</h1>
          </header>
          
                <div className="w-full m-x-auto flex flex-col gap-5 px-3">
                    <h4 className="text-slate-900 font-mono text-sm flex justify-between cursor-pointer" 
                    onClick={()=>setSelectedViewMore("media")}>Shared media (284) <span className="text-[10px] flex items-center">view more <IoIosArrowForward /></span></h4>
                    <div className="flex flex-wrap gap-2 justify-center ">
                      {
                        images.map((image,i)=>(
                          <img className="w-16 h-16 rounded-lg object-cover object-center" src={ image.image[ 0 ] } key={ i } alt="posts"
                             />
                        ))
                
                      }
                    </div>
                    <h5 className="text-slate-900 font-mono text-sm flex justify-between cursor-pointer border-t-[1px] border-t-slate-600" 
                    onClick={()=>setSelectedViewMore("files")}>Shared Files(4) <IoIosArrowForward /></h5>
                    <ul className="flex flex-col gap-3 text-start px-3 cursor-pointer">
                        <li className="text-xs text-slate-900  flex justify-between border border-b-slate-400 rounded-lg ">Document.pdf <FaFileAlt /></li>
                        <li className="text-xs text-slate-900  flex justify-between border border-b-slate-400 rounded-lg ">Doctor Poiontement.pdf <FaFileAlt /></li>
                        <li className="text-xs text-slate-900  flex justify-between border border-b-slate-400 rounded-lg ">Essay.pdf <FaFileAlt /></li>
                    </ul>
                      <h5 className="text-slate-900 font-mono text-sm flex justify-between cursor-pointer border-t-[1px] border-t-slate-600" 
                      onClick={()=>setSelectedViewMore("links")}>Shared Links(4) <IoIosArrowForward /></h5>
                    <ul className="flex flex-col gap-3 text-center px-3 cursor-pointer">
                        <li className="text-xs text-slate-900 flex justify-between border border-b-slate-400 rounded-lg  ">https://Linekeldn:esaylocal.com <FaLink /></li>
                        <li className="text-xs text-slate-900 flex justify-between border border-b-slate-400 rounded-lg  ">https://Linekeldn:esaylocal.com <FaLink /></li>
                        <li className="text-xs text-slate-900 flex justify-between border border-b-slate-400 rounded-lg  ">https://Linekeldn:esaylocal.com <FaLink /></li>
                        <li className="text-xs text-slate-900 flex justify-between border border-b-slate-400 rounded-lg  ">https://Linekeldn:esaylocal.com <FaLink /></li>
                    </ul>
              </div>
        </> )}
       {selectedViewMore && <ViewMore type={selectedViewMore} setSelectedViewMore={setSelectedViewMore} />}
      </div>
      
    </>
  )
}

export default MessageInfo


