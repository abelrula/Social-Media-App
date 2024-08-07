import { useState } from "react"
import { groupPostedContents, postedContentsData } from "../lib/data"
import HomeSideInfo from "./HomeSideInfo"
import PostedCard from "./PostedCard"
 
const Group = () => {
 const [postedContents,setPostedContents]=useState(postedContentsData)
  const [ currentIndex, setCurrentIndex ] = useState(undefined)
  const [openLikeModal,setOpenLikeModal] =useState(false)
  return (
   
     <div className="flex gap-8">
      <div className="w-[650px]  flex flex-col gap-5 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin">
            <div className="flex flex-col gap-2.5 h-screen">
              {groupPostedContents.map((items,index)=>(
                <PostedCard  setCurrentIndex={setCurrentIndex} index={index}  items={items}   />
              ))}
            </div>  
              </div>
             <HomeSideInfo />
         </div>  
      )
}

export default Group