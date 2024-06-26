
import { postedContentsData } from '../data/data'
import PostedCard from './PostedCard'
 
 
const PostedContents = () => {
 
   return (
    <div className="flex flex-col gap-2.5 h-screen">
        {postedContentsData.map((items)=>(
         <PostedCard  items={items }  />
        ))}
    </div>  
 
  )
}

export default PostedContents