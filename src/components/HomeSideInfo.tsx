 import { events, freinds, groups, onlineContacts } from '../data/data'
import { MdEventSeat } from 'react-icons/md'
import travel1 from"../assets/travel1.jpg"
const HomeSideInfo = () => {
  return (
    <>
        <div className="flex flex-col gap-2.5  ">
              <div className="  p-2.5 w-56 h-auto rounded-lg overflow-hidden bg-[#c3deff]">
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
              <div className=" p-2.5 w-56 h-auto rounded-lg overflow-hidden bg-[#c3deff] ">
                <h4 className="text-center text-zinc-400 font-mono text-sm">Birthdays</h4>
                <ul className="flex flex-col gap-1.5">
                {
                  freinds.map((freind,i)=>(
                    <li className="flex items-center gap-2.5 no-underline h-8" key={i}>
                        <img className='w-6 h-6 rounded-full object-cover object-center' src={freind.profile} />
                        <p className="text-xs font-mono flex flex-col text-zinc-600">{freind.name} 
                        <span className='text-zinc-400 font-mono'>turning 28 years old</span></p></li>
                  ))
                 }
                </ul>
              </div>
           </div>
           <div className="mt--2.5 flex flex-col gap-1.5  ">
           <div className=" p-2.5 w-56 h-auto rounded-lg overflow-hidden bg-[#c3deff] ">
            <h4 className="text-center text-zinc-400 font-mono text-sm">community chats</h4>
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
           <div className=" p-2.5 w-56 h-auto rounded-lg overflow-hidden bg-[#c3deff] ">
            <h4 className="text-center text-zinc-400 font-mono text-sm">Group Chats</h4>
            <ul className="flex flex-col">
                 {
                  groups.map((event,i)=>(
                    <li className="flex items-center gap-2.5 no-underline h-8" key={i}>
                        <img className='w-6 h-6 rounded-full object-cover object-center' src={event.img} />
                        <p className="text-xs font-mono flex flex-col text-zinc-600">{event.name} </p></li>
                  ))
                 }
            </ul>
           </div>
           <div className=" p-2.5 w-56 h-auto rounded-lg overflow-hidden bg-[#c3deff] ">
            <h4 className="text-center text-zinc-400 font-mono text-sm">Online Contacts</h4>
            <ul className="flex flex-col">
                 {
                  onlineContacts.map((freind,i)=>(
                    <li className="flex items-center gap-2.5 no-underline h-8" key={i}>
                        <img className='w-6 h-6 rounded-full object-cover object-center' src={freind.profile} />
                        <p className="text-xs font-mono flex flex-col text-zinc-600">{freind.name}</p></li>
                  ))
                 }
            </ul>
           </div>
           </div> 
    </>
  )
}

export default HomeSideInfo