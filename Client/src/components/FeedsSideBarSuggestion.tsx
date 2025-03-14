 import { friends } from '../lib/data'
 import { FaBirthdayCake } from 'react-icons/fa'
  import { useState } from 'react'
 
import Birthday from './Birthday'
 import OnlineContacts from './OnlineContacts'
import Suggestiongroups from './Suggestiongroups'
const FeedsSideBarSuggestion = () => {
  
  const [ OpenModal, setOpenModal ] = useState(false)
   
  
  
  return (
    <>
      <div className='sm:max-md:hidden   flex sm:max-md:flex-col   flex-wrap'>
     
        {/* list of birthday                                                                                                                                                                                                                                                                                      */}
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
          
          {/* list of suggested groups */}
         <Suggestiongroups />
        </div>
        {/* list of online Contacts */ }
        <OnlineContacts />
        </div> 
      { OpenModal &&
        // birthday modal for
        <Birthday setOpenModal={ setOpenModal } />
       }
    </>
  )
}

export default FeedsSideBarSuggestion