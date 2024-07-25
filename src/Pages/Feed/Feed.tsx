import HomeSideInfo from "../../components/HomeSideInfo";
import Post from "../../components/Post";
import PostedContents from "../../components/PostedContents";
import Stroies from "../../components/Stroies";

const Feed = () => {
    
  return (
        <div className="flex gap-8">
             <div className="w-[550px] flex flex-col gap-5 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin">
                 <Stroies /> 
                 <Post />
                  <PostedContents />
             </div>
                 <HomeSideInfo />
        </div>
   );
};

export default Feed;
