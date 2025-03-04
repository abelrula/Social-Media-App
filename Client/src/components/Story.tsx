import { NavLink, useNavigate } from "react-router-dom"
 import { useState } from "react";
import ImageSlider from "./ImageSlider";
import { Stories } from "../lib/data";
import { IoCloseOutline } from "react-icons/io5";

const Story = () => {
  // const [stories,setStories]=useState(Stories)  
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const navigate=useNavigate()
   const selectedObj: React.CSSProperties = {
       color: "black",
       background: "rgb(255 255 255)",
       borderRadius: "5px"
    };
  
  
            const img = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
    return (
      <div className="flex gap-2 border-x h-screen fixed bg-black top-0 left-0 right-0 sm:max-md:flex-col sm:flex items-center justify-between sm:max-md:h-auto p-3 border-b-zinc-200 border z-50" 
      >
        <IoCloseOutline className="absolute right-5 text-3xl top-3 text-white z-50 cursor-pointer hover:text-4xl sm:max-md:hidden" onClick={ () => navigate("..")}   />
        <div className="sm:max-md:w-full md:min-w-40 md:w-auto bg-black md:h-screen sm:max-md:gap-2 text-center md:mt-8 sm:max-md:overflow-x-scroll  sm:max-md:overflow-y-hidden  scroll-smooth  scrollbar-thin ">
          <div className="w-[240px] sm:max-md:w-full flex flex-col  md:h-screen    text-center m-t-8 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin md:flex md:flex-col gap-6 sm:max-md:gap-2"> 
            
            <div className="flex flex-col  gap-2 ">
              <h4 className=" ml-2 text-lg text-white  font-thin font-mono  text-start sm:max-md:hidden ">Your Stories</h4>
                   <NavLink
                    style={({ isActive }) => (isActive ? selectedObj : null)}
                    to="stories/abel zewdu"
                    className=" w-3/4 flex flex-col sm:max-md:flex-col items-center h-6 no-underline"
                 >
                         <div className="flex   items-center justify-evenly w-full sm:max-md:justify-start gap-2">
                           <img className="w-10 h-10 rounded-full object-cover object-center " src={img} /> 
                          <label className=" flex flex-col text-white text-xs cursor-pointer font-mono font-thin">Abel Zewdu
                          <span className="font-thin w-full text-end text-slate-200 text-xs sm:max-md:hidden">20 hours ago</span>
                         </label>
                        </div>
                  </NavLink>
            </div>
            
            {/* friends stories */}
             <h3 className="ml-2 text-xs text-slate-300  font-thin font-mono  text-start  ">Followed Stories</h3>
            <div className="flex flex-col gap-3 sm:max-md:flex-row sm:max-md:overflow-scroll">
                { Stories.map((stories, i) => (
                       <div
                            style={currentIndex === i ? selectedObj : null}
                            className="w-3/4 flex flex-col items-center gap-0 no-underline"
                            key={ i }
                           onClick={()=>setCurrentIndex(i)}
                         >
                         <div className="flex sm:max-md:flex-col sm:max-md:w-24 items-center justify-evenly w-full" >
                               <img className="w-10 h-10 rounded-full object-cover object-center" src={stories.ProfileImage} />
                        <label className=" flex flex-col text-slate-400 text-xs cursor-pointer font-mono font-thin">{ stories.owner }
                          <span className="font-thin w-full text-end text-slate-500 text-xs">20 hours ago</span>
                        </label>
                        </div>
                  </div>
                  ))}
            </div>
              </div>
        </div>
        <ImageSlider setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
      </div>
  )
}

export default Story
