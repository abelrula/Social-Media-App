 import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar, { ToggledBottombar } from '../components/Sidebar'
 const Layout = () => {
  
   return (
    <div className=' bg-[#f7f7f7] flex overflow-y-scroll overflow-x-hidden h-screen scrollbar-thumb-transparent scrollbar-w-[2px] scrollbar-track-transparent'>
     {/* this toogle will display on larger devices  */}
         <Sidebar  />
       <div className=" flex flex-col w-full">
         <Header />
       <div className='mt-7 ml-1 p-1 h-screen w-full' >
        <Outlet />
         </div>
      {/* this toogle will display on smaller devices  */}
         <ToggledBottombar />
    </div>
   </div>
    
  )
}

export default Layout