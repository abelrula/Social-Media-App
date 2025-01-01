 import PostedContents from "../../../components/PostedContents"
import { postedContentsData } from "../../../lib/data"
import ProfileDescription from "../../../components/ProfileDescription"
 const MyPosts = () => {
  
  return (
    <section className="flex flex-row-reverse gap-10 m-auto mt-12border-t-[1px] border-slate-200 w-11/12 sm:max-md:flex-col sm:max-md:gap-1 ">
          <ProfileDescription />
            <div className=" w-[65%]  flex gap-6 flex-col mt-2.5  overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin sm:max-md:w-full">
              <p className="flex self-end items-center gap-2rounded-xl  text-black  gap-1 h-fit  font-mono text-xs py-1 px-3 sm:max-md:self-start"> <h6 className="font-bold text-sm">posts</h6>102</p>
             <PostedContents  postedContents={ postedContentsData }/>
         </div> 
     {/* on profile page user  description  */}
          </section>
  )
}

export default MyPosts