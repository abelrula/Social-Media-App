   import { useLocation } from "react-router-dom";
import SideBarLinks from "./SideBarLinks";

const Sidebar = ( ) => {
 
   
  const { pathname } = useLocation()

  return (
    <div className={ `bg-white sm:max-md:hidden sticky flex flex-col p-2 pr-0.5 top-0 left-2 
    ${pathname.includes("stories") || pathname.includes("message") ? "hidden" : "block"}`
    }>
      
      <div className="flex flex-col  gap-2 mt-11 min-w-44  py-2.5  ">
        <label className="cursor-pointer">Favorites</label>
       
         <SideBarLinks />
      </div>
      </div>
   );
};

export default Sidebar;

export const ToggledBottombar = () => {
   
  const { pathname } = useLocation()
 
  return (
    <aside className={`w-full md:hidden fixed bottom-0 right-0 left-0 bg-white    flex justify-between items-center p-2 pr-0.5 ${pathname.includes("message") ? "hidden" : "block"}`}>
     <SideBarLinks />
      </aside>
    );
};

  
