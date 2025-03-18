import React from 'react'
 import { NavLink } from "react-router-dom";
import { groups, menuLinks } from '../lib/data';
import { IoIosSettings } from 'react-icons/io';
import { TbLayoutNavbarFilled } from 'react-icons/tb';
 const selectedObj: React.CSSProperties = {
    color: "black",
    background: "rgb(195 195 195)",
  };
const SideBarLinks = () => {
  return (
<>
          {menuLinks.map((link, i) => (
            <NavLink
              style={({ isActive }) => (isActive ? selectedObj : null)}
              to={ link.to }
              // onClick={()=>link.to === "messages" ? setToggleSideBar(false) : true  }
              className="flex items-center gap-1 w-full relative h-6 no-underline sm:max-md:flex-col sm:max-md:p-1 sm:max-md:gap-0 sm:max-md:h-11  "
              key={i}
            >
              { link.icon }
              <label className="text-gray-600 text-xs cursor-pointer font-mono font-thin   ">{link.title}</label>
              {link.title === "Message" && 
                  <span className="bg-black h-4 font-thin w-4 absolute top-0 right-1.5 text-center text-white p-1 text-tiny rounded-full   sm:max-md:text-[7px] sm:max-md:text-white">4</span> }
            </NavLink>
            
          ))}
          <label className="sm:max-md:hidden">Groups</label>
        {groups.map((link, i) => (
            <NavLink
              style={({ isActive }) => (isActive ? selectedObj : null)}
              to={`groups/${link.name}`}
              className="flex items-center gap-1 w-full relative h-6 no-underline sm:max-md:hidden  "
              key={i}
            >
              <img className="w-6 h-6 rounded-full object-cover object-center" src={link.img} />
              <label className="text-gray-600 text-xs cursor-pointer font-mono font-thin">{link.name.length > 15 ? `${link.name.substring(0,15)}...` :  link.name}</label>
              {link.unseenTopics > 0 && 
              <span className="bg-black h-4 font-thin w-4 absolute top-0 right-1.5 text-center  text-white p-1 text-tiny rounded-full">{link.unseenTopics  }</span>} 
            </NavLink>
          ))}
        
           <NavLink 
            to="settings"
            style={({ isActive }) => (isActive ? selectedObj : null)}
              className="flex items-center gap-1 w-full h-6 no-underline  text-xl absolute  bottom-0 mr-2 sm:max-md:hidden"
             >
             <IoIosSettings fontSize={23} className="icon" />
              <label className="text-gray-600 text-xs cursor-pointer font-mono font-thin sm:max-md:hidden">Settings</label>
          </NavLink>
      </>
  
  
  )  
}

export default SideBarLinks