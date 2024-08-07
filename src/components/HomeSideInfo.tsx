 import { events, friends,  onlineContacts } from '../lib/data'
import { MdEventSeat, MdGroups } from 'react-icons/md'
import travel1 from"../assets/travel1.jpg"
import { FaBirthdayCake } from 'react-icons/fa'
import { GoDot, GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'
const HomeSideInfo = () => {
  
   
  return (
    <>
        <div className="flex flex-col gap-2.5  overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin">
              <div className="  p-2.5 w-56 h-auto rounded-lg overflow-hidden bg-white">
                <h4 className="text-center text-zinc-400 font-mono text-sm">your upcoming events </h4>
                <ul className="flex flex-col gap-1.5">
                    {
                      events.map((event,i)=>(
                        <li className="flex items-center gap-2.5 no-underline h-8" key={i}><MdEventSeat className='text-green' />
                        <p className="text-xs font-mono flex flex-col text-zinc-600">{event.event}
                        <span className='text-zinc-400 font-mono'>{event.time}</span></p></li>
                      ))
                    }
                </ul>
              </div> 
              <div className="relative p-2.5 w-60 h-auto rounded-lg overflow-hidden bg-white ">
                <h4 className="text-center flex items-center justify-between text-zinc-400 font-mono text-sm">Birthdays <FaBirthdayCake /></h4>
                <ul className="flex flex-col gap-1.5 p-1">
                {
              friends.slice(0,4).map((freind,i)=>(
                    <li className="group flex items-center gap-2.5 no-underline h-8 " key={i}>
                        <img className='w-6 h-6 rounded-full object-cover object-center' src={freind.profile} />
                        <p  className="w-full text-xs  font-mono flex justify-between  items-center text-zinc-600">{freind.name} 
                      </p>
                         <span className=" bg-sky-700 flex gap-2 items-start border text-white hover:bg-gray-800 w-17 h-5 hover:cursor-pointer p-1  rounded-xl text-start font-mono  text-[9px]" > Celebrate
                         <FaBirthdayCake color='red' />
                  </span>
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
                  events.map((event,i)=>(
                    <li className="flex items-center gap-2.5 no-underline h-8" key={i}>
                        <img className='w-6 h-6 rounded-full object-cover object-center' src={travel1} />
                        <p className="text-xs font-mono flex flex-col text-zinc-600">{event.event}</p></li>
                  ))
                 }
            </ul>
           </div> 
           </div>
           {/* <div className=" p-2.5 w-56 h-auto rounded-lg overflow-hidden bg-white ">
            <h4 className="text-center flex items-center justify-between text-zinc-400 font-mono text-sm">Group Chats </h4>
            <ul className="flex flex-col">
                 {
                  groups.map((event,i)=>(
                    <li className="flex items-center gap-2.5 no-underline h-8" key={i}>
                        <img className='w-6 h-6 rounded-full object-cover object-center' src={event.img} />
                        <p className="text-xs font-mono flex flex-col text-zinc-600">{event.name} </p></li>
                  ))
                 }
            </ul>
           </div> */}
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
    </>
  )
}

export default HomeSideInfo