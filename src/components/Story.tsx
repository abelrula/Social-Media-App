import { NavLink } from "react-router-dom"
import { onlineContacts } from "../data/data"
import ProfileImage from "./ProfileImage";
import { BsEggFried } from "react-icons/bs";
import { Link } from "react-router-dom";

const Story = () => {
  
  const selectedObj: React.CSSProperties = {
    color: "black",
    background: "rgb(195 195 195)",
    };
    
            const img = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
    return (
      <div className="flex w-full gap-2 border-b-zinc-200 border-x ">
          <div className="w-72 h-fit text-center m-t-8  ">
          <div className=" flex flex-col gap-6"> 
             <h4 className=" text-xs text-black  font-thin font-mono  text-start  ">Your Stories</h4>
                   <NavLink
                    style={({ isActive }) => (isActive ? selectedObj : null)}
                    to="stories/abel zewdu"
                    className=" w-3/4 flex flex-col items-center h-6 no-underline"
            >
                         <div className="flex items-center justify-evenly w-full">
                           <img className="w-10 h-10 rounded-full object-cover object-center " src={img} /> 
                          <label className=" flex flex-col text-slate-800 text-xs cursor-pointer font-mono font-thin">Abel Zewdu
                          <span className="font-thin w-full text-end text-slate-500 text-xs">20 hours ago</span>
                         </label>
                        </div>
                  </NavLink>
             <h3 className="text-xs text-black  font-thin font-mono  text-start  ">Followed Stories</h3>
                  { onlineContacts.map((stories, i) => (
                       <NavLink
                            style={({ isActive }) => (isActive ? selectedObj : null)}
                            to={`stories/${stories.name}`}
                            className="w-3/4 flex flex-col items-center gap-0 no-underline"
                            key={i}
                         >
                         <div className="flex items-center justify-evenly w-full">
                               <img className="w-10 h-10 rounded-full object-cover object-center" src={stories.profile} />
                        <label className=" flex flex-col text-slate-800 text-xs cursor-pointer font-mono font-thin">{ stories.name }
                          <span className="font-thin w-full text-end text-slate-500 text-xs">20 hours ago</span>
                        </label>
                        </div>
                  </NavLink>
                  ))}
              </div>
            </div>
            <div className="w-webkit bg-green-400">

            </div>
      </div>
  )
}

export default Story