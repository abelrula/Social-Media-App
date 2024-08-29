 import { friends,  onlineContacts, SuggestedGroups } from '../lib/data'
 import travel1 from"../assets/travel1.jpg"
import { FaBirthdayCake } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useState } from 'react'
 
import Birthday from './Birthday'
const HomeSideInfo = () => {
  
  const [ OpenModal, setOpenModal ] = useState(false)
  
  
  return (
    <>
        <div className="flex flex-col gap-2.5  overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin">
              <div className="relative p-2.5 w-60 h-auto rounded-lg overflow-hidden bg-white ">
                <h4 className="text-center flex items-center justify-between text-zinc-400 font-mono text-sm">Birthdays <FaBirthdayCake /></h4>
                <ul className="flex flex-col gap-1.5 p-1">
                {
              friends.slice(0,4).map((freind,i)=>(
                    <li className="group flex items-center gap-2.5 no-underline h-8 " key={i}>
                        <img className='w-6 h-6 rounded-full object-cover object-center' src={freind.profile} />
                        <p  className="w-full text-xs  font-mono flex justify-between  items-center text-zinc-600">{freind.name} 
                      </p>
                         <button className=" bg-sky-700 flex gap-2 items-start border text-white hover:bg-gray-800 w-17 h-5 hover:cursor-pointer p-1  rounded-xl text-start font-mono  text-[9px]" onClick={()=>setOpenModal(true)} > Celebrate
                         <FaBirthdayCake color='red' />
                  </button>
                        <span className='bg-black w-full mt-3  text-white text-xs  absolute bottom-0 hidden group-hover:block  font-mono'>turning 28 years old</span>
                     </li>
                  ))
                 }
                </ul>
        </div>
         <div className=" p-2.5 w-56 h-auto rounded-lg overflow-hidden bg-white ">
            <h4 className="text-center text-zinc-400 font-mono text-sm">Suggested groups</h4>
            <ul className="flex flex-col ">
                 {
                  SuggestedGroups.map((group,i)=>(
                    <li className="flex items-center justify-between gap-3 no-underline h-8" key={i}>
                      <span className="flex gap-1 items-center">
                         <img className='w-7 h-7 rounded-full object-cover object-center' src={group.image} />
                          <p className="text-xs font-mono  text-zinc-600">{ group.owner }</p>
                       </span>
                       <button className=" bg-sky-700 self-end flex gap-2 items-start border text-white hover:bg-gray-800 w-8 h-5 hover:cursor-pointer p-1  rounded-xl text-start font-mono  text-[9px]" onClick={()=>setOpenModal(true)} > Join
                     </button>
                   </li>
                  ))
                 }
            </ul>
           </div> 
           </div>
           <div className=" p-2.5 w-56 h-fit rounded-lg overflow-x-hidden overflow-y-scroll bg-white scroll-smooth scrollbar-thin max-h-1/2">
            <h4 className="text-center text-zinc-400 font-mono text-sm">Online Contacts</h4>
            <ul className="flex flex-col">
                 {
                  onlineContacts.map((friends,i)=>(
                    <Link to={`message${friends.name}`} className="flex items-center gap-2.5 no-underline h-8" key={i}>
                        <img className='w-6 h-6 rounded-full object-cover object-center' src={friends.profile} />
                      <p className="w-full text-xs font-mono flex items-center justify-between text-zinc-600">{ friends.name } <GoDotFill  color='green'/> </p>
                       
                    </Link>
                  )) 
                 }
            </ul>
      </div>
      { OpenModal &&
        <div className='bg-[#00000085] fixed top-0 right-0 left-0  bottom-0 w-full opacity-95 h-full  flex justify-center items-center'>
          <Birthday setOpenModal={setOpenModal} />
      </div>}
    </>
  )
}

export default HomeSideInfo