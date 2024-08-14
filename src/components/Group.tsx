import { useState } from "react"
import {  groupPostedContents } from "../lib/data"
import HomeSideInfo from "./HomeSideInfo"
import PostedContents from "./PostedContents"
 
const Group = () => {
 const [postedContents,setPostedContents]=useState(groupPostedContents)
  return (
   
     <div className="flex mt-3 gap-8">
      <div className="w-[650px]  flex flex-col gap-5 overflow-scroll">
            <PostedContents postedContents={postedContents} />
      </div>  
             <HomeSideInfo />
         </div>  
      )
}

export default Group