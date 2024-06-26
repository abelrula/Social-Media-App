import { groupPostedContents } from "../data/data"
import HomeSideInfo from "./HomeSideInfo"
import PostedCard from "./PostedCard"

const Group = () => {
  return (
   
     <div className="flex gap-8">
      <div className="w-[650px]  flex flex-col gap-5 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin">
            <div className="flex flex-col gap-2.5 h-screen">
              {groupPostedContents.map((items)=>(
                <PostedCard  items={items }  />
              ))}
            </div>  
              </div>
             <HomeSideInfo />
         </div>  
      )
}

export default Group