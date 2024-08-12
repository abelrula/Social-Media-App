import { useState } from "react";
import HomeSideInfo from "../../components/HomeSideInfo";
import Post from "../../components/Post";
import PostedContents from "../../components/PostedContents";
import Stroies from "../../components/Stroies";
import { postedContentsData } from "../../lib/data";

const Feed = () => {
  
     const [ postedContents, setPostedContents ] = useState<postedContentsDataType[]>(postedContentsData)
    
  return (
        <div className="flex mt-3 gap-8">
             <div className="w-[550px] mt-5 flex flex-col gap-5 o overflow-y-scroll ">
                 <Stroies /> 
                 <Post />
                  <PostedContents postedContents={postedContents} />
             </div>
                 <HomeSideInfo />
        </div>
   );
};

export default Feed;
