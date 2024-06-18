 import { BiSearch } from 'react-icons/bi'
 import { CiChat1 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
 import ProfileImage from './ProfileImage';
import { NavLink, useLocation } from 'react-router-dom'
import { BsEggFried } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header: () => JSX.Element = () => {
  const {pathname}=useLocation()
  return (
    <div className="fixed bg-white w-webkit top-0 flex items-center justify-between w-45 h-13 p-2  border-b-stone-400 border z-50">
      { pathname === "/message" && <Link to="/" className="flex gap-2 items-center mt--5">
        <BsEggFried className="text-4 text-blue-900 font-thin" />
        <h1 className="text-2xl text-blue-900 font-thin font-mono ml-5 mb-1">SocialNation</h1>
      </Link>}
        <div className='w-96 bg-slate-100 flex items-center rounded-xl p-1.5 h-6 cursor-pointer'>
            <BiSearch className='text-gray-600' />
            <input className='outline-none rounded-none text-base font-mono bg-transparent' type='text' placeholder=' Type in Search'/>
        </div> 
     <div className="flex items-center gap-1"> 
        <CiChat1  className='text-base cursor-pointer hover:scale-50' />
        <IoIosNotificationsOutline className='text-base cursor-pointer  hover:scale-50' />
        <NavLink className="flex text-sm font-mono items-center ml-4 no-underline gap-1" to="profile">Abel Zewdu <ProfileImage profileName="abel zewdu"/> </NavLink> 
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