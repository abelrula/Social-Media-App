 import { IoIosNotificationsOutline } from 'react-icons/io'
import { NavLink, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { BsEggFried } from 'react-icons/bs';
import { profileImg } from '../lib/data';
import Search from './Search';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

  
const ownerProfile = {
  name: "Abel Zewdu",
  mutualFriendes: 15,
  id: 1,
profile: profileImg
 }
 
 const Header = ( ) => {
   const { pathname } = useLocation()
   const [ filterdContent, setFilterdContent ] = useState <string[]>([]); 
   const [openSearch,setOpenSearch]=useState(false)
   console.log(pathname);

    

  return (
       <div className={`bg-white fixed  top-0 left-0 right-0  ${pathname.includes("/message") && "hidden"}  z-50 flex items-center justify-between h-13 p-3 border-b-zinc-200 border`}>
         <Link to="/" className="flex items-center mt--5 gap-2 cursor-pointer">
         <h1 className=" md:text-xl text-blue-900 font-thin font-mono ml-2 mb-1">SocialNation</h1>
        <BsEggFried className="text-4 text-blue-900 font-thin"/>
      </Link>
     <div className="flex items-center gap-1"> 
            
        {/* open search container on onClick    */ }
        { !openSearch && <BiSearch onClick={ () => setOpenSearch(true) } /> }
        { openSearch &&
          <div className="fixed bg-white  flex  flex-col gap-2 self-center top-4 left-1/2 -translate-x-1/2 rounded-lg h-1/2 w-1/3    shadow-[0_4px_9px_-4px_#3b71ca] p-3 z-50 border border-[#afababd3] sm:max-md:w-1/2">
            <IoCloseCircle
              className='absolute -right-2 -top-2 hover:scale-110 cursor-pointer'
              fontSize={ 30 }
              onClick={ () => setOpenSearch(false) } />
          {/* searched content suggesions */}
            <Search placeholder="Search" setFilterdContent={ setFilterdContent } />
            <ul className="border border-slate-400 p-2  overflow-x-scroll rounded-sm">
            {filterdContent.length > 0  && filterdContent?.slice(0,30).map(values => (
              <li className="hover:bg-slate-500  cursor-pointer text-sm rounded-sm p-1">{ values }</li>
            ))
          }
          </ul>
         </div>
        }

          <IoIosNotificationsOutline className='sm:max-md:hidden text-base cursor-pointer  hover:scale-50' />
         <NavLink className="flex text-sm font-mono items-center ml-4 no-underline gap-1" to={`/profile/${ownerProfile.id}`}>Abel Zewdu
          {/* <ProfileImage profileName="abel zewdu" /> */}
                           <img className="w-8 h-8 rounded-full object-cover object-center " src={profileImg} /> 
        </NavLink> 
      </div>  
      </div>
  )
 }

 

 

export default Header
 
 