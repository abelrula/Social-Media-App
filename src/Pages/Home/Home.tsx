import PostedContents from "../../components/PostedContents"
import HomeSideInfo from "../../components/HomeSideInfo"
import Post from "../../components/Post"

 
 const Home = () => {
    return (
      <div className="flex gap-8">
             <div className="w-[550px] flex flex-col gap-5 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin">
             <Post />
             <PostedContents />
             </div>
             <HomeSideInfo />
      </div>
   )
 }
 
 export default Home