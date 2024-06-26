import PostedContents from "../../../components/PostedContents"
import { imagesPostedByTheOwner } from "../../../data/data"
 const MyPosts = () => {
  
  const editTypes:string[]=["AddTodos","Edit details","Add Hobies"]
  return (
    <section className="flex gap-3 w-full mt-12 overflow-y-scroll border-t-[1px] border-slate-200">
            <div className=" w-[35%] ">
              <h2 className="text-start font-mono">Basic Info</h2>
              <ul className="flex  flex-col mt-4 gap-1 w-[80%]">
                 {
                  editTypes.map((item,i)=>(
                    <li className="text-center w-full text-gray-700 rounded-2xl font-mono border-2" key={i}>{item}</li>
                  ))
                 }
              </ul>
              <div className="flex flex-wrap gap-1 mt-4">
                {
                  imagesPostedByTheOwner.map((image,i)=>(
                    <img className="w-36 h-32 rounded-lg object-cover object-center" src={image} key={i} alt="posts" />
                  ))
                }
              </div>
            </div>
            <div className=" w-[65%]  flex gap-6 flex-col mt-2.5  overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin ">
             <PostedContents />
            </div> 
          </section>
  )
}

export default MyPosts