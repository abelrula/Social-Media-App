 import { BiSearch } from 'react-icons/bi'
 import { CiChat1 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
 import ProfileImage from './ProfileImage';
import { NavLink } from 'react-router-dom'

const Header: () => JSX.Element = () => {
  return (
    <div className=" z-50 fixed bg-white w-webkit top-0 flex items-center justify-between w-45 h-13 p-2">
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