import { useState } from "react"
 import HomeSideInfo from "./HomeSideInfo"
import PostedContents from "./PostedContents"
import { groupsDatas } from "../lib/data"
 
const Group = () => {
      const [ groupData, setPostedContents ] = useState<groupData>(groupsDatas[0])
      
  return (
   
     <div className="flex mt-3 gap-8">
              <div className="w-[650px]  flex flex-col gap-5 overflow-scroll">
                  <section className="relative">
               <img className=" w-full h-[210px] object-cover" src={ groupData.CoverImg } />
               <div className="flex items-start relative justify-between">
                   <span  className="flex gap-2.5 relative ">
                        <img className="w-24 h-24 rounded-full object-cover absolute -top-10 left-3.5 object-center z-10 "   src={groupData.ProfileImg}/>
                      <span className="relative top--3.5 left-[120px]">
                         <p className="font-sans font-bold text-xl">{groupData.groupName}</p>
                     <p className="flex   items-center gap-2rounded-xl  text-black  gap-1 h-fit  font-mono text-xs py-1 px-3"> <h6 className="font-bold text-sm">follwers</h6>{groupData.followers}</p>
                       </span>
                  </span>
                                <div />
                          </div>            
                    </section>
            <PostedContents postedContents={groupData.posetdContents} />
      </div>  
             <HomeSideInfo />
         </div>  
      )
}

export default Group