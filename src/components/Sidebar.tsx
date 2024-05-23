import { IoIosSettings } from "react-icons/io";
import { IoHelpCircle } from "react-icons/io5";
  import {BsEggFried } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { groups,menuLinks } from "../data/data";
  
 const Sidebar = () => {
   const selectedObj:React.CSSProperties = {
    color: "black",
    background: "rgb(195 195 195)",
  };

  return (
    <div className="bg-white sticky flex flex-col pl-1 pr-0.5 h-screen top-0 left-2">
      <div className="flex gap-2 items-center mt--5">
        <BsEggFried className="text-4 text-blue-900 font-thin" />
        <h1 className="text-2xl text-blue-900 font-thin font-mono ml-5 mb-1">SocialNation</h1>
      </div>
      <div className="flex flex-col py-2.5 h-screen mt-1.5">
        <label className="cursor-pointer">Favorites</label>
        <div className="flex flex-col py-2.5 gap-2">
          {menuLinks.map((link, i) => (
            <NavLink
              style={({ isActive }) => (isActive ? selectedObj : null)}
              to={link.to}
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
              // style={({ isActive }) => (isActive ? selectedObj : null)}
              to={link.to}
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
