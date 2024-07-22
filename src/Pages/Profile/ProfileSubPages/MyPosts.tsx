import { BiCalendar } from "react-icons/bi"
import PostedContents from "../../../components/PostedContents"
import { imagesPostedByTheOwner } from "../../../data/data"
import { CiLocationOn } from "react-icons/ci"
import { FaGraduationCap } from "react-icons/fa"
import { MdOutlineWorkOutline } from "react-icons/md"
 const MyPosts = () => {
  
  return (
    <section className="flex gap-3 w-full mt-12 overflow-y-scroll border-t-[1px] border-slate-200">
            <div className=" w-[35%] flex flex-col gap-2">
              <h2 className="text-start font-mono text-xs text-slate-500">User Information </h2>
              <h2 className="text-start text-black font-mono text-lg">Abel Zewdu <a className="no-underline text-slate-400 text-sm">@cabel_rula123</a></h2>
            <p className="text-xs flex gap-2 text-slate-600">The best and most beatiful things in the world cannot be ssen or even touched</p>
            <p className="text-xs flex gap-2 text-slate-600"><span><CiLocationOn /></span>Living in <h6 className="text-slate-900 font-mono font-bold">Austin ,Texas</h6></p>
            <p className="text-xs flex gap-2 text-slate-600"><span><FaGraduationCap /></span>Went to <h6 className="text-slate-900 font-mono font-bold">the uniceresity of texas</h6></p>
            <p className="text-xs flex gap-2 text-slate-600"><span><MdOutlineWorkOutline /></span>Works at<h6 className="text-slate-900 font-mono font-bold"> Atlas Mesa Solar</h6></p>
            <button className="bg-sky-900 rounded-lg text-white text-sm  capitalize">Follow</button>
        <p className="text-xs flex gap-2 text-slate-500 flex-end"><span><BiCalendar /></span>Joined June 17,2024</p>
          <h3 className="text-xs  text-slate-500">user media</h3>
        <div className="flex flex-wrap gap-1 mt-4 mx-auto">
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