 import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
const Layout = () => {
  return (
    <div className='flex overflow-y-scroll overflow-x-hidden h-screen scrollbar-thumb-transparent scrollbar-w-[2px] scrollbar-track-transparent'>
      <Sidebar  />
       <div className="bg-[#f7f7f7] flex flex-col w-full">
        <Header />
      <div className='mt-12 ml-1 p-1 h-screen w-full' >
        <Outlet />
      </div>
    </div>
   </div>
    
  )
}

export default Layout