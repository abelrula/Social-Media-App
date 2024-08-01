import { IoIosSettings } from "react-icons/io";
import { IoHelpCircle } from "react-icons/io5";
  import {BsEggFried } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { groups,menuLinks } from "../data/data";
 import { Link } from "react-router-dom";
  
const Sidebar = () => {
   
   const {pathname} = useLocation()
  const selectedObj: React.CSSProperties = {
    color: "black",
    background: "rgb(195 195 195)",
  };
 console.log(pathname.includes("message"));

  return (
    <div className={`bg-white w-72  sticky flex flex-col p-2  pr-0.5   top-0 left-2  ${pathname.includes("stories") || pathname.includes("message") ? "hidden" : "block" }`}>
      
      <div className="flex mt-11 min-w-44 flex-col py-2.5">
        <label className="cursor-pointer">Favorites</label>
        <div className="flex flex-col py-2.5 gap-2">
          {menuLinks.map((link, i) => (
            <NavLink
              style={({ isActive }) => (isActive ? selectedObj : null)}
              to={ link.to }
              // onClick={()=>link.to === "messages" ? setToggleSideBar(false) : true  }
              className="flex items-center gap-1 w-full relative h-6 no-underline"
              key={i}
            >
              { link.icon }
              <label className="text-gray-600 text-xs cursor-pointer font-mono font-thin">{link.title}</label>
              {link.title === "Message" && 
                  <span className="bg-black h-4 font-thin w-4 absolute top-0 right-1.5 text-center text-white p-1 text-tiny rounded-full">4</span> }
            </NavLink>
          ))}
               <label>Groups</label>
        {groups.map((link, i) => (
            <NavLink
              style={({ isActive }) => (isActive ? selectedObj : null)}
              to={`groups/${link.name}`}
              className="flex items-center gap-1 w-full relative h-6 no-underline"
              key={i}
            >
              <img className="w-6 h-6 rounded-full object-cover object-center" src={link.img} />
              <label className="text-gray-600 text-xs cursor-pointer font-mono font-thin">{link.name.length > 15 ? `${link.name.substring(0,15)}...` :  link.name}</label>
              {link.unseenTopics > 0 && 
              <span className="bg-black h-4 font-thin w-4 absolute top-0 right-1.5 text-center  text-white p-1 text-tiny rounded-full">{link.unseenTopics  }</span>} 
            </NavLink>
          ))}
         </div>
        <div className="flex gap-4 text-xl absolute bottom-0">
          <NavLink 
           to="settings"
            style={({ isActive }) => (isActive ? selectedObj : null)}
              className="flex items-center gap-1 w-full realtive h-6 no-underline"
             >
            <IoIosSettings className="icon" />
              <label className="text-gray-600 text-xs cursor-pointer font-mono font-thin">Settings</label>

          </NavLink>
          <NavLink 
          to="Help"
            style={({ isActive }) => (isActive ? selectedObj : null)}
              className="flex items-center gap-1 w-full realtive h-6 no-underline"
              >
            <IoHelpCircle className="icon" />
              <label className="text-gray-600 text-xs cursor-pointer font-mono font-thin">Help</label>
          </NavLink>
        </div>
       
      </div>
    </div>
  );
};

export default Sidebar;
