 import { IoIosNotificationsOutline } from 'react-icons/io'
import { NavLink, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { BsEggFried } from 'react-icons/bs';
import { profileImg } from '../lib/data';
import Search from './Search';

  
 
 
 const Header = ( ) => {
   const { pathname } = useLocation()
   console.log(pathname);
   

  return (
       <div className={`bg-white fixed  top-0 left-0 right-0  ${pathname.includes("/message") && "hidden"}  z-50 flex items-center justify-between h-13 p-3 border-b-zinc-200 border`}>
         <Link to="/" className="flex items-center mt--5 gap-2 cursor-pointer">
         <h1 className=" md:text-xl text-blue-900 font-thin font-mono ml-2 mb-1">SocialNation</h1>
        <BsEggFried className="text-4 text-blue-900 font-thin"/>
      </Link>
     <div className="flex items-center gap-1"> 
      <Search placeholder="Search" />
          <IoIosNotificationsOutline className='sm:max-md:hidden text-base cursor-pointer  hover:scale-50' />
         <NavLink className="flex text-sm font-mono items-center ml-4 no-underline gap-1" to="profile">Abel Zewdu
          {/* <ProfileImage profileName="abel zewdu" /> */}
                           <img className="w-8 h-8 rounded-full object-cover object-center " src={profileImg} /> 
        </NavLink> 
      </div>  
      </div>
  )
 }

 

 

export default Header
 
//  import { CiChat1 } from 'react-icons/ci'
// import { IoIosNotificationsOutline } from 'react-icons/io'
// import './header.css'
// import ProfileImage from './ProfileImage';
// import { NavLink } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div className="fixed top-0 flex items-center  justify-between w-full h-13 px-6">
//     <span className='bg-white flex items-center rounded-xl p-1.5 w-1/3'> 
//         <BiSearch className='text-gray-600 />
//        <input type="text" />
//     </span> 
//     <s
//      <div className="flex items-center gap-1" > 
//         <CiChat1  className='text-base'/>
//         <IoIosNotificationsOutline className='icon' />
//         <NavLink className="flex text-3xl font-mono items-center ml-4 no-underline gap-1" to="profile">Abel Zewdu <ProfileImage name="abel zewdu"/> </NavLink> 
//      </div>  
//     </div>
//   )
// }

// export default Header