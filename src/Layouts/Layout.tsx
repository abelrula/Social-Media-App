 import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar  />
    <div className=" bg-white w-full flex flex-col">
       <Header />
    <div className=' mt-12 ml-5 p-4 h-full' >
       <Outlet />
    </div>
    </div>
   </div>
    
  )
}

export default Layout